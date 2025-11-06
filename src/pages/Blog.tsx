import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Витамин C: мифы и реальность',
      excerpt: 'Разбираем научные факты о пользе аскорбиновой кислоты и развенчиваем популярные заблуждения',
      image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&q=80',
      category: 'Наука',
      date: '15 октября 2024',
      readTime: '5 мин',
      author: 'Др. Анна Смирнова'
    },
    {
      id: 2,
      title: 'Как выбрать БАДы: гид для начинающих',
      excerpt: 'Полное руководство по выбору биологически активных добавок с учетом ваших потребностей',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
      category: 'Гид',
      date: '10 октября 2024',
      readTime: '8 мин',
      author: 'Марина Волкова'
    },
    {
      id: 3,
      title: 'Здоровый сон: роль магния',
      excerpt: 'Почему магний называют минералом спокойствия и как он влияет на качество сна',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
      category: 'Здоровье',
      date: '5 октября 2024',
      readTime: '6 мин',
      author: 'Др. Анна Смирнова'
    },
    {
      id: 4,
      title: 'Омега-3: что нужно знать',
      excerpt: 'Все о полиненасыщенных жирных кислотах, их источниках и влиянии на организм',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      category: 'Наука',
      date: '1 октября 2024',
      readTime: '7 мин',
      author: 'Марина Волкова'
    }
  ];

  const categories = ['Все', 'Наука', 'Здоровье', 'Гид', 'Новости'];

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

        <section className="space-y-4">
          {posts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <Card className="overflow-hidden hover:border-primary/50 transition-all duration-300 group card">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <span>{post.date}</span>
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
