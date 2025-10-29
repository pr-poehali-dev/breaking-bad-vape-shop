import Navigation from '@/components/Navigation';
import Logo from '@/components/Logo';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Careers = () => {
  const vacancies = [
    {
      id: 1,
      title: 'Продавец-консультант',
      location: 'HEISENBERG Центр',
      salary: 'от 50 000 ₽',
      type: 'Полная занятость',
      requirements: [
        'Опыт работы в продажах от 1 года',
        'Коммуникабельность',
        'Знание продукции (обучение на месте)'
      ],
      hot: true
    },
    {
      id: 2,
      title: 'Управляющий магазином',
      location: 'HEISENBERG Север',
      salary: 'от 80 000 ₽',
      type: 'Полная занятость',
      requirements: [
        'Опыт управления командой от 2 лет',
        'Знание ассортимента вейп-продукции',
        'Ответственность и пунктуальность'
      ],
      hot: true
    },
    {
      id: 3,
      title: 'Кассир',
      location: 'HEISENBERG Запад',
      salary: 'от 40 000 ₽',
      type: 'Полная/Частичная',
      requirements: [
        'Внимательность к деталям',
        'Опыт работы с кассой приветствуется',
        'Приятная внешность'
      ],
      hot: false
    }
  ];

  const benefits = [
    { icon: 'Wallet', title: 'Высокая зарплата', description: 'Достойная оплата труда + премии' },
    { icon: 'TrendingUp', title: 'Карьерный рост', description: 'Быстрое продвижение по карьерной лестнице' },
    { icon: 'GraduationCap', title: 'Обучение', description: 'Полное обучение продукции за наш счет' },
    { icon: 'Calendar', title: 'Гибкий график', description: 'Удобное расписание смен' }
  ];

  return (
    <div className="min-h-screen pb-20 bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-40 backdrop-blur-sm bg-card/95">
        <div className="max-w-screen-sm mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <div>
              <h1 className="text-xl font-bold text-primary tracking-wide">КАРЬЕРА</h1>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                Присоединяйся к команде
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-screen-sm mx-auto px-4 py-6">
        <section className="mb-8">
          <div className="relative bg-gradient-to-br from-primary/20 via-card to-secondary rounded-lg overflow-hidden p-6 border border-primary/30">
            <div className="relative z-10">
              <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-bold mb-3 uppercase tracking-wider">
                99.1% УСПЕХА
              </div>
              <h2 className="text-2xl font-bold mb-2 text-foreground">
                СТАНЬ ЧАСТЬЮ HEISENBERG
              </h2>
              <p className="text-sm text-muted-foreground mb-4 max-w-xs">
                Мы создаем лучшую команду профессионалов в индустрии
              </p>
            </div>
            <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5 select-none">
              C₁₀H₁₅N
            </div>
            <div className="absolute bottom-2 left-4 text-6xl font-bold text-primary/5 select-none">
              H
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4">Почему мы?</h2>
          <div className="grid grid-cols-2 gap-3">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card border-border p-4">
                <div className="bg-primary/10 p-3 rounded w-fit mb-3">
                  <Icon name={benefit.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-sm mb-1 text-foreground">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Открытые вакансии</h2>
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              {vacancies.length}
            </Badge>
          </div>
          <div className="space-y-4">
            {vacancies.map((vacancy) => (
              <Card key={vacancy.id} className="bg-card border-border overflow-hidden">
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-foreground">{vacancy.title}</h3>
                        {vacancy.hot && (
                          <Badge className="bg-primary text-primary-foreground text-xs">
                            HOT
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                        <Icon name="MapPin" size={12} />
                        <span>{vacancy.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon name="Briefcase" size={12} />
                        <span>{vacancy.type}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-primary font-bold text-sm">{vacancy.salary}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-xs font-bold text-foreground mb-2">Требования:</p>
                    <ul className="space-y-1">
                      {vacancy.requirements.map((req, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                    Откликнуться
                    <Icon name="Send" size={14} className="ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <Card className="bg-gradient-to-br from-secondary via-card to-secondary border-primary/20 p-6">
            <div className="relative z-10">
              <Icon name="Mail" size={40} className="text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-2">Не нашли подходящую вакансию?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Отправьте нам свое резюме, и мы свяжемся с вами при появлении подходящих позиций
              </p>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold">
                Отправить резюме
                <Icon name="Paperclip" size={14} className="ml-2" />
              </Button>
            </div>
            <div className="absolute bottom-2 right-4 text-7xl font-bold text-primary/5 select-none">
              Br
            </div>
          </Card>
        </section>
      </main>

      <Navigation />
    </div>
  );
};

export default Careers;