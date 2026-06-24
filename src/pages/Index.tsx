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

const FLOW = [
  { icon: 'Megaphone', label: 'Реклама' },
  { icon: 'MousePointerClick', label: 'Обращение' },
  { icon: 'CalendarCheck', label: 'Запись' },
  { icon: 'DoorOpen', label: 'Приход' },
  { icon: 'HeartPulse', label: 'Лечение' },
  { icon: 'Repeat', label: 'Повторные' },
];

const PAINS = [
  'Реклама запускается, но непонятно, куда уходят деньги',
  'Заявки есть, а пациентов мало',
  'Люди спрашивают цену и исчезают',
  'Врачи простаивают',
  'Нет понимания, сколько вложить для миллиона оборота',
  'Рост зависит только от рекомендаций',
];

const BENEFITS = [
  { icon: 'Armchair', title: 'Заполняем кресла пациентами', text: 'Понимаем, сколько первички нужно привлечь для целевой загрузки врачей.' },
  { icon: 'Gem', title: 'Пациенты, которые покупают', text: 'Фокус на дорогих услугах: имплантация, протезирование, ортодонтия, эстетика.' },
  { icon: 'LineChart', title: 'Контроль маркетинга', text: 'Знаете стоимость обращения, записи и пациента — и какая реклама приносит деньги.' },
  { icon: 'TrendingUp', title: 'Рост прибыли без роста бюджета', text: 'За счёт упаковки, конверсии, работы с продажами и выбора прибыльных услуг.' },
  { icon: 'Cog', title: 'Клиника как система', text: 'Поток пациентов больше не зависит от одного «звёздного» врача.' },
  { icon: 'ShieldCheck', title: 'Прогнозируемость', text: 'План загрузки клиники на 90 дней вперёд вместо ожидания пациентов.' },
];

const STEPS = [
  { n: '01', icon: 'Search', title: 'Анализ клиники', text: 'Услуги, цены, конкуренты, спрос, текущая конверсия и экономика.' },
  { n: '02', icon: 'Sparkles', title: 'Создание предложения', text: 'Сильные офферы, упаковка услуг, сценарии коммуникации.' },
  { n: '03', icon: 'Rocket', title: 'Запуск привлечения', text: 'Рекламные каналы, посадочные страницы, формы захвата, аналитика.' },
  { n: '04', icon: 'PhoneCall', title: 'Конвертация обращений', text: 'Обработка звонков, запись, возврат пациентов, контроль администраторов.' },
  { n: '05', icon: 'BarChart3', title: 'Масштабирование', text: 'Растим число пациентов, загрузку кресел и средний чек.' },
];

const COMPARE = [
  { metric: 'Источник пациентов', before: 'Сарафан и случайные', after: 'Управляемый поток первички' },
  { metric: 'Загрузка кресел', before: '40–55%', after: '80–95%' },
  { metric: 'Стоимость пациента', before: 'Неизвестна', after: 'Прозрачна и под контролем' },
  { metric: 'Средний чек', before: 'Дешёвые консультации', after: 'Имплантация и комплексное лечение' },
  { metric: 'Прогноз выручки', before: 'Невозможен', after: 'План на 90 дней' },
  { metric: 'Зависимость от врача', before: 'Критическая', after: 'Минимальная — работает система' },
];

const CASES = [
  { city: 'Москва', type: 'Имплантология', metric: '+214%', desc: 'Рост записей на имплантацию за 3 месяца', extra: 'Загрузка 92%' },
  { city: 'Казань', type: 'Сеть из 3 клиник', metric: '×2,7', desc: 'Увеличение выручки с кресла', extra: 'CPL снижен на 38%' },
  { city: 'Екатеринбург', type: 'Ортодонтия', metric: '+1.4 млн', desc: 'Дополнительная выручка в месяц', extra: '120+ первичек' },
];

const SERVICES = [
  { icon: 'Target', title: 'Лидогенерация', text: 'Привлечение пациентов на дорогие направления через настроенные каналы.' },
  { icon: 'Layout', title: 'Упаковка и посадочные', text: 'Сильные офферы и страницы, которые превращают клик в обращение.' },
  { icon: 'Headset', title: 'Отдел продаж и записи', text: 'Скрипты, контроль администраторов и возврат пациентов.' },
  { icon: 'PieChart', title: 'Сквозная аналитика', text: 'Видите путь денег от рекламы до лечения и повторных продаж.' },
  { icon: 'Users', title: 'Работа с базой', text: 'Реактивация и повторные продажи существующим пациентам.' },
  { icon: 'GraduationCap', title: 'Обучение команды', text: 'Прокачиваем администраторов и менеджеров клиники.' },
];

