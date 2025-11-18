import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Logo from '@/components/Logo';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';

const Contacts = () => {
  const [selectedCity, setSelectedCity] = useState<string>('Все города');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const cities = [
    'Все города',
    'Калининград',
    'Москва',
    'Санкт-Петербург',
    'Казань',
    'Нижний Новгород',
    'Екатеринбург',
    'Новосибирск',
    'Краснодар'
  ];

  const stores = [
    {
      id: 1,
      city: 'Калининград',
      name: 'HEISENBERG Центр',
      address: 'ул. Ленина, 42',
      phone: '+7 (999) 123-45-67',
      hours: '10:00 - 22:00',
      metro: null
    },
    {
      id: 2,
      city: 'Калининград',
      name: 'HEISENBERG Север',
      address: 'пр. Мира, 15',
      phone: '+7 (999) 123-45-68',
      hours: '10:00 - 22:00',
      metro: null
    },
    {
      id: 3,
      city: 'Калининград',
      name: 'HEISENBERG Запад',
      address: 'ул. Победы, 88',
      phone: '+7 (999) 123-45-69',
      hours: '10:00 - 21:00',
      metro: null
    },
    {
      id: 4,
      city: 'Москва',
      name: 'HEISENBERG Арбат',
      address: 'ул. Арбат, 10',
      phone: '+7 (495) 123-45-67',
      hours: '09:00 - 23:00',
      metro: 'Арбатская'
    },
    {
      id: 5,
      city: 'Москва',
      name: 'HEISENBERG Тверская',
      address: 'ул. Тверская, 25',
      phone: '+7 (495) 123-45-68',
      hours: '09:00 - 23:00',
      metro: 'Тверская'
    },
    {
      id: 6,
      city: 'Москва',
      name: 'HEISENBERG Красная Пресня',
      address: 'ул. Красная Пресня, 5',
      phone: '+7 (495) 123-45-69',
      hours: '10:00 - 22:00',
      metro: 'Краснопресненская'
    },
    {
      id: 7,
      city: 'Москва',
      name: 'HEISENBERG Китай-Город',
      address: 'Маросейка, 12',
      phone: '+7 (495) 123-45-70',
      hours: '10:00 - 22:00',
      metro: 'Китай-город'
    },
    {
      id: 8,
      city: 'Москва',
      name: 'HEISENBERG Парк Культуры',
      address: 'ул. Зубовский бул., 2',
      phone: '+7 (495) 123-45-71',
      hours: '10:00 - 22:00',
      metro: 'Парк культуры'
    },
    {
      id: 9,
      city: 'Санкт-Петербург',
      name: 'HEISENBERG Невский',
      address: 'Невский пр., 45',
      phone: '+7 (812) 123-45-67',
      hours: '10:00 - 23:00',
      metro: 'Гостиный двор'
    },
    {
      id: 10,
      city: 'Санкт-Петербург',
      name: 'HEISENBERG Васильевский',
      address: 'Средний пр., 20',
      phone: '+7 (812) 123-45-68',
      hours: '10:00 - 22:00',
      metro: 'Василеостровская'
    },
    {
      id: 11,
      city: 'Санкт-Петербург',
      name: 'HEISENBERG Московский',
      address: 'Московский пр., 100',
      phone: '+7 (812) 123-45-69',
      hours: '10:00 - 22:00',
      metro: 'Московская'
    },
    {
      id: 12,
      city: 'Санкт-Петербург',
      name: 'HEISENBERG Петроградская',
      address: 'Каменноостровский пр., 15',
      phone: '+7 (812) 123-45-70',
      hours: '10:00 - 22:00',
      metro: 'Петроградская'
    },
    {
      id: 13,
      city: 'Казань',
      name: 'HEISENBERG Баумана',
      address: 'ул. Баумана, 58',
      phone: '+7 (843) 123-45-67',
      hours: '10:00 - 22:00',
      metro: null
    },
    {
      id: 14,
      city: 'Казань',
      name: 'HEISENBERG Пушкина',
      address: 'ул. Пушкина, 72',
      phone: '+7 (843) 123-45-68',
      hours: '10:00 - 22:00',
      metro: null
    },
    {
      id: 15,
      city: 'Казань',
      name: 'HEISENBERG Кремлёвская',
      address: 'ул. Кремлёвская, 35',
      phone: '+7 (843) 123-45-69',
      hours: '10:00 - 22:00',
      metro: null
    },
    {
      id: 16,
      city: 'Нижний Новгород',
      name: 'HEISENBERG Большая Покровская',
      address: 'ул. Большая Покровская, 40',
      phone: '+7 (831) 123-45-67',
      hours: '10:00 - 22:00',
      metro: null
    },
    {
      id: 17,
      city: 'Нижний Новгород',
      name: 'HEISENBERG Автозаводская',
      address: 'пр. Ленина, 88',
      phone: '+7 (831) 123-45-68',
      hours: '10:00 - 21:00',
      metro: null
    },
    {
      id: 18,
      city: 'Екатеринбург',
      name: 'HEISENBERG Вайнера',
      address: 'ул. Вайнера, 12',
      phone: '+7 (343) 123-45-67',
      hours: '10:00 - 22:00',
      metro: null
    },
    {
      id: 19,
      city: 'Екатеринбург',
      name: 'HEISENBERG Ленина',
      address: 'пр. Ленина, 55',
      phone: '+7 (343) 123-45-68',
      hours: '10:00 - 22:00',
      metro: null
    },
    {
      id: 20,
      city: 'Екатеринбург',
      name: 'HEISENBERG Малышева',
      address: 'ул. Малышева, 31',
      phone: '+7 (343) 123-45-69',
      hours: '10:00 - 22:00',
      metro: null
    },
    {
      id: 21,
      city: 'Новосибирск',
      name: 'HEISENBERG Красный проспект',
      address: 'Красный пр., 25',
      phone: '+7 (383) 123-45-67',
      hours: '10:00 - 22:00',
      metro: null
    },
    {
      id: 22,
      city: 'Новосибирск',
      name: 'HEISENBERG Гоголя',
      address: 'ул. Гоголя, 15',
      phone: '+7 (383) 123-45-68',
      hours: '10:00 - 22:00',
      metro: null
    },
    {
      id: 23,
      city: 'Краснодар',
      name: 'HEISENBERG Красная',
      address: 'ул. Красная, 88',
      phone: '+7 (861) 123-45-67',
      hours: '10:00 - 22:00',
      metro: null
    },
    {
      id: 24,
      city: 'Краснодар',
      name: 'HEISENBERG Северная',
      address: 'ул. Северная, 320',
      phone: '+7 (861) 123-45-68',
      hours: '10:00 - 22:00',
      metro: null
    }
  ];

  const filteredStores = stores.filter(store => {
    const cityMatch = selectedCity === 'Все города' || store.city === selectedCity;
    const searchMatch = searchQuery === '' || 
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.city.toLowerCase().includes(searchQuery.toLowerCase());
    return cityMatch && searchMatch;
  });

  const storesByCity = filteredStores.reduce((acc, store) => {
    if (!acc[store.city]) {
      acc[store.city] = [];
    }
    acc[store.city].push(store);
    return acc;
  }, {} as Record<string, typeof stores>);

  const socialLinks = [
    { icon: 'Instagram', label: '@heisenberg_vape', link: '#' },
    { icon: 'MessageCircle', label: 'Telegram', link: '#' },
    { icon: 'Phone', label: '+7 (999) 123-45-67', link: 'tel:+79991234567' }
  ];

  return (
    <div className="min-h-screen pb-20 bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-40 backdrop-blur-sm bg-card/95">
        <div className="max-w-screen-sm mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <div className="flex-1">
              <h1 className="text-xl font-bold text-primary tracking-wide">КОНТАКТЫ</h1>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                Сеть из {stores.length} магазинов
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-screen-sm mx-auto px-4 py-6">
        <section className="mb-6">
          <div className="relative">
            <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск по адресу или названию..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card"
            />
          </div>
        </section>

        <section className="mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {cities.map((city) => (
              <Button
                key={city}
                variant={selectedCity === city ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCity(city)}
                className={`whitespace-nowrap transition-all duration-300 ${
                  selectedCity === city 
                    ? 'glow-button' 
                    : 'hover:border-primary/50'
                }`}
              >
                {city}
                {city !== 'Все города' && (
                  <span className="ml-2 text-xs opacity-70">
                    {stores.filter(s => s.city === city).length}
                  </span>
                )}
              </Button>
            ))}
          </div>
        </section>

        {filteredStores.length === 0 ? (
          <div className="text-center py-12">
            <Icon name="MapPin" size={48} className="text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground">Магазины не найдены</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery('');
                setSelectedCity('Все города');
              }}
              className="mt-4"
            >
              Сбросить фильтры
            </Button>
          </div>
        ) : (
          <section className="space-y-6">
            {Object.entries(storesByCity).map(([city, cityStores]) => (
              <div key={city}>
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <h2 className="text-lg font-bold">{city}</h2>
                  <span className="text-xs text-muted-foreground">
                    ({cityStores.length} {cityStores.length === 1 ? 'магазин' : cityStores.length < 5 ? 'магазина' : 'магазинов'})
                  </span>
                </div>
                <div className="space-y-3">
                  {cityStores.map((store) => (
                    <Card key={store.id} className="bg-card border-border p-4 hover:border-primary/50 transition-all duration-300 group card">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-foreground">{store.name}</h3>
                        {store.metro && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap ml-2">
                            Ⓜ {store.metro}
                          </span>
                        )}
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          <Icon name="MapPin" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{store.address}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Icon name="Phone" size={14} className="text-primary" />
                            <a href={`tel:${store.phone.replace(/\D/g, '')}`} className="text-xs text-foreground hover:text-primary">
                              {store.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="Clock" size={14} className="text-primary" />
                            <span className="text-xs text-foreground">{store.hours}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground text-xs"
                        >
                          <Icon name="Navigation" size={14} className="mr-1" />
                          Маршрут
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground text-xs"
                          onClick={() => window.location.href = `tel:${store.phone.replace(/\D/g, '')}`}
                        >
                          <Icon name="Phone" size={14} className="mr-1" />
                          Позвонить
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        <section className="mb-6 mt-8">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Icon name="MessageCircle" size={20} className="text-primary" />
            Связаться с нами
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="flex items-center gap-4 bg-card border border-border p-4 rounded-lg hover:border-primary/50 transition-all duration-300 group card"
              >
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon name={social.icon as any} size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <span className="text-foreground font-medium">{social.label}</span>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {social.icon === 'Phone' && 'Горячая линия'}
                    {social.icon === 'Instagram' && 'Подписывайтесь на нас'}
                    {social.icon === 'MessageCircle' && 'Быстрые ответы в Telegram'}
                  </p>
                </div>
                <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </section>

        <section>
          <Card className="relative bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-6 overflow-hidden card hover:border-primary/40 transition-all duration-300">
            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Icon name="Briefcase" size={28} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-1">Работа у нас</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Присоединяйтесь к команде HEISENBERG — мы растём и ищем талантливых людей
                  </p>
                  <a href="/careers">
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold glow-button">
                      Смотреть вакансии
                      <Icon name="ArrowRight" size={14} className="ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-2 text-8xl font-bold text-primary/5 select-none leading-none">
              H
            </div>
          </Card>
        </section>
      </main>

      <Navigation />
    </div>
  );
};

export default Contacts;