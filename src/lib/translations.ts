export const translations = {
  en: {
    navbar: {
      links: [
        { label: "Problem", href: "#problem" },
        { label: "Solution", href: "#solution" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Request Demo",
    },

    hero: {
      badge: "Prototype Validation · Research-Backed",
      title1: "HEAR THE THREAT",
      title2: "BEFORE YOU SEE IT",
      subtitle:
        "Acoustic drone detection system designed for warfare conditions. Real-time direction of arrival for FPV threats —",
      subtitleHighlight:
        "including fiber-optic controlled drones invisible to RF detection.",
      ctaPrimary: "Request Demo",
      stats: [
        { value: "170–360°", label: "Sound Coverage" },
        { value: "GPS-Free", label: "No GPS Required" },
        { value: "AI Model", label: "Deep Learning" },
        { value: "Passive", label: "No RF Emissions" },
      ],
    },

    problem: {
      sectionLabel: "The Problem",
      heading1: "The threat is real.",
      heading2: "The detection gap is critical.",
      items: [
        {
          num: "01",
          title: "Military vehicles and personnel are exposed",
          desc: "No systemic acoustic detection solution exists for military units in the field. Detection relies on visual observation or RF methods that FPV drones can bypass entirely.",
        },
        {
          num: "02",
          title: "Volunteers and evacuees have zero warning",
          desc: "Near-frontline civilians learn about an approaching drone only when they can already see it — leaving no time to react and no directional information to guide a safe response.",
        },
        {
          num: "03",
          title: "Fiber-optic FPV drones evade all RF detection",
          desc: "Fiber-optic controlled drones emit no radio frequency signal. Conventional RF jammers and detectors are completely blind to them — making them the most dangerous threat on the modern battlefield.",
        },
      ],
    },

    solution: {
      sectionLabel: "The Solution",
      heading1: "Acoustic awareness",
      heading2: "for the battlefield",
      body: "Heimdall Aurux is a research-backed acoustic detection system that uses a microphone array, beamforming algorithms, and deep learning AI to detect drone presence and direction of arrival — even in high-noise warfare conditions.",
      points: [
        "Detects FPV drones regardless of control method — including fiber-optic",
        "Provides real-time direction and approximate distance to threat",
        "Works where RF detection fails completely",
        "Passive system — no radio emissions, no detectable signature",
        "Operates in GPS-denied environments without restriction",
      ],
      diagramLabel: "HEIMDALL AURUX",
      diagramSub: "Array Active",
    },

    howItWorks: {
      sectionLabel: "How It Works",
      heading: "Three steps. Zero visibility required.",
      steps: [
        {
          num: "01",
          title: "Capture",
          desc: "The microphone array continuously captures the acoustic environment across the coverage zone — passively, with no detectable emissions.",
        },
        {
          num: "02",
          title: "Process",
          desc: "Beamforming algorithms apply spatial filtering while the deep learning model isolates drone acoustic signatures from battlefield noise in real time.",
        },
        {
          num: "03",
          title: "Alert",
          desc: "The operator receives immediate directional data — bearing and approximate distance to the incoming threat — before it becomes visible.",
        },
      ],
    },

    devStatus: {
      sectionLabel: "Development Status",
      heading: "Heimdall Aurux is in prototype validation",
      body: "The algorithm is complete and the system has been assembled. We are now validating the prototype on embedded hardware — testing acoustic detection and direction of arrival in real conditions. We are seeking investment and partnerships to move toward field deployment.",
      milestones: [
        { label: "Research & Algorithm", status: "done" },
        { label: "System Assembly", status: "done" },
        { label: "Prototype Validation", status: "active" },
        { label: "Field Testing", status: "next" },
      ],
      nowLabel: "← now",
    },

    contact: {
      sectionLabel: "Contact",
      heading: "Get in touch",
      body: "Whether you're a military unit, a defence investor, an NGO protecting volunteers, or a potential partner — we want to hear from you.",
      rows: [
        ["Military & Defence", "Request a demonstration or discuss deployment needs"],
        ["Investors", "Learn about our funding round and technology roadmap"],
        ["NGOs & Civilians", "Explore protection options for near-frontline areas"],
        ["Partners", "Manufacturing, distribution, and technology partnerships"],
      ],
      emailLabel: "Reach us directly at",
      emailCta: "Send Email",
    },

    footer: {
      tagline: "Acoustic Drone Detection System",
      legal: "All rights reserved.",
      status: "Prototype validation · Ukraine",
      links: ["Problem", "Solution", "Contact"],
    },
  },

  uk: {
    navbar: {
      links: [
        { label: "Проблема", href: "#problem" },
        { label: "Рішення", href: "#solution" },
        { label: "Контакт", href: "#contact" },
      ],
      cta: "Запит демо",
    },

    hero: {
      badge: "Валідація прототипу · На основі досліджень",
      title1: "ПОЧУЙ ЗАГРОЗУ",
      title2: "ДО ТОГО, ЯК ПОБАЧИШ",
      subtitle:
        "Акустична система виявлення дронів, розроблена для бойових умов. Визначення напрямку прильоту FPV-загроз у реальному часі —",
      subtitleHighlight:
        "включно з дронами на оптоволоконному управлінні, невидимими для RF-детекторів.",
      ctaPrimary: "Запит демо",
      stats: [
        { value: "170–360°", label: "Покриття звуку" },
        { value: "GPS-Free", label: "Без GPS" },
        { value: "AI-модель", label: "Глибоке навчання" },
        { value: "Пасивна", label: "Без RF-сигналу" },
      ],
    },

    problem: {
      sectionLabel: "Проблема",
      heading1: "Загроза реальна.",
      heading2: "Прогалина у виявленні — критична.",
      items: [
        {
          num: "01",
          title: "Техніка та особовий склад незахищені",
          desc: "Системне акустичне рішення для виявлення загроз відсутнє. Виявлення покладається на візуальне спостереження або RF-методи, яких FPV-дрони легко уникають.",
        },
        {
          num: "02",
          title: "Волонтери та евакуйовані не мають попередження",
          desc: "Поблизу фронту цивільні дізнаються про дрон лише тоді, коли вже бачать його — часу та напрямку для безпечної відповіді не залишається.",
        },
        {
          num: "03",
          title: "Оптоволоконні FPV обходять будь-яке RF-виявлення",
          desc: "Дрони на оптоволоконному управлінні не випромінюють радіосигналу. Звичайні глушники та детектори повністю сліпі до них — це найнебезпечніша загроза на сучасному полі бою.",
        },
      ],
    },

    solution: {
      sectionLabel: "Рішення",
      heading1: "Акустична обізнаність",
      heading2: "для поля бою",
      body: "Heimdall Aurux — акустична система виявлення на основі досліджень, що використовує масив мікрофонів, алгоритми beamforming та штучний інтелект для виявлення дронів та напрямку їх прильоту — навіть в умовах сильного шуму.",
      points: [
        "Виявляє FPV-дрони незалежно від методу управління — включно з оптоволокном",
        "Надає напрямок та приблизну відстань до загрози в реальному часі",
        "Працює там, де RF-виявлення повністю безсиле",
        "Пасивна система — жодних радіовипромінювань та сигнатурного сліду",
        "Функціонує в умовах придушення GPS без обмежень",
      ],
      diagramLabel: "HEIMDALL AURUX",
      diagramSub: "Масив активний",
    },

    howItWorks: {
      sectionLabel: "Як це працює",
      heading: "Три кроки. Видимість не потрібна.",
      steps: [
        {
          num: "01",
          title: "Захоплення",
          desc: "Масив мікрофонів безперервно фіксує акустичне середовище в зоні покриття — пасивно, без жодних виявних сигналів.",
        },
        {
          num: "02",
          title: "Обробка",
          desc: "Алгоритми beamforming виконують просторову фільтрацію, а модель глибокого навчання відокремлює акустичний підпис дрона від шуму поля бою в реальному часі.",
        },
        {
          num: "03",
          title: "Сповіщення",
          desc: "Оператор отримує миттєві дані напрямку — азимут та приблизну відстань до вхідної загрози — до того, як вона стає видимою.",
        },
      ],
    },

    devStatus: {
      sectionLabel: "Статус розробки",
      heading: "Heimdall Aurux проходить валідацію прототипу",
      body: "Алгоритм написано, систему зібрано. Зараз ми валідуємо прототип на вбудованому залізі — тестуємо акустичне виявлення та визначення напрямку прильоту в реальних умовах. Шукаємо інвестиції та партнерства для виходу на польові випробування.",
      milestones: [
        { label: "Дослідження та алгоритм", status: "done" },
        { label: "Збірка системи", status: "done" },
        { label: "Валідація прототипу", status: "active" },
        { label: "Польові випробування", status: "next" },
      ],
      nowLabel: "← зараз",
    },

    contact: {
      sectionLabel: "Контакт",
      heading: "Зв'яжіться з нами",
      body: "Якщо ви — військовий підрозділ, інвестор, НГО чи потенційний партнер — напишіть нам.",
      rows: [
        ["Військові та оборона", "Запит на демонстрацію або обговорення умов розгортання"],
        ["Інвестори", "Інформація про раунд фінансування та технологічну дорожню карту"],
        ["НГО та цивільні", "Варіанти захисту для цивільних поблизу фронту"],
        ["Партнери", "Виробництво, дистрибуція та технологічне партнерство"],
      ],
      emailLabel: "Напишіть нам напряму",
      emailCta: "Написати листа",
    },

    footer: {
      tagline: "Акустична система виявлення дронів",
      legal: "Всі права захищені.",
      status: "Валідація прототипу · Україна",
      links: ["Проблема", "Рішення", "Контакт"],
    },
  },
} as const;

export type Translations = typeof translations.en;
