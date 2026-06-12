import React from 'react';
import { motion } from 'framer-motion';
import { Info, TrendingUp, Award, Zap } from 'lucide-react';

interface NutrientInfo {
  calories?: number;
  carbs?: number;
  protein?: number;
  fiber?: number;
  fat?: number;
  minerals?: string;
  note?: string;
}

interface NutrientCardProps {
  name: string;
  description: string;
  nutrients: NutrientInfo;
  index: number;
}

const NutrientCard: React.FC<NutrientCardProps> = ({ name, description, nutrients, index }) => {
  // Calculate nutritional density score (higher is better)
  const calculateNutritionalScore = () => {
    const protein = nutrients.protein || 0;
    const fiber = nutrients.fiber || 0;
    const calories = nutrients.calories || 1;
    
    // Enhanced scoring algorithm
    // Protein: 4 points per gram (muscle building)
    // Fiber: 3 points per gram (digestive health)
    // Penalty for high calories without nutrients
    const proteinScore = protein * 4;
    const fiberScore = fiber * 3;
    const calorieEfficiency = (proteinScore + fiberScore) / calories;
    
    return Math.round(calorieEfficiency * 100);
  };

  // Calculate protein efficiency (protein per 100 calories)
  const calculateProteinEfficiency = () => {
    const protein = nutrients.protein || 0;
    const calories = nutrients.calories || 1;
    return ((protein * 4) / calories * 100).toFixed(1);
  };

  // Calculate fiber density (fiber per 100 calories)
  const calculateFiberDensity = () => {
    const fiber = nutrients.fiber || 0;
    const calories = nutrients.calories || 1;
    return (fiber / calories * 100).toFixed(2);
  };

  // Calculate macronutrient distribution
  const calculateMacroDistribution = () => {
    const protein = nutrients.protein || 0;
    const carbs = nutrients.carbs || 0;
    const fat = nutrients.fat || 0;
    
    const proteinCals = protein * 4;
    const carbCals = carbs * 4;
    const fatCals = fat * 9;
    const totalCals = proteinCals + carbCals + fatCals;
    
    if (totalCals === 0) return { protein: 0, carbs: 0, fat: 0 };
    
    return {
      protein: Math.round((proteinCals / totalCals) * 100),
      carbs: Math.round((carbCals / totalCals) * 100),
      fat: Math.round((fatCals / totalCals) * 100)
    };
  };

  const nutritionalScore = calculateNutritionalScore();
  const proteinEfficiency = calculateProteinEfficiency();
  const fiberDensity = calculateFiberDensity();
  const macroDistribution = calculateMacroDistribution();

  // Get score color and label based on nutritional density
  const getScoreColor = (score: number) => {
    if (score >= 20) return { color: 'text-green-600 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-900/30' };
    if (score >= 15) return { color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/30' };
    if (score >= 10) return { color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-100 dark:bg-yellow-900/30' };
    return { color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-100 dark:bg-orange-900/30' };
  };

  const getScoreLabel = (score: number) => {
    if (score >= 20) return 'Excellent';
    if (score >= 15) return 'Very Good';
    if (score >= 10) return 'Good';
    return 'Moderate';
  };

  const scoreStyle = getScoreColor(nutritionalScore);

  // Get nutrient level indicators
  const getNutrientLevel = (value: number, type: 'protein' | 'fiber' | 'fat') => {
    switch (type) {
      case 'protein':
        if (value >= 20) return { level: 'High', color: 'text-green-600 dark:text-green-400' };
        if (value >= 10) return { level: 'Moderate', color: 'text-yellow-600 dark:text-yellow-400' };
        return { level: 'Low', color: 'text-gray-600 dark:text-gray-400' };
      case 'fiber':
        if (value >= 10) return { level: 'High', color: 'text-green-600 dark:text-green-400' };
        if (value >= 5) return { level: 'Moderate', color: 'text-yellow-600 dark:text-yellow-400' };
        return { level: 'Low', color: 'text-gray-600 dark:text-gray-400' };
      case 'fat':
        if (value <= 2) return { level: 'Low', color: 'text-green-600 dark:text-green-400' };
        if (value <= 5) return { level: 'Moderate', color: 'text-yellow-600 dark:text-yellow-400' };
        return { level: 'High', color: 'text-orange-600 dark:text-orange-400' };
      default:
        return { level: '', color: '' };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      {/* Header */}
      <div className="p-5 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-2">
          <Info className="w-5 h-5 mr-2 text-green-500" />
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 dark:text-gray-400">Nutritional Quality</span>
          <div className={`px-2 py-1 rounded-full text-xs font-semibold ${scoreStyle.bg} ${scoreStyle.color}`}>
            {getScoreLabel(nutritionalScore)} ({nutritionalScore})
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex-grow">
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>
        
        {/* Main Nutrients */}
        <div className="space-y-3 mb-4">
          {nutrients.calories !== undefined && (
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Calories:</span>
              <div className="flex items-center">
                <span className="text-sm text-gray-900 dark:text-white font-semibold mr-2">{nutrients.calories} kcal</span>
                <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min((nutrients.calories / 400) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          
          {nutrients.protein !== undefined && (
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Protein:</span>
              <div className="flex items-center">
                <span className="text-sm text-gray-900 dark:text-white font-semibold mr-2">{nutrients.protein}g</span>
                <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min((nutrients.protein / 30) * 100, 100)}%` }}
                  ></div>
                </div>
                <span className={`text-xs ml-2 ${getNutrientLevel(nutrients.protein, 'protein').color}`}>
                  {getNutrientLevel(nutrients.protein, 'protein').level}
                </span>
              </div>
            </div>
          )}
          
          {nutrients.carbs !== undefined && (
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Carbs:</span>
              <div className="flex items-center">
                <span className="text-sm text-gray-900 dark:text-white font-semibold mr-2">{nutrients.carbs}g</span>
                <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-purple-500 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min((nutrients.carbs / 80) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          
          {nutrients.fiber !== undefined && (
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Fiber:</span>
              <div className="flex items-center">
                <span className="text-sm text-gray-900 dark:text-white font-semibold mr-2">{nutrients.fiber}g</span>
                <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-yellow-500 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min((nutrients.fiber / 20) * 100, 100)}%` }}
                  ></div>
                </div>
                <span className={`text-xs ml-2 ${getNutrientLevel(nutrients.fiber, 'fiber').color}`}>
                  {getNutrientLevel(nutrients.fiber, 'fiber').level}
                </span>
              </div>
            </div>
          )}
          
          {nutrients.fat !== undefined && (
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Fat:</span>
              <div className="flex items-center">
                <span className="text-sm text-gray-900 dark:text-white font-semibold mr-2">{nutrients.fat}g</span>
                <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-orange-500 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min((nutrients.fat / 10) * 100, 100)}%` }}
                  ></div>
                </div>
                <span className={`text-xs ml-2 ${getNutrientLevel(nutrients.fat, 'fat').color}`}>
                  {getNutrientLevel(nutrients.fat, 'fat').level}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Efficiency Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
            <div className="flex items-center mb-1">
              <TrendingUp className="w-3 h-3 text-blue-500 mr-1" />
              <span className="text-xs font-medium text-blue-800 dark:text-blue-300">Protein Efficiency</span>
            </div>
            <div className="text-sm font-bold text-blue-700 dark:text-blue-400">{proteinEfficiency}%</div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3">
            <div className="flex items-center mb-1">
              <Zap className="w-3 h-3 text-yellow-500 mr-1" />
              <span className="text-xs font-medium text-yellow-800 dark:text-yellow-300">Fiber Density</span>
            </div>
            <div className="text-sm font-bold text-yellow-700 dark:text-yellow-400">{fiberDensity}</div>
          </div>
        </div>

        {/* Macronutrient Distribution */}
        {(nutrients.protein || nutrients.carbs || nutrients.fat) && (
          <div className="mb-4">
            <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">Macro Distribution</div>
            <div className="flex rounded-full overflow-hidden h-2 bg-gray-200 dark:bg-gray-700">
              {macroDistribution.protein > 0 && (
                <div 
                  className="bg-green-500" 
                  style={{ width: `${macroDistribution.protein}%` }}
                  title={`Protein: ${macroDistribution.protein}%`}
                ></div>
              )}
              {macroDistribution.carbs > 0 && (
                <div 
                  className="bg-purple-500" 
                  style={{ width: `${macroDistribution.carbs}%` }}
                  title={`Carbs: ${macroDistribution.carbs}%`}
                ></div>
              )}
              {macroDistribution.fat > 0 && (
                <div 
                  className="bg-orange-500" 
                  style={{ width: `${macroDistribution.fat}%` }}
                  title={`Fat: ${macroDistribution.fat}%`}
                ></div>
              )}
            </div>
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>P: {macroDistribution.protein}%</span>
              <span>C: {macroDistribution.carbs}%</span>
              <span>F: {macroDistribution.fat}%</span>
            </div>
          </div>
        )}
        
        {/* Minerals */}
        {nutrients.minerals && (
          <div className="mb-4 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-l-4 border-indigo-400">
            <span className="text-xs font-medium text-indigo-800 dark:text-indigo-300">Key Minerals:</span>
            <p className="text-xs text-indigo-700 dark:text-indigo-400 mt-1">{nutrients.minerals}</p>
          </div>
        )}
        
        {/* Note */}
        {nutrients.note && (
          <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-400">
            <p className="text-xs text-amber-800 dark:text-amber-300">
              <span className="font-medium">Note:</span> {nutrients.note}
            </p>
          </div>
        )}

        {/* Nutritional highlights */}
        <div className="flex flex-wrap gap-2">
          {nutrients.protein && nutrients.protein >= 20 && (
            <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full font-medium flex items-center">
              <Award className="w-3 h-3 mr-1" />
              High Protein
            </span>
          )}
          {nutrients.fiber && nutrients.fiber >= 10 && (
            <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs rounded-full font-medium flex items-center">
              <Zap className="w-3 h-3 mr-1" />
              High Fiber
            </span>
          )}
          {nutrients.fat !== undefined && nutrients.fat <= 2 && (
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full font-medium">
              Low Fat
            </span>
          )}
          {nutritionalScore >= 20 && (
            <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded-full font-medium flex items-center">
              <Award className="w-3 h-3 mr-1" />
              Superfood
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default NutrientCard;

