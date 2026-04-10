import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import { useState } from 'react';

export function CTABanner() {
  const [username, setUsername] = useState('');

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-10" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/30 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Всё, что нужно — <span className="gradient-text">прямо здесь</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-8">
            Присоединяйтесь к <span className="text-foreground font-semibold">1,640,000+</span> пользователей LinkHub
          </p>

          {/* Username input */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <div className="relative w-full">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                linkhub.ru/
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="ваше_имя"
                className="w-full pl-24 pr-4 py-3.5 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-primary transition-colors duration-200"
              />
            </div>
            <button className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2 whitespace-nowrap group">
              Забрать сейчас
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Бесплатно навсегда</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>Настройка за 2 минуты</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
