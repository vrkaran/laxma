import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight, HeartPulse, LeafyGreen, Sprout } from 'lucide-react';
import ayurvedaimage from '../image/ayurveda/35.webp';
import ayurimage from '../image/ayurveda/38.webp';
import AyurvedicChatbot from './AyurvedicChatbot';

const AyurvedicHealthScore = () => {
  
  
  // Floating herb elements data
  const floatingHerbs = [
    { id: 1, icon: <Leaf className="h-5 w-5 text-green-500" />, initialX: -20, initialY: 50 },
    { id: 2, icon: <LeafyGreen className="h-4 w-4 text-emerald-400" />, initialX: 30, initialY: 20 },
    { id: 3, icon: <Sprout className="h-3 w-3 text-lime-300" />, initialX: -10, initialY: 80 },
    { id: 4, icon: <HeartPulse className="h-4 w-4 text-rose-400" />, initialX: 40, initialY: 70 },
  ];

  // Benefits list
  const benefits = [
    "Personalized Dosha Analysis",
    "Customized Diet Recommendations",
    "Lifestyle Adjustments",
    "Seasonal Health Tips",
    "Stress Management Techniques"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced background with animated floating herbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20" />
      <div 
        className="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${ayurimage})` }}
      />
      
      {/* Animated floating herbs */}
      {floatingHerbs.map((herb) => (
        <motion.div
          key={herb.id}
          initial={{ x: herb.initialX, y: herb.initialY, opacity: 0 }}
          animate={{
            x: [herb.initialX, herb.initialX + 10, herb.initialX],
            y: [herb.initialY, herb.initialY + 15, herb.initialY],
            opacity: [0, 1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse"
          }}
          className="absolute"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`
          }}
        >
          {herb.icon}
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring" }}
            className="text-center lg:text-left"
          >
            <motion.div 
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 mb-6"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Discover Your <span className="text-green-600">Ayurvedic Health Score</span> 🌿
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Small changes, big impact! Learn how to balance your mind-body type (Vata, Pitta, Kapha) with personalized food, lifestyle fixes, and avoidable triggers.
            </motion.p>

            {/* Benefits list with staggered animation */}
            {/* Benefits list with staggered animation */}
<motion.ul className="mb-8 text-left">
  {benefits.map((benefit, index) => (
    <motion.li 
      key={index}
      className="flex items-center mb-3 text-lg text-gray-700 dark:text-gray-200 group"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 + index * 0.1 }}
      whileHover={{ 
        x: 5,
        color: "#16a34a", // green-600
        transition: { 
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1] // smooth ease-in-out
        } 
      }}
    >
      <motion.span 
        className="mr-2 text-green-500"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <ArrowRight className="h-5 w-5" />
      </motion.span>
      {benefit}
    </motion.li>
  ))}
</motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <AyurvedicChatbot />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring" }}
            className="relative"
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={ayurvedaimage}
                alt="Ayurvedic Herbs"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-8 text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-2">
                  Personalized Health Analysis
                </h3>
                <p className="text-white/90">
                  Get expert insights into your unique constitution and health patterns
                </p>
                
                {/* Animated call-to-action */}
                <motion.div
                  className="mt-4 flex items-center text-green-300 hover:text-white cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="mr-2">Learn more about your Dosha</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </motion.div>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -top-5 -right-5 bg-white dark:bg-green-800 text-green-600 dark:text-white px-4 py-2 rounded-full shadow-lg font-medium flex items-center"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring" }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <HeartPulse className="h-4 w-4 mr-2" />
                Holistic Approach
              </motion.div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/20 z-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            />
            <motion.div
              className="absolute -top-6 -left-6 h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900/20 z-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AyurvedicHealthScore;