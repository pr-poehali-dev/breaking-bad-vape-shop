import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Logo from '@/components/Logo';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';

const Contacts = () => {
  const [selectedArea, setSelectedArea] = useState<string>('Все');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const areas = [
    { id: 'Все', name: 'Все', icon: 'Store' },
    { id: 'Город', name: 'Город', icon: 'Building2' },
    { id: 'Область', name: 'Область', icon: 'TreePine' }
  ];

  const stores = [
    {
      id: 1,
      area: 'Город',
      district: 'Московский',
      name: 'Невского 142',
      address: 'ул. Невского, 142',
      phone: '+7 (4012) 555-001',
      hours: '10:00 - 22:00'
    },
    {
      id: 2,
      area: 'Город',
      district: 'Ленинградский',
      name: 'Калинина 88',
      address: 'пр. Калинина, 88',
      phone: '+7 (4012) 555-002',
      hours: '10:00 - 22:00'
    },
    {
      id: 3,
      area: 'Город',
      district: 'Центральный',
      name: 'Театральная 25',
      address: 'ул. Театральная, 25',
      phone: '+7 (4012) 555-003',
      hours: '10:00 - 23:00'
    },
    {
      id: 4,
      area: 'Область',
      district: 'Зеленоградск',
      name: 'Ленина 12',
      address: 'пр. Ленина, 12',
      phone: '+7 (40150) 3-20-01',
      hours: '10:00 - 21:00'
    },
    {
      id: 5,
      area: 'Область',
      district: 'Светлогорск',
      name: 'Калининградская 8',
      address: 'ул. Калининградская, 8',
      phone: '+7 (40153) 2-15-55',
      hours: '10:00 - 21:00'
    },
    {
      id: 6,
      area: 'Область',
      district: 'Полесск',
      name: 'Советская 45',
      address: 'ул. Советская, 45',
      phone: '+7 (40158) 3-12-33',
      hours: '10:00 - 20:00'
    },
    {
      id: 7,
      area: 'Область',
      district: 'Гвардейск',
      name: 'Ленина 72',
      address: 'ул. Ленина, 72',
      phone: '+7 (40159) 2-08-88',
      hours: '10:00 - 20:00'
    },
    {
      id: 8,
      area: 'Область',
      district: 'Талпаки',
      name: 'Центральная 5',
      address: 'ул. Центральная, 5',
      phone: '+7 (4012) 555-008',
      hours: '11:00 - 20:00'
    },
    {
      id: 9,
      area: 'Область',
      district: 'Багратионовск',
      name: 'Калининградская 33',
      address: 'ул. Калининградская, 33',
      phone: '+7 (40156) 3-25-44',
      hours: '10:00 - 20:00'
    },
    {
      id: 10,
      area: 'Область',
      district: 'Ладушкин',
      name: 'Победы 18',
      address: 'ул. Победы, 18',
      phone: '+7 (40157) 2-11-22',
      hours: '10:00 - 20:00'
    },
    {
      id: 11,
      area: 'Область',
      district: 'Балтийск',
      name: 'Ленина 50',
      address: 'ул. Ленина, 50',
      phone: '+7 (40145) 6-30-30',
      hours: '10:00 - 21:00'
    },
    {
      id: 12,
      area: 'Область',
      district: 'Светлый',
      name: 'Советская 10А',
      address: 'ул. Советская, 10А',
      phone: '+7 (40152) 3-44-55',
      hours: '10:00 - 20:00'
    }
  ];

  const filteredStores = stores.filter(store => {
    const areaMatch = selectedArea === 'Все' || store.area === selectedArea;
    const searchMatch = searchQuery === '' || 
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.district.toLowerCase().includes(searchQuery.toLowerCase());
    return areaMatch && searchMatch;
  });

  const storesByDistrict = filteredStores.reduce((acc, store) => {
    if (!acc[store.district]) {
      acc[store.district] = [];
    }
    acc[store.district].push(store);
    return acc;
  }, {} as Record<string, typeof stores>);

  const socialLinks = [
    { icon: 'Instagram', label: '@heisenberg_vape', link: '#', desc: 'Акции и новинки' },
    { icon: 'MessageCircle', label: 'Telegram', link: '#', desc: 'Быстрые ответы' },
    { icon: 'Phone', label: '+7 (4012) 555-000', link: 'tel:+74012555000', desc: 'Горячая линия' }
  ];

  return (
    <div className="min-h-screen pb-20 bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-40 backdrop-blur-sm bg-card/95">
        <div className="max-w-screen-sm mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo size="sm" />
              <div>
                <h1 className="text-xl font-bold text-primary tracking-wide">КОНТАКТЫ</h1>
                <p className="text-xs text-muted-foreground">
                  {stores.length} магазинов в регионе
                </p>
              </div>
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
              placeholder="Поиск по адресу или району..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>
        </section>

        <section className="mb-6">
          <div className="flex gap-2">
            {areas.map((area) => (
              <Button
                key={area.id}
                variant={selectedArea === area.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedArea(area.id)}
                className={`flex-1 transition-all duration-300 ${
                  selectedArea === area.id 
                    ? 'glow-button' 
                    : 'hover:border-primary/50'
                }`}
              >
                <Icon name={area.icon as any} size={16} className="mr-2" />
                {area.name}
              </Button>
            ))}
          </div>
        </section>

        {filteredStores.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-primary/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Store" size={40} className="text-primary/30" />
            </div>
            <p className="text-muted-foreground mb-4">Магазины не найдены</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery('');
                setSelectedArea('Все');
              }}
              className="border-primary/30"
            >
              Сбросить фильтры
            </Button>
          </div>
        ) : (
          <section className="space-y-6">
            {Object.entries(storesByDistrict).map(([district, districtStores]) => (
              <div key={district}>
                <div className="flex items-center gap-2 mb-3 sticky top-[73px] bg-background py-2 z-10">
                  <div className="bg-primary/10 p-1.5 rounded">
                    <Icon name="MapPin" size={16} className="text-primary" />
                  </div>
                  <h2 className="text-base font-bold">{district}</h2>
                  <div className="h-px flex-1 bg-border ml-2"></div>
                </div>
                <div className="space-y-2">
                  {districtStores.map((store) => (
                    <Card key={store.id} id={`store-${store.id}`} className="bg-card border-border p-3 hover:border-primary/50 transition-all duration-300 group card scroll-mt-24">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-foreground text-sm mb-1 flex items-center gap-2">
                            <span className="text-primary text-lg">#</span>
                            {store.name}
                          </h3>
                          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                            <Icon name="MapPin" size={12} className="text-primary flex-shrink-0" />
                            {store.address}
                          </p>
                        </div>
                        <div className="bg-primary/5 px-2 py-1 rounded text-xs text-primary font-medium whitespace-nowrap">
                          {store.hours}
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full h-8 mt-3 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground text-xs font-medium"
                      >
                        <Icon name="Navigation" size={12} className="mr-1" />
                        Построить маршрут
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        <section className="mt-8 space-y-2">
          <h2 className="text-base font-bold mb-3 flex items-center gap-2">
            <Icon name="MessageCircle" size={18} className="text-primary" />
            Связаться с нами
          </h2>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="flex items-center gap-3 bg-card border border-border p-3 rounded-lg hover:border-primary/50 transition-all duration-300 group card"
            >
              <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Icon name={social.icon as any} size={18} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{social.label}</p>
                <p className="text-xs text-muted-foreground">{social.desc}</p>
              </div>
              <Icon name="ChevronRight" size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </a>
          ))}
        </section>

        <section className="mt-6">
          <Card className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20 p-4 overflow-hidden card hover:border-primary/40 transition-all duration-300">
            <div className="relative z-10 flex items-center gap-3">
              <div className="bg-primary/15 p-2.5 rounded-lg">
                <Icon name="Briefcase" size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground text-sm mb-0.5">Работа в HEISENBERG</h3>
                <p className="text-xs text-muted-foreground mb-2">
                  Присоединяйтесь к команде
                </p>
                <Button size="sm" className="h-8 bg-primary text-primary-foreground hover:bg-primary/90 font-bold glow-button text-xs">
                  Вакансии
                  <Icon name="ArrowRight" size={12} className="ml-1" />
                </Button>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 text-9xl font-black text-primary/[0.03] select-none leading-none">
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