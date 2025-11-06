import { Link, useParams } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const BlogPost = () => {
  const { id } = useParams();

  const post = {
    id: 1,
    title: 'Витамин C: мифы и реальность',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=1200&q=80',
    category: 'Наука',
    date: '15 октября 2024',
    readTime: '5 мин',
    author: 'Др. Анна Смирнова',
    content: [
      {
        type: 'text',
        text: 'Витамин C — один из самых популярных и обсуждаемых витаминов. Вокруг него существует множество мифов и заблуждений. Давайте разберемся, что из этого правда, а что — нет.'
      },
      {
        type: 'heading',
        text: 'Миф #1: Мегадозы витамина C лечат простуду'
      },
      {
        type: 'text',
        text: 'Исследования показывают, что прием больших доз витамина C не способен вылечить простуду, но может немного сократить продолжительность симптомов у людей, регулярно принимающих витамин.'
      },
      {
        type: 'quote',
        text: 'Регулярный прием витамина C в дозе 200 мг в день может сократить длительность простуды на 8% у взрослых и на 14% у детей.',
        author: 'Кокрейновская библиотека, 2013'
      },
      {
        type: 'heading',
        text: 'Миф #2: Чем больше витамина C, тем лучше'
      },
      {
        type: 'text',
        text: 'Организм усваивает витамин C дозозависимо: при дозе 200 мг усваивается около 100%, при 1000 мг — только 50%, при 2000 мг — менее 25%. Излишки выводятся с мочой.'
      },
      {
        type: 'list',
        items: [
          'Рекомендуемая суточная норма: 75-90 мг',
          'Верхний безопасный уровень: 2000 мг',
          'Оптимальная профилактическая доза: 200-500 мг'
        ]
      },
      {
        type: 'heading',
        text: 'Реальность: Как правильно принимать'
      },
      {
        type: 'text',
        text: 'Для максимальной пользы рекомендуется разделить суточную дозу на несколько приемов в течение дня. Это обеспечит стабильный уровень витамина в крови.'
      },
      {
        type: 'highlight',
        text: 'В нашем магазине вы найдете витамин C в различных формах: от классической аскорбиновой кислоты до липосомальных форм с повышенной биодоступностью.'
      }
    ]
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Как выбрать БАДы',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80'
    },
    {
      id: 3,
      title: 'Здоровый сон: роль магния',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-card border-b border-border sticky top-0 z-40 backdrop-blur-sm bg-card/95">
        <div className="max-w-screen-sm mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/blog" className="flex items-center gap-2 group">
            <Icon name="ArrowLeft" size={20} className="text-primary group-hover:animate-pulse" />
          </Link>
          <div className="flex items-center gap-4">
            <button className="hover:scale-110 transition-transform duration-300">
              <Icon name="Bookmark" size={20} className="text-muted-foreground" />
            </button>
            <button className="hover:scale-110 transition-transform duration-300">
              <Icon name="Share2" size={20} className="text-muted-foreground" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-screen-sm mx-auto">
        <div className="relative h-64 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <article className="px-4 -mt-16 relative z-10">
          <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold mb-4">
            {post.category}
          </span>
          
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="font-medium">{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Icon name="Clock" size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="prose prose-sm max-w-none space-y-6">
            {post.content.map((block, index) => {
              if (block.type === 'text') {
                return (
                  <p key={index} className="text-foreground leading-relaxed">
                    {block.text}
                  </p>
                );
              }
              
              if (block.type === 'heading') {
                return (
                  <h2 key={index} className="text-xl font-bold mt-8 mb-4">
                    {block.text}
                  </h2>
                );
              }
              
              if (block.type === 'quote') {
                return (
                  <Card key={index} className="border-l-4 border-primary bg-primary/5 p-4 my-6">
                    <p className="text-foreground italic mb-2">"{block.text}"</p>
                    {block.author && (
                      <p className="text-sm text-muted-foreground">— {block.author}</p>
                    )}
                  </Card>
                );
              }
              
              if (block.type === 'list') {
                return (
                  <ul key={index} className="space-y-2 my-4">
                    {block.items?.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              
              if (block.type === 'highlight') {
                return (
                  <Card key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-4 my-6">
                    <div className="flex items-start gap-3">
                      <Icon name="Lightbulb" size={20} className="text-primary flex-shrink-0 mt-1" />
                      <p className="text-foreground">{block.text}</p>
                    </div>
                  </Card>
                );
              }
              
              return null;
            })}
          </div>

          <div className="flex items-center gap-3 my-8 pt-6 border-t border-border">
            <Button variant="outline" size="sm" className="flex-1 hover:border-primary/50 transition-all duration-300">
              <Icon name="ThumbsUp" size={16} className="mr-2" />
              Полезно (42)
            </Button>
            <Button variant="outline" size="sm" className="flex-1 hover:border-primary/50 transition-all duration-300">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Комментарии (8)
            </Button>
          </div>

          <Card className="bg-card border-border p-4 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="User" size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold">{post.author}</h3>
                <p className="text-xs text-muted-foreground">Эксперт по нутрициологии</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Кандидат медицинских наук, специалист по клинической нутрициологии с 15-летним опытом работы.
            </p>
          </Card>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Читайте также</h2>
            <div className="grid grid-cols-2 gap-3">
              {relatedPosts.map((related) => (
                <Link key={related.id} to={`/blog/${related.id}`}>
                  <Card className="overflow-hidden hover:border-primary/50 transition-all duration-300 group card">
                    <div className="relative h-24 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-bold line-clamp-2">{related.title}</h3>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>

      <Navigation />
    </div>
  );
};

export default BlogPost;
