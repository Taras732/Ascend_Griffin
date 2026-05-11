// Consent banner state machine + storage + Google Consent Mode v2 wiring.
// Companion to ConsentBanner.astro and BaseLayout.astro early-inline default block.

type CategoryKey = "analytics" | "functional";

interface ConsentState {
  v: 1;
  ts: number;
  analytics: boolean;
  functional: boolean;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    AGConsent?: {
      openSettings: () => void;
      state: () => ConsentState | null;
    };
  }
}

const STORAGE_KEY = "ag_consent_v1";

function read(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.v !== 1) return null;
    return parsed;
  } catch {
    return null;
  }
}

function write(s: ConsentState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
    /* ignore quota / private mode */
  }
}

function applyConsent(s: ConsentState): void {
  // Google Consent Mode v2 update — GA4 picks this up.
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: s.analytics ? "granted" : "denied",
    });
  }
  // Cloudflare beacon is cookieless and loaded inline in BaseLayout;
  // we don't gate it here (functional category covers it for transparency only).
}

function show(banner: HTMLElement, stage: "main" | "custom"): void {
  banner.dataset.stage = stage;
  banner.dataset.state = "visible";
  banner.setAttribute("aria-hidden", "false");
  switchStage(banner, stage);
}

function hide(banner: HTMLElement): void {
  banner.dataset.state = "hidden";
  banner.setAttribute("aria-hidden", "true");
}

function switchStage(banner: HTMLElement, stage: "main" | "custom"): void {
  banner.dataset.stage = stage;
  banner.querySelectorAll<HTMLElement>("[data-stage-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.stagePanel !== stage;
  });
}

function syncToggles(banner: HTMLElement, s: ConsentState): void {
  banner.querySelectorAll<HTMLInputElement>("[data-consent-cat]").forEach((input) => {
    const key = input.dataset.consentCat as CategoryKey;
    input.checked = s[key] === true;
  });
}

function readToggles(banner: HTMLElement): { analytics: boolean; functional: boolean } {
  const get = (key: CategoryKey): boolean => {
    const el = banner.querySelector<HTMLInputElement>(`[data-consent-cat="${key}"]`);
    return el?.checked === true;
  };
  return { analytics: get("analytics"), functional: get("functional") };
}

function commit(banner: HTMLElement, partial: { analytics: boolean; functional: boolean }): void {
  const next: ConsentState = {
    v: 1,
    ts: Date.now(),
    analytics: partial.analytics,
    functional: partial.functional,
  };
  write(next);
  applyConsent(next);
  hide(banner);
}

export function initConsent(): void {
  const banner = document.getElementById("ag-consent");
  if (!banner) return;

  const stored = read();

  // Re-apply stored decision on every load (in case gtag wasn't ready at default time).
  if (stored) {
    applyConsent(stored);
    syncToggles(banner, stored);
  } else {
    // No decision yet — show the banner after a short paint delay.
    requestAnimationFrame(() => show(banner, "main"));
  }

  banner.addEventListener("click", (ev) => {
    const target = ev.target as HTMLElement | null;
    const btn = target?.closest<HTMLElement>("[data-consent-action]");
    if (!btn) return;
    const action = btn.dataset.consentAction;

    if (action === "accept") {
      commit(banner, { analytics: true, functional: true });
      return;
    }
    if (action === "reject") {
      commit(banner, { analytics: false, functional: false });
      return;
    }
    if (action === "customize") {
      const current = read();
      if (current) syncToggles(banner, current);
      switchStage(banner, "custom");
      return;
    }
    if (action === "save") {
      const t = readToggles(banner);
      commit(banner, t);
      return;
    }
    if (action === "back") {
      switchStage(banner, "main");
      return;
    }
  });

  window.AGConsent = {
    openSettings: () => {
      const current = read();
      if (current) syncToggles(banner, current);
      show(banner, current ? "custom" : "main");
    },
    state: () => read(),
  };

  // Wire any "manage consent" trigger on the page (e.g. inside Privacy Policy).
  document.querySelectorAll<HTMLElement>("[data-consent-trigger]").forEach((el) => {
    el.addEventListener("click", (ev) => {
      ev.preventDefault();
      window.AGConsent?.openSettings();
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initConsent);
} else {
  initConsent();
}
