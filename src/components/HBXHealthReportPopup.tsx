import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  User, 
  Activity, 
  Target, 
  Droplets, 
  TrendingUp, 
  Award,
  Calculator,
  Settings,
  Info,
  AlertTriangle,
  Shield,
  Heart,
  Brain,
  Eye,
  ChevronRight,
  CheckCircle,
  Zap,
  Scale,
  Clock,
  Utensils,
  BarChart3,
  Sparkles,
  ArrowRight,
  Star,
  Flame,
  Dumbbell,
  Apple,
  Coffee,
  Home,
  Truck,
  Cigarette,
  Wine,
  Monitor,
  PieChart,
  TrendingDown,
  TrendingUp as TrendUp,
  Minus,
  Plus,
  Lightbulb,
  Gauge,
  Loader2, // Replaced CircularProgress
  ShoppingBag // Added for Store Section
} from 'lucide-react';
import { 
  calculateNutritionProfile, 
  validateUserProfile, 
  getPersonalizedRecommendations,
  UserProfile, 
  NutritionResults, 
  calculateBMR, 
  calculateTDEE, 
  calculateBMRHarrisBenedict
} from './nutritionUtils';
import {
  assessHealthRisks,
  getRiskLevelColor,
  HealthRiskProfile,
  HealthRiskAssessment
} from './healthRiskUtils';

interface HealthReportPopupProps {
  isOpen: boolean;
  onClose: () => void;
  userProfile?: Partial<UserProfile>;
}

// ------------------------------------------------------------------
// 1. AyurGenX Store Mapping & Logic
// ------------------------------------------------------------------

const STORE_RECOMMENDATIONS: Record<string, any[]> = {
  weight_loss: [
    {
      category: "Ayurvedic Nutrition",
      name: "AyurGenX MetaboCleanse Kadha",
      benefit: "Improves metabolism & fat oxidation",
      tag: "Doctor Recommended"
    },
    {
      category: "Wellness",
      name: "Cork Yoga Mat",
      benefit: "Supports daily movement & flexibility"
    }
  ],
  weight_gain: [
    {
      category: "Clinical Nutrition",
      name: "AyurGenX Plant Protein + Shatavari",
      benefit: "Lean muscle & hormonal balance"
    }
  ],
  maintenance: [
    {
      category: "Daily Vitality",
      name: "AyurGenX Daily Greens",
      benefit: "Essential micronutrients for energy"
    }
  ],
  stress_high: [
    {
      category: "Spiritual Healing",
      name: "AyurGenX CalmMind Dhoop",
      benefit: "Reduces cortisol & anxiety"
    },
    {
      category: "Daily Use",
      name: "Herbal Sleep Soap",
      benefit: "Improves sleep hygiene"
    }
  ]
};

// Helper function to get recommendations
const getStoreRecommendations = (
  goal: string | undefined,
  healthRiskResults: HealthRiskAssessment | null
) => {
  let products: any[] = [];

  // Add goal-based products
  if (goal && STORE_RECOMMENDATIONS[goal]) {
    products = [...STORE_RECOMMENDATIONS[goal]];
  }

  // Add risk-based products (Stress/High Risk)
  if (healthRiskResults?.overallRiskLevel === "High" || healthRiskResults?.overallRiskLevel === "Very High") {
    products = products.concat(STORE_RECOMMENDATIONS.stress_high || []);
  }

  // If list is empty, return a default
  if (products.length === 0) {
     products = products.concat(STORE_RECOMMENDATIONS.maintenance || []);
  }

  return products;
};

// ------------------------------------------------------------------
// 2. Visual Components
// ------------------------------------------------------------------

// Premium circular progress component
const CircularProgressBar: React.FC<{ percentage: number; size?: number; strokeWidth?: number; color?: string }> = ({ 
  percentage, 
  size = 120, 
  strokeWidth = 8, 
  color = "#10B981" 
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-200 dark:text-gray-700"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          {Math.round(percentage)}%
        </span>
      </div>
    </div>
  );
};

