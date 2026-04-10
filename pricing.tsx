import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Free',
    price: '0₽',
    period: 'навсегда',
    description: 'Для начинающих',
    features: [
      'Базовая кастомизация',
      'Аналитика профиля',
      'Базовые эффекты',
      'Добавление соцсетей',
    ],
    buttonText: 'Начать',
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '499₽',
    originalPrice: '699₽',
    period: 'навсегда',
    description: 'Популярный выбор',
    features: [
      'Эксклюзивный бейдж',
      'Макеты профиля',
      'Кастомные шрифты',
      'Анимация печатной машинки',
      'Специальные эффекты',
      'Расширенная кастомизация',
      'SEO настройки',
    ],
    buttonText: 'Выбрать Premium',
    highlighted: true,
  },
  {
    name: 'Pro',
    price: '999₽',
    period: 'навсегда',
    description: 'Для профессионалов',
    features: [
      'Всё из Premium',
      'Приоритетная поддержка',
      'API доступ',
      'White-label',
      'Кастомный домен',
    ],
    buttonText: 'Выбрать Pro',
    highlighted: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="py-24 relative">
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
            Выберите свой <span className="gradient-text">тариф</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Присоединяйтесь к <span className="text-foreground font-semibold">46,000+</span> подписчиков
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={cn(
                'relative rounded-2xl p-6 lg:p-8 transition-all duration-300',
                plan.highlighted
                  ? 'bg-card border-2 border-primary scale-105 z-10'
                  : 'bg-card border border-border hover:border-primary/50'
              )}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-white text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Популярный
                  </div>
                </div>
              )}

              {/* Glow effect for highlighted */}
              {plan.highlighted && (
                <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl -z-10" />
              )}

              {/* Plan header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through ml-2">
                      {plan.originalPrice}
                    </span>
                  )}
                </div>
                <span className="text-sm text-muted-foreground">/ {plan.period}</span>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Features list */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={cn(
                  'w-full py-3 rounded-xl font-medium transition-all duration-300',
                  plan.highlighted
                    ? 'btn-primary'
                    : 'btn-secondary'
                )}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            Оплата разовая — никаких подписок и скрытых платежей
          </p>
        </motion.div>
      </div>
    </section>
  );
}