const OBJECTIONS = [
  { q: 'У нас уже есть маркетолог', a: 'Отлично. Работаем поверх текущей системы и усиливаем её: качество пациентов, точки роста, конверсия.' },
  { q: 'У нас есть сарафан', a: 'Сарафан работает, пока есть поток рекомендаций. Система нужна, чтобы планировать рост.' },
  { q: 'Реклама дорогая', a: 'Дорогая реклама — та, что не приносит пациентов. Важна стоимость пациента и его лечения, а не цена заявки.' },
];

function useReveal() {
  return 'opacity-0 animate-fade-in';
}

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const reveal = useReveal();

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 glass">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 font-display font-extrabold text-lg">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary text-background">П</span>
            <span>Перелидоз<span className="text-primary"> Дентал</span></span>
          </button>
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('contacts')} className="hidden lg:inline-flex rounded-full font-semibold">
            Получить аудит
          </Button>
          <button className="lg:hidden" onClick={() => setMenuOpen((v) => !v)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden glass border-t border-border px-6 py-4 flex flex-col gap-3 animate-fade-in">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left py-1.5 text-muted-foreground hover:text-primary">
                {n.label}
              </button>
            ))}
            <Button onClick={() => scrollTo('contacts')} className="rounded-full mt-2">Получить аудит</Button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative pt-32 pb-24 grid-bg">
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${HERO_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
        <div className="absolute top-40 -right-20 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-pulse-glow" />

        <div className="container relative">
          <div className={`max-w-4xl ${reveal}`}>
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm text-primary mb-7">
              <Icon name="Activity" size={16} /> Система управляемой загрузки клиники
            </span>
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Заполняем стоматологические кресла <span className="text-gradient animate-gradient">пациентами</span> на дорогие услуги
            </h1>
            <p className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-2xl">
              Не просто приводим заявки. Выстраиваем систему, которая превращает рекламу в прогнозируемый поток пациентов и рост выручки с каждого кресла.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollTo('contacts')} size="lg" className="rounded-full text-base font-semibold glow h-14 px-8">
                Получить план загрузки на 90 дней
              </Button>
              <Button onClick={() => scrollTo('how')} size="lg" variant="outline" className="rounded-full text-base border-primary/30 hover:bg-primary/10 px-8">
                Как работает система
              </Button>
            </div>
          </div>

          {/* FLOW */}
          <div className={`mt-16 glass rounded-3xl p-6 sm:p-8 ${reveal}`} style={{ animationDelay: '0.2s' }}>
            <p className="text-sm text-muted-foreground mb-5">Реклама превращается в деньги по управляемой цепочке:</p>
            <div className="flex flex-wrap items-center gap-y-5">
              {FLOW.map((f, i) => (
                <div key={f.label} className="flex items-center">
                  <div className="flex flex-col items-center gap-2 px-2">
                    <div className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 text-primary">
                      <Icon name={f.icon} size={24} />
                    </div>
                    <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{f.label}</span>
                  </div>
                  {i < FLOW.length - 1 && <Icon name="ChevronRight" size={20} className="text-primary/50 mx-1" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAINS / О системе */}
      <section id="system" className="py-24 relative">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl leading-tight">
              Клиника не должна зависеть от сарафана и случайных пациентов
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Настраиваем систему привлечения и записи пациентов, чтобы врачи были загружены, кресла работали, а выручка стала прогнозируемой.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {PAINS.map((p) => (
              <div key={p} className="glass rounded-2xl p-5 flex gap-3 items-start hover:border-destructive/30 transition-colors">
                <Icon name="X" size={20} className="text-destructive shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{p}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 glass rounded-3xl p-8 border-primary/20 glow text-center max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl font-display font-bold">
              Проблема не в отсутствии рекламы.<br />
              <span className="text-gradient">Проблема в отсутствии системы превращения рекламы в деньги.</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
            {BENEFITS.map((b) => (
              <div key={b.title} className="glass rounded-3xl p-7 hover:-translate-y-1.5 transition-transform duration-300 group">
                <div className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary text-background mb-5 group-hover:glow transition-all">
                  <Icon name={b.icon} size={26} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW / Как работает */}
      <section id="how" className="py-24 relative grid-bg bg-muted/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Механизм</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl mt-3">Как работает система</h2>
            <p className="mt-4 text-muted-foreground">5 этапов от анализа клиники до масштабирования выручки.</p>
          </div>
          <div className="space-y-4">
            {STEPS.map((s) => (
              <div key={s.n} className="glass rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:border-primary/30 transition-colors">
                <span className="font-display font-black text-5xl text-primary/30">{s.n}</span>
                <div className="grid place-items-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 text-primary shrink-0">
                  <Icon name={s.icon} size={26} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl">{s.title}</h3>
                  <p className="text-muted-foreground mt-1">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE TABLE */}
      <section className="py-24 relative">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Результат</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl mt-3">До и после внедрения Перелидоз</h2>
          </div>
          <div className="glass rounded-3xl overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-3 bg-gradient-to-r from-primary/10 to-secondary/10 font-display font-bold text-sm sm:text-base">
              <div className="p-4 sm:p-5">Показатель</div>
              <div className="p-4 sm:p-5 text-center text-muted-foreground border-x border-border flex items-center justify-center gap-2">
                <Icon name="TrendingDown" size={18} /> Было
              </div>
              <div className="p-4 sm:p-5 text-center text-primary flex items-center justify-center gap-2">
                <Icon name="TrendingUp" size={18} /> Стало
              </div>
            </div>
            {COMPARE.map((row, i) => (
              <div key={row.metric} className={`grid grid-cols-3 text-sm sm:text-base border-t border-border ${i % 2 ? 'bg-card/30' : ''}`}>
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

      {/* CASES */}
      <section id="cases" className="py-24 relative grid-bg bg-muted/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Кейсы</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl mt-3">Цифры, а не обещания</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CASES.map((c) => (
              <div key={c.city} className="glass rounded-3xl p-8 hover:-translate-y-1.5 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Icon name="MapPin" size={16} className="text-primary" /> {c.city} · {c.type}
                </div>
                <div className="font-display font-black text-5xl text-gradient">{c.metric}</div>
                <p className="mt-3 text-muted-foreground">{c.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-sm text-primary">
                  <Icon name="CheckCircle2" size={15} /> {c.extra}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-5">
            {OBJECTIONS.map((o) => (
              <div key={o.q} className="glass rounded-3xl p-7">
                <div className="flex items-center gap-2 font-display font-bold mb-3">
                  <Icon name="MessageCircleQuestion" size={20} className="text-secondary" /> «{o.q}»
                </div>
                <p className="text-sm text-muted-foreground">{o.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 relative">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Услуги</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl mt-3">Полный цикл загрузки клиники</h2>
            <p className="mt-4 text-muted-foreground">Мы не продаём маркетинг. Мы продаём предсказуемую загрузку клиники.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="glass rounded-3xl p-7 group hover:border-secondary/30 transition-colors">
                <div className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-primary text-background mb-5 group-hover:glow-purple transition-all">
                  <Icon name={s.icon} size={26} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 relative">
        <div className="container">
          <div className="glass rounded-[2.5rem] p-8 sm:p-14 relative overflow-hidden glow max-w-5xl mx-auto">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-secondary/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl leading-tight">
                  Узнайте, сколько пациентов может приносить <span className="text-gradient">ваше кресло</span>
                </h2>
                <p className="mt-5 text-muted-foreground text-lg">
                  Получите аудит точек роста клиники и план загрузки на ближайшие 90 дней.
                </p>
                <div className="mt-8 space-y-3 text-sm">
                  <a href="tel:+70000000000" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Icon name="Phone" size={20} className="text-primary" /> +7 (000) 000-00-00
                  </a>
                  <a href="mailto:hello@perelidoz.dental" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Icon name="Mail" size={20} className="text-primary" /> hello@perelidoz.dental
                  </a>
                  <div className="flex items-center gap-3">
                    <Icon name="Send" size={20} className="text-primary" /> @perelidoz_dental
                  </div>
                </div>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input className="w-full glass rounded-2xl px-5 py-3.5 outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground" placeholder="Имя" />
                <input className="w-full glass rounded-2xl px-5 py-3.5 outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground" placeholder="Телефон" />
                <input className="w-full glass rounded-2xl px-5 py-3.5 outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground" placeholder="Название клиники и город" />
                <Button type="submit" size="lg" className="w-full rounded-2xl text-base font-semibold glow h-14">
                  Получить аудит точек роста
                </Button>
                <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь с обработкой данных.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-display font-extrabold text-foreground">
            <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary text-background">П</span>
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