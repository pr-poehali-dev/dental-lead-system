import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG = 'https://cdn.poehali.dev/projects/2b557ac8-e25e-441b-8f01-35907600e13a/files/5bb2e15e-6060-4b07-867b-15847c863ee7.jpg';

const NAV = [
  { id: 'hero', label: 'Главная' },
  { id: 'system', label: 'О системе' },
  { id: 'how', label: 'Как работает' },
  { id: 'cases', label: 'Кейсы' },
  { id: 'services', label: 'Услуги' },
  { id: 'contacts', label: 'Контакты' },
];

const STATS = [
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

const TRUST = [
  { icon: 'Award', text: 'Работаем только со стоматологиями' },
  { icon: 'ShieldCheck', text: 'Гарантия результата по договору' },
  { icon: 'Clock', text: 'Первые заявки — в течение 14 дней' },
  { icon: 'BarChart2', text: 'Прозрачная аналитика в реальном времени' },
  { icon: 'Users', text: '87+ клиник по всей России' },
  { icon: 'Star', text: 'Средний NPS клиентов — 9.1 из 10' },
];

interface Props {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  scrollTo: (id: string) => void;
}

const HeroSection = ({ menuOpen, setMenuOpen, scrollTo }: Props) => (
  <>
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
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
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
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl">
            {STATS.map((s) => (
              <div key={s.value} className="text-center">
                <div className="font-display font-black text-3xl sm:text-4xl text-primary">{s.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

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

    <section className="border-y border-border bg-muted/30 py-5">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-3">
          {TRUST.map((t) => (
            <div key={t.text} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name={t.icon} size={16} className="text-primary shrink-0" />
              <span>{t.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default HeroSection;
