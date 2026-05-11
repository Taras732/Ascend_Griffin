// All site copy in EN + UK
// EN is primary (default). UK is alternate.

export type Locale = "en" | "uk";

export const translations = {
  en: {
    site: {
      eyebrow: "Strategic IT guidance — from idea to scale",
      heroH1Html:
        'Your <em>strategic IT partner</em><br>— fully aligned with <em>your business outcomes</em>.',
      heroLede:
        "Tired of making big IT decisions blind? Vendor pitches that don't add up. Technical jargon you can't verify. Numbers without context. I cut through it — translating tech-speak into business decisions, vetting vendors honestly, surfacing the data you need to choose with confidence.",
      heroCtaPrimary: "Book Discovery Call",
      heroCtaSecondary: "See how it works →",
      heroMicro: "",

      ctaEyebrow: "READY TO TALK?",
      ctaH2Html: "<em>30-minute</em> meeting.",
      ctaLede: "Free. No slides. Just a real conversation about your project.",
      ctaPrimary: "Book Discovery Call",
      ctaAlt: "Or follow my work on LinkedIn",
      ctaSig: "— Taras Smaliukh · Lviv, Ukraine",

      nav: [
        { label: "Services", href: "#services" },
        { label: "Cases", href: "#why" },
        { label: "Process", href: "#how" },
        { label: "FAQ", href: "#faq" },
      ],

      seo: {
        title:
          "Ascend Griffin — Strategic IT Partner for Founders & Startups",
        description:
          "Independent strategic IT advisor for startup founders and growing teams. Vendor audits, discovery sprints, fractional product leadership — from idea to scale. Lviv, Ukraine.",
        keywords:
          "fractional CTO, fractional product owner, startup IT advisor, vendor evaluation, discovery sprint, MVP validation, AI startup consultant, vibe coding strategy, IT project audit",
        ogImage: "/og-image.png",
        locale: "en_US",
      },

      footerTagline:
        "Strategic IT guidance from idea to scale. An independent partner — vetting vendors, validating ideas, leading projects to outcomes that actually move the business.",
      footerServicesH: "Services",
      footerConnectH: "Connect",
      footerLegalH: "Legal",
      footerCV: "CV / Portfolio",
      madeIn: "Lviv, Ukraine",
    },

    stats: [
      {
        value: "$30-80K",
        valueHtml: "<em>$30-80K</em>",
        label: "Typical first IT contract. Most founders overpay by 2x at this level",
      },
      {
        value: "35-70%",
        valueHtml: "<em>35-70%</em>",
        label: "Cost reduction when projects start with proper planning and clear scope",
      },
      {
        value: "23+",
        valueHtml: "<em>23+</em>",
        label: "IT projects shipped — you won't be my learning curve",
      },
    ],

    problemSection: {
      num: "03 · Approach",
      h2Html: "Four ways I <em>drive your project forward</em>.",
      lede:
        "Different stages need different support. Here's how I plug in — and what you walk away with.",
    },

    problems: [
      {
        icon: "lightbulb",
        title: "Idea stage — concept to validated hypothesis",
        description:
          "I turn your idea into a tested hypothesis with a concrete prototype plan. Mapping the market, surfacing critical assumptions, picking the right AI tools for fast prototyping. You walk away with a clear go/pivot decision — based on evidence, not gut feel.",
        steps: [
          "Market and competitive landscape analysis",
          "Critical hypothesis validation",
          "Prototype plan with AI tool selection",
          "Clear go-forward vs pivot criteria",
        ],
        packageId: "discovery",
        packageLabel: "Discovery",
      },
      {
        icon: "rocket",
        title: "MVP to scale — ready for users and investors",
        description:
          "Your MVP (Cursor / v0 / Lovable / Claude) has first users — time to turn it into a real business. I structure customer discovery, prepare investor-grade metrics, plan the scale. Heading into a fundraise or crowdfunding round? You'll walk in with data that closes deals.",
        steps: [
          "Customer discovery and analytics setup",
          "Investor-ready metrics and pitch prep",
          "90-day scaling roadmap",
          "Transition to production-grade stack — when it actually matters",
        ],
        packageId: "support",
        packageLabel: "Project Support",
      },
      {
        icon: "compass",
        title: "First major build — choose the right vendor with confidence",
        description:
          "Ready to commission full-scale development and need to pick the right team. I run the analysis: business model and unit economics, functional requirements, realistic budget and timeline, vendor evaluation. You walk into negotiations with a document package — and walk out with a contract that's actually fair.",
        steps: [
          "Business model and unit economics review",
          "Functional requirements, budget and timeline estimate",
          "Vendor evaluation and shortlist of vetted teams",
          "Delivery oversight through launch",
        ],
        packageId: "discovery",
        packageLabel: "Discovery",
      },
      {
        icon: "refresh-cw",
        title: "Existing product underperforming — diagnose and turn it around",
        description:
          "Product is in production but the numbers stopped working — market shifted, product aged, timelines slipping, vendor underdelivering. You need an outside read and a clear plan: modernize, rebuild, or pivot the business direction entirely.",
        steps: [
          "Technical audit and tech-debt assessment",
          "Market audit and growth opportunities",
          "Organizational and process audit",
          "Action plan with projected outcomes",
        ],
        packageId: "audit",
        packageLabel: "Audit",
      },
    ],

    problemFooter: "Recommended package:",

    servicesSection: {
      num: "04 · Services",
      h2Html: "Three packages — pick what fits <em>your stage</em>.",
      lede:
        "Different stages need different engagements. Every package — clear deliverable, transparent process, fixed scope.",
    },

    services: [
      {
        id: "audit",
        num: "01",
        name: "Audit",
        hook: "An expert second opinion before you commit to a major decision.",
        price: "from $1,000",
        priceNote: "5-14 days",
        features: [
          "Risks, overpayments, and weak spots in your decision — with concrete recommendations on what to do about them",
          "Systematic review of your project across key dimensions",
          "Structured report with findings, risks, and clear next steps",
          "Personal review meeting to walk through results",
        ],
        cta: "Request audit",
        ctaHref: "#book",
      },
      {
        id: "discovery",
        num: "02",
        name: "Discovery",
        hook: "Get clarity on what to build, how much it costs, and who should build it — before you spend a dollar.",
        price: "from $4,000",
        priceNote: "2-8 weeks",
        features: [
          "Clear answer on what to build and whether there's a real market — based on evidence, not guesswork",
          "Ready prototype plan or functional spec — your team just needs to execute",
          "Realistic budget and timeline — no surprise invoices later",
          "Shortlist of vendors that genuinely fit your project — with real selection criteria",
          "Negotiation pack — arguments, numbers, technical details to win the conversation",
        ],
        cta: "Book Discovery Call",
        ctaHref: "#book",
      },
      {
        id: "support",
        num: "03",
        name: "Project Support",
        hook: "From advisor to acting Product Owner — I take ownership of the outcome alongside your team.",
        price: "from $2,500 / month",
        priceNote: "scoped to your needs",
        features: [
          "Strategic advice — weekly check-ins and fast turnaround on critical questions",
          "Oversight — vendor proposal reviews, participation in key decisions",
          "Project leadership — from planning to launch, as Product Owner on your side",
          "Depth of involvement scales with your current needs",
        ],
        cta: "Explore working together",
        ctaHref: "#book",
      },
    ],

    whySection: {
      num: "05 · Track Record",
      h2Html: "<em>Numbers</em>, not promises.",
      lede: "Real projects. Real numbers. Outcomes that clients could verify.",
    },

    pillars: [
      {
        num: "01",
        title: "Mobile app for an energy provider — 500K+ users",
        description:
          "Challenge: fragmented non-digital experience for 500K+ active users, overloaded support team, no clear product vision.",
        steps: [
          "Discovery workshops with business and legal stakeholders",
          "Mapped all customer journeys end-to-end",
          "80+ user stories with crisp acceptance criteria",
          "UX and dev support all the way to release",
        ],
        result: "Key actions 35% faster · Support calls down 20% · Change requests down 25%",
      },
      {
        num: "02",
        title: "Rescued a stalled IT project that overran budget",
        description:
          "Challenge: project over budget and behind schedule. Unclear scope, shifting priorities, broken comms between business and dev.",
        steps: [
          "Backlog and current status audit",
          "Stakeholder interviews",
          "Requirements restructured into prioritized backlog",
          "Phased recovery plan with bottlenecks mapped",
        ],
        result: "80% of tasks closed in 2 months instead of 3-6 · Change requests down 35% · Costs cut by 70%",
      },
      {
        num: "03",
        title: "B2B SaaS for logistics — from idea to first pilots",
        description:
          "Challenge: building a startup from scratch in Ukrainian B2B logistics — conservative enterprise buyers, regulated industries, mostly manual processes.",
        steps: [
          "Discovery: 9+ conversations with potential partners",
          "Product strategy, MVP scope, and roadmap",
          "Backlog ownership and launch support",
          "Strategic partnerships in regulated industries",
        ],
        result: "v1 live in real operations · 9+ partnerships · 3+ MoUs signed · Validated ICP & PMF",
      },
    ],

    howSection: {
      num: "06 · Process",
      h2Html: "Four steps. <em>Clear and predictable</em>.",
      lede:
        "Discovery call → strategy session → proposal → work. At every step, you know where we're going and why.",
    },

    steps: [
      {
        num: "01",
        title: "Discovery Call",
        tagline: "Understand your project and context",
        duration: "30 min · online",
        body:
          "First call — to understand what you're building, what stage you're at, and where I can move the needle most. 30 minutes — enough for both of us to know whether to move forward. After our conversation I take a few days to dig into your market, direction, and the opportunities I see.",
      },
      {
        num: "02",
        title: "Strategy Session",
        tagline: "I come back with a concrete action plan",
        duration: "1 hour · online",
        body:
          "On the second call I bring back analysis and a preliminary plan — engagement options, scope, expected outcomes, what to consider. We discuss what fits your situation best.",
      },
      {
        num: "03",
        title: "Proposal",
        tagline: "A concrete agreement, tailored to you",
        duration: "1-3 business days",
        body:
          "I prepare a 1-2 page proposal with engagement options — scope, sequence of steps, expected outcomes, what's included in each. You pick the format that fits your situation.",
      },
      {
        num: "04",
        title: "Execution & Handoff",
        tagline: "Your project — moving in the right direction",
        duration: "scope-dependent",
        body:
          "Day-one start. Regular sync meetings so you always know where we are and where we're going. At the end — a solution that actually works for your business, with a clear understanding of what comes next.",
      },
    ],

    faqSection: {
      num: "07 · FAQ",
      h2Html: "Common <em>questions</em>.",
      lede:
        "Answers to what usually comes up before the first call. If yours isn't here — ask on the discovery call.",
    },

    faq: [
      {
        q: "How do I choose between Audit, Discovery, and Support?",
        a: "Need a quick independent read on a specific decision? That's the Audit. Planning a serious project and need a complete plan? Discovery. Want a strategic partner who stays on the business side over time? Project Support. We'll figure out the right fit on the discovery call.",
      },
      {
        q: "How quickly can we start working together?",
        a: "First call — within a week of your request. After it I take a few days to analyze and come back with a plan. Actual work starts in days (Audit) or 1-2 weeks (Discovery or Support).",
      },
      {
        q: "What if the result doesn't meet expectations?",
        a: "I guarantee execution quality — if the result doesn't match what we agreed at the start, I redo it at my expense. If your expectations shifted along the way, we discuss adjusting the plan. Transparent on both sides.",
      },
      {
        q: "Can you guarantee a business outcome?",
        a: "I guarantee the quality of my work — analysis, plan, execution. The business outcome depends on many factors: market, circumstances, your team's decisions. I maximize impact on the part that depends on me: surfacing risks, preparing data for informed decisions, sharing transparently — so you can act on full information, not assumptions.",
      },
      {
        q: "How do you protect confidential information?",
        a: "We sign a mutual NDA before any detailed conversation. Template sent within 24 hours of request. Zero project details in my content or comms without your approval.",
      },
      {
        q: "What language do you work in?",
        a: "English or Ukrainian — whichever works for you. Documentation prepared in the client's language. Meeting and communication format we agree on the discovery call.",
      },
      {
        q: "Can you recommend vendors, or work with my existing team?",
        a: "Both. I have a network of vetted teams across domains — I recommend the ones that genuinely fit your project. If you already have a team, I work on your side in vendor negotiations and ongoing support.",
      },
      {
        q: "What do I get when the engagement ends?",
        a: "Concrete things that stay with you: a clear roadmap of next steps, complete documentation your team can run with, and the additional insights I uncovered along the way. Those extras often turn out to be the most valuable — they're only visible from inside the project and give you an edge for future decisions.",
      },
    ],

    booking: {
      eyebrow: "GET IN TOUCH",
      title: "Let's talk",
      sub:
        "I'll get back to you within 24 hours — to schedule a discovery call or discuss your inquiry.",
      quickLabel: "Prefer direct contact?",
      quickPhone: "Phone",
      quickTelegram: "Telegram",
      quickWhatsapp: "WhatsApp",
      quickEmail: "Email",
      quickCalcom: "Cal.com",
      orForm: "or send a message",
      labelName: "Name",
      labelEmail: "Email",
      labelSubject: "What's this about",
      labelMessage: "Tell me a bit about your project",
      messagePlaceholder: "What stage are you at? What's your context? (optional)",
      reqLabel: "*",
      submit: "Send",
      submitSending: "Sending...",
      noteOr: "Or email directly:",
      successToastTitle: "Got it. Talk soon.",
      successToastMsg: "I'll be in touch within 24 hours.",
      errorMsg: "Something went wrong. Please email me directly — address is below the form.",
      subjectOptions: [
        { value: "discovery-call", label: "Discovery Call" },
        { value: "audit", label: "Audit — focused analysis" },
        { value: "discovery", label: "Discovery — full plan" },
        { value: "support", label: "Project Support" },
        { value: "other", label: "Other" },
      ],
    },

    consent: {
      title: "We value your privacy",
      body: "We use cookies and similar tools to understand traffic and improve the site. Analytics cookies load only after you accept. Essential cookies (form submission, security) are always on.",
      policyLink: "Read the Privacy Policy",
      btnAccept: "Accept all",
      btnReject: "Reject non-essential",
      btnCustomize: "Customize",
      manageTitle: "Manage cookie settings",
      manageBody: "You can change your preferences at any time. The change applies immediately.",
      btnManage: "Change cookie settings",
      catEssentialTitle: "Essential",
      catEssentialBody: "Required for the site to function — form submission, security, language preference. Always on.",
      catAnalyticsTitle: "Analytics",
      catAnalyticsBody: "Google Analytics 4 — aggregated usage data with IP anonymization. Helps us understand which pages help visitors most.",
      catFunctionalTitle: "Functional",
      catFunctionalBody: "Cloudflare Web Analytics — anonymous traffic stats without cookies. Used for security and performance, no personal data.",
      btnSave: "Save preferences",
      btnBack: "Back",
      statusAccepted: "All cookies enabled.",
      statusRejected: "Only essential cookies are running.",
      statusCustom: "Custom preferences saved.",
    },
  },

  uk: {
    site: {
      eyebrow: "IT-супровід від ідеї до результату",
      heroH1Html:
        'Ваш <em>союзник</em> в IT-проєктах,<br>який діє виключно у <em>ваших інтересах</em>.',
      heroLede:
        "Ви відчуваєте, що вирішуєте навмання: незрозумілі терміни, різні оцінки від підрядників, брак даних для порівняння. Беру відповідальність за результат — перекладаю складне на зрозуміле, аналізую ринок, звіряю факти, щоб прийняті рішення були максимально ефективними.",
      heroCtaPrimary: "Discovery Call",
      heroCtaSecondary: "Як це працює →",
      heroMicro: "",

      ctaEyebrow: "НАСТУПНИЙ КРОК",
      ctaH2Html: "Зустріч на <em>30 хвилин</em>.",
      ctaLede:
        "Безкоштовно. Без презентацій. Просто розмова про ваш проект.",
      ctaPrimary: "Discovery Call",
      ctaAlt: "Або стежте за моєю роботою у LinkedIn",
      ctaSig: "— Taras Smaliukh · Lviv, Ukraine",

      nav: [
        { label: "Формати", href: "#services" },
        { label: "Кейси", href: "#why" },
        { label: "Процес", href: "#how" },
        { label: "FAQ", href: "#faq" },
      ],

      seo: {
        title:
          "Ascend Griffin — IT-супровід від ідеї до результату | ваш союзник у проектах",
        description:
          "Незалежний експерт на вашій стороні у IT-проектах: від перевірки ідеї до масштабування і оптимізації готових продуктів. Аудит, дослідження, супровід — для стартапів і бізнесу.",
        keywords:
          "IT-супровід, союзник у IT-проєктах, дослідження стартапу, аудит IT-проекту, оптимізація продукту, vibe coding, startup advisor, AI-інструменти, валідація ідеї, масштабування MVP",
        ogImage: "/og-image.png",
        locale: "uk_UA",
      },

      footerTagline:
        "IT-супровід від ідеї до результату. Союзник у ваших IT-проектах — від валідації ідеї до масштабування і оптимізації.",
      footerServicesH: "Формати",
      footerConnectH: "Зв'язок",
      footerLegalH: "Юридичне",
      footerCV: "CV / Портфоліо",
      madeIn: "Lviv, Ukraine",
    },

    stats: [
      {
        value: "$30-80K",
        valueHtml: "<em>$30-80K</em>",
        label: "Типовий перший IT-контракт. На цій сумі легко переплатити вдвічі",
      },
      {
        value: "35-70%",
        valueHtml: "<em>35-70%</em>",
        label: "Менше зайвих витрат, коли є якісне планування та розуміння процесів",
      },
      {
        value: "23+",
        valueHtml: "<em>23+</em>",
        label: "IT-проєктів досвіду — ваш проєкт не буде експериментом",
      },
    ],

    problemSection: {
      num: "03 · Результат",
      h2Html: "Чотири шляхи до <em>результату</em>.",
      lede:
        "На кожній стадії вашого проекту — свій контекст і відповідний результат. Ось чотири сценарії, у яких працюю: від перевірки ідеї до масштабування й оптимізації готових продуктів.",
    },

    problems: [
      {
        icon: "lightbulb",
        title: "Стартап — від ідеї до перевіреної гіпотези",
        description:
          "Перетворюю вашу ідею у перевірену гіпотезу з конкретним планом прототипу. Розбираю ринок, виявляю критичні припущення, підбираю правильні AI-інструменти для швидкого прототипу. На виході — чітке «рухаємось далі» чи «змінюємо напрямок» на основі фактів, а не здогадок.",
        steps: [
          "Дослідження ринку та аналіз конкурентів",
          "Перевірка ключових гіпотез",
          "План прототипу з підбором AI-інструментів",
          "Критерії «рухаємось далі» чи «змінюємо напрямок»",
        ],
        packageId: "discovery",
        packageLabel: "Дослідження",
      },
      {
        icon: "rocket",
        title: "Від прототипу до масштабування та інвестицій",
        description:
          "Ваш прототип (Cursor / v0 / Lovable / Claude) має перших користувачів — час переводити його з експерименту в бізнес. Досліджую потреби клієнтів, готую метрики для інвесторів, планую масштабування. Якщо готуєтеся до інвестиційного раунду чи краудфандингу — матимете дані, які переконують інвесторів і аудиторію.",
        steps: [
          "Дослідження потреб клієнтів і налаштована аналітика",
          "Метрики для інвесторів і підготовка презентації",
          "План масштабування на 90 днів",
          "Перехід на стабільну версію — коли це справді потрібно",
        ],
        packageId: "support",
        packageLabel: "Супровід проекту",
      },
      {
        icon: "compass",
        title: "Повна розробка з нуля — з правильним виконавцем",
        description:
          "Ви готові запустити повноцінну розробку, і треба обрати правильного виконавця. Проводжу аналіз: бізнес-модель і прибутковість, функціональні вимоги, оцінка бюджету, перевірка команд. На виході — пакет документів, з яким підпишете контракт обґрунтовано і за чесною ціною.",
        steps: [
          "Аналіз бізнес-моделі та прибутковості",
          "Функціональні вимоги, оцінка бюджету і строків",
          "Перевірка та порівняння виконавців, список найкращих команд",
          "Супровід процесу розробки до запуску",
        ],
        packageId: "discovery",
        packageLabel: "Дослідження",
      },
      {
        icon: "refresh-cw",
        title: "Оптимізація існуючого продукту",
        description:
          "Продукт уже працює, але перестав приносити очікуваний результат — ринок змінився або сам продукт застарів. Проводжу аудит по трьох площинах: технічній, ринковій, організаційній. Даю варіанти дій з прогнозованими наслідками — щоб прийняти найкраще рішення.",
        steps: [
          "Технічний аудит і оцінка боргу",
          "Ринковий аудит і нові можливості",
          "Організаційний аудит і процеси",
          "План дій з прогнозованими результатами",
        ],
        packageId: "audit",
        packageLabel: "Аудит",
      },
    ],

    problemFooter: "Рекомендований формат:",

    servicesSection: {
      num: "04 · Формати",
      h2Html: "Три формати — залежно від <em>вашої стадії</em>.",
      lede:
        "Залежно від задачі і стадії проекту — можливі різні формати роботи. Кожен з чітким результатом і прозорим процесом.",
    },

    services: [
      {
        id: "audit",
        num: "01",
        name: "Аудит",
        hook: "Експертний аналіз — коли потрібна незалежна думка перед важливим рішенням.",
        price: "від $1,000",
        priceNote: "5-14 днів",
        features: [
          "Виявлені ризики, переплати та слабкі місця у рішенні — і конкретні рекомендації, що з цим робити",
          "Системний огляд стану проекту по ключових напрямках",
          "Структурований звіт з висновками, ризиками та рекомендаціями",
          "Особиста зустріч для обговорення результатів і наступних кроків",
        ],
        cta: "Замовити аудит",
        ctaHref: "#book",
      },
      {
        id: "discovery",
        num: "02",
        name: "Дослідження",
        hook: "Ясна картина — що будуємо, за скільки, з ким — перед тим, як витрачати бюджет.",
        price: "від $4,000",
        priceNote: "2-8 тижнів",
        features: [
          "Чітке розуміння, що будувати і чи є на це ринок — на основі аналізу, а не здогадок",
          "Готовий план прототипу або функціональні вимоги — команді залишиться тільки реалізувати",
          "Реалістична оцінка бюджету і строків — без неочікуваних рахунків потім",
          "Список виконавців, що підходять саме вашому проекту — з реальними критеріями вибору",
          "Готовий пакет для переговорів — з аргументами, цифрами і технічними деталями",
        ],
        cta: "Забронювати дзвінок",
        ctaHref: "#book",
      },
      {
        id: "support",
        num: "03",
        name: "Супровід проекту",
        hook: "Ваш проект під контролем — від консультацій до повного ведення з моєю відповідальністю за результат.",
        price: "від $2,500 / міс",
        priceNote: "гнучко під ваші задачі",
        features: [
          "Консультації — щотижневі зустрічі та швидкі відповіді на важливі питання",
          "Супровід — перевірка пропозицій виконавців, участь у ключових рішеннях",
          "Ведення проекту — від планування до запуску, як керівник продукту на вашій стороні",
          "Глибина залученості підлаштовується під ваші поточні потреби",
        ],
        cta: "Обговорити співпрацю",
        ctaHref: "#book",
      },
    ],

    whySection: {
      num: "05 · Кейси",
      h2Html: "<em>Цифри</em>, а не обіцянки.",
      lede: "Проекти з моєї практики — з результатами, які можна виміряти.",
    },

    pillars: [
      {
        num: "01",
        title: "Мобільний додаток для енергопостачальника на 500K+ користувачів",
        description:
          "Виклик: фрагментований нецифровий досвід для понад 500 000 користувачів, висока навантаженість на підтримку, відсутнє продуктове бачення.",
        steps: [
          "Discovery-воркшопи з бізнесом і юристами",
          "Картування всіх customer journeys",
          "80+ user stories з критеріями приймання",
          "Супровід UX і dev до релізу",
        ],
        result: "Ключові дії на 35% швидші · Дзвінки в підтримку на 20% менше · Зайвих змін на 25% менше",
      },
      {
        num: "02",
        title: "Відновлення застряглого IT-проекту з перевитратою бюджету",
        description:
          "Виклик: проект перевитратив бюджет і відстав від графіку. Нечіткий scope, постійні зміни пріоритетів, розірвана комунікація між бізнесом і dev-командою.",
        steps: [
          "Перегляд беклогу і поточного статусу",
          "Інтерв'ю зі стейкхолдерами",
          "Переструктурування вимог у пріоритизований беклог",
          "Поетапний план відновлення з картуванням вузьких місць",
        ],
        result: "80% задач закрито за 2 місяці замість 3-6 · Зайвих змін на 35% менше · Витрат на 70% менше",
      },
      {
        num: "03",
        title: "B2B SaaS для логістики — від ідеї до перших пілотів",
        description:
          "Виклик: побудова стартапу з нуля. Український B2B-ринок логістики — консервативні enterprise-клієнти, регульовані індустрії, переважно ручні процеси.",
        steps: [
          "Discovery: 9+ переговорів з потенційними партнерами",
          "Продуктова стратегія, MVP-скоуп і roadmap",
          "Управління беклогом і супровід до запуску",
          "Стратегічні партнерства у регульованих індустріях",
        ],
        result: "Перша версія у реальних операціях · 9+ партнерств · 3+ MoU підписано · Validated ICP & PMF",
      },
    ],

    howSection: {
      num: "06 · Процес",
      h2Html: "Чотири кроки. <em>Просто і ясно</em>.",
      lede:
        "Знайомство → аналіз і план → пропозиція → робота. На кожному кроці ви знаєте, куди рухаємось і навіщо.",
    },

    steps: [
      {
        num: "01",
        title: "Знайомство",
        tagline: "Розуміємо ваш проект і контекст",
        duration: "30 хв · онлайн",
        body:
          "Перший дзвінок — щоб зрозуміти, що саме ви будуєте, на якій ви стадії і де я можу бути найкорисніший. Після нашої розмови беру кілька днів, щоб проаналізувати ваш ринок, напрямок і потенційні можливості.",
      },
      {
        num: "02",
        title: "Аналіз і план",
        tagline: "Повертаюсь з конкретним планом дій",
        duration: "1 година · онлайн",
        body:
          "На другому дзвінку повертаюсь з результатами аналізу і попереднім планом — можливі формати співпраці, обсяг роботи, очікувані результати, що варто врахувати. Разом обговорюємо, що найкраще працює для вашої ситуації.",
      },
      {
        num: "03",
        title: "Пропозиція",
        tagline: "Конкретна угода під ваші потреби",
        duration: "1-3 робочих дні",
        body:
          "Готую пропозицію з варіантами співпраці — обсяг роботи, послідовність кроків, очікувані результати, що входить до кожного варіанту. Ви обираєте формат, який підходить саме вашій ситуації.",
      },
      {
        num: "04",
        title: "Робота і результат",
        tagline: "Ваш проект — на правильному шляху",
        duration: "залежить від обсягу",
        body:
          "Старт у перший день. Регулярні зустрічі для синхронізації — щоб ви завжди розуміли, де ми і куди йдемо. У фінал — рішення, яке реально працює для вашого бізнесу, і ясне розуміння наступних кроків.",
      },
    ],

    faqSection: {
      num: "07 · Питання",
      h2Html: "Часті <em>питання</em>.",
      lede:
        "Відповіді на питання, які зазвичай виникають перед першим дзвінком. Якщо вашого немає — запитайте під час знайомства.",
    },

    faq: [
      {
        q: "Як обрати між Аудитом, Дослідженням і Супроводом?",
        a: "Якщо потрібен швидкий незалежний погляд на конкретне рішення — Аудит. Якщо плануєте серйозний проект і потрібен повноцінний план — Дослідження. Якщо хочете постійного фахівця на стороні бізнесу — Супровід. На першому дзвінку допоможу визначитись, який формат підходить саме вам.",
      },
      {
        q: "Як швидко можемо почати співпрацю?",
        a: "Перший дзвінок — у межах тижня після запиту. Після нього беру кілька днів на аналіз і повертаюсь з планом. Фактичний старт роботи — від кількох днів (Аудит) до 1-2 тижнів (Дослідження або Супровід).",
      },
      {
        q: "Що якщо результат не виправдав очікувань?",
        a: "Я гарантую якість виконання — якщо результат не відповідає тому, на чому ми домовилися на старті, переробляю за свій рахунок. Якщо ваші очікування змінилися дорогою — обговорюємо корекцію плану. Прозоро з обох сторін.",
      },
      {
        q: "Чи можете гарантувати бізнес-результат?",
        a: "Якість моєї роботи — аналіз, план, виконання — гарантую. Бізнес-результат залежить від багатьох чинників: ринку, обставин, рішень вашої команди. Я максимально впливаю на ту частину, яка залежить від мене: виявляю ризики, готую дані для обґрунтованих рішень, чесно ділюся всім важливим — щоб ви могли діяти на основі повної інформації.",
      },
      {
        q: "Як ви захищаєте конфіденційну інформацію?",
        a: "Підписуємо взаємний NDA перед детальним обговоренням. Шаблон надсилаю протягом 24 годин після запиту. Жодних деталей вашого проекту в моєму контенті чи комунікації без погодження з вами.",
      },
      {
        q: "Якою мовою працюєте?",
        a: "Українською або англійською — як зручніше вам. Документи готую мовою клієнта. Формат зустрічей і переписки погоджуємо на знайомстві.",
      },
      {
        q: "Чи можете рекомендувати виконавців або працювати з моєю командою?",
        a: "Так, обидва варіанти. Маю мережу перевірених команд у різних доменах — рекомендую тих, хто реально підходить вашому проекту. Якщо у вас уже є команда — працюю на вашому боці у переговорах і поточному супроводі.",
      },
      {
        q: "Що буде після того, як я завершу свою роботу?",
        a: "Результат — це конкретні речі, які залишаються у вас: ясне розуміння наступних кроків, повна документація для подальшої роботи команди, і додаткові інсайти з глибшого аналізу. Часто саме ці додаткові висновки виявляються найціннішими — вони видимі лише з середини проекту і дають вам перевагу для майбутніх рішень.",
      },
    ],

    booking: {
      eyebrow: "НАСТУПНИЙ КРОК",
      title: "Поговорімо",
      sub:
        "Зв'яжуся з вами протягом 24 годин — узгодимо час знайомства або обговоримо ваш запит.",
      quickLabel: "Хочете швидко?",
      quickPhone: "Телефон",
      quickTelegram: "Telegram",
      quickWhatsapp: "WhatsApp",
      quickEmail: "Email",
      quickCalcom: "Cal.com",
      orForm: "або надішліть повідомлення",
      labelName: "Ім'я",
      labelEmail: "Email",
      labelSubject: "Що цікавить",
      labelMessage: "Розкажіть коротко про ваш проект",
      messagePlaceholder: "На якій стадії ви зараз? Який ваш контекст? (необов'язково)",
      reqLabel: "*",
      submit: "Надіслати",
      submitSending: "Надсилаю...",
      noteOr: "Або напишіть напряму:",
      successToastTitle: "Дякую за заявку!",
      successToastMsg: "Зв'яжуся з вами протягом 24 годин.",
      errorMsg: "Не вдалось відправити. Напишіть напряму на email — він знизу форми.",
      subjectOptions: [
        { value: "discovery-call", label: "Знайомство (Discovery Call)" },
        { value: "audit", label: "Аудит — точковий аналіз" },
        { value: "discovery", label: "Дослідження — повний план" },
        { value: "support", label: "Супровід проекту" },
        { value: "other", label: "Інше" },
      ],
    },

    consent: {
      title: "Ми поважаємо вашу приватність",
      body: "Використовуємо cookies та подібні інструменти, щоб розуміти трафік і покращувати сайт. Аналітичні cookies завантажуються лише після вашої згоди. Технічно необхідні (форма зв'язку, безпека) працюють завжди.",
      policyLink: "Читати Політику конфіденційності",
      btnAccept: "Прийняти всі",
      btnReject: "Відхилити необов'язкові",
      btnCustomize: "Налаштувати",
      manageTitle: "Керування cookies",
      manageBody: "Ви можете змінити налаштування у будь-який момент. Зміна застосовується одразу.",
      btnManage: "Змінити налаштування cookies",
      catEssentialTitle: "Необхідні",
      catEssentialBody: "Потрібні для роботи сайту — відправка форми, безпека, мовні налаштування. Завжди увімкнені.",
      catAnalyticsTitle: "Аналітика",
      catAnalyticsBody: "Google Analytics 4 — агрегована статистика з анонімізацією IP. Допомагає зрозуміти, які сторінки найкорисніші для відвідувачів.",
      catFunctionalTitle: "Функціональні",
      catFunctionalBody: "Cloudflare Web Analytics — анонімна статистика без cookies. Використовується для безпеки і продуктивності, без персональних даних.",
      btnSave: "Зберегти налаштування",
      btnBack: "Назад",
      statusAccepted: "Усі cookies увімкнено.",
      statusRejected: "Лише необхідні cookies працюють.",
      statusCustom: "Власні налаштування збережено.",
    },
  },
} as const;

export type Translation = typeof translations.en;

export function t(locale: string | undefined): Translation {
  if (locale === "uk") return translations.uk as unknown as Translation;
  return translations.en;
}
