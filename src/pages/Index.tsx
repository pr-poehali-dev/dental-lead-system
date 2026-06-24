import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/2b557ac8-e25e-441b-8f01-35907600e13a/files/5bb2e15e-6060-4b07-867b-15847c863ee7.jpg';

const NAV = [
  { id: 'hero', label: 'Главная' },
  { id: 'system', label: 'О системе' },
  { id: 'how', label: 'Как работает' },
  { id: 'cases', label: 'Кейсы' },
  { id: 'services', label: 'Услуги' },
  { id: 'contacts', label: 'Контакты' },
];

const HERO_STATS = [
  { value: '87+', label: 'клиник уже в системе' },
  { value: '×2.4', label: 'средний рост выручки' },
  { value: '90 дней', label: 'до первых результатов' },
];

const FLOW = [
  { icon: 'Megaphone', label: 'Реклама' },
  { icon: 'MousePointerClick', label: 'Обращение' },
  { icon: 'CalendarCheck', label: 'Запись' },
  { icon: 'DoorOpen', label: 'Приход' },
  { icon: 'HeartPulse', label: 'Лечение' },
  { icon: 'Repeat', label: 'Повторные' },
];

const TRUST_ITEMS = [
  { icon: 'Award', text: 'Работаем только со стоматологиями' },
  { icon: 'ShieldCheck', text: 'Гарантия результата по договору' },
  { icon: 'Clock', text: 'Первые заявки — в течение 14 дней' },
  { icon: 'BarChart2', text: 'Прозрачная аналитика в реальном времени' },
  { icon: 'Users', text: '87+ клиник по всей России' },
  { icon: 'Star', text: 'Средний NPS клиентов — 9.1 из 10' },
];

const PAINS = [
  { icon: 'TrendingDown', text: 'Реклама запускается, но непонятно, куда уходят деньги' },
  { icon: 'PhoneOff', text: 'Заявки есть, а пациентов мало — администраторы не конвертируют' },
  { icon: 'HelpCircle', text: 'Люди спрашивают цену и исчезают' },
  { icon: 'Armchair', text: 'Врачи простаивают — кресла пустуют' },
  { icon: 'Calculator', text: 'Нет понимания, сколько вложить для миллиона оборота' },
  { icon: 'Shuffle', text: 'Рост зависит только от рекомендаций и удачи' },
];

const BENEFITS = [
  { icon: 'Armchair', title: 'Заполняем кресла пациентами', text: 'Знаем, сколько первички нужно привлечь для нужной загрузки. Работаем с числами, а не интуицией.' },
  { icon: 'Gem', title: 'Пациенты, которые платят', text: 'Фокус на дорогих направлениях: имплантация, протезирование, ортодонтия, эстетика — не дешёвые консультации.' },
  { icon: 'LineChart', title: 'Сквозная аналитика', text: 'Видите путь каждого рубля: клик → обращение → запись → лечение. Никаких «чёрных ящиков».' },
  { icon: 'TrendingUp', title: 'Рост без роста бюджета', text: 'Улучшаем конверсию, упаковку и работу с продажами — выжимаем максимум из текущих вложений.' },
  { icon: 'Cog', title: 'Клиника как система', text: 'Поток пациентов больше не зависит от одного «звёздного» врача или рекомендаций.' },
  { icon: 'CalendarCheck', title: 'Plan на 90 дней', text: 'Знаете, сколько пациентов придёт в следующем квартале. Планируете бизнес, а не надеетесь.' },
];

const STEPS = [
  { n: '01', icon: 'Search', title: 'Аудит и анализ клиники', text: 'За 3 дня разбираем услуги, цены, конкурентов, спрос и текущую конверсию. Находим точки роста и «дыры» в воронке.', time: '3–5 дней' },
  { n: '02', icon: 'Sparkles', title: 'Создание сильного предложения', text: 'Формируем офферы под дорогие направления, упаковываем услуги, прописываем сценарии коммуникации.', time: '5–7 дней' },
  { n: '03', icon: 'Rocket', title: 'Запуск привлечения', text: 'Настраиваем рекламные каналы, посадочные страницы, формы захвата и сквозную аналитику.', time: '7–10 дней' },
  { n: '04', icon: 'PhoneCall', title: 'Конвертация обращений', text: 'Скрипты, контроль администраторов, запись, возврат потерянных пациентов.', time: 'С первого дня' },
  { n: '05', icon: 'BarChart3', title: 'Масштабирование', text: 'Увеличиваем количество пациентов, загрузку кресел и средний чек. Ежемесячный отчёт с цифрами.', time: 'Ежемесячно' },
];

