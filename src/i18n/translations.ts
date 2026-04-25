// All site copy in EN + UK
// EN is primary (default). UK is alternate.

export type Locale = "en" | "uk";

export const translations = {
  en: {
    site: {
      eyebrow: "IT support from idea to result",
      heroH1Html:
        'Your <em>ally</em> in IT projects,<br>acting exclusively in <em>your interests</em>.',
      heroLede:
        "Feeling like you're deciding blindly? Unclear terms, conflicting vendor estimates, no data to compare. I take responsibility for the outcome — translating complex into simple, analyzing the market, verifying facts, so your decisions become as effective as possible.",
      heroCtaPrimary: "Discovery Call",
      heroCtaSecondary: "How it works →",
      heroMicro: "",

      ctaEyebrow: "NEXT STEP",
      ctaH2Html: "A 30-minute <em>meeting</em>.",
      ctaLede: "Free. No slides. Just a conversation about your project.",
      ctaPrimary: "Discovery Call",
      ctaAlt: "Or follow my work on LinkedIn",
      ctaSig: "— Taras Smaliukh · Lviv, Ukraine",

      nav: [
        { label: "Formats", href: "#services" },
        { label: "Cases", href: "#why" },
        { label: "Process", href: "#how" },
        { label: "FAQ", href: "#faq" },
      ],

      seo: {
        title:
          "Ascend Griffin — IT support from idea to result | your ally in projects",
        description:
          "Independent advisor on your side for IT projects: from idea validation to scaling and optimization of existing products. Audit, Discovery, ongoing Support — for startups and businesses.",
        keywords:
          "IT advisor, fractional product owner, vibe coding consultant, startup advisor, MVP validation, AI tools, product discovery, founder ally, audit IT contract",
        ogImage: "/og-image.png",
        locale: "en_US",
      },

      footerTagline:
        "IT support from idea to result. Ally on your side in IT projects — from idea validation to scaling and optimization.",
      footerServicesH: "Formats",
      footerConnectH: "Connect",
      footerLegalH: "Legal",
      footerCV: "CV / Portfolio",
      madeIn: "Lviv, Ukraine",
    },

    stats: [
      {
        value: "$30-80K",
        valueHtml: "<em>$30-80K</em>",
        label: "Typical first IT contract. Easy to overpay 2x at this level",
      },
      {
        value: "35-70%",
        valueHtml: "<em>35-70%</em>",
        label: "Less wasteful spending with quality planning and clear processes",
      },
      {
        value: "23+",
        valueHtml: "<em>23+</em>",
        label: "IT projects of experience — your project won't be an experiment",
      },
    ],

    problemSection: {
      num: "03 · Result",
      h2Html: "Four paths to <em>the result</em>.",
      lede:
        "Each stage of your project has its own context and matching outcome. Here are four scenarios I work with — from validating an idea to scaling and optimizing existing products.",
    },

    problems: [
      {
        icon: "lightbulb",
        title: "Startup — from idea to validated hypothesis",
        description:
          "I turn your idea into a tested hypothesis with a concrete prototype plan. Mapping the market, surfacing critical assumptions, picking the right AI tools for fast prototyping. The output: a clear «move forward» or «pivot direction» based on facts, not guesses.",
        steps: [
          "Market research and competitor analysis",
          "Validation of key hypotheses",
          "Prototype plan with AI tool selection",
          "Criteria for «move forward» vs «change direction»",
        ],
        packageId: "discovery",
        packageLabel: "Discovery",
      },
      {
        icon: "rocket",
        title: "From MVP to scaling and investment",
        description:
          "Your MVP (Cursor / v0 / Lovable / Claude) has its first users — time to convert it from experiment to business. I structure customer discovery, prepare investor-grade metrics, plan scaling. If you're preparing for a round or crowdfunding, you'll have the data that convinces investors and audience.",
        steps: [
          "Customer discovery and analytics setup",
          "Investor-ready metrics and pitch preparation",
          "90-day scaling roadmap",
          "Transition to a stable production version — when truly needed",
        ],
        packageId: "support",
        packageLabel: "Project Support",
      },
      {
        icon: "compass",
        title: "Full build from scratch — with the right vendor",
        description:
          "You're ready to commission full-scale development and need to choose the right contractor. I run the analysis: business model and profitability, functional requirements, budget and timeline estimate, vendor evaluation. The output: a document package you sign your contract with — informed and at a fair price.",
        steps: [
          "Business model and profitability analysis",
          "Functional requirements, budget and timeline estimate",
          "Vendor evaluation and shortlist of best teams",
          "Delivery oversight through launch",
        ],
        packageId: "discovery",
        packageLabel: "Discovery",
      },
      {
        icon: "refresh-cw",
        title: "Existing product not delivering as it should",
        description:
          "The product is in production but stopped delivering — the market shifted, the product aged, timelines slipping, vendor issues. You need an outside view and a plan: modernize, rebuild, or pivot the business direction.",
        steps: [
          "Technical audit and debt assessment",
          "Market audit and new opportunities",
          "Organizational audit and processes",
          "Action plan with predicted outcomes",
        ],
        packageId: "audit",
        packageLabel: "Audit",
      },
    ],

    problemFooter: "Recommended format:",

    servicesSection: {
      num: "04 · Formats",
      h2Html: "Three formats — depending on <em>your stage</em>.",
      lede:
        "Depending on the task and stage of your project — different work formats are possible. Each with a clear result and transparent process.",
    },

    services: [
      {
        id: "audit",
        num: "01",
        name: "Audit",
        hook: "Expert analysis — when you need an independent opinion before an important decision.",
        price: "from $500",
        priceNote: "5-14 days",
        features: [
          "Identified risks, overpayments and weak spots in your decision — with concrete recommendations on what to do",
          "Systematic review of your project across key dimensions",
          "Structured report with conclusions, risks and recommendations",
          "Personal meeting to discuss results and next steps",
        ],
        cta: "Order audit",
        ctaHref: "#book",
      },
      {
        id: "discovery",
        num: "02",
        name: "Discovery",
        hook: "A clear picture — what we build, for how much, with whom — before spending budget.",
        price: "from $4,000",
        priceNote: "2-8 weeks",
        features: [
          "Clear understanding of what to build and whether there's a market for it — based on analysis, not guesswork",
          "Ready prototype plan or functional requirements — your team only needs to execute",
          "Realistic budget and timeline estimate — no unexpected bills later",
          "List of vendors that fit your project specifically — with real selection criteria",
          "Ready package for negotiations — with arguments, numbers and technical details",
        ],
        cta: "Book a call",
        ctaHref: "#book",
      },
      {
        id: "support",
        num: "03",
        name: "Project Support",
        hook: "Your project under control — from consultations to full leadership with my responsibility for the result.",
        price: "from $2,500 / month",
        priceNote: "flexible to your needs",
        features: [
          "Consultations — weekly meetings and quick answers to important questions",
          "Oversight — review of vendor proposals, participation in key decisions",
          "Project leadership — from planning to launch, as Product Owner on your side",
          "Depth of involvement adapts to your current needs",
        ],
        cta: "Discuss collaboration",
        ctaHref: "#book",
      },
    ],

    whySection: {
      num: "05 · Cases",
      h2Html: "<em>Numbers</em>, not promises.",
      lede: "Projects from my practice — with measurable outcomes.",
    },

    pillars: [
      {
        num: "01",
        title: "Mobile app for an energy provider with 500K+ users",
        description:
          "Challenge: fragmented non-digital experience for over 500,000 active users, high support load, no clear product vision.",
        steps: [
          "Discovery workshops with business and legal stakeholders",
          "Mapping all customer journeys",
          "80+ user stories with acceptance criteria",
          "UX and dev support through release",
        ],
        result: "Key actions 35% faster · Support calls down 20% · Change requests down 25%",
      },
      {
        num: "02",
        title: "Recovering a stalled IT project with budget overrun",
        description:
          "Challenge: project over budget and behind schedule. Unclear scope, shifting priorities, broken communication between business and dev team.",
        steps: [
          "Backlog and current status review",
          "Stakeholder interviews",
          "Restructuring requirements into prioritized backlog",
          "Phased recovery plan with bottleneck mapping",
        ],
        result: "80% of tasks closed in 2 months instead of 3-6 · Change requests down 35% · Costs down 70%",
      },
      {
        num: "03",
        title: "B2B SaaS for logistics — from idea to first pilots",
        description:
          "Challenge: building a startup from scratch. Ukrainian B2B logistics market — conservative enterprise clients, regulated industries, mostly manual processes.",
        steps: [
          "Discovery: 9+ negotiations with potential partners",
          "Product strategy, MVP scope and roadmap",
          "Backlog management and launch support",
          "Strategic partnerships in regulated industries",
        ],
        result: "Version 1 in real operations · 9+ partnerships · 3+ MoUs signed · Validated ICP & PMF",
      },
    ],

    howSection: {
      num: "06 · Process",
      h2Html: "Four steps. <em>Simple and clear</em>.",
      lede:
        "Introduction → analysis and plan → proposal → work. At each step you know where we're going and why.",
    },

    steps: [
      {
        num: "01",
        title: "Introduction",
        tagline: "Understanding your project and context",
        duration: "30 min · online",
        body:
          "First call — to understand what you're building, what stage you're at, and where I can be most useful. 30 minutes — enough for both of us to understand whether to move forward. After our conversation I take a few days to analyze your market, direction and potential opportunities.",
      },
      {
        num: "02",
        title: "Analysis and Plan",
        tagline: "I return with a concrete action plan",
        duration: "1 hour · online",
        body:
          "On the second call I come back with analysis results and a preliminary plan — possible collaboration formats, scope of work, expected outcomes, what's worth considering. Together we discuss what works best for your situation.",
      },
      {
        num: "03",
        title: "Proposal",
        tagline: "Concrete agreement tailored to your needs",
        duration: "1-3 working days",
        body:
          "I prepare a 1-2 page proposal with collaboration options — scope of work, sequence of steps, expected outcomes, what's included in each option. You choose the format that fits your specific situation.",
      },
      {
        num: "04",
        title: "Work and Result",
        tagline: "Your project — on the right path",
        duration: "depends on scope",
        body:
          "Day-one start. Regular sync meetings — so you always understand where we are and where we're going. At the end — a solution that genuinely works for your business, with clear understanding of next steps.",
      },
    ],

    faqSection: {
      num: "07 · Questions",
      h2Html: "Frequent <em>questions</em>.",
      lede:
        "Answers to questions that usually come up before the first call. If yours isn't here — ask during introduction.",
    },

    faq: [
      {
        q: "How do I choose between Audit, Discovery and Support?",
        a: "If you need a quick independent view on a specific decision — Audit. If you're planning a serious project and need a complete plan — Discovery. If you want a permanent specialist on the business side — Support. On the first call I'll help determine which format suits you specifically.",
      },
      {
        q: "How quickly can we start working together?",
        a: "First call — within a week of your request. After it I take a few days to analyze and return with a plan. Actual work start — from a few days (Audit) to 1-2 weeks (Discovery or Support).",
      },
      {
        q: "What if the result doesn't match expectations?",
        a: "I guarantee execution quality — if the result doesn't match what we agreed at the start, I redo it at my expense. If your expectations changed along the way — we discuss plan correction. Transparent on both sides.",
      },
      {
        q: "Can you guarantee a business outcome?",
        a: "I guarantee the quality of my work — analysis, plan, execution. The business outcome depends on many factors: market, circumstances, your team's decisions. I maximize impact on the part that depends on me: identifying risks, preparing data for informed decisions, sharing transparently — so you can act on full information.",
      },
      {
        q: "How do you protect confidential information?",
        a: "We sign a mutual NDA before detailed discussion. Template sent within 24 hours of request. No project details in my content or communication without your approval.",
      },
      {
        q: "What language do you work in?",
        a: "Ukrainian or English — whichever is convenient for you. Documents prepared in client's language. Meeting and communication format agreed at introduction.",
      },
      {
        q: "Can you recommend vendors or work with my existing team?",
        a: "Yes, both options. I have a network of verified teams across different domains — I recommend ones that genuinely fit your project. If you already have a team — I work on your side in negotiations and ongoing support.",
      },
      {
        q: "What happens after I complete the work?",
        a: "The result — concrete things that stay with you: clear understanding of next steps, complete documentation for your team's continued work, and additional insights from deeper analysis. Often these additional findings turn out to be the most valuable — they're only visible from inside the project and give you an edge for future decisions.",
      },
    ],

    booking: {
      eyebrow: "NEXT STEP",
      title: "Leave a request",
      sub:
        "I'll get back to you within 24 hours — to schedule introduction or discuss your inquiry.",
      labelName: "Name",
      labelEmail: "Email",
      labelSubject: "What interests you",
      labelMessage: "Tell us briefly about your project",
      messagePlaceholder: "What stage are you at? What's your context? (optional)",
      reqLabel: "*",
      submit: "Send",
      submitSending: "Sending...",
      noteOr: "Or write directly:",
      successToastTitle: "Thanks for the request!",
      successToastMsg: "I'll get back to you within 24 hours.",
      errorMsg: "Couldn't send. Write directly to email — it's below the form.",
      subjectOptions: [
        { value: "discovery-call", label: "Introduction (Discovery Call)" },
        { value: "audit", label: "Audit — focused analysis" },
        { value: "discovery", label: "Discovery — full plan" },
        { value: "support", label: "Project Support" },
        { value: "other", label: "Other" },
      ],
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
        price: "від $500",
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
      title: "Залиште заявку",
      sub:
        "Зв'яжуся з вами протягом 24 годин — узгодимо час знайомства або обговоримо ваш запит.",
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
  },
} as const;

export type Translation = typeof translations.en;

export function t(locale: string | undefined): Translation {
  if (locale === "uk") return translations.uk as unknown as Translation;
  return translations.en;
}
