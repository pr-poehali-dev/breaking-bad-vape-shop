import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface Store {
  id: number;
  district: string;
  name: string;
  address: string;
  hours: string;
  x: number;
  y: number;
  area: 'city' | 'region';
}

const stores: Store[] = [
  { id: 1, district: 'Московский', name: 'Невского 142', address: 'ул. Невского, 142', hours: '10:00 - 22:00', x: 50, y: 45, area: 'city' },
  { id: 2, district: 'Ленинградский', name: 'Калинина 88', address: 'пр. Калинина, 88', hours: '10:00 - 22:00', x: 48, y: 38, area: 'city' },
  { id: 3, district: 'Центральный', name: 'Театральная 25', address: 'ул. Театральная, 25', hours: '10:00 - 23:00', x: 51, y: 42, area: 'city' },
  { id: 4, district: 'Зеленоградск', name: 'Ленина 12', address: 'пр. Ленина, 12', hours: '10:00 - 21:00', x: 68, y: 22, area: 'region' },
  { id: 5, district: 'Светлогорск', name: 'Калининградская 8', address: 'ул. Калининградская, 8', hours: '10:00 - 21:00', x: 60, y: 15, area: 'region' },
  { id: 6, district: 'Полесск', name: 'Советская 45', address: 'ул. Советская, 45', hours: '10:00 - 20:00', x: 55, y: 28, area: 'region' },
  { id: 7, district: 'Гвардейск', name: 'Ленина 72', address: 'ул. Ленина, 72', hours: '10:00 - 20:00', x: 38, y: 48, area: 'region' },
  { id: 8, district: 'Талпаки', name: 'Центральная 5', address: 'ул. Центральная, 5', hours: '11:00 - 20:00', x: 42, y: 52, area: 'region' },
  { id: 9, district: 'Багратионовск', name: 'Калининградская 33', address: 'ул. Калининградская, 33', hours: '10:00 - 20:00', x: 28, y: 60, area: 'region' },
  { id: 10, district: 'Ладушкин', name: 'Победы 18', address: 'ул. Победы, 18', hours: '10:00 - 20:00', x: 20, y: 50, area: 'region' },
  { id: 11, district: 'Балтийск', name: 'Ленина 50', address: 'ул. Ленина, 50', hours: '10:00 - 21:00', x: 35, y: 72, area: 'region' },
  { id: 12, district: 'Светлый', name: 'Советская 10А', address: 'ул. Советская, 10А', hours: '10:00 - 20:00', x: 74, y: 48, area: 'region' }
];

const KaliningradMap = () => {
  const [hoveredStore, setHoveredStore] = useState<Store | null>(null);
  const navigate = useNavigate();

  const handleStoreClick = (storeId: number) => {
    navigate(`/contacts#store-${storeId}`);
  };

  return (
    <Card className="relative bg-gradient-to-br from-card via-secondary/30 to-card border-primary/20 p-6 overflow-hidden">
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <Icon name="Map" size={20} className="text-primary" />
          <h3 className="font-bold text-foreground">Найдите ближайший магазин</h3>
        </div>
        <p className="text-xs text-muted-foreground">Наведите на метку, чтобы узнать подробности</p>
      </div>

      <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-secondary/40 to-secondary/20 rounded-lg border border-border overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <path
            d="M 45 35 Q 48 30, 52 35 Q 56 33, 60 38 L 65 42 Q 68 46, 65 50 L 62 55 Q 58 60, 52 58 L 48 56 Q 42 54, 40 50 Q 38 45, 42 40 Z"
            fill="hsl(var(--primary) / 0.15)"
            stroke="hsl(var(--primary) / 0.4)"
            strokeWidth="0.3"
            className="transition-all duration-300"
          />

          <path
            d="M 20 45 Q 25 42, 30 46 L 35 50 Q 38 55, 35 62 L 32 68 Q 28 74, 22 72 L 18 70 Q 14 66, 16 60 Q 18 52, 22 48 Z"
            fill="hsl(var(--primary) / 0.1)"
            stroke="hsl(var(--primary) / 0.3)"
            strokeWidth="0.3"
          />

          <path
            d="M 55 15 Q 62 12, 68 18 L 75 25 Q 78 30, 74 36 L 70 42 Q 65 48, 58 44 L 52 40 Q 48 35, 50 28 Q 52 20, 56 17 Z"
            fill="hsl(var(--primary) / 0.1)"
            stroke="hsl(var(--primary) / 0.3)"
            strokeWidth="0.3"
          />

          {stores.map((store) => (
            <g key={store.id}>
              <circle
                cx={store.x}
                cy={store.y}
                r={hoveredStore?.id === store.id ? 2.5 : 1.8}
                fill="hsl(var(--primary))"
                className="cursor-pointer transition-all duration-300"
                filter={hoveredStore?.id === store.id ? "url(#glow)" : "none"}
                onMouseEnter={() => setHoveredStore(store)}
                onMouseLeave={() => setHoveredStore(null)}
                onClick={() => handleStoreClick(store.id)}
              />
              <circle
                cx={store.x}
                cy={store.y}
                r={hoveredStore?.id === store.id ? 4 : 0}
                fill="hsl(var(--primary) / 0.2)"
                className="transition-all duration-300 pointer-events-none"
              />
            </g>
          ))}
        </svg>

        {hoveredStore && (
          <div 
            className="absolute pointer-events-none z-20 animate-fade-in"
            style={{
              left: `${hoveredStore.x}%`,
              top: `${hoveredStore.y}%`,
              transform: 'translate(-50%, -120%)'
            }}
          >
            <Card 
              className="bg-card border-primary/50 p-3 shadow-xl cursor-pointer pointer-events-auto backdrop-blur-sm"
              onClick={() => handleStoreClick(hoveredStore.id)}
            >
              <div className="min-w-[180px]">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="bg-primary/20 p-1 rounded">
                      <Icon name="Store" size={12} className="text-primary" />
                    </div>
                    <p className="text-xs font-bold text-foreground">{hoveredStore.district}</p>
                  </div>
                  <div className="bg-primary/10 px-1.5 py-0.5 rounded text-[10px] text-primary font-medium">
                    {hoveredStore.hours}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                  <Icon name="MapPin" size={10} className="text-primary flex-shrink-0" />
                  {hoveredStore.address}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[10px] text-primary font-medium">Нажмите для подробностей</p>
                  <Icon name="ArrowRight" size={12} className="text-primary" />
                </div>
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-card border-r border-b border-primary/50 rotate-45"></div>
            </Card>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 mt-4 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span className="text-muted-foreground">Город Калининград</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-primary/60"></div>
          <span className="text-muted-foreground">Калининградская область</span>
        </div>
      </div>

      <div className="absolute -bottom-2 -right-2 text-7xl font-black text-primary/[0.03] select-none leading-none">
        K
      </div>
    </Card>
  );
};

export default KaliningradMap;