const COMPARE = [
  { metric: 'Источник пациентов', before: 'Сарафан и случайные', after: 'Управляемый поток первички' },
  { metric: 'Загрузка кресел', before: '40–55%', after: '80–95%' },
  { metric: 'Стоимость пациента', before: 'Неизвестна', after: 'Прозрачна и под контролем' },
  { metric: 'Средний чек', before: 'Дешёвые консультации', after: 'Имплантация и комплексное лечение' },
  { metric: 'Прогноз выручки', before: 'Невозможен', after: 'Чёткий план на 90 дней' },
  { metric: 'Зависимость от врача', before: 'Критическая', after: 'Минимальная — работает система' },
];

const CASES = [
  {
    city: 'Москва',
    type: 'Имплантология',
    metric: '+214%',
    metricLabel: 'рост записей на имплантацию',
    problem: 'Клиника тратила 180 000 ₽/мес на рекламу, получала 8–12 первичек в месяц. Врачи простаивали.',
    solution: 'Перестроили воронку под высокомаржинальные направления, внедрили скрипты для администраторов.',
    result: 'За 3 месяца: 37 первичек на имплантацию, загрузка кресел 92%, выручка +3.1 млн ₽.',
    extra: 'Загрузка 92%',
    period: '3 месяца',
  },
  {
    city: 'Казань',
    type: 'Сеть из 3 клиник',
    metric: '×2,7',
    metricLabel: 'рост выручки с кресла',
    problem: 'Сеть из 3 клиник не понимала, какая реклама работает. Бюджет сливался без контроля.',
    solution: 'Запустили сквозную аналитику, пересобрали рекламные кампании под каждую клинику отдельно.',
    result: 'CPL снижен на 38%, выручка с каждого кресла выросла в 2.7 раза. ROI рекламы — 470%.',
    extra: 'CPL снижен на 38%',
    period: '4 месяца',
  },
  {
    city: 'Екатеринбург',
    type: 'Ортодонтия',
    metric: '+1.4 млн',
    metricLabel: 'дополнительная выручка в месяц',
    problem: 'Стоматология специализировалась на ортодонтии, но большинство пациентов приходило на терапию.',
    solution: 'Создали отдельные посадочные под брекеты и элайнеры, настроили ретаргетинг на «думающих».',
    result: '120+ первичек на ортодонтию ежемесячно, +1.4 млн ₽ дополнительной выручки.',
    extra: '120+ первичек',
    period: '5 месяцев',
  },
];

const SERVICES = [
  { icon: 'Target', title: 'Лидогенерация', text: 'Настраиваем рекламу в Яндекс, VK и других каналах под дорогие направления вашей клиники.' },
  { icon: 'Layout', title: 'Упаковка и лендинги', text: 'Сильные офферы и страницы, которые превращают клик в заявку — не среднестатистические шаблоны.' },
  { icon: 'Headset', title: 'Отдел продаж и записи', text: 'Скрипты, прослушка звонков, контроль администраторов и возврат потерянных пациентов.' },
  { icon: 'PieChart', title: 'Сквозная аналитика', text: 'Видите путь каждого рубля от рекламы до лечения. Знаете, что работает, а что нет.' },
  { icon: 'Users', title: 'Работа с базой', text: 'Реактивация «спящих» пациентов и повторные продажи — деньги, которые уже ждут вас.' },
  { icon: 'GraduationCap', title: 'Обучение команды', text: 'Прокачиваем администраторов: как отвечать на «дорого», как записывать, как не терять пациентов.' },
];

