import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Logo from '@/components/Logo';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все' },
    { id: 'pods', name: 'Pod-системы' },
    { id: 'liquids', name: 'Жидкости' },
    { id: 'mods', name: 'Моды' }
  ];

  const products = [
    {
      id: 1,
      name: 'Heisenberg Blue Crystal',
      price: '3 490 ₽',
      category: 'pods',
      badge: 'ХИТ',
      inStock: true
    },
    {
      id: 2,
      name: 'Los Pollos Hermanos Mix',
      price: '2 990 ₽',
      category: 'liquids',
      badge: 'NEW',
      inStock: true
    },
    {
      id: 3,
      name: 'Better Call Vape Pro',
      price: '4 990 ₽',
      category: 'mods',
      badge: 'ТОП',
      inStock: true
    },
    {
      id: 4,
      name: 'Crystal Ship Premium',
      price: '1 990 ₽',
      category: 'liquids',
      badge: null,
      inStock: true
    },
    {
      id: 5,
      name: 'RV Starter Kit',
      price: '5 490 ₽',
      category: 'pods',
      badge: null,
      inStock: false
    },
    {
      id: 6,
      name: 'Saul Goodman Special',
      price: '2 490 ₽',
      category: 'liquids',
      badge: null,
      inStock: true
    },
    {
      id: 7,
      name: 'Jesse Pinkman Edition',
      price: '3 990 ₽',
      category: 'mods',
      badge: 'NEW',
      inStock: true
    },
    {
      id: 8,
      name: 'Skyler White Label',
      price: '1 790 ₽',
      category: 'liquids',
      badge: null,
      inStock: true
    }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pb-20 bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-40 backdrop-blur-sm bg-card/95">
        <div className="max-w-screen-sm mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo size="sm" />
              <div>
                <h1 className="text-xl font-bold text-primary tracking-wide">КАТАЛОГ</h1>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  {filteredProducts.length} товаров
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-screen-sm mx-auto px-4 py-6">
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap font-bold transition-transform hover:scale-105 ${
                selectedCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-foreground border-border'
              }`}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${product.id * 0.05}s` }}
            >
              <div className="relative">
                {product.badge && (
                  <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-bold z-10">
                    {product.badge}
                  </div>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-10">
                    <Badge variant="secondary" className="bg-muted text-muted-foreground font-bold">
                      НЕТ В НАЛИЧИИ
                    </Badge>
                  </div>
                )}
                <div className="aspect-square bg-secondary/50 flex items-center justify-center border-b border-border transition-all group-hover:bg-secondary/70">
                  <Icon name="Cigarette" size={48} className="text-muted-foreground transition-transform group-hover:scale-110" />
                </div>
              </div>
              <div className="p-3">
                <h4 className="font-bold text-sm mb-2 text-foreground line-clamp-2 min-h-[2.5rem]">
                  {product.name}
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">{product.price}</span>
                  <Button
                    size="sm"
                    disabled={!product.inStock}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-3 disabled:opacity-50"
                  >
                    <Icon name="Plus" size={14} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  );
};

export default Catalog;