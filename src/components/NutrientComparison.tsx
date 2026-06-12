import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, BarChart2, TrendingUp, Award, Target, Info, Zap } from 'lucide-react';

interface NutrientInfo {
  calories?: number;
  carbs?: number;
  protein?: number;
  fiber?: number;
  fat?: number;
  minerals?: string;
  note?: string;
}

interface FoodItem {
  name: string;
  description: string;
  nutrients: NutrientInfo;
}

interface NutrientComparisonProps {
  items: FoodItem[];
  onClose: () => void;
}

const NutrientComparison: React.FC<NutrientComparisonProps> = ({ items, onClose }) => {
  const [selectedNutrient, setSelectedNutrient] = useState<'calories' | 'carbs' | 'protein' | 'fiber' | 'fat'>('calories');
  const [viewMode, setViewMode] = useState<'chart' | 'table' | 'analysis'>('chart');

  // Enhanced nutritional calculations
  const calculateNutritionalScore = (item: FoodItem) => {
    const protein = item.nutrients.protein || 0;
    const fiber = item.nutrients.fiber || 0;
    const calories = item.nutrients.calories || 1;
    
    // Enhanced scoring: protein efficiency + fiber density + micronutrient bonus
    const proteinScore = (protein * 4) / calories * 100;
    const fiberScore = (fiber / calories) * 100;
    const micronutrientBonus = item.nutrients.minerals ? 5 : 0;
    
    return proteinScore + fiberScore + micronutrientBonus;
  };

  // Calculate protein efficiency (protein calories per 100 total calories)
  const getProteinEfficiency = (item: FoodItem) => {
    const protein = item.nutrients.protein || 0;
    const calories = item.nutrients.calories || 1;
    return ((protein * 4) / calories * 100).toFixed(1);
  };

  // Calculate fiber density (fiber per 100 calories)
  const getFiberDensity = (item: FoodItem) => {
    const fiber = item.nutrients.fiber || 0;
    const calories = item.nutrients.calories || 1;
    return (fiber / calories * 100).toFixed(2);
  };

  // Calculate macronutrient ratios
  const getMacroRatios = (item: FoodItem) => {
    const protein = item.nutrients.protein || 0;
    const carbs = item.nutrients.carbs || 0;
    const fat = item.nutrients.fat || 0;
    
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

  // Get max values for each nutrient type for scaling
  const maxValues = {
    calories: Math.max(...items.map(item => item.nutrients.calories || 0)),
    carbs: Math.max(...items.map(item => item.nutrients.carbs || 0)),
    protein: Math.max(...items.map(item => item.nutrients.protein || 0)),
    fiber: Math.max(...items.map(item => item.nutrients.fiber || 0)),
    fat: Math.max(...items.map(item => item.nutrients.fat || 0))
  };

  // Generate colors for items
  const getItemColor = (index: number) => {
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-yellow-500', 
      'bg-red-500', 'bg-indigo-500', 'bg-pink-500', 'bg-teal-500'
    ];
    return colors[index % colors.length];
  };

  const getItemBorderColor = (index: number) => {
    const colors = [
      'border-blue-500', 'border-green-500', 'border-purple-500', 'border-yellow-500', 
      'border-red-500', 'border-indigo-500', 'border-pink-500', 'border-teal-500'
    ];
    return colors[index % colors.length];
  };

  const getItemTextColor = (index: number) => {
    const colors = [
      'text-blue-600', 'text-green-600', 'text-purple-600', 'text-yellow-600', 
      'text-red-600', 'text-indigo-600', 'text-pink-600', 'text-teal-600'
    ];
    return colors[index % colors.length];
  };

  // Sort items by selected nutrient
  const sortedItems = [...items].sort((a, b) => {
    const aValue = a.nutrients[selectedNutrient] || 0;
    const bValue = b.nutrients[selectedNutrient] || 0;
    return bValue - aValue;
  });

  // Find the best item for each category
  const getBestItems = () => {
    const bestProtein = items.reduce((best, current) => 
      (current.nutrients.protein || 0) > (best.nutrients.protein || 0) ? current : best
    );
    
    const bestFiber = items.reduce((best, current) => 
      (current.nutrients.fiber || 0) > (best.nutrients.fiber || 0) ? current : best
    );
    
    const lowestCalories = items.reduce((best, current) => 
      (current.nutrients.calories || Infinity) < (best.nutrients.calories || Infinity) ? current : best
    );
    
    const lowestFat = items.reduce((best, current) => 
      (current.nutrients.fat || Infinity) < (best.nutrients.fat || Infinity) ? current : best
    );

    const bestOverall = items.reduce((best, current) => 
      calculateNutritionalScore(current) > calculateNutritionalScore(best) ? current : best
    );

    return { bestProtein, bestFiber, lowestCalories, lowestFat, bestOverall };
  };

  const bestItems = getBestItems();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-clinical-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-7xl w-full max-h-[95vh] overflow-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-clinical-white dark:bg-gray-800 border-b border-light-gray dark:border-gray-700 p-6 flex justify-between items-center rounded-t-2xl z-10">
          <div className="flex items-center">
            <BarChart2 className="w-8 h-8 text-vitality-teal mr-3" />
            <div>
              <h2 className="text-2xl font-bold text-brand-gray dark:text-white">
                Advanced Nutrient Comparison
              </h2>
              <p className="text-brand-gray dark:text-gray-400">
                Comprehensive analysis of {items.length} food items
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-brand-gray hover:text-brand-gray/80 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* View Mode Selector */}
          <div className="flex flex-wrap gap-2 mb-6">
            {(['chart', 'table', 'analysis'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  viewMode === mode
                    ? 'bg-vitality-teal text-white shadow-lg'
                    : 'bg-light-gray dark:bg-gray-700 text-brand-gray dark:text-gray-300 hover:bg-light-gray dark:hover:bg-gray-600'
                }`}
              >
                {mode.charAt(0).toUpperCase() + mode.slice(1)} View
              </button>
            ))}
          </div>

          {/* Legend */}
          <div className="mb-8 bg-clinical-white dark:bg-gray-900 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-brand-gray dark:text-white">Items Being Compared</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {items.map((item, index) => (
                <div key={index} className="flex items-center p-2 bg-clinical-white dark:bg-gray-800 rounded-lg">
                  <div className={`w-4 h-4 rounded-full ${getItemColor(index)} mr-2 flex-shrink-0`}></div>
                  <span className="text-sm font-medium text-brand-gray dark:text-gray-300 truncate">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {viewMode === 'chart' && (
            <>
              {/* Nutrient Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-brand-gray dark:text-white">Select Nutrient to Compare</h3>
                <div className="flex flex-wrap gap-2">
                  {(['calories', 'carbs', 'protein', 'fiber', 'fat'] as const).map((nutrient) => (
                    <button
                      key={nutrient}
                      onClick={() => setSelectedNutrient(nutrient)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedNutrient === nutrient
                          ? 'bg-vitality-teal text-white'
                          : 'bg-light-gray dark:bg-gray-700 text-brand-gray dark:text-gray-300 hover:bg-light-gray dark:hover:bg-gray-600'
                      }`}
                    >
                      {nutrient.charAt(0).toUpperCase() + nutrient.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Comparison Chart */}
              <div className="bg-clinical-white dark:bg-gray-900 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4 text-brand-gray dark:text-white flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-vitality-teal" />
                  {selectedNutrient.charAt(0).toUpperCase() + selectedNutrient.slice(1)} Comparison
                </h3>
                <div className="space-y-4">
                  {sortedItems.map((item, index) => {
                    const originalIndex = items.findIndex(i => i.name === item.name);
                    const value = item.nutrients[selectedNutrient] || 0;
                    const maxValue = maxValues[selectedNutrient];
                    const percentage = maxValue > 0 ? (value / maxValue) * 100 : 0;
                    
                    return (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className={`w-3 h-3 rounded-full ${getItemColor(originalIndex)} mr-2`}></div>
                            <span className="text-sm font-medium text-brand-gray dark:text-gray-300">{item.name}</span>
                         </div>
                          <span className="text-sm font-bold text-brand-gray dark:text-white">
                            {value}{selectedNutrient === 'calories' ? ' kcal' : 'g'}
                          </span>
                        </div>
                        <div className="w-full bg-light-gray dark:bg-gray-700 rounded-full h-4 relative overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className={`h-4 rounded-full ${getItemColor(originalIndex)} transition-all duration-500`}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-medium text-white mix-blend-difference">
                              {percentage.toFixed(1)}%
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {viewMode === 'table' && (
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Detailed Nutritional Breakdown (per 100g)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Food Item</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Calories</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Protein (g)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Carbs (g)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Fiber (g)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Fat (g)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Protein Eff.</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Score</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {items.map((item, index) => {
                      const score = calculateNutritionalScore(item);
                      const proteinEff = getProteinEfficiency(item);
                      
                      return (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900/50' : ''}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className={`w-3 h-3 rounded-full ${getItemColor(index)} mr-3`}></div>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white font-semibold">
                            {item.nutrients.calories || 'N/A'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                            {item.nutrients.protein || 'N/A'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                            {item.nutrients.carbs || 'N/A'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                            {item.nutrients.fiber || 'N/A'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                            {item.nutrients.fat || 'N/A'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-600 dark:text-blue-400">
                            {proteinEff}%
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600 dark:text-green-400">
                            {score.toFixed(1)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {viewMode === 'analysis' && (
            <>
              {/* Nutritional Quality Ranking */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-500" />
                  Nutritional Quality Ranking
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {items
                    .map((item, index) => ({ item, index, score: calculateNutritionalScore(item) }))
                    .sort((a, b) => b.score - a.score)
                    .map(({ item, index, score }, rank) => (
                      <div key={index} className={`p-4 rounded-lg border-2 ${getItemBorderColor(index)} bg-white dark:bg-gray-800 relative`}>
                        {rank === 0 && (
                          <div className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                            👑
                          </div>
                        )}
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center">
                            <span className="text-2xl font-bold text-gray-400 mr-2">#{rank + 1}</span>
                            <span className="font-medium text-gray-900 dark:text-white">{item.name}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{score.toFixed(1)}</div>
                            <div className="text-xs text-gray-500">Quality Score</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div>
                            <span className="text-gray-600 dark:text-gray-400">Protein Eff:</span>
                            <div className="font-semibold">{getProteinEfficiency(item)}%</div>
                          </div>
                          <div>
                            <span className="text-gray-600 dark:text-gray-400">Fiber Density:</span>
                            <div className="font-semibold">{getFiberDensity(item)}</div>
                          </div>
                          <div>
                            <span className="text-gray-600 dark:text-gray-400">Minerals:</span>
                            <div className="font-semibold">{item.nutrients.minerals ? '✓' : '✗'}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Best In Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                  <div className="flex items-center mb-3">
                    <Target className="w-5 h-5 text-green-500 mr-2" />
                    <span className="font-semibold text-green-800 dark:text-green-300">Best for Protein</span>
                  </div>
                  <div className="text-lg font-bold text-green-700 dark:text-green-400">{bestItems.bestProtein.name}</div>
                  <div className="text-sm text-green-600 dark:text-green-500">
                    {bestItems.bestProtein.nutrients.protein}g protein per 100g
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-center mb-3">
                    <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="font-semibold text-yellow-800 dark:text-yellow-300">Best for Fiber</span>
                  </div>
                  <div className="text-lg font-bold text-yellow-700 dark:text-yellow-400">{bestItems.bestFiber.name}</div>
                  <div className="text-sm text-yellow-600 dark:text-yellow-500">
                    {bestItems.bestFiber.nutrients.fiber}g fiber per 100g
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="w-5 h-5 text-blue-500 mr-2" />
                    <span className="font-semibold text-blue-800 dark:text-blue-300">Lowest Calories</span>
                  </div>
                  <div className="text-lg font-bold text-blue-700 dark:text-blue-400">{bestItems.lowestCalories.name}</div>
                  <div className="text-sm text-blue-600 dark:text-blue-500">
                    {bestItems.lowestCalories.nutrients.calories} kcal per 100g
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Recommendations */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
            <h3 className="text-lg font-semibold mb-4 text-indigo-900 dark:text-indigo-300 flex items-center">
              <Info className="w-5 h-5 mr-2 text-indigo-500" />
              Smart Recommendations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-indigo-800 dark:text-indigo-300 mb-2">For Muscle Building:</h4>
                <p className="text-sm text-indigo-700 dark:text-indigo-400 mb-2">
                  Choose <strong>{bestItems.bestProtein.name}</strong> for highest protein content
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-500">
                  Protein efficiency: {getProteinEfficiency(bestItems.bestProtein)}% of calories from protein
                </p>
              </div>
              <div>
                <h4 className="font-medium text-indigo-800 dark:text-indigo-300 mb-2">For Digestive Health:</h4>
                <p className="text-sm text-indigo-700 dark:text-indigo-400 mb-2">
                  Choose <strong>{bestItems.bestFiber.name}</strong> for optimal fiber intake
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-500">
                  Fiber density: {getFiberDensity(bestItems.bestFiber)} fiber per 100 calories
                </p>
              </div>
              <div>
                <h4 className="font-medium text-indigo-800 dark:text-indigo-300 mb-2">For Weight Management:</h4>
                <p className="text-sm text-indigo-700 dark:text-indigo-400 mb-2">
                  Choose <strong>{bestItems.lowestCalories.name}</strong> for calorie control
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-500">
                  Lowest caloric density while maintaining nutrients
                </p>
              </div>
              <div>
                <h4 className="font-medium text-indigo-800 dark:text-indigo-300 mb-2">Overall Best Choice:</h4>
                <p className="text-sm text-indigo-700 dark:text-indigo-400 mb-2">
                  <strong>{bestItems.bestOverall.name}</strong> offers the best nutritional balance
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-500">
                  Highest overall nutritional quality score: {calculateNutritionalScore(bestItems.bestOverall).toFixed(1)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NutrientComparison;
