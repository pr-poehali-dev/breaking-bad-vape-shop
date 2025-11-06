import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'POD-системы vs одноразки: что выбрать в 2024',
      excerpt: 'Разбираем плюсы и минусы POD-систем и одноразовых вейпов. Что выгоднее и удобнее для разных типов парильщиков',
      image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&q=80',
      category: 'Гид',
      date: '15 октября 2024',
      readTime: '5 мин',
      author: 'Команда HEISENBERG'
    },
    {
      id: 2,
      title: 'Как правильно выбрать жидкость для вейпа',
      excerpt: 'Полное руководство по выбору жидкости: соотношение PG/VG, крепость никотина, вкусовые профили и совместимость с устройствами',
      image: 'https://images.unsplash.com/photo-1608181715569-4f8df0de6b58?w=800&q=80',
      category: 'Гид',
      date: '10 октября 2024',
      readTime: '8 мин',
      author: 'Максим Соловьёв'
    },
    {
      id: 3,
      title: 'Уход за кальяном: правила долгой службы',
      excerpt: 'Как правильно чистить, хранить и обслуживать кальян. Советы от профессионалов для сохранения вкуса и качества',
      image: 'https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?w=800&q=80',
      category: 'Инструкция',
      date: '5 октября 2024',
      readTime: '6 мин',
      author: 'Команда HEISENBERG'
    },
    {
      id: 4,
      title: 'Топ-5 табаков для кальяна осени 2024',
      excerpt: 'Обзор лучших табачных миксов сезона: от классики до экзотики. Актуальные вкусы и новинки на рынке',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80',
      category: 'Обзоры',
      date: '1 октября 2024',
      readTime: '7 мин',
      author: 'Максим Соловьёв'
    }
  ];

  const categories = ['Все', 'Гид', 'Обзоры', 'Инструкция', 'Новости'];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-card border-b border-border sticky top-0 z-40 backdrop-blur-sm bg-card/95">
        <div className="max-w-screen-sm mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Icon name="ArrowLeft" size={20} className="text-primary group-hover:animate-pulse" />
            <span className="font-bold text-lg">Блог</span>
          </Link>
          <Icon name="Search" size={20} className="text-muted-foreground" />
        </div>
      </header>

      <main className="max-w-screen-sm mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Блог HEISENBERG</h1>
          <p className="text-muted-foreground">Полезные материалы о вейпинге, кальянах и табачной продукции</p>
        </div>

        <section className="mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat, index) => (
              <Button
                key={index}
                variant={index === 0 ? 'default' : 'outline'}
                size="sm"
                className={`whitespace-nowrap transition-all duration-300 ${
                  index === 0 
                    ? 'glow-button' 
                    : 'hover:border-primary/50'
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </section>

        <Link to={`/blog/${posts[0].id}`} className="block mb-6">
          <Card className="overflow-hidden hover:border-primary/50 transition-all duration-300 group card">
            <div className="relative h-64 overflow-hidden">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold mb-3">
                  {posts[0].category}
                </span>
                <h2 className="text-2xl font-bold text-white mb-2 line-clamp-2">
                  {posts[0].title}
                </h2>
                <p className="text-sm text-white/80 mb-3 line-clamp-2">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-white/70">
                  <span>{posts[0].author}</span>
                  <span>•</span>
                  <span>{posts[0].readTime}</span>
                  <span>•</span>
                  <span>{posts[0].date}</span>
                </div>
              </div>
            </div>
          </Card>
        </Link>

        <section className="space-y-4">
          {posts.slice(1).map((post, idx) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <Card className="overflow-hidden hover:border-primary/50 transition-all duration-300 group card animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex gap-4 p-4">
                  <div className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold mb-2">
                      {post.category}
                    </span>
                    <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon name="Clock" size={12} />
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </section>

        <div className="mt-8 text-center">
          <Button variant="outline" className="hover:border-primary/50 transition-all duration-300">
            Загрузить ещё
            <Icon name="ChevronDown" size={16} className="ml-2" />
          </Button>
        </div>
      </main>

      <Navigation />
    </div>
  );
};

export default Blog;