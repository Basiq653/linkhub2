import { motion } from 'framer-motion';
import { Zap, Github, Twitter, MessageCircle } from 'lucide-react';

const footerLinks = {
  general: {
    title: 'Основное',
    links: [
      { name: 'Вход', href: '#' },
      { name: 'Регистрация', href: '#' },
      { name: 'Тарифы', href: '#pricing' },
      { name: 'Таблица лидеров', href: '#' },
    ],
  },
  resources: {
    title: 'Ресурсы',
    links: [
      { name: 'Центр помощи', href: '#' },
      { name: 'История изменений', href: '#' },
      { name: 'Поддержка', href: '#' },
    ],
  },
  legal: {
    title: 'Правовое',
    links: [
      { name: 'Условия использования', href: '#' },
      { name: 'Политика конфиденциальности', href: '#' },
    ],
  },
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: MessageCircle, href: '#', label: 'Discord' },
];

export function Footer() {
  return (
    <footer className="py-16 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <a href="#" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">LinkHub</span>
              </a>
              
              {/* Description */}
              <p className="text-muted-foreground mb-6 max-w-sm">
                Создавайте современные, кастомизируемые link-in-bio страницы. 
                Объедините все ваши ссылки в одном стильном месте.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links columns */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-foreground mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 LinkHub. Все права защищены.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Система работает стабильно
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
