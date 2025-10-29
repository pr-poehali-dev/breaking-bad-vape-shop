import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/catalog', label: 'Каталог', icon: 'ShoppingBag' },
    { path: '/contacts', label: 'Контакты', icon: 'MapPin' },
    { path: '/careers', label: 'Карьера', icon: 'Briefcase' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex justify-around items-center h-16 max-w-screen-sm mx-auto px-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110 ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`}
              style={{
                filter: isActive ? 'drop-shadow(0 0 6px hsl(54 100% 62% / 0.3))' : 'none'
              }}
            >
              <Icon name={item.icon as any} size={20} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;