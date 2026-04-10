import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Palette, 
  BarChart3, 
  Sparkles, 
  Share2, 
  Shield, 
  Search 
} from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Кастомизация',
    description: 'Полный контроль над внешним видом вашей страницы. Настраивайте цвета, шрифты и макеты.',
  },
  {
    icon: BarChart3,
    title: 'Аналитика',
    description: 'Отслеживайте посещения и клики в реальном времени. Детальная статистика по всем метрикам.',
  },
  {
    icon: Sparkles,
    title: 'Эффекты',
    description: 'Анимации и визуальные эффекты для выделения вашей страницы среди остальных.',
  },
  {
    icon: Share2,
    title: 'Социальные сети',
    description: 'Подключите все свои профили в одном месте. Поддержка всех популярных платформ.',
  },
  {
    icon: Shield,
    title: 'Безопасность',
    description: 'Надежное хранение файлов с шифрованием. Ваша информация всегда защищена.',
  },
  {
    icon: Search,
    title: 'SEO',
    description: 'Оптимизация для поисковых систем. Улучшите видимость вашей страницы в поиске.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Почему выбирают <span className="gradient-text">LinkHub</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Все инструменты для создания идеальной страницы в одном месте
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl bg-card border border-border card-hover"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
