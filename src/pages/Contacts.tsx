import Navigation from '@/components/Navigation';
import Logo from '@/components/Logo';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const stores = [
    {
      id: 1,
      name: 'HEISENBERG Центр',
      address: 'ул. Ленина, 42',
      phone: '+7 (999) 123-45-67',
      hours: '10:00 - 22:00'
    },
    {
      id: 2,
      name: 'HEISENBERG Север',
      address: 'пр. Мира, 15',
      phone: '+7 (999) 123-45-68',
      hours: '10:00 - 22:00'
    },
    {
      id: 3,
      name: 'HEISENBERG Запад',
      address: 'ул. Победы, 88',
      phone: '+7 (999) 123-45-69',
      hours: '10:00 - 21:00'
    }
  ];

  const socialLinks = [
    { icon: 'Instagram', label: '@heisenberg_vape', link: '#' },
    { icon: 'MessageCircle', label: 'Telegram', link: '#' },
    { icon: 'Phone', label: '+7 (999) 123-45-67', link: 'tel:+79991234567' }
  ];

  return (
    <div className="min-h-screen pb-20 bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-screen-sm mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <div>
              <h1 className="text-xl font-bold text-primary tracking-wide">КОНТАКТЫ</h1>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                Наши магазины
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-screen-sm mx-auto px-4 py-6">
        <section className="mb-6">
          <Card className="bg-card border-border overflow-hidden">
            <div className="bg-secondary/30 h-48 flex items-center justify-center border-b border-border">
              <Icon name="MapPin" size={64} className="text-primary" />
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground text-center">
                Интерактивная карта с расположением магазинов
              </p>
            </div>
          </Card>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold mb-4">Наши магазины</h2>
          <div className="space-y-3">
            {stores.map((store) => (
              <Card key={store.id} className="bg-card border-border p-4 hover:border-primary/50 transition-all duration-300 group card">
                <h3 className="font-bold text-foreground mb-3">{store.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={16} className="text-primary mt-0.5" />
                    <span className="text-sm text-foreground">{store.address}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={16} className="text-primary mt-0.5" />
                    <a href={`tel:${store.phone.replace(/\D/g, '')}`} className="text-sm text-foreground hover:text-primary">
                      {store.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={16} className="text-primary mt-0.5" />
                    <span className="text-sm text-foreground">{store.hours}</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold"
                >
                  Показать на карте
                  <Icon name="Navigation" size={14} className="ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold mb-4">Связаться с нами</h2>
          <div className="space-y-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="flex items-center gap-4 bg-card border border-border p-4 rounded-lg hover:border-primary/50 transition-all duration-300 group card"
              >
                <div className="bg-primary/10 p-3 rounded">
                  <Icon name={social.icon as any} size={20} className="text-primary" />
                </div>
                <span className="text-foreground font-medium">{social.label}</span>
              </a>
            ))}
          </div>
        </section>

        <section>
          <Card className="relative bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-6 overflow-hidden">
            <div className="relative z-10 text-center">
              <Icon name="Briefcase" size={40} className="text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Работа у нас</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Мы всегда ищем талантливых людей в нашу команду
              </p>
              <a href="/careers">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                  Вакансии
                  <Icon name="ArrowRight" size={14} className="ml-2" />
                </Button>
              </a>
            </div>
            <div className="absolute bottom-2 right-4 text-7xl font-bold text-primary/5 select-none">
              H
            </div>
            <div className="absolute top-2 left-4 text-5xl font-bold text-primary/5 select-none">
              N
            </div>
          </Card>
        </section>
      </main>

      <Navigation />
    </div>
  );
};

export default Contacts;