const FAQ = [
  { q: 'Как быстро появятся результаты?', a: 'Первые заявки — в течение 14 дней после запуска. Стабильный поток выстраивается за 60–90 дней. На старте фиксируем KPI в договоре.' },
  { q: 'У нас уже есть маркетолог', a: 'Отлично. Работаем поверх текущей системы и усиливаем её — повышаем качество пациентов, находим точки роста, улучшаем конверсию воронки.' },
  { q: 'Реклама дорогая и не работает', a: 'Дорогая реклама — та, что не приносит пациентов. Важна не цена заявки, а стоимость пришедшего пациента и его среднего чека. Считаем именно это.' },
  { q: 'У нас хорошо работает сарафан', a: 'Сарафан — отличный канал. Но его нельзя масштабировать и планировать. Система нужна, чтобы вы управляли ростом, а не зависели от него.' },
  { q: 'Мы маленькая клиника, нам это подойдёт?', a: 'Да. Небольшой клинике система помогает быстрее выйти на загрузку. Начинаем с одного направления и наращиваем по результату.' },
  { q: 'Сколько стоят ваши услуги?', a: 'Стоимость зависит от клиники, города и задачи. Обсуждаем на аудите — после него вы получаете конкретный план и цифры.' },
];

const OBJECTIONS = [
  { q: 'У нас уже есть маркетолог', a: 'Отлично. Работаем поверх текущей системы и усиливаем её: качество пациентов, точки роста, конверсия.' },
  { q: 'У нас есть сарафан', a: 'Сарафан работает, пока есть поток рекомендаций. Система нужна, чтобы планировать рост.' },
  { q: 'Реклама дорогая', a: 'Дорогая реклама — та, что не приносит пациентов. Важна стоимость пациента и его лечения, а не цена заявки.' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openCase, setOpenCase] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 glass shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 font-display font-extrabold text-lg">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary text-white text-sm">П</span>
            <span>Перелидоз<span className="text-primary"> Дентал</span></span>
          </button>
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('contacts')} className="hidden lg:inline-flex rounded-lg font-semibold">
            Получить аудит
          </Button>
          <button className="lg:hidden" onClick={() => setMenuOpen((v) => !v)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden glass border-t border-border px-6 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left py-1.5 text-muted-foreground hover:text-foreground">
                {n.label}
              </button>
            ))}
            <Button onClick={() => scrollTo('contacts')} className="rounded-lg mt-2">Получить аудит</Button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative pt-32 pb-20 grid-bg">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url(${HERO_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />

        <div className="container relative">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 rounded-lg px-4 py-1.5 text-sm text-primary font-medium mb-7">
              <Icon name="Star" size={14} /> Специализируемся только на стоматологиях — с 2019 года
            </span>
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Система заполнения стоматологических кресел <span className="text-gradient animate-gradient">пациентами</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl">
              Не просто заявки — выстраиваем полную систему: от рекламы до записи и повторных продаж. Первые результаты — через 14 дней.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollTo('contacts')} size="lg" className="rounded-lg text-base font-semibold h-14 px-8">
                Получить бесплатный аудит клиники
              </Button>
              <Button onClick={() => scrollTo('cases')} size="lg" variant="outline" className="rounded-lg text-base px-8 h-14">
                Смотреть кейсы →
              </Button>
            </div>

            {/* HERO STATS */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl">
              {HERO_STATS.map((s) => (
                <div key={s.value} className="text-center">
                  <div className="font-display font-black text-3xl sm:text-4xl text-primary">{s.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FLOW */}
          <div className="mt-14 bg-white border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground mb-5 uppercase tracking-wider">Полная воронка под ключ — не отдельные услуги</p>
            <div className="flex flex-wrap items-center gap-y-5">
              {FLOW.map((f, i) => (
                <div key={f.label} className="flex items-center">
                  <div className="flex flex-col items-center gap-2 px-2 sm:px-3">
                    <div className="grid place-items-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                      <Icon name={f.icon} size={22} />
                    </div>
                    <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{f.label}</span>
                  </div>
                  {i < FLOW.length - 1 && <Icon name="ChevronRight" size={18} className="text-border mx-1 shrink-0" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-muted/30 py-5">
        <div className="container">
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center sm:justify-between">
            {TRUST_ITEMS.map((t) => (
              <div key={t.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name={t.icon} size={16} className="text-primary shrink-0" />
                {t.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAINS */}
      <section id="system" className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Проблема</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl mt-3 leading-tight">
                Клиника не должна зависеть от сарафана
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Владельцы стоматологий сталкиваются с одними и теми же проблемами. Мы знаем их наизусть — и знаем, как их решать.
              </p>
              <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/15">
                <p className="font-display font-bold text-lg">
                  Проблема не в отсутствии рекламы.
                </p>
                <p className="text-muted-foreground mt-1">Проблема — в отсутствии системы, которая превращает рекламу в деньги.</p>
              </div>
            </div>
            <div className="space-y-3">
              {PAINS.map((p) => (
                <div key={p.text} className="flex gap-3 items-start p-4 rounded-xl border border-border bg-white hover:border-destructive/30 transition-colors">
                  <div className="grid place-items-center w-8 h-8 rounded-lg bg-destructive/10 text-destructive shrink-0">
                    <Icon name={p.icon} size={16} />
                  </div>
                  <span className="text-sm pt-1">{p.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-muted/30 grid-bg">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Решение</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl mt-3">Что вы получаете с системой</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-7 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary text-white mb-5">
                  <Icon name={b.icon} size={22} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Процесс</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl mt-3">Как работает система</h2>
            <p className="mt-4 text-muted-foreground">5 этапов от аудита до предсказуемого потока пациентов.</p>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-white border border-border rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:border-primary/30 hover:shadow-sm transition-all">
                <span className="font-display font-black text-4xl text-primary/20 w-14 shrink-0">{s.n}</span>
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Icon name={s.icon} size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg">{s.title}</h3>
                  <p className="text-muted-foreground mt-1 text-sm">{s.text}</p>
                </div>
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-lg whitespace-nowrap">{s.time}</span>
              </div>
            ))}
          </div>

          {/* MID CTA */}
          <div className="mt-14 text-center">
            <p className="text-muted-foreground mb-4">Хотите увидеть, как это работает для вашей клиники?</p>
            <Button onClick={() => scrollTo('contacts')} size="lg" className="rounded-lg text-base font-semibold h-13 px-10">
              Получить бесплатный разбор клиники
            </Button>
          </div>
        </div>
      </section>

      {/* COMPARE TABLE */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Результат</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl mt-3">До и после Перелидоз Дентал</h2>
          </div>
          <div className="bg-white border border-border rounded-2xl overflow-hidden max-w-4xl mx-auto shadow-sm">
            <div className="grid grid-cols-3 bg-muted/50 font-display font-bold text-sm sm:text-base border-b border-border">
              <div className="p-4 sm:p-5 text-muted-foreground">Показатель</div>
              <div className="p-4 sm:p-5 text-center border-x border-border flex items-center justify-center gap-2 text-muted-foreground">
                <Icon name="TrendingDown" size={16} className="text-destructive" /> Было
              </div>
              <div className="p-4 sm:p-5 text-center text-primary flex items-center justify-center gap-2">
                <Icon name="TrendingUp" size={16} /> Стало
              </div>
            </div>
            {COMPARE.map((row, i) => (
              <div key={row.metric} className={`grid grid-cols-3 text-sm sm:text-base border-t border-border ${i % 2 ? 'bg-muted/20' : ''}`}>
                <div className="p-4 sm:p-5 font-medium">{row.metric}</div>
                <div className="p-4 sm:p-5 text-center text-muted-foreground border-x border-border">{row.before}</div>
                <div className="p-4 sm:p-5 text-center font-semibold text-primary">{row.after}</div>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-lg sm:text-xl font-display font-bold">
            Больше пациентов <span className="text-primary">×</span> выше конверсия <span className="text-primary">×</span> выше средний чек <span className="text-secondary">= рост выручки</span>
          </p>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-r from-primary/10 via-background to-secondary/10 border border-primary/20 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto text-center">
            <div className="grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white mx-auto mb-6">
              <Icon name="ShieldCheck" size={30} />
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl">Гарантия результата по договору</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
              Фиксируем KPI в договоре: количество обращений, стоимость пациента, загрузку кресел. Если не достигаем — возвращаем деньги или работаем бесплатно до результата.
            </p>
            <Button onClick={() => scrollTo('contacts')} size="lg" className="rounded-lg mt-8 font-semibold text-base h-13 px-10">
              Обсудить условия гарантии
            </Button>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-24 bg-muted/30 grid-bg">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Кейсы</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl mt-3">Цифры, а не обещания</h2>
            <p className="mt-3 text-muted-foreground">Реальные результаты клиник, которые уже работают с системой.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CASES.map((c, i) => (
              <div key={c.city} className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-7">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Icon name="MapPin" size={14} className="text-primary" /> {c.city} · {c.type}
                  </div>
                  <div className="font-display font-black text-5xl text-gradient">{c.metric}</div>
                  <p className="font-semibold mt-1">{c.metricLabel}</p>

                  <button
                    onClick={() => setOpenCase(openCase === i ? null : i)}
                    className="mt-4 text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    {openCase === i ? 'Скрыть историю' : 'Читать кейс →'}
                  </button>

                  {openCase === i && (
                    <div className="mt-4 space-y-3 text-sm border-t border-border pt-4">
                      <div>
                        <span className="font-semibold text-destructive">Проблема: </span>
                        <span className="text-muted-foreground">{c.problem}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-primary">Решение: </span>
                        <span className="text-muted-foreground">{c.solution}</span>
                      </div>
                      <div>
                        <span className="font-semibold">Результат: </span>
                        <span className="text-muted-foreground">{c.result}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="px-7 py-4 border-t border-border bg-muted/30 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Icon name="Clock" size={12} /> {c.period}
                  </span>
                  <span className="text-xs font-semibold text-primary flex items-center gap-1">
                    <Icon name="CheckCircle2" size={12} /> {c.extra}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Услуги</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl mt-3">Полный цикл под ключ</h2>
            <p className="mt-4 text-muted-foreground">Одно агентство — все задачи. Не нужно координировать 5 подрядчиков.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-white border border-border rounded-2xl p-7 hover:border-secondary/30 hover:shadow-md transition-all group">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary text-white mb-5">
                  <Icon name={s.icon} size={22} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-3xl">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Вопросы</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl mt-3">Часто задают</h2>
          </div>
          <div className="space-y-3">
            {FAQ.map((f, i) => (
              <div key={f.q} className="bg-white border border-border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left gap-4 hover:bg-muted/20 transition-colors"
                >
                  <span className="font-display font-semibold">{f.q}</span>
                  <Icon name={openFaq === i ? 'ChevronUp' : 'ChevronDown'} size={20} className="text-primary shrink-0" />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Контакты</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl mt-3 leading-tight">
                Узнайте, сколько пациентов может приносить ваше кресло
              </h2>
              <p className="mt-5 text-muted-foreground text-lg">
                Бесплатный аудит клиники: находим точки роста и составляем план загрузки на 90 дней.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="grid place-items-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Icon name="CheckCircle2" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Разбор текущей ситуации</p>
                    <p className="text-muted-foreground text-sm">Смотрим, что мешает росту прямо сейчас.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="grid place-items-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Icon name="CheckCircle2" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Расчёт потенциала клиники</p>
                    <p className="text-muted-foreground text-sm">Сколько пациентов можно добавить при текущем бюджете.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="grid place-items-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Icon name="CheckCircle2" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Конкретный план на 90 дней</p>
                    <p className="text-muted-foreground text-sm">Что делать, в какой последовательности, с какими результатами.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-3 text-sm">
                <a href="tel:+70000000000" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Icon name="Phone" size={18} className="text-primary" /> +7 (000) 000-00-00
                </a>
                <a href="mailto:hello@perelidoz.dental" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Icon name="Mail" size={18} className="text-primary" /> hello@perelidoz.dental
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Send" size={18} className="text-primary" /> @perelidoz_dental в Telegram
                </div>
              </div>
            </div>

            <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="font-display font-bold text-xl mb-6">Получить бесплатный аудит</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Имя</label>
                  <input className="w-full border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors bg-background" placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Телефон</label>
                  <input className="w-full border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors bg-background" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Название клиники и город</label>
                  <input className="w-full border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors bg-background" placeholder="Стоматология «Улыбка», Москва" />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-lg text-base font-semibold h-13">
                  Получить аудит — это бесплатно
                </Button>
                <p className="text-xs text-muted-foreground text-center">Ответим в течение 2 часов в рабочее время</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 bg-muted/20">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-display font-extrabold text-foreground">
            <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary text-white text-xs">П</span>
            Перелидоз Дентал
          </div>
          <p>Система превращения кресла в управляемый источник выручки.</p>
          <p>© {new Date().getFullYear()} Перелидоз Дентал</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
