import { useState } from 'react';
import Icon from '@/components/ui/icon';

const CASES = [
  {
    city: 'Москва', type: 'Имплантология', metric: '+214%', metricLabel: 'рост записей на имплантацию',
    problem: 'Клиника тратила 180 000 ₽/мес на рекламу, получала 8–12 первичек в месяц. Врачи простаивали.',
    solution: 'Перестроили воронку под высокомаржинальные направления, внедрили скрипты для администраторов.',
    result: 'За 3 месяца: 37 первичек на имплантацию, загрузка кресел 92%, выручка +3.1 млн ₽.',
    extra: 'Загрузка 92%', period: '3 месяца',
  },
  {
    city: 'Казань', type: 'Сеть из 3 клиник', metric: '×2,7', metricLabel: 'рост выручки с кресла',
    problem: 'Сеть из 3 клиник не понимала, какая реклама работает. Бюджет сливался без контроля.',
    solution: 'Запустили сквозную аналитику, пересобрали рекламные кампании под каждую клинику отдельно.',
    result: 'CPL снижен на 38%, выручка с каждого кресла выросла в 2.7 раза. ROI рекламы — 470%.',
    extra: 'CPL снижен на 38%', period: '4 месяца',
  },
  {
    city: 'Екатеринбург', type: 'Ортодонтия', metric: '+1.4 млн', metricLabel: 'дополнительная выручка в месяц',
    problem: 'Стоматология специализировалась на ортодонтии, но большинство пациентов приходило на терапию.',
    solution: 'Создали отдельные посадочные под брекеты и элайнеры, настроили ретаргетинг на «думающих».',
    result: '120+ первичек на ортодонтию ежемесячно, +1.4 млн ₽ дополнительной выручки.',
    extra: '120+ первичек', period: '5 месяцев',
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

const SectionLabel = ({ text, color = 'text-primary' }: { text: string; color?: string }) => (
  <span className={`${color} font-semibold text-sm uppercase tracking-widest`}>{text}</span>
);

const CasesSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openCase, setOpenCase] = useState<number | null>(null);

  return (
    <>
      <section id="cases" className="py-24 bg-muted/30 grid-bg">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel text="Кейсы" />
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
                      {[
                        { label: 'Проблема', color: 'text-destructive', value: c.problem },
                        { label: 'Решение', color: 'text-primary', value: c.solution },
                        { label: 'Результат', color: '', value: c.result },
                      ].map(({ label, color, value }) => (
                        <div key={label}>
                          <span className={`font-semibold ${color}`}>{label}: </span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      ))}
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

      <section id="services" className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel text="Услуги" color="text-secondary" />
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl mt-3">Полный цикл под ключ</h2>
            <p className="mt-4 text-muted-foreground">Одно агентство — все задачи. Не нужно координировать 5 подрядчиков.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-white border border-border rounded-2xl p-7 hover:border-secondary/30 hover:shadow-md transition-all">
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

      <section className="py-24 bg-muted/30">
        <div className="container max-w-3xl">
          <div className="text-center mb-14">
            <SectionLabel text="Вопросы" />
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
    </>
  );
};

export default CasesSection;