// Premium Visual Components - MacroRing for displaying macro breakdown
const MacroRing = ({ protein, carbs, fat, size = 160 }) => {
  const radius = (size - 16) / 2;
  const circumference = radius * 2 * Math.PI;
   
  const proteinOffset = 0;
  const carbsOffset = (protein / 100) * circumference;
  const fatOffset = ((protein + carbs) / 100) * circumference;
   
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="16"
          fill="transparent"
          className="text-gray-200 dark:text-gray-700"
        />
         
        {/* Protein arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#3B82F6"
          strokeWidth="16"
          fill="transparent"
          strokeDasharray={`${(protein / 100) * circumference} ${circumference}`}
          strokeDashoffset={-proteinOffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
         
        {/* Carbs arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#8B5CF6"
          strokeWidth="16"
          fill="transparent"
          strokeDasharray={`${(carbs / 100) * circumference} ${circumference}`}
          strokeDashoffset={-carbsOffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
         
        {/* Fat arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#F59E0B"
          strokeWidth="16"
          fill="transparent"
          strokeDasharray={`${(fat / 100) * circumference} ${circumference}`}
          strokeDashoffset={-fatOffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
       
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Macros</span>
        <span className="text-lg font-bold text-gray-900 dark:text-white">100%</span>
      </div>
    </div>
  );
};

// Dynamic Health Score Calculation
const calculateHealthScore = (userProfile: UserProfile, nutritionResults: NutritionResults, healthRiskResults?: HealthRiskAssessment) => {
  let score = 100;
   
  // BMI Score (30% weight)
  const bmi = nutritionResults.bmi;
  if (bmi < 18.5 || bmi > 30) score -= 25;
  else if (bmi < 20 || bmi > 27) score -= 15;
  else if (bmi < 22 || bmi > 25) score -= 5;
   
  // Activity Level Score (25% weight)
  const activityLevel = userProfile.activityLevel;
  if (activityLevel === 'sedentary') score -= 20;
  else if (activityLevel === 'lightly_active') score -= 10;
  else if (activityLevel === 'moderately_active') score -= 5;
  // very_active and extremely_active get no deduction
   
  // Age Factor (15% weight)
  const age = userProfile.age;
  if (age > 60) score -= 10;
  else if (age > 45) score -= 5;
   
  // Health Risk Factors (30% weight)
  if (healthRiskResults) {
    if (healthRiskResults.overallRiskLevel === 'High' || healthRiskResults.overallRiskLevel === 'Very High') score -= 25;
    else if (healthRiskResults.overallRiskLevel === 'Moderate') score -= 15;
    else if (healthRiskResults.overallRiskLevel === 'Medium') score -= 10;
  }
   
  return Math.max(Math.min(score, 100), 0); // Ensure score is between 0-100
};

// Get health score description
const getHealthScoreDescription = (score: number) => {
  if (score >= 85) return 'Excellent';
  if (score >= 75) return 'Very Good';
  if (score >= 65) return 'Good';
  if (score >= 50) return 'Fair';
  return 'Needs Improvement';
};

// Get health score color
const getHealthScoreColor = (score: number) => {
  if (score >= 85) return '#10B981'; // Green
  if (score >= 75) return '#059669'; // Dark Green
  if (score >= 65) return '#F59E0B'; // Yellow
  if (score >= 50) return '#F97316'; // Orange
  return '#EF4444'; // Red
};

// Dynamic micronutrient recommendations based on user profile
const getMicronutrientRecommendations = (userProfile: UserProfile) => {
  const age = userProfile.age || 30;
  const gender = userProfile.gender || 'male';
   
  // Vitamin D recommendations (IU/day)
  let vitaminD = 600; // Default for adults 19-70
  if (age > 70) vitaminD = 800;
  if (age < 19) vitaminD = 600;
   
  // Vitamin B12 recommendations (mcg/day)
  let vitaminB12 = 2.4; // Default for adults
  if (age > 50) vitaminB12 = 2.4; // Same for older adults but absorption may be lower
  if (age < 19) vitaminB12 = 2.4;
   
  // Calcium recommendations (mg/day)
  let calcium = 1000; // Default for adults 19-50
  if (age > 50 && gender === 'female') calcium = 1200; // Postmenopausal women
  if (age > 70) calcium = 1200; // All adults over 70
  if (age < 19) calcium = 1300; // Teenagers
   
  // Iron recommendations (mg/day) - already dynamic in the code
  let iron = gender === 'female' ? 18 : 8;
  if (age > 50) iron = 8; // Post-menopausal women
  if (age < 19) iron = gender === 'female' ? 15 : 11;
   
  return {
    vitaminD,
    vitaminB12,
    calcium,
    iron
  };
};

const HealthReportPopup: React.FC<HealthReportPopupProps> = ({ 
  isOpen, 
  onClose, 
  userProfile: initialProfile 
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
   
  const [userProfile, setUserProfile] = useState<Partial<UserProfile>>({
    age: initialProfile?.age || undefined,
    gender: initialProfile?.gender || undefined,
    height: initialProfile?.height || undefined,
    weight: initialProfile?.weight || undefined,
    activityLevel: initialProfile?.activityLevel || undefined,
    goal: initialProfile?.goal || undefined
  });

  // Extended profile for health risk assessment
  const [healthProfile, setHealthProfile] = useState<Partial<HealthRiskProfile>>({
    diet: undefined,
    bodyFat: undefined,
    activity: undefined,
    foodSource: undefined,
    smokeDrink: undefined,
    longSittingHours: undefined
  });

  const [nutritionResults, setNutritionResults] = useState<NutritionResults | null>(null);
  const [healthRiskResults, setHealthRiskResults] = useState<HealthRiskAssessment | null>(null);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const totalSteps = 8;

  // Premium auto-advance function with smooth transitions
  const autoAdvanceToNext = (delay: number = 800) => {
    if (currentStep < totalSteps && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsTransitioning(false);
      }, delay);
    }
  };

  // Auto-advance for input fields
  const handleInputComplete = (field: keyof UserProfile, value: any) => {
    handleInputChange(field, value);
     
    // Auto-advance after input completion
    setTimeout(() => {
      if (field === 'age' && value >= 16 && value <= 100) {
        // Focus next input
        inputRefs.current['height']?.focus();
      } else if (field === 'height' && value >= 120 && value <= 250) {
        inputRefs.current['weight']?.focus();
      } else if (field === 'weight' && value >= 30 && value <= 300) {
        autoAdvanceToNext(600);
      }
    }, 200);
  };

  // Calculate nutrition and health risks with enhanced logic
  useEffect(() => {
    const errors = validateUserProfile(userProfile);
    setValidationErrors(errors);

    if (errors.length === 0 && userProfile.age && userProfile.gender && userProfile.height && userProfile.weight && userProfile.activityLevel && userProfile.goal) {
      // Calculate nutrition with enhanced calorie calculations
      const results = calculateNutritionProfile(userProfile as UserProfile);
      
      // Add detailed calorie breakdown
      const bmrMifflin = calculateBMR(userProfile as UserProfile);
      const bmrHarris = calculateBMRHarrisBenedict(userProfile as UserProfile);
      const tdee = calculateTDEE(userProfile as UserProfile);
      
      const enhancedResults = {
        ...results,
        detailedCalories: {
          bmrMifflin,
          bmrHarris,
          tdee,
          targetCalories: results.targetCalories,
          calorieDeficit: userProfile.goal === 'weight_loss' ? tdee - results.targetCalories : 0,
          calorieSurplus: userProfile.goal === 'weight_gain' ? results.targetCalories - tdee : 0,
          activityCalories: tdee - bmrMifflin,
          restingMetabolism: bmrMifflin
        }
      };
      
      setNutritionResults(enhancedResults);
    } else {
      setNutritionResults(null);
    }
  }, [userProfile]);

  // Separate useEffect for health risk calculation to avoid blocking nutrition results
  useEffect(() => {
    if (userProfile.age && userProfile.gender && 
        healthProfile.diet && healthProfile.bodyFat && healthProfile.activity && 
        healthProfile.foodSource && healthProfile.smokeDrink && healthProfile.longSittingHours) {
      
      // Use setTimeout to ensure this doesn't block the UI
      const calculateHealthRisks = () => {
        const completeHealthProfile: HealthRiskProfile = {
          age: userProfile.age,
          gender: userProfile.gender,
          diet: healthProfile.diet,
          bodyFat: healthProfile.bodyFat,
          activity: healthProfile.activity,
          foodSource: healthProfile.foodSource,
          smokeDrink: healthProfile.smokeDrink,
          longSittingHours: healthProfile.longSittingHours
        };
        
        const healthRisks = assessHealthRisks(completeHealthProfile);
        setHealthRiskResults(healthRisks);
      };

      // Small delay to ensure smooth UI transitions
      setTimeout(calculateHealthRisks, 100);
    } else {
      setHealthRiskResults(null);
    }
  }, [userProfile.age, userProfile.gender, healthProfile]);

  const handleInputChange = (field: keyof UserProfile, value: any) => {
    setUserProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleHealthProfileChange = (field: keyof HealthRiskProfile, value: any) => {
    setHealthProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!isOpen) return null;

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="diet-step"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <Utensils className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
              >
                What's your diet preference?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                This helps us customize your meal plans
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 gap-3 max-w-md mx-auto w-full">
              {[
                { name: 'Vegetarian', desc: 'Plant-based with dairy & eggs', icon: '🥬', gradient: 'from-green-400 to-emerald-500' },
                { name: 'Non-Vegetarian', desc: 'Includes all food groups', icon: '🍖', gradient: 'from-red-400 to-rose-500' },
                { name: 'Vegan', desc: 'Completely plant-based', icon: '🌱', gradient: 'from-lime-400 to-green-500' },
                { name: 'Keto', desc: 'High fat, low carb diet', icon: '🥑', gradient: 'from-yellow-400 to-orange-500' },
                { name: 'Paleo', desc: 'Whole foods, no processed', icon: '🥩', gradient: 'from-amber-400 to-orange-600' },
                { name: 'Mediterranean', desc: 'Heart-healthy traditional diet', icon: '🫒', gradient: 'from-blue-400 to-cyan-500' }
              ].map((diet, index) => (
                <motion.button
                  key={diet.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    handleHealthProfileChange('diet', diet.name);
                    autoAdvanceToNext();
                  }}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ${
                    healthProfile.diet === diet.name
                      ? 'border-transparent bg-gradient-to-r ' + diet.gradient + ' text-white shadow-lg'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`text-2xl p-2 rounded-lg ${healthProfile.diet === diet.name ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700'}`}>
                        {diet.icon}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold">{diet.name}</div>
                        <div className={`text-xs ${healthProfile.diet === diet.name ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                          {diet.desc}
                        </div>
                      </div>
                    </div>
                    {healthProfile.diet === diet.name ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="gender-step"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <User className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
              >
                What's your gender?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                This affects your metabolic rate
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto w-full">
              {[
                { name: 'Male', icon: '👨', desc: 'Higher muscle mass', gradient: 'from-blue-400 to-indigo-500' },
                { name: 'Female', icon: '👩', desc: 'Different hormonal needs', gradient: 'from-pink-400 to-rose-500' }
              ].map((gender, index) => (
                <motion.button
                  key={gender.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    handleInputChange('gender', gender.name);
                    autoAdvanceToNext();
                  }}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                    userProfile.gender === gender.name
                      ? 'border-transparent bg-gradient-to-br ' + gender.gradient + ' text-white shadow-lg'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md'
                  }`}
                >
                  <div className="text-center">
                    <div className={`text-3xl mb-3 p-3 rounded-lg ${userProfile.gender === gender.name ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700'}`}>
                      {gender.icon}
                    </div>
                    <div className="font-semibold mb-1">{gender.name}</div>
                    <div className={`text-xs ${userProfile.gender === gender.name ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                      {gender.desc}
                    </div>
                    {userProfile.gender === gender.name && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="mt-2"
                      >
                        <CheckCircle className="w-5 h-5 text-white mx-auto" />
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="metrics-step"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="text-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-400 to-violet-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <Scale className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
              >
                Tell us about yourself
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                We'll calculate your personalized nutrition plan
              </motion.p>
            </div>
            
            <div className="max-w-md mx-auto w-full space-y-4">
              {/* Age, Height, Weight in a grid */}
              <div className="grid grid-cols-3 gap-3">
                {/* Age Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
                  <label className="flex items-center justify-center space-x-1 text-sm font-medium text-gray-900 dark:text-white">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span>Age</span>
                  </label>
                  <div className="relative">
                    <input
                      ref={(el) => inputRefs.current['age'] = el}
                      type="number"
                      min="16"
                      max="100"
                      value={userProfile.age || ''}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (value >= 16 && value <= 100) {
                          handleInputComplete('age', value);
                        } else {
                          handleInputChange('age', value);
                        }
                      }}
                      className="w-full px-3 py-3 text-lg font-semibold text-center bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="25"
                    />
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
                      years
                    </div>
                  </div>
                </motion.div>

                {/* Height Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-2"
                >
                  <label className="flex items-center justify-center space-x-1 text-sm font-medium text-gray-900 dark:text-white">
                    <TrendingUp className="w-4 h-4 text-purple-500" />
                    <span>Height</span>
                  </label>
                  <div className="relative">
                    <input
                      ref={(el) => inputRefs.current['height'] = el}
                      type="number"
                      min="120"
                      max="250"
                      value={userProfile.height || ''}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (value >= 120 && value <= 250) {
                          handleInputComplete('height', value);
                        } else {
                          handleInputChange('height', value);
                        }
                      }}
                      className="w-full px-3 py-3 text-lg font-semibold text-center bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="175"
                    />
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
                      cm
                    </div>
                  </div>
                </motion.div>

                {/* Weight Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-2"
                >
                  <label className="flex items-center justify-center space-x-1 text-sm font-medium text-gray-900 dark:text-white">
                    <Scale className="w-4 h-4 text-purple-500" />
                    <span>Weight</span>
                  </label>
                  <div className="relative">
                    <input
                      ref={(el) => inputRefs.current['weight'] = el}
                      type="number"
                      min="30"
                      max="300"
                      value={userProfile.weight || ''}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (value >= 30 && value <= 300) {
                          handleInputComplete('weight', value);
                        } else {
                          handleInputChange('weight', value);
                        }
                      }}
                      className="w-full px-3 py-3 text-lg font-semibold text-center bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="70"
                    />
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
                      kg
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* BMI Preview */}
              {userProfile.height && userProfile.weight && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-700"
                >
                  <div className="text-center">
                    <div className="text-sm text-purple-600 dark:text-purple-400 mb-1">Your BMI</div>
                    <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                      {((userProfile.weight / ((userProfile.height / 100) ** 2))).toFixed(1)}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {(() => {
                        const bmi = userProfile.weight / ((userProfile.height / 100) ** 2);
                        if (bmi < 18.5) return 'Underweight';
                        if (bmi < 25) return 'Normal weight';
                        if (bmi < 30) return 'Overweight';
                        return 'Obese';
                      })()}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        );
            
      case 4:
        return (
          <motion.div
            key="goal-step"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
              >
                What's your goal?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                This determines your calorie targets
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 gap-3 max-w-md mx-auto w-full">
              {[
                { 
                  name: 'weight_loss', 
                  label: 'Lose Weight', 
                  desc: 'Create a calorie deficit for fat loss', 
                  gradient: 'from-red-400 to-pink-500',
                  emoji: '📉'
                },
                { 
                  name: 'maintenance', 
                  label: 'Maintain Weight', 
                  desc: 'Stay at your current weight', 
                  gradient: 'from-blue-400 to-indigo-500',
                  emoji: '⚖️'
                },
                { 
                  name: 'weight_gain', 
                  label: 'Gain Weight', 
                  desc: 'Build muscle and increase mass', 
                  gradient: 'from-green-400 to-emerald-500',
                  emoji: '📈'
                }
              ].map((goal, index) => (
                <motion.button
                  key={goal.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    handleInputChange('goal', goal.name);
                    autoAdvanceToNext();
                  }}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ${
                    userProfile.goal === goal.name
                      ? 'border-transparent bg-gradient-to-r ' + goal.gradient + ' text-white shadow-lg'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`text-2xl p-2 rounded-lg ${userProfile.goal === goal.name ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700'}`}>
                        {goal.emoji}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold">{goal.label}</div>
                        <div className={`text-xs ${userProfile.goal === goal.name ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                          {goal.desc}
                        </div>
                      </div>
                    </div>
                    {userProfile.goal === goal.name ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            key="activity-step"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <Dumbbell className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
              >
                How active are you?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                This affects your daily calorie needs
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 gap-3 max-w-md mx-auto w-full">
              {[
                { 
                  value: 'Sedentary', 
                  label: 'Sedentary', 
                  desc: 'Little to no exercise, desk job', 
                  emoji: '🪑',
                  gradient: 'from-gray-400 to-slate-500'
                },
                { 
                  value: 'Light Activity', 
                  label: 'Lightly Active', 
                  desc: 'Light exercise 1-3 days/week', 
                  emoji: '🚶',
                  gradient: 'from-blue-400 to-cyan-500'
                },
                { 
                  value: 'Moderate Activity', 
                  label: 'Moderately Active', 
                  desc: 'Moderate exercise 3-5 days/week', 
                  emoji: '🏃',
                  gradient: 'from-green-400 to-emerald-500'
                },
                { 
                  value: 'Very Active', 
                  label: 'Very Active', 
                  desc: 'Hard exercise 6-7 days/week', 
                  emoji: '💪',
                  gradient: 'from-orange-400 to-red-500'
                }
              ].map((activity, index) => (
                <motion.button
                  key={activity.value}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    handleInputChange('activityLevel', activity.value);
                    handleHealthProfileChange('activity', activity.value);
                    autoAdvanceToNext();
                  }}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ${
                    userProfile.activityLevel === activity.value
                      ? 'border-transparent bg-gradient-to-r ' + activity.gradient + ' text-white shadow-lg'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`text-2xl p-2 rounded-lg ${userProfile.activityLevel === activity.value ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700'}`}>
                        {activity.emoji}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold">{activity.label}</div>
                        <div className={`text-xs ${userProfile.activityLevel === activity.value ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                          {activity.desc}
                        </div>
                      </div>
                    </div>
                    {userProfile.activityLevel === activity.value ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        );

      case 6:
        return (
          <motion.div
            key="food-source-step"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-h-[500px] flex flex-col justify-center"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <Apple className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
              >
                Where do you eat most?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto"
              >
                This affects food quality and health risk assessment
              </motion.p>
            </div>
            
            <div className="space-y-4 max-w-lg mx-auto w-full">
              {[
                { 
                  value: 'Home-cooked food', 
                  label: 'Home-cooked food', 
                  desc: 'Fresh ingredients, controlled preparation', 
                  risk: 'Low Risk',
                  emoji: '🏠',
                  gradient: 'from-green-400 to-emerald-500'
                },
                { 
                  value: 'Outside food', 
                  label: 'Outside food', 
                  desc: 'Restaurants, street food, cafeterias', 
                  risk: 'Medium Risk',
                  emoji: '🍽️',
                  gradient: 'from-yellow-400 to-orange-500'
                },
                { 
                  value: 'Food delivery apps', 
                  label: 'Food delivery apps', 
                  desc: 'Online orders, processed foods', 
                  risk: 'High Risk',
                  emoji: '📱',
                  gradient: 'from-red-400 to-pink-500'
                }
              ].map((source, index) => (
                <motion.button
                  key={source.value}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 8 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    handleHealthProfileChange('foodSource', source.value);
                    autoAdvanceToNext();
                  }}
                  className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 ${
                    healthProfile.foodSource === source.value
                      ? 'border-transparent bg-gradient-to-r ' + source.gradient + ' text-white shadow-xl transform scale-105'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`text-3xl p-3 rounded-xl ${healthProfile.foodSource === source.value ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700'}`}>
                        {source.emoji}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-lg">{source.label}</div>
                        <div className={`text-sm ${healthProfile.foodSource === source.value ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                          {source.desc}
                        </div>
                        <div className={`text-xs font-medium ${healthProfile.foodSource === source.value ? 'text-white/60' : 'text-gray-400'}`}>
                          {source.risk}
                        </div>
                      </div>
                    </div>
                    {healthProfile.foodSource === source.value ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : (
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        );

      case 7:
        return (
          <motion.div
            key="lifestyle-step"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-h-[500px] flex flex-col justify-center"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <Heart className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
              >
                Lifestyle habits
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto"
              >
                These factors significantly impact your health risks
              </motion.p>
            </div>
            
            <div className="space-y-8 max-w-lg mx-auto w-full">
              {/* Smoking/Drinking Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                  Do you smoke or drink regularly?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: 'Yes', label: 'Yes', emoji: '🚬', risk: 'High Impact', gradient: 'from-red-400 to-pink-500' },
                    { value: 'No', label: 'No', emoji: '🚭', risk: 'Low Impact', gradient: 'from-green-400 to-emerald-500' }
                  ].map((option, index) => (
                    <motion.button
                      key={option.value}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        handleHealthProfileChange('smokeDrink', option.value);
                        if (healthProfile.longSittingHours) autoAdvanceToNext();
                      }}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        healthProfile.smokeDrink === option.value
                          ? 'border-transparent bg-gradient-to-r ' + option.gradient + ' text-white shadow-lg'
                          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">{option.emoji}</div>
                        <div className="font-medium">{option.label}</div>
                        <div className={`text-xs ${healthProfile.smokeDrink === option.value ? 'text-white/70' : 'text-gray-400'}`}>
                          {option.risk}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Work Style Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                  Do you sit for long hours?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: 'Yes', label: 'Yes', emoji: '💺', risk: 'High Risk', gradient: 'from-orange-400 to-red-500' },
                    { value: 'No', label: 'No', emoji: '🚶', risk: 'Low Risk', gradient: 'from-blue-400 to-cyan-500' }
                  ].map((option, index) => (
                    <motion.button
                      key={option.value}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.0 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        handleHealthProfileChange('longSittingHours', option.value);
                        if (healthProfile.smokeDrink) autoAdvanceToNext();
                      }}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        healthProfile.longSittingHours === option.value
                          ? 'border-transparent bg-gradient-to-r ' + option.gradient + ' text-white shadow-lg'
                          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">{option.emoji}</div>
                        <div className="font-medium">{option.label}</div>
                        <div className={`text-xs ${healthProfile.longSittingHours === option.value ? 'text-white/70' : 'text-gray-400'}`}>
                          {option.risk}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 8:
        return (
          <motion.div
            key="premium-report"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-6xl mx-auto"
          >
            {nutritionResults ? (
              <>
                {/* Hero Section with Overall Health Status */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 p-8 border border-blue-200 dark:border-blue-800"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full -translate-y-32 translate-x-32"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <motion.h1
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                          className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
                        >
                          Your Personalized Health Report
                        </motion.h1>
                        <motion.p
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                          className="text-lg text-gray-600 dark:text-gray-400"
                        >
                          Based on your unique profile and lifestyle factors
                        </motion.p>
                      </div>
                      {healthRiskResults ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                          className={`px-6 py-3 rounded-2xl font-bold text-lg shadow-lg ${
                            healthRiskResults.overallRiskLevel === 'Low' ? 'bg-green-500 text-white' :
                            healthRiskResults.overallRiskLevel === 'Medium' ? 'bg-yellow-500 text-white' :
                            'bg-red-500 text-white'
                          }`}
                        >
                          {healthRiskResults.overallRiskLevel} Risk
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                          className="px-6 py-3 rounded-2xl font-bold text-lg shadow-lg bg-blue-500 text-white"
                        >
                          Nutrition Ready
                        </motion.div>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                        className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                      >
                        <div className="flex items-center mb-3">
                          <User className="w-6 h-6 text-blue-500 mr-3" />
                          <span className="font-semibold text-gray-900 dark:text-white">Profile</span>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <div>{userProfile.age} years old {userProfile.gender}</div>
                          <div>BMI: {nutritionResults.bmi} ({nutritionResults.bmiCategory})</div>
                          <div>Goal: {userProfile.goal?.replace('_', ' ')}</div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                      >
                        <div className="flex items-center mb-3">
                          <Activity className="w-6 h-6 text-green-500 mr-3" />
                          <span className="font-semibold text-gray-900 dark:text-white">Activity</span>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <div>{healthProfile.activity || userProfile.activityLevel || 'Not specified'}</div>
                          <div>{healthProfile.diet ? `${healthProfile.diet} diet` : 'Diet not specified'}</div>
                          <div>{healthProfile.foodSource || 'Food source not specified'}</div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 }}
                        className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                      >
                        <div className="flex items-center mb-3">
                          <Heart className="w-6 h-6 text-pulse-coral mr-3" />
                          <span className="font-semibold text-brand-gray dark:text-white">Lifestyle</span>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <div>Smoking/Drinking: {healthProfile.smokeDrink || 'Not specified'}</div>
                          <div>Long sitting: {healthProfile.longSittingHours || 'Not specified'}</div>
                          <div>Age group: {healthRiskResults?.ageGroup || `${userProfile.age} years`}</div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Premium Calorie Dashboard */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Calorie Analysis</h2>
                      <p className="text-gray-600 dark:text-gray-400">Scientifically calculated for your goals</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Calorie Breakdown */}
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center mr-3">
                              <Gauge className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-semibold text-gray-900 dark:text-white">BMR</span>
                          </div>
                          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                            {Math.round(nutritionResults.bmr)}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Calories at rest</div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mr-3">
                              <Activity className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-semibold text-gray-900 dark:text-white">TDEE</span>
                          </div>
                          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                            {Math.round(nutritionResults.tdee)}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Total daily energy</div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                              <Target className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <span className="font-semibold text-gray-900 dark:text-white">Target Calories</span>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                For {userProfile.goal?.replace('_', ' ')}
                              </div>
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                              {nutritionResults.targetCalories.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">kcal/day</div>
                          </div>
                        </div>
                        
                        {userProfile.goal !== 'maintain_weight' && (
                          <div className="flex items-center justify-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {userProfile.goal === 'weight_loss' ? 'Calorie deficit: ' : 'Calorie surplus: '}
                              <span className={userProfile.goal === 'weight_loss' ? 'text-red-600' : 'text-blue-600'}>
                                {userProfile.goal === 'weight_loss' 
                                  ? `-${Math.round(nutritionResults.tdee - nutritionResults.targetCalories)} kcal`
                                  : `+${Math.round(nutritionResults.targetCalories - nutritionResults.tdee)} kcal`
                                }
                              </span>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Visual Progress Ring */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative">
                        {(() => {
                          const healthScore = calculateHealthScore(userProfile as UserProfile, nutritionResults, healthRiskResults);
                          const scoreColor = getHealthScoreColor(healthScore);
                          const scoreDescription = getHealthScoreDescription(healthScore);
                          
                          return (
                            <>
                              <CircularProgressBar 
                                percentage={healthScore} 
                                size={200} 
                                strokeWidth={12} 
                                color={scoreColor} 
                              />
                              <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Health Score</span>
                                <span className="text-3xl font-bold text-gray-900 dark:text-white" style={{ 
                                  textShadow: 'none',
                                  boxShadow: 'none',
                                  filter: 'none',
                                  WebkitTextStroke: 'none',
                                  textStroke: 'none',
                                  WebkitFilter: 'none'
                                }}>
                                  {Math.round(healthScore)}%
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-500">{scoreDescription}</span>
                              </div>
                            </>
                          );
                        })()}
                      </div>
                      <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                          Your health score is calculated based on BMI, activity level, and lifestyle factors
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Premium Macronutrients Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                      <PieChart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Macronutrient Breakdown</h2>
                      <p className="text-gray-600 dark:text-gray-400">Optimized for your {userProfile.goal?.replace('_', ' ')} goal</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Macro Ring Visualization */}
                    <div className="flex flex-col items-center justify-center">
                      <MacroRing 
                        protein={nutritionResults.macros.protein.percentage}
                        carbs={nutritionResults.macros.carbohydrates.percentage}
                        fat={nutritionResults.macros.fat.percentage}
                        size={220}
                      />
                      <div className="mt-6 flex items-center space-x-6">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Protein</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Carbs</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Fats</span>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Macro Cards */}
                    <div className="space-y-4">
                      {/* Protein Card */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center mr-3">
                              <Dumbbell className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <span className="font-bold text-gray-900 dark:text-white">Protein</span>
                              <div className="text-sm text-blue-600 dark:text-blue-400">Muscle building & repair</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                              {nutritionResults.macros.protein.grams}g
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {nutritionResults.macros.protein.percentage}% • {nutritionResults.macros.protein.calories} kcal
                            </div>
                          </div>
                        </div>
                        <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${nutritionResults.macros.protein.percentage}%` }}
                          ></div>
                        </div>
                      </motion.div>

                      {/* Carbs Card */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0 }}
                        className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mr-3">
                              <Coffee className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <span className="font-bold text-gray-900 dark:text-white">Carbohydrates</span>
                              <div className="text-sm text-purple-600 dark:text-purple-400">Primary energy source</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                              {nutritionResults.macros.carbohydrates.grams}g
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {nutritionResults.macros.carbohydrates.percentage}% • {nutritionResults.macros.carbohydrates.calories} kcal
                            </div>
                          </div>
                        </div>
                        <div className="w-full bg-purple-200 dark:bg-purple-800 rounded-full h-2">
                          <div 
                            className="bg-purple-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${nutritionResults.macros.carbohydrates.percentage}%` }}
                          ></div>
                        </div>
                      </motion.div>

                      {/* Fats Card */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}
                        className="bg-gradient-to-r from-yellow-50 to-orange-100 dark:from-yellow-900/20 dark:to-orange-800/20 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-800"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center mr-3">
                              <Apple className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <span className="font-bold text-gray-900 dark:text-white">Healthy Fats</span>
                              <div className="text-sm text-yellow-600 dark:text-yellow-400">Hormone balance & vitamins</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                              {nutritionResults.macros.fat.grams}g
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400" style={{ textShadow: 'none' }}>
                              {nutritionResults.macros.fat.percentage}% • {nutritionResults.macros.fat.calories} kcal
                            </div>
                          </div>
                        </div>
                        <div className="w-full bg-yellow-200 dark:bg-yellow-800 rounded-full h-2">
                          <div 
                            className="bg-yellow-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${nutritionResults.macros.fat.percentage}%` }}
                          ></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Premium Micronutrients & Health Insights */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Essential Nutrients & Health Insights</h2>
                      <p className="text-gray-600 dark:text-gray-400">Age-specific recommendations for optimal health</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Micronutrients Grid */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Micronutrients</h3>
                       
                      <div className="grid grid-cols-1 gap-3">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.0 }}
                          className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-white text-sm font-bold">D</span>
                              </div>
                              <span className="font-semibold text-gray-900 dark:text-white">Vitamin D</span>
                            </div>
                            <span className="text-sm font-bold text-orange-600 dark:text-orange-400">
                              {getMicronutrientRecommendations(userProfile as UserProfile).vitaminD} IU
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            Critical for bone health and immune function at age {userProfile.age}
                          </p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.1 }}
                          className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-4 border border-red-200 dark:border-red-800"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-white text-sm font-bold">B12</span>
                              </div>
                              <span className="font-semibold text-gray-900 dark:text-white">Vitamin B12</span>
                            </div>
                            <span className="text-sm font-bold text-red-600 dark:text-red-400">
                              {getMicronutrientRecommendations(userProfile as UserProfile).vitaminB12} mcg
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            Essential for energy metabolism and nerve function
                          </p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.2 }}
                          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-white text-sm font-bold">Fe</span>
                              </div>
                              <span className="font-semibold text-gray-900 dark:text-white">Iron</span>
                            </div>
                            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                              {getMicronutrientRecommendations(userProfile as UserProfile).iron} mg
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            Oxygen transport and energy production
                          </p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.3 }}
                          className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-white text-sm font-bold">Ca</span>
                              </div>
                              <span className="font-semibold text-gray-900 dark:text-white">Calcium</span>
                            </div>
                            <span className="text-sm font-bold text-green-600 dark:text-green-400">
                              {getMicronutrientRecommendations(userProfile as UserProfile).calcium} mg
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            Bone strength and muscle function
                          </p>
                        </motion.div>
                      </div>
                    </div>

                    {/* Food Safety & Health Insights */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Food Safety Analysis</h3>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.4 }}
                          className={`rounded-xl p-6 border-2 ${
                            healthProfile.foodSource === 'Outside food' 
                              ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800' 
                              : healthProfile.foodSource === 'Food delivery apps'
                              ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
                              : 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                          }`}
                        >
                          <div className="flex items-center mb-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-3 ${
                              healthProfile.foodSource === 'Outside food' 
                                ? 'bg-red-500' 
                                : healthProfile.foodSource === 'Food delivery apps'
                                ? 'bg-yellow-500'
                                : 'bg-green-500'
                            }`}>
                              {healthProfile.foodSource === 'Outside food' ? (
                                <Truck className="w-5 h-5 text-white" />
                              ) : healthProfile.foodSource === 'Food delivery apps' ? (
                                <Monitor className="w-5 h-5 text-white" />
                              ) : (
                                <Home className="w-5 h-5 text-white" />
                              )}
                            </div>
                            <div>
                              <span className="font-bold text-gray-900 dark:text-white">
                                {healthProfile.foodSource}
                              </span>
                              <div className={`text-sm font-medium ${
                                healthProfile.foodSource === 'Outside food' 
                                  ? 'text-red-600 dark:text-red-400' 
                                  : healthProfile.foodSource === 'Food delivery apps'
                                  ? 'text-yellow-600 dark:text-yellow-400'
                                  : 'text-green-600 dark:text-green-400'
                              }`}>
                                {healthProfile.foodSource === 'Outside food' 
                                  ? 'High Risk' 
                                  : healthProfile.foodSource === 'Food delivery apps'
                                  ? 'Medium Risk'
                                  : 'Low Risk'}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            {healthProfile.foodSource === 'Outside food' 
                              ? 'Higher exposure to food adulteration and contamination. Consider home cooking for better health.'
                              : healthProfile.foodSource === 'Food delivery apps'
                              ? 'Moderate risk from packaging and preparation standards. Choose reputable restaurants.'
                              : 'Excellent choice! Home cooking provides better control over ingredients and nutrition.'}
                          </p>
                          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3">
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                              💡 HBX Recommendation: {healthProfile.foodSource === 'Home-cooked food' 
                                ? 'Continue your healthy cooking habits and focus on organic ingredients when possible.'
                                : 'Consider increasing home-cooked meals to 70% of your diet for optimal health benefits.'}
                            </span>
                          </div>
                        </motion.div>
                      </div>

                      {healthRiskResults && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Age-Specific Health Insights</h3>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.6 }}
                            className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800"
                          >
                            <div className="flex items-center mb-4">
                              <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center mr-3">
                                <User className="w-5 h-5 text-white" />
                              </div>
                              <span className="font-bold text-gray-900 dark:text-white">
                                Age Group: {healthRiskResults.ageGroup}
                              </span>
                            </div>
                            <div className="space-y-3">
                              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                  🎯 Focus Areas: {healthRiskResults.riskFactors.join(', ')}
                                </span>
                              </div>
                              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                  📊 Research Insight: {healthRiskResults.researchInsight}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* AI-Generated Health Insights & Recommendations */}
                {healthRiskResults && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-rose-900/20 rounded-3xl p-8 shadow-xl border border-purple-200 dark:border-purple-800"
                  >
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">AI-Generated Health Insights</h2>
                        <p className="text-gray-600 dark:text-gray-400">Personalized recommendations based on your profile</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Urgent Actions */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-2">
                            <span className="text-white text-xs font-bold">!</span>
                          </div>
                          Urgent Actions Required
                        </h3>
                        
                        <div className="space-y-3">
                          {healthRiskResults.urgentActions.map((action, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1.2 + index * 0.1 }}
                              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 border border-red-200 dark:border-red-800"
                            >
                              <div className="flex items-start">
                                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                                  <span className="text-white text-sm font-bold">{index + 1}</span>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                                    {action}
                                  </p>
                                  <div className="text-xs text-red-600 dark:text-red-400 font-medium">
                                    High Priority
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Personalized Recommendations */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                          Personalized Recommendations
                        </h3>
                        
                        <div className="space-y-3">
                          {healthRiskResults.recommendations.map((recommendation, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1.4 + index * 0.1 }}
                              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 border border-green-200 dark:border-green-800"
                            >
                              <div className="flex items-start">
                                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                                  <span className="text-white text-xs font-bold">✓</span>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                                    {recommendation}
                                  </p>
                                  <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                                    Recommended
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ------------------------------------------------------------------ */}
                {/* AyurGenX Store Recommendations (NEW) */}
                {/* ------------------------------------------------------------------ */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 }}
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl p-8 border border-emerald-200 dark:border-emerald-800 shadow-xl"
                >
                  <div className="flex items-center mb-6">
                     <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                       <ShoppingBag className="w-6 h-6 text-white" />
                     </div>
                     <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Recommended AyurGenX Products
                     </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {getStoreRecommendations(userProfile.goal, healthRiskResults).map(
                      (item, index) => (
                        <div
                          key={index}
                          className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                        >
                          <div className="flex justify-between items-start mb-2">
                             <div className="text-sm text-emerald-600 font-semibold bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-md">
                               {item.category}
                             </div>
                             {item.tag && (
                               <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                                 {item.tag}
                               </span>
                             )}
                          </div>
                          
                          <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                            {item.name}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            {item.benefit}
                          </p>

                          <Link to="/store" className="w-full py-2 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition flex items-center justify-center gap-2">
                            View in Store <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      )
                    )}
                  </div>
                </motion.div>

                {/* Additional Health Metrics */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Additional Health Metrics</h2>
                      <p className="text-gray-600 dark:text-gray-400">Complete health overview</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Water Intake */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4 }}
                      className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center mr-3">
                          <span className="text-white text-lg">💧</span>
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white">Water Intake</span>
                      </div>
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {Math.round((userProfile.weight || 70) * 35)} ml
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Daily recommendation based on your weight
                      </div>
                    </motion.div>

                    {/* BMI Status */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5 }}
                      className={`rounded-2xl p-6 border-2 ${
                        nutritionResults.bmiCategory === 'Normal weight' 
                          ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                          : nutritionResults.bmiCategory === 'Overweight'
                          ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
                          : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                      }`}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-3 ${
                          nutritionResults.bmiCategory === 'Normal weight' 
                            ? 'bg-green-500'
                            : nutritionResults.bmiCategory === 'Overweight'
                            ? 'bg-yellow-500'
                            : 'bg-red-500'
                        }`}>
                          <Gauge className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white">BMI Status</span>
                      </div>
                      <div className={`text-3xl font-bold mb-2 ${
                        nutritionResults.bmiCategory === 'Normal weight' 
                          ? 'text-green-600 dark:text-green-400'
                          : nutritionResults.bmiCategory === 'Overweight'
                          ? 'text-yellow-600 dark:text-yellow-400'
                          : 'text-red-600 dark:text-red-400'
                      }`}>
                        {nutritionResults.bmi}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {nutritionResults.bmiCategory}
                      </div>
                    </motion.div>

                    {/* Health Score */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.6 }}
                      className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mr-3">
                          <Heart className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white">Health Score</span>
                      </div>
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                        {(() => {
                          const healthScore = calculateHealthScore(userProfile as UserProfile, nutritionResults, healthRiskResults);
                          return Math.round(healthScore);
                        })()}/100
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {(() => {
                          const healthScore = calculateHealthScore(userProfile as UserProfile, nutritionResults, healthRiskResults);
                          return getHealthScoreDescription(healthScore);
                        })()}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* ------------------------------------------------------------------ */}
                {/* UPDATED: Why Choose AyurGenX Health (AyurGenX-grade) */}
                {/* ------------------------------------------------------------------ */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                      Why Choose AyurGenX Health
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                      AI-powered preventive healthcare — rooted in Ayurveda, validated by clinical science
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 1. AI + Medical Science */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6 }}
                      className="text-left p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          AI + Medical-Grade Health Science
                        </h3>
                      </div>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        Not formulas. Living intelligence.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 shrink-0"/> Multi-model metabolic calculations (BMR, TDEE, risk scoring)</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 shrink-0"/> Lifestyle risk assessment beyond BMI</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 shrink-0"/> Ayurvedic + clinical nutrition logic combined</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 shrink-0"/> Doctor-validated, research-backed health algorithms</li>
                      </ul>
                    </motion.div>

                    {/* 2. Deep Personalization */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.7 }}
                      className="text-left p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          Deep Personalization (Not Templates)
                        </h3>
                      </div>
                      <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">
                        Your body ≠ average human.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 shrink-0"/> Age, gender, body composition, lifestyle, food source</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 shrink-0"/> Dynamic recommendations that evolve with your data</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 shrink-0"/> Personalization extends to nutrition & wellness tools</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 shrink-0"/> One report → One unique health pathway</li>
                      </ul>
                    </motion.div>

                    {/* 3. Actionable Outcomes */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.8 }}
                      className="text-left p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          Actionable, Real-World Outcomes
                        </h3>
                      </div>
                      <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-3">
                        No PDFs. No theory.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0"/> Clear daily calorie & macro targets</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0"/> Food safety insights (home vs outside vs delivery)</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0"/> Direct product recommendations from AyurGenX Store</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0"/> Health actions mapped to real behavior change</li>
                      </ul>
                    </motion.div>

                    {/* 4. Trust & Care */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.9 }}
                      className="text-left p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          Trust, Privacy & Long-Term Care
                        </h3>
                      </div>
                      <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-3">
                        Built for life, not for clicks.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 shrink-0"/> Blockchain-secured health data (tamper-proof)</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 shrink-0"/> User-owned data privacy protocols</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 shrink-0"/> Preventive, not reactive healthcare approach</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 shrink-0"/> One ecosystem: report → guidance → products</li>
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              </>
            ) : nutritionResults ? (
              // Show partial report with nutrition data while health risks are being calculated
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Nutrition Profile Ready!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Finalizing your complete health assessment...
                  </p>
                </div>
                
                {/* Quick nutrition preview */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-6 max-w-md mx-auto">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {nutritionResults.targetCalories}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Daily Calories</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {nutritionResults.macros.protein.grams}g
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Protein</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        {nutritionResults.bmi}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">BMI</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400">Generating your personalized health report...</p>
              </div>
            )}
          </motion.div>
        );

      default:
        return null;
    }
  };

  // Render all questions in a single compact view
  const renderCompactForm = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Health Assessment
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Complete your profile for personalized recommendations
          </p>
        </div>

        {/* Compact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Basic Info */}
          <div className="space-y-4">
            {/* Diet Preference */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Diet Preference
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Vegetarian', 'Non-Vegetarian'].map((diet) => (
                  <button
                    key={diet}
                    onClick={() => handleHealthProfileChange('diet', diet)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all ${
                      healthProfile.diet === diet
                        ? 'bg-green-500 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {diet === 'Vegetarian' ? '🥬' : '🍖'} {diet.split('-')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Gender
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Male', 'Female'].map((gender) => (
                  <button
                    key={gender}
                    onClick={() => handleInputChange('gender', gender)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all ${
                      userProfile.gender === gender
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {gender === 'Male' ? '👨' : '👩'} {gender}
                  </button>
                ))}
              </div>
            </div>

            {/* Physical Metrics */}
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Age
                </label>
                <input
                  type="number"
                  min="16"
                  max="100"
                  value={userProfile.age || ''}
                  onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
                  className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="25"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Height (cm)
                </label>
                <input
                  type="number"
                  min="120"
                  max="250"
                  value={userProfile.height || ''}
                  onChange={(e) => handleInputChange('height', parseInt(e.target.value))}
                  className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="175"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  min="30"
                  max="300"
                  value={userProfile.weight || ''}
                  onChange={(e) => handleInputChange('weight', parseInt(e.target.value))}
                  className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="70"
                />
              </div>
            </div>

            {/* Goal */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Goal
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { name: 'weight_loss', label: 'Lose', emoji: '📉' },
                  { name: 'maintenance', label: 'Maintain', emoji: '⚖️' },
                  { name: 'weight_gain', label: 'Gain', emoji: '📈' }
                ].map((goal) => (
                  <button
                    key={goal.name}
                    onClick={() => handleInputChange('goal', goal.name)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all ${
                      userProfile.goal === goal.name
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {goal.emoji} {goal.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Activity Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Activity Level
              </label>
              <select
                value={userProfile.activityLevel || ''}
                onChange={(e) => handleInputChange('activityLevel', e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select activity level</option>
                <option value="Sedentary">🪑 Sedentary (desk job)</option>
                <option value="Light Activity">🚶 Light Activity (1-3 days/week)</option>
                <option value="Moderate Activity">🏃 Moderate (3-5 days/week)</option>
                <option value="Very Active">💪 Very Active (6-7 days/week)</option>
                <option value="Extremely Active">🏋️ Extremely Active (2x/day)</option>
              </select>
            </div>
          </div>

          {/* Right Column - Health Profile */}
          <div className="space-y-4">
            {/* Body Fat */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Body Fat Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Low', 'Medium', 'High'].map((level) => (
                  <button
                    key={level}
                    onClick={() => handleHealthProfileChange('bodyFat', level)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all ${
                      healthProfile.bodyFat === level
                        ? 'bg-purple-500 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {level === 'Low' ? '💪' : level === 'Medium' ? '👤' : '🫃'} {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Activity Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Primary Activity
              </label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { name: 'Sedentary', emoji: '🪑' },
                  { name: 'Light Activity', emoji: '🚶' },
                  { name: 'Gym / Sports Daily', emoji: '🏋️' }
                ].map((activity) => (
                  <button
                    key={activity.name}
                    onClick={() => handleHealthProfileChange('activity', activity.name)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all ${
                      healthProfile.activity === activity.name
                        ? 'bg-indigo-500 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {activity.emoji} {activity.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Food Source */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Primary Food Source
              </label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { name: 'Home-cooked food', emoji: '🏠' },
                  { name: 'Outside food', emoji: '🍽️' },
                  { name: 'Food delivery apps', emoji: '🚚' }
                ].map((source) => (
                  <button
                    key={source.name}
                    onClick={() => handleHealthProfileChange('foodSource', source.name)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all ${
                      healthProfile.foodSource === source.name
                        ? 'bg-green-500 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {source.emoji} {source.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Lifestyle Factors */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Smoke/Drink
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Yes', 'No'].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleHealthProfileChange('smokeDrink', option)}
                      className={`p-2 rounded-lg text-sm font-medium transition-all ${
                        healthProfile.smokeDrink === option
                          ? 'bg-red-500 text-white shadow-md'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {option === 'Yes' ? '🚬' : '🚭'} {option}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Long Sitting
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Yes', 'No'].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleHealthProfileChange('longSittingHours', option)}
                      className={`p-2 rounded-lg text-sm font-medium transition-all ${
                        healthProfile.longSittingHours === option
                          ? 'bg-pulse-coral text-white shadow-md'
                          : 'bg-gray-100 dark:bg-gray-700 text-brand-gray dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {option === 'Yes' ? '💺' : '🚶'} {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* BMI Preview */}
            {userProfile.height && userProfile.weight && (
              <div className="bg-clinical-white dark:bg-gray-800 rounded-lg p-4 border border-bio-tech-blue/30 dark:border-bio-tech-blue/40">
                <div className="text-center">
                  <div className="text-sm text-bio-tech-blue dark:text-bio-tech-blue mb-1">Your BMI</div>
                  <div className="text-2xl font-bold text-bio-tech-blue dark:text-bio-tech-blue">
                    {((userProfile.weight / ((userProfile.height / 100) ** 2))).toFixed(1)}
                  </div>
                  <div className="text-xs text-brand-gray dark:text-gray-400">
                    {(() => {
                      const bmi = userProfile.weight / ((userProfile.height / 100) ** 2);
                      if (bmi < 18.5) return 'Underweight';
                      if (bmi < 25) return 'Normal weight';
                      if (bmi < 30) return 'Overweight';
                      return 'Obese';
                    })()}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Generate Report Button */}
        <div className="text-center pt-4">
          <button
            onClick={() => {
              const results = calculateNutritionProfile(userProfile as UserProfile);
              const bmrMifflin = calculateBMR(userProfile as UserProfile);
              const bmrHarris = calculateBMRHarrisBenedict(userProfile as UserProfile);
              const tdee = calculateTDEE(userProfile as UserProfile);
              const enhancedResults = {
                ...results,
                detailedCalories: {
                  bmrMifflin,
                  bmrHarris,
                  tdee,
                  targetCalories: results.targetCalories,
                  calorieDeficit: userProfile.goal === 'weight_loss' ? tdee - results.targetCalories : 0,
                  calorieSurplus: userProfile.goal === 'weight_gain' ? results.targetCalories - tdee : 0,
                  activityCalories: tdee - bmrMifflin,
                  restingMetabolism: bmrMifflin
                }
              };
              setNutritionResults(enhancedResults);
              setCurrentStep(8);
            }}
            disabled={!userProfile.age || !userProfile.gender || !userProfile.height || !userProfile.weight || !userProfile.activityLevel || !userProfile.goal}
            className="px-8 py-3 bg-pulse-coral text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            Generate Health Report
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>

            {/* Content */}
            <div className="p-6">
              {renderStepContent()}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default HealthReportPopup;
