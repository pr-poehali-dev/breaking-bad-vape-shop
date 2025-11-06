import { Link, useParams } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import { useState } from 'react';

const Product = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: 'VOOPOO DRAG X',
    price: 3490,
    oldPrice: 4200,
    category: 'POD-системы',
    brand: 'VOOPOO',
    inStock: true,
    rating: 4.8,
    reviews: 127,
    images: [
      'https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&q=80',
      'https://images.unsplash.com/photo-1608181715569-4f8df0de6b58?w=800&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'
    ],
    colors: ['Черный', 'Синий', 'Красный', 'Серебристый'],
    description: 'Мощная и стильная POD-система с регулируемой мощностью до 80W. Идеально подходит как для новичков, так и для опытных парильщиков.',
    features: [
      'Мощность: 5-80W',
      'Батарея: 2500mAh',
      'Объем картриджа: 4.5ml',
      'Type-C зарядка',
      'Регулировка обдува',
      'Индикация заряда'
    ],
    specs: {
      'Размеры': '99 × 32.5 × 28mm',
      'Вес': '135г',
      'Сопротивление': '0.15-3.0Ω',
      'Материал': 'Алюминий + Пластик',
      'Тип зарядки': 'Type-C 5V/2A',
      'Время зарядки': '~60 минут'
    }
  };

  const relatedProducts = [
    {
      id: 2,
      name: 'VOOPOO DRAG S',
      price: 2990,
      image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?w=400&q=80'
    },
    {
      id: 3,
      name: 'SMOK Nord 4',
      price: 2490,
      image: 'https://images.unsplash.com/photo-1608181715569-4f8df0de6b58?w=400&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-card border-b border-border sticky top-0 z-40 backdrop-blur-sm bg-card/95">
        <div className="max-w-screen-sm mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/catalog" className="flex items-center gap-2 group">
            <Icon name="ArrowLeft" size={20} className="text-primary group-hover:animate-pulse" />
          </Link>
          <div className="flex items-center gap-3">
            <button className="hover:scale-110 transition-transform duration-300">
              <Icon name="Share2" size={20} className="text-muted-foreground" />
            </button>
            <button className="hover:scale-110 transition-transform duration-300">
              <Icon name="Heart" size={20} className="text-muted-foreground" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-screen-sm mx-auto">
        <section className="relative">
          <div className="relative h-96 bg-card overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.oldPrice && (
              <div className="absolute top-4 left-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                </span>
              </div>
            )}
          </div>
          
          <div className="flex gap-2 p-4 overflow-x-auto">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  selectedImage === idx ? 'border-primary scale-105' : 'border-border'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </section>

        <article className="px-4 space-y-6">
          <div>
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
                <h1 className="text-2xl font-bold">{product.name}</h1>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                <span className="font-bold">{product.rating}</span>
                <span className="text-xs text-muted-foreground">({product.reviews})</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded font-medium">
                {product.category}
              </span>
              {product.inStock ? (
                <div className="flex items-center gap-1 text-green-500 text-xs">
                  <Icon name="Check" size={14} />
                  <span>В наличии</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-red-500 text-xs">
                  <Icon name="X" size={14} />
                  <span>Нет в наличии</span>
                </div>
              )}
            </div>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-bold text-primary">{product.price} ₽</span>
              {product.oldPrice && (
                <span className="text-lg text-muted-foreground line-through">{product.oldPrice} ₽</span>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <Card className="bg-card border-border p-4">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <Icon name="Palette" size={18} className="text-primary" />
              Выберите цвет
            </h3>
            <div className="flex gap-2 flex-wrap">
              {product.colors.map((color, idx) => (
                <button
                  key={idx}
                  className="px-4 py-2 rounded-lg border-2 border-border hover:border-primary transition-all duration-300 text-sm font-medium"
                >
                  {color}
                </button>
              ))}
            </div>
          </Card>

          <Card className="bg-card border-border p-4">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <Icon name="Zap" size={18} className="text-primary" />
              Основные характеристики
            </h3>
            <ul className="space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="bg-card border-border p-4">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <Icon name="FileText" size={18} className="text-primary" />
              Технические характеристики
            </h3>
            <div className="space-y-2">
              {Object.entries(product.specs).map(([key, value], idx) => (
                <div key={idx} className="flex justify-between text-sm py-2 border-b border-border last:border-0">
                  <span className="text-muted-foreground">{key}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-4">
            <div className="flex items-start gap-3">
              <Icon name="ShieldCheck" size={24} className="text-primary flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Гарантия качества</h4>
                <p className="text-sm text-muted-foreground">
                  Оригинальная продукция с гарантией 6 месяцев. Бесплатный обмен при обнаружении брака.
                </p>
              </div>
            </div>
          </Card>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Похожие товары</h2>
            <div className="grid grid-cols-2 gap-3">
              {relatedProducts.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`}>
                  <Card className="overflow-hidden hover:border-primary/50 transition-all duration-300 group card">
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-bold mb-2 line-clamp-1">{item.name}</h3>
                      <p className="text-primary font-bold">{item.price} ₽</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>

      <div className="fixed bottom-16 left-0 right-0 bg-card border-t border-border p-4 z-40">
        <div className="max-w-screen-sm mx-auto flex items-center gap-3">
          <div className="flex items-center border border-border rounded-lg">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-2 hover:bg-primary/10 transition-colors"
            >
              <Icon name="Minus" size={16} />
            </button>
            <span className="px-4 py-2 font-bold min-w-[3rem] text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-2 hover:bg-primary/10 transition-colors"
            >
              <Icon name="Plus" size={16} />
            </button>
          </div>
          <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-bold glow-button">
            <Icon name="ShoppingCart" size={18} className="mr-2" />
            Добавить за {product.price * quantity} ₽
          </Button>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Product;
