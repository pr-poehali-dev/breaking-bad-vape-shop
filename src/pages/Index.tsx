import Navigation from '@/components/Navigation';
import Logo from '@/components/Logo';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Heisenberg Blue',
      price: '3 490 ₽',
      category: 'Pod-система',
      image: '/placeholder.svg',
      badge: 'ХИТ'
    },
    {
      id: 2,
      name: 'Los Pollos Hermanos',
      price: '2 990 ₽',
      category: 'Жидкость',
      image: '/placeholder.svg',
      badge: 'NEW'
    },
    {
      id: 3,
      name: 'Better Call Vape',
      price: '4 990 ₽',
      category: 'Мод',
      image: '/placeholder.svg',
      badge: 'ТОП'
    },
    {
      id: 4,
      name: 'Crystal Ship',
      price: '1 990 ₽',
      category: 'Жидкость',
      image: '/placeholder.svg',
      badge: null
    }
  ];

  return (
    <div className="min-h-screen pb-20 bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-screen-sm mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo size="md" />
              <div>
                <h1 className="text-2xl font-bold text-primary tracking-wide">HEISENBERG</h1>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Premium Quality</p>
              </div>
            </div>
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
        <section className="mb-8">
          <div className="relative bg-gradient-to-br from-secondary via-card to-secondary rounded-lg overflow-hidden p-6 border border-primary/20">
            <div className="relative z-10">
              <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-bold mb-3 uppercase tracking-wider">
                99.1% ЧИСТОТА
              </div>
              <h2 className="text-3xl font-bold mb-2 text-foreground">
                ЛУЧШИЙ ВЫБОР
              </h2>
              <p className="text-sm text-muted-foreground mb-4 max-w-xs">
                Премиальные вейпы и жидкости. Проверенное качество.
              </p>
              <Link to="/catalog">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                  СМОТРЕТЬ КАТАЛОГ
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="absolute top-0 right-0 text-9xl font-bold text-primary/5 select-none">
              CH₃
            </div>
            <div className="absolute bottom-4 left-4 text-5xl font-bold text-primary/5 select-none">
              C₁₀H₁₅N
            </div>
            <div className="absolute top-1/2 right-8 text-6xl font-bold text-primary/5 select-none rotate-12">
              Br
            </div>
          </div>
        </section>

        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Популярное</h3>
            <Link to="/catalog" className="text-sm text-primary hover:underline font-medium">
              Все товары →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative">
                  {product.badge && (
                    <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-bold z-10">
                      {product.badge}
                    </div>
                  )}
                  <div className="aspect-square bg-secondary/50 flex items-center justify-center border-b border-border">
                    <Icon name="Cigarette" size={48} className="text-muted-foreground" />
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">
                    {product.category}
                  </p>
                  <h4 className="font-bold text-sm mb-2 text-foreground line-clamp-1">
                    {product.name}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">{product.price}</span>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-3">
                      <Icon name="Plus" size={14} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <Card className="bg-card border-border p-4">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-3 rounded">
                <Icon name="ShieldCheck" size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-1 text-foreground">Гарантия качества</h4>
                <p className="text-sm text-muted-foreground">
                  Все товары сертифицированы и проверены
                </p>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <Navigation />
    </div>
  );
};

export default Index;