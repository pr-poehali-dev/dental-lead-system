import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

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

interface SystemSectionProps {
  scrollTo: (id: string) => void;
}

const SystemSection = ({ scrollTo }: SystemSectionProps) => {
  return (
    <>
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
    </>
  );
};

export default SystemSection;
