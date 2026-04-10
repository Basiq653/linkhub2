import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Что такое LinkHub?',
    answer: 'LinkHub — это современный сервис для создания стильных страниц link-in-bio. Он позволяет объединить все ваши социальные сети, ссылки и контент в одном красиво оформленном месте.',
  },
  {
    question: 'LinkHub бесплатный?',
    answer: 'Да! У нас есть бесплатный тариф с базовыми возможностями. Для расширенной кастомизации и дополнительных функций доступны платные тарифы Premium и Pro с единоразовой оплатой.',
  },
  {
    question: 'Что я могу сделать с LinkHub?',
    answer: 'С LinkHub вы можете создать уникальную страницу с вашими социальными сетями, добавить анимации и эффекты, отслеживать аналитику посещений, настроить SEO и многое другое.',
  },
  {
    question: 'Почему LinkHub лучше других сервисов?',
    answer: 'LinkHub предлагает современный дизайн, широкие возможности кастомизации, анимации и эффекты, а также единоразовую оплату без подписок. Мы постоянно добавляем новые функции.',
  },
  {
    question: 'LinkHub безопасен?',
    answer: 'Абсолютно! Мы используем современное шифрование для защиты ваших данных. Вся информация хранится на защищенных серверах с регулярным резервным копированием.',
  },
  {
    question: 'Как долго занимает настройка?',
    answer: 'Настройка базовой страницы занимает всего несколько минут. Вы можете сразу добавить свои ссылки и начать использовать LinkHub. Расширенная кастомизация может занять немного больше времени.',
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-border last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-foreground pr-4 group-hover:text-primary transition-colors duration-200">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted-foreground leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Часто задаваемые <span className="gradient-text">вопросы</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ответы на популярные вопросы о LinkHub
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="bg-card rounded-2xl border border-border p-2 sm:p-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
