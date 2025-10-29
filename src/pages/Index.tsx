import Navigation from '@/components/Navigation';
import Logo from '@/components/Logo';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const categories = [
    { icon: 'Cigarette', name: 'POD-системы' },
    { icon: 'Droplet', name: 'Жидкости' },
    { icon: 'Wind', name: 'Кальяны' },
    { icon: 'Sparkles', name: 'Аксессуары' }
  ];

  const benefits = [
    { icon: 'Star', title: 'Только оригинальная продукция', description: 'Гарантия подлинности каждого товара' },
    { icon: 'Rocket', title: 'Новинки первыми', description: 'Эксклюзивные поступления' },
    { icon: 'ShieldCheck', title: 'Гарантия качества', description: 'Проверено и сертифицировано' },
    { icon: 'Users', title: 'Дружелюбный сервис', description: 'Консультация экспертов' }
  ];

  const blogPosts = [
    { title: 'Как выбрать свой первый вейп', category: 'Для новичков', time: '5 мин' },
    { title: 'Топ-10 жидкостей 2024 года', category: 'Обзоры', time: '7 мин' },
    { title: 'Уход за POD-системой', category: 'Гайды', time: '4 мин' }
  ];

  return (
    <div className="min-h-screen pb-20 bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-40 backdrop-blur-sm bg-card/95">
        <div className="max-w-screen-sm mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group transition-opacity">
              <Logo size="md" />
              <div>
                <h1 className="text-2xl font-bold text-primary tracking-wide transition-all duration-300" style={{textShadow: 'var(--neon-shadow, 0 0 0px transparent)'}}>HEISENBERG</h1>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Калининград</p>
              </div>
            </Link>
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-screen-sm mx-auto px-4 py-6">
        <section className="mb-10 animate-fade-in">
          <div className="relative bg-gradient-to-br from-secondary via-card to-secondary rounded-lg overflow-hidden border border-primary/30 shadow-lg">
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://cdn.poehali.dev/projects/c2376571-b511-441f-971f-1de993cc46c9/files/240614a6-6bbb-4f7f-a004-30d13a527c5f.jpg" 
                alt="Heisenberg" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent"></div>
            </div>
            <div className="relative z-10 p-6">
              <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-bold mb-3 uppercase tracking-wider">
                99.1% КАЧЕСТВО
              </div>
              <h2 className="text-3xl font-bold mb-3 text-primary leading-tight">
                HEISENBERG — ТЕРРИТОРИЯ НАСТОЯЩЕГО ВКУСА
              </h2>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Официальная сеть вейпшопов в Калининграде. Широкий выбор устройств, жидкостей и аксессуаров для тех, кто ценит качество.
              </p>
              <div className="flex gap-3">
                <Link to="/catalog" className="flex-1">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold transition-all duration-300 hover:scale-105" style={{'--tw-shadow': '0 0 0px transparent'} as any}>
                    Смотреть каталог
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/contacts" className="flex-1">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold transition-all duration-300 hover:scale-105">
                    Наши магазины
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 text-9xl font-bold text-primary/5 select-none animate-float">
              CH₃
            </div>
            <div className="absolute bottom-4 left-4 text-5xl font-bold text-primary/5 select-none animate-pulse-slow">
              C₁₀H₁₅N
            </div>
            <div className="absolute top-1/2 right-8 text-6xl font-bold text-primary/5 select-none rotate-12 animate-float" style={{ animationDelay: '1s' }}>
              Br
            </div>
          </div>
        </section>

        <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="relative bg-gradient-to-br from-primary/10 via-card to-secondary/50 rounded-lg overflow-hidden p-6 border border-primary/20 mb-10">
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2 text-foreground">О бренде HEISENBERG</h2>
                  <p className="text-xs text-primary uppercase tracking-wider font-bold">История качества</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-primary font-bold">HEISENBERG</span> — это не просто вейпшоп. Это философия безупречного качества и внимания к деталям, вдохновлённая культовым сериалом.
                </p>
                <p>
                  Мы начали в 2018 году с одного магазина в центре Калининграда. Наша миссия была проста: предлагать только <span className="text-foreground font-bold">99.1% качественную продукцию</span>, где каждый товар проверен и сертифицирован.
                </p>
                <p>
                  Сегодня HEISENBERG — это сеть из <span className="text-foreground font-bold">десятков точек</span> по всему городу, тысячи довольных клиентов и репутация лучшего вейпшопа Калининграда. Мы работаем только с проверенными брендами и первыми привозим новинки индустрии.
                </p>
                <div className="flex gap-2 pt-2">
                  <div className="bg-primary/20 px-3 py-2 rounded text-primary font-bold text-xs">
                    С 2018 года
                  </div>
                  <div className="bg-primary/20 px-3 py-2 rounded text-primary font-bold text-xs">
                    10+ магазинов
                  </div>
                  <div className="bg-primary/20 px-3 py-2 rounded text-primary font-bold text-xs">
                    5000+ клиентов
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 right-4 text-8xl font-bold text-primary/5 select-none animate-pulse-slow">
              H
            </div>
            <div className="absolute top-2 left-1/2 text-5xl font-bold text-primary/5 select-none animate-float">
              Br
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-foreground">Широкий ассортимент</h2>
          <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
            От POD-систем и кальянов до премиальных жидкостей и аксессуаров — всё в одном месте. Только проверенные бренды и новинки.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            {categories.map((cat, idx) => (
              <Card
                key={idx}
                className="bg-card border-border p-4 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer animate-scale-in group"
                style={{ animationDelay: `${0.1 + idx * 0.1}s`, boxShadow: 'var(--card-shadow, 0 0 0px transparent)' } as any}
              >
                <div className="bg-primary/10 p-3 rounded w-fit mb-3 transition-all duration-300 group-hover:rotate-6" style={{boxShadow: 'var(--icon-shadow, 0 0 0px transparent)'} as any}>
                  <Icon name={cat.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-sm text-foreground">{cat.name}</h3>
              </Card>
            ))}
          </div>
          <Link to="/catalog">
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold transition-all duration-300 hover:scale-105">
              Смотреть весь каталог
              <Icon name="ExternalLink" size={16} className="ml-2" />
            </Button>
          </Link>
        </section>

        <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-bold mb-4 text-foreground">Наши магазины рядом с вами</h2>
          <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
            Мы уже в десятках районов города. Найдите ближайший HEISENBERG на интерактивной карте и заходите за новыми вкусами.
          </p>
          <Link to="/contacts">
            <Card className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer">
              <div className="relative bg-secondary/30 h-48 flex items-center justify-center border-b border-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Icon name="MapPin" size={64} className="text-primary transition-transform group-hover:scale-110 group-hover:animate-float" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-foreground">Посмотреть на карте</span>
                  <Icon name="ArrowRight" size={20} className="text-primary transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Card>
          </Link>
        </section>

        <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl font-bold mb-4 text-foreground">Почему HEISENBERG</h2>
          <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
            Мы объединяем опыт, качество и сервис. Покупая у нас, вы получаете не только товар, но и уверенность в его оригинальности.
          </p>
          <div className="grid grid-cols-1 gap-3">
            {benefits.map((benefit, idx) => (
              <Card
                key={idx}
                className="bg-card border-border p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-scale-in group"
                style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-3 rounded transition-transform group-hover:scale-110 group-hover:rotate-6">
                    <Icon name={benefit.icon as any} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1 text-foreground">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative bg-gradient-to-br from-primary/20 via-card to-secondary rounded-lg overflow-hidden p-6 border border-primary/30 shadow-lg">
            <div className="relative z-10">
              <Icon name="Briefcase" size={40} className="text-primary mb-3" />
              <h2 className="text-2xl font-bold mb-3 text-foreground">Работа в HEISENBERG</h2>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Мы всегда ищем энергичных и целеустремлённых ребят. Гибкий график, официальное оформление и карьерный рост.
              </p>
              <Link to="/careers">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold transition-transform hover:scale-105">
                  Заполнить анкету
                  <Icon name="Send" size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="absolute bottom-2 right-4 text-7xl font-bold text-primary/5 select-none animate-pulse-slow">
              H
            </div>
            <div className="absolute top-2 left-20 text-5xl font-bold text-primary/5 select-none animate-float">
              N
            </div>
          </div>
        </section>

        <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl font-bold mb-4 text-foreground">Блог HEISENBERG</h2>
          <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
            Полезные статьи о вейпах, новинках и культуре. Советы для новичков и гайды для опытных.
          </p>
          <div className="space-y-3 mb-5">
            {blogPosts.map((post, idx) => (
              <Card
                key={idx}
                className="bg-card border-border p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer group animate-scale-in"
                style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded font-medium">{post.category}</span>
                      <span className="text-xs text-muted-foreground">{post.time}</span>
                    </div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-primary transition-transform group-hover:translate-x-2" />
                </div>
              </Card>
            ))}
          </div>
          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold transition-transform hover:scale-105">
            Читать все статьи
            <Icon name="BookOpen" size={16} className="ml-2" />
          </Button>
        </section>

        <section className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="relative bg-gradient-to-br from-secondary via-card to-secondary rounded-lg overflow-hidden p-6 border border-primary/20 text-center">
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-3 text-foreground">Оставайтесь на связи</h2>
              <p className="text-sm text-muted-foreground mb-5">
                Подписывайтесь на наши соцсети, чтобы быть в курсе акций и новых поступлений.
              </p>
              <div className="flex gap-3 justify-center">
                <a href="#" className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-all hover:scale-110">
                  <Icon name="Instagram" size={24} className="text-primary" />
                </a>
                <a href="#" className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-all hover:scale-110">
                  <Icon name="MessageCircle" size={24} className="text-primary" />
                </a>
                <a href="tel:+79991234567" className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-all hover:scale-110">
                  <Icon name="Phone" size={24} className="text-primary" />
                </a>
              </div>
            </div>
            <div className="absolute top-2 right-4 text-6xl font-bold text-primary/5 select-none animate-float">
              Br
            </div>
          </div>
        </section>
      </main>

      <Navigation />
    </div>
  );
};

export default Index;