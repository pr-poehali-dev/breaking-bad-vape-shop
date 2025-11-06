import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <header className="bg-card border-b border-border sticky top-0 z-40 backdrop-blur-sm bg-card/95">
          <div className="max-w-screen-sm mx-auto px-4 py-4">
            <h1 className="text-xl font-bold">Корзина</h1>
          </div>
        </header>

        <main className="max-w-screen-sm mx-auto px-4 py-12">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="ShoppingCart" size={48} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Корзина пуста</h2>
            <p className="text-muted-foreground">
              Добавьте товары из каталога, чтобы оформить заказ
            </p>
            <Link to="/catalog">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold glow-button">
                <Icon name="ShoppingBag" size={18} className="mr-2" />
                Перейти в каталог
              </Button>
            </Link>
          </div>
        </main>

        <Navigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      <header className="bg-card border-b border-border sticky top-0 z-40 backdrop-blur-sm bg-card/95">
        <div className="max-w-screen-sm mx-auto px-4 py-4">
          <h1 className="text-xl font-bold">Корзина ({items.length})</h1>
        </div>
      </header>

      <main className="max-w-screen-sm mx-auto px-4 py-6 space-y-4">
        {items.map((item) => (
          <Card key={item.id} className="bg-card border-border p-4 hover:border-primary/50 transition-all duration-300 group">
            <div className="flex gap-4">
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-secondary/50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between gap-2 mb-2">
                  <h3 className="font-bold line-clamp-2">{item.name}</h3>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-muted-foreground hover:text-red-500 transition-colors flex-shrink-0"
                  >
                    <Icon name="Trash2" size={18} />
                  </button>
                </div>
                
                <p className="text-primary font-bold mb-3">{item.price} ₽</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1.5 hover:bg-primary/10 transition-colors"
                    >
                      <Icon name="Minus" size={14} />
                    </button>
                    <span className="px-4 py-1.5 font-bold min-w-[3rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1.5 hover:bg-primary/10 transition-colors"
                    >
                      <Icon name="Plus" size={14} />
                    </button>
                  </div>
                  
                  <span className="text-sm text-muted-foreground">
                    {item.price * item.quantity} ₽
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}

        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-4 mt-6">
          <div className="flex items-center gap-3 mb-3">
            <Icon name="Truck" size={20} className="text-primary" />
            <div>
              <h3 className="font-bold text-sm">Бесплатная доставка</h3>
              <p className="text-xs text-muted-foreground">При заказе от 2000 ₽</p>
            </div>
          </div>
        </Card>
      </main>

      <div className="fixed bottom-16 left-0 right-0 bg-card border-t border-border p-4 z-40">
        <div className="max-w-screen-sm mx-auto space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Товары ({items.reduce((sum, item) => sum + item.quantity, 0)})</span>
            <span className="font-bold">{totalPrice} ₽</span>
          </div>
          <div className="flex justify-between items-center text-lg">
            <span className="font-bold">Итого:</span>
            <span className="font-bold text-primary text-2xl">{totalPrice} ₽</span>
          </div>
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold glow-button">
            <Icon name="CreditCard" size={18} className="mr-2" />
            Оформить заказ
          </Button>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Cart;
