import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Flame, Heater as Water, Brain, Heart, Star, Activity, Bot, Leaf } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import AyurvedicChatbot from '../components/AyurvedicChatbot';

const ChakraIcon = ({ color, secondaryColor, icon: Icon }) => (
  <motion.div
    className="relative"
    whileHover={{ scale: 1.1 }}
    animate={{ 
      rotate: [0, 360],
      scale: [1, 1.1, 1]
    }}
    transition={{ 
      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
      scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
    }}
  >
    <div className={`absolute inset-0 ${color} rounded-full blur-sm opacity-50`} />
    <div className={`relative ${secondaryColor} p-4 rounded-full`}>
      <Icon size={40} className="text-white" />
    </div>
  </motion.div>
);

const AyurvedaPhilosophy = () => {
  const doshas = [
    {
      type: 'Vata',
      icon: Wind,
      color: 'bg-purple-500',
      secondaryColor: 'bg-purple-600',
      elements: ['Air', 'Space'],
      qualities: ['Light', 'Cold', 'Dry', 'Mobile'],
      description: 'The energy of movement',
      characteristics: [
        'Creative and quick-minded',
        'Light and restless sleep patterns',
        'Variable digestion and appetite',
        'Responds to warm, grounding foods'
      ],
      foods: [
        'Warm soups and stews',
        'Cooked grains',
        'Root vegetables',
        'Healthy oils'
      ],
      image: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?w=800'
    },
    {
      type: 'Pitta',
      icon: Flame,
      color: 'bg-red-500',
      secondaryColor: 'bg-red-600',
      elements: ['Fire', 'Water'],
      qualities: ['Hot', 'Sharp', 'Light', 'Oily'],
      description: 'The energy of transformation',
      characteristics: [
        'Strong digestion and metabolism',
        'Sharp intellect and focus',
        'Natural leaders',
        'Balanced by cooling foods'
      ],
      foods: [
        'Fresh vegetables',
        'Sweet fruits',
        'Cooling herbs',
        'Coconut water'
      ],
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800'
    },
    {
      type: 'Kapha',
      icon: Water,
      color: 'bg-blue-500',
      secondaryColor: 'bg-blue-600',
      elements: ['Earth', 'Water'],
      qualities: ['Heavy', 'Slow', 'Cool', 'Oily'],
      description: 'The energy of structure',
      characteristics: [
        'Strong, calm constitution',
        'Excellent stamina',
        'Deep, restful sleep',
        'Benefits from light, warming foods'
      ],
      foods: [
        'Light, warm foods',
        'Spicy dishes',
        'Leafy greens',
        'Honey'
      ],
      image: 'https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?w=800'
    }
  ];

  const hoverVariants = {
    hover: {
      x: 10,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const floatVariants = {
    hover: {
      y: -10,
      transition: { type: "spring", stiffness: 200 }
    }
  };

  return (
    <PageTransition>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-vitality-teal to-bio-tech-blue text-white py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-vitality-teal/60 to-bio-tech-blue/60" />
          <div className="relative max ceiow-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block p-2 px-4 rounded-full bg-white/10 backdrop-blur-sm mb-8"
              >
                <span className="text-clinical-white/80">5000+ Years of Wisdom Meets Modern Science</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              >
                Transform Your Health Through<br />Ancient Ayurvedic Wisdom
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-clinical-white/80 max-w-3xl mx-auto mb-12"
              >
                Experience personalized nutrition based on your unique constitution,
                powered by AI and guided by certified Ayurvedic practitioners
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <AyurvedicChatbot
                  className="bg-clinical-white text-vitality-teal px-8 py-4 rounded-full font-semibold text-lg hover:bg-light-gray transition-colors inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-clinical-white text-vitality-teal px-8 py-4 rounded-full font-semibold text-lg hover:bg-light-gray transition-colors inline-flex items-center"
                >
                  <Bot className="mr-2" size={24} />
                  Watch Our Story
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Dosha Types */}
        <section className="py-24 bg-healing-leaf/10 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-healing-leaf font-semibold mb-2 block"
              >
                UNDERSTAND YOUR NATURE
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-brand-gray dark:text-white mb-4"
              >
                The Three Doshas
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-brand-gray dark:text-gray-400 max-w-3xl mx-auto"
              >
                In Ayurveda, the five elements combine into three primary energies
                that govern our physical and mental processes
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {doshas.map((dosha, index) => (
                <motion.div
                  key={dosha.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover="hover"
                  variants={floatVariants}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-clinical-white dark:bg-gray-800 rounded-2xl overflow-hidden transform-gpu"
                >
                  <div className="relative h-48">
                    <img
                      src={dosha.image}
                      alt={dosha.type}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white flex items-center">
                      <ChakraIcon 
                        color={dosha.color} 
                        secondaryColor={dosha.secondaryColor}
                        icon={dosha.icon}
                      />
                      <h3 className="text-2xl font-bold ml-3">{dosha.type}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {dosha.elements.map((element, i) => (
                        <motion.span
                          key={element}
                          whileHover={{ scale: 1.1 }}
                          className="mr-2 text-sm bg-healing-leaf/10 dark:bg-healing-leaf/20 text-healing-leaf dark:text-healing-leaf px-3 py-1 rounded-full"
                        >
                          {element}
                        </motion.span>
                      ))}
                    </div>
                    <motion.p 
                      variants={hoverVariants}
                      className="text-brand-gray dark:text-gray-400 mb-6"
                    >
                      {dosha.description}
                    </motion.p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-brand-gray dark:text-white mb-2">
                          Characteristics
                        </h4>
                        <ul className="space-y-2">
                          {dosha.characteristics.map((trait, i) => (
                            <motion.li
                              key={i}
                              variants={hoverVariants}
                              className="text-brand-gray dark:text-gray-400 flex items-center"
                            >
                              <Star size={16} className="text-healing-leaf mr-2" />
                              {trait}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-gray dark:text-white mb-2">
                          Recommended Foods
                        </h4>
                        <ul className="space-y-2">
                          {dosha.foods.map((food, i) => (
                            <motion.li
                              key={i}
                              variants={hoverVariants}
                              className="text-brand-gray dark:text-gray-400 flex items-center"
                            >
                              <Leaf size={16} className="text-healing-leaf mr-2" />
                              {food}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-clinical-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-vitality-teal to-bio-tech-blue rounded-3xl overflow-hidden"
            >
              <div className="relative px-8 py-16 md:p-16">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1920')] bg-cover bg-center opacity-10" />
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                  <h2 className="text-4xl font-bold text-white mb-6">
                    Begin Your Transformation Today
                  </h2>
                  <p className="text-xl text-clinical-white/80 mb-8">
                    Take the first step towards a balanced, healthier you with our
                    personalized Ayurvedic assessment
                  </p>
                  <Link to="/ayurvedic-analysis">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-pulse-coral text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-colors inline-flex items-center"
                    >
                      <Bot className="mr-2" size={24} />
                      Start Your Journey
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default AyurvedaPhilosophy;
