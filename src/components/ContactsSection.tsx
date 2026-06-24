import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const AUDIT_POINTS = [
  { title: 'Разбор текущей ситуации', text: 'Смотрим, что мешает росту прямо сейчас.' },
  { title: 'Расчёт потенциала клиники', text: 'Сколько пациентов можно добавить при текущем бюджете.' },
  { title: 'Конкретный план на 90 дней', text: 'Что делать, в какой последовательности, с какими результатами.' },
];

const CONTACTS = [
  { icon: 'Phone', href: 'tel:+70000000000', label: '+7 (000) 000-00-00' },
  { icon: 'Mail', href: 'mailto:hello@perelidoz.dental', label: 'hello@perelidoz.dental' },
  { icon: 'Send', href: undefined, label: '@perelidoz_dental в Telegram' },
];

const FIELDS = [
  { label: 'Имя', placeholder: 'Иван Иванов' },
  { label: 'Телефон', placeholder: '+7 (___) ___-__-__' },
  { label: 'Название клиники и город', placeholder: 'Стоматология «Улыбка», Москва' },
];

interface Props { scrollTo: (id: string) => void }

const ContactsSection = ({ scrollTo }: Props) => (
  <>
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
              {AUDIT_POINTS.map((p) => (
                <div key={p.title} className="flex items-start gap-3">
                  <div className="grid place-items-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Icon name="CheckCircle2" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{p.title}</p>
                    <p className="text-muted-foreground text-sm">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-3 text-sm">
              {CONTACTS.map((c) =>
                c.href ? (
                  <a key={c.label} href={c.href} className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Icon name={c.icon} size={18} className="text-primary" /> {c.label}
                  </a>
                ) : (
                  <div key={c.label} className="flex items-center gap-3 text-muted-foreground">
                    <Icon name={c.icon} size={18} className="text-primary" /> {c.label}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
            <h3 className="font-display font-bold text-xl mb-6">Получить бесплатный аудит</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {FIELDS.map((f) => (
                <div key={f.label}>
                  <label className="text-sm font-medium mb-1.5 block">{f.label}</label>
                  <input
                    className="w-full border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors bg-background"
                    placeholder={f.placeholder}
                  />
                </div>
              ))}
              <Button type="submit" size="lg" className="w-full rounded-lg text-base font-semibold h-13">
                Получить аудит — это бесплатно
              </Button>
              <p className="text-xs text-muted-foreground text-center">Ответим в течение 2 часов в рабочее время</p>
            </form>
          </div>
        </div>
      </div>
    </section>

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
  </>
);

export default ContactsSection;
