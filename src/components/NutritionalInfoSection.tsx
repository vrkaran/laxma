import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Info, Grid, List, BarChart2, Plus, Check, X, Calculator } from 'lucide-react';
import NutrientCard from './NutrientCard';
import NutrientComparison from './NutrientComparison';
import HealthReportPopup from './HealthReportPopup';

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

interface FoodCategoryProps {
  title: string;
  description: string;
  items: FoodItem[];
  selectedForComparison?: FoodItem[];
  toggleItemSelection?: (item: FoodItem) => void;
  isItemSelected?: (item: FoodItem) => boolean;
}

const FoodCategory: React.FC<FoodCategoryProps> = ({ title, description, items, selectedForComparison, toggleItemSelection, isItemSelected }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8 bg-clinical-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div 
        className="p-6 cursor-pointer flex justify-between items-center hover:bg-light-gray dark:hover:bg-gray-700 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <h3 className="text-xl font-bold text-brand-gray dark:text-white flex items-center">
            <Info className="w-5 h-5 mr-2 text-green-500" />
            {title}
          </h3>
          <p className="text-brand-gray dark:text-gray-400 mt-1">{description}</p>
        </div>
        <div className="flex items-center">
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 text-green-500" />
            ) : (
              <ChevronDown className="w-6 h-6 text-green-500" />
            )}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-light-gray dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-900">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-brand-gray dark:text-gray-400 uppercase tracking-wider">Name</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-brand-gray dark:text-gray-400 uppercase tracking-wider">Description</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-brand-gray dark:text-gray-400 uppercase tracking-wider">Nutritional Value (per 100g)</th>
                      {toggleItemSelection && (
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-brand-gray dark:text-gray-400 uppercase tracking-wider">Compare</th>
                      )}
                    </tr>
                  </thead>
                  <tbody className="bg-clinical-white dark:bg-gray-800 divide-y divide-light-gray dark:divide-gray-700">
                    {items.map((item, index) => (
                      <motion.tr 
                        key={index} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`${index % 2 === 0 ? 'bg-light-gray dark:bg-gray-900/50' : ''} hover:bg-light-gray dark:hover:bg-gray-700 transition-colors`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-brand-gray dark:text-white">{item.name}</td>
                        <td className="px-6 py-4 text-sm text-brand-gray dark:text-gray-400">{item.description}</td>
                        <td className="px-6 py-4 text-sm text-brand-gray dark:text-gray-400">
                          <ul className="list-disc pl-5 space-y-1">
                            {item.nutrients.calories !== undefined && <li>Calories: <span className="font-semibold text-brand-gray dark:text-white">{item.nutrients.calories} kcal</span></li>}
                            {item.nutrients.carbs !== undefined && <li>Carbs: <span className="font-semibold text-brand-gray dark:text-white">{item.nutrients.carbs}g</span></li>}
                            {item.nutrients.protein !== undefined && <li>Protein: <span className="font-semibold text-brand-gray dark:text-white">{item.nutrients.protein}g</span></li>}
                            {item.nutrients.fiber !== undefined && <li>Fiber: <span className="font-semibold text-brand-gray dark:text-white">{item.nutrients.fiber}g</span></li>}
                            {item.nutrients.fat !== undefined && <li>Fat: <span className="font-semibold text-brand-gray dark:text-white">{item.nutrients.fat}g</span></li>}
                            {item.nutrients.minerals && <li>Minerals: <span className="text-vitality-teal dark:text-vitality-teal">{item.nutrients.minerals}</span></li>}
                            {item.nutrients.note && <li className="text-vitality-teal dark:text-vitality-teal font-medium">Note: {item.nutrients.note}</li>}
                          </ul>
                        </td>
                        {toggleItemSelection && isItemSelected && (
                          <td className="px-6 py-4 text-sm text-center">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleItemSelection(item);
                              }}
                              className={`p-2 rounded-full transition-all duration-200 ${isItemSelected(item) 
                                ? 'bg-vitality-teal text-white shadow-lg scale-110' 
                                : 'bg-light-gray dark:bg-gray-700 text-brand-gray dark:text-gray-300 hover:bg-light-gray dark:hover:bg-gray-600'}`}
                              title={isItemSelected(item) ? "Remove from comparison" : "Add to comparison"}
                            >
                              {isItemSelected(item) ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </button>
                          </td>
                        )}
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NutritionalInfoSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');
  const [searchTerm, setSearchTerm] = useState('');
  const [showHealthReport, setShowHealthReport] = useState(false);
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  
  // State for comparison feature
  const [selectedForComparison, setSelectedForComparison] = useState<FoodItem[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  
  // Enhanced food items data with more accurate nutritional values
  const grainsAndCereals: FoodItem[] = [
    {
      name: 'Brown Rice',
      description: 'Whole grain rice with the bran and germ intact. High in fiber and nutrients.',
      nutrients: {
        calories: 362,
        carbs: 76,
        protein: 7.2,
        fiber: 3.4,
        fat: 2.3,
        minerals: 'Rich in Manganese (88% DV), Magnesium (21% DV), Selenium (27% DV)'
      }
    },
    {
      name: 'Parboiled Rice (Ukda)',
      description: 'Rice that has been partially boiled in the husk. Retains more nutrients than white rice.',
      nutrients: {
        calories: 349,
        carbs: 78.2,
        protein: 7.1,
        fiber: 1.4,
        fat: 0.6,
        note: 'Higher in B vitamins than polished white rice, better glycemic control'
      }
    },
    {
      name: 'Polished White Rice',
      description: 'Milled rice with the husk, bran, and germ removed. Lower in nutrients and fiber.',
      nutrients: {
        calories: 356,
        carbs: 79.3,
        protein: 6.6,
        fiber: 0.6,
        fat: 0.6,
        note: 'Quick energy source but lower in micronutrients'
      }
    },
    {
      name: 'Shali Rice (Traditional)',
      description: 'A traditional variety of winter rice. Similar to unpolished or brown rice.',
      nutrients: {
        calories: 345,
        carbs: 72.8,
        protein: 7.5,
        fiber: 2.8,
        fat: 1.8,
        minerals: 'Traditional variety with better mineral retention'
      }
    },
    {
      name: 'Basmati Rice (Aged)',
      description: 'Aromatic long-grain rice. Typically consumed as white rice.',
      nutrients: {
        calories: 354,
        carbs: 78.1,
        protein: 8.1,
        fiber: 0.7,
        fat: 0.5,
        note: 'Lower glycemic index (50-58) compared to other white rice varieties'
      }
    },
    {
      name: 'Quinoa',
      description: 'Complete protein grain-like seed, gluten-free superfood.',
      nutrients: {
        calories: 368,
        carbs: 64.2,
        protein: 14.1,
        fiber: 7.0,
        fat: 6.1,
        minerals: 'Complete protein, rich in Iron, Magnesium, Phosphorus'
      }
    }
  ];
  
  const dalsAndLegumes: FoodItem[] = [
    {
      name: 'Moong Dal (Split)',
      description: 'Split yellow lentils that are easy to digest and cook quickly.',
      nutrients: {
        calories: 347,
        carbs: 59.0,
        protein: 24.5,
        fiber: 16.3,
        fat: 1.2,
        minerals: 'Rich in Folate (625 mcg), Manganese, Phosphorus, Potassium'
      }
    },
    {
      name: 'Toor Dal (Arhar)',
      description: 'Split pigeon peas commonly used in South Indian dishes.',
      nutrients: {
        calories: 343,
        carbs: 57.2,
        protein: 22.3,
        fiber: 15.5,
        fat: 1.5,
        minerals: 'High in Folate, Potassium (1392mg), Magnesium, Iron'
      }
    },
    {
      name: 'Masoor Dal (Red Lentils)',
      description: 'Red lentils that cook quickly and have a mild flavor.',
      nutrients: {
        calories: 352,
        carbs: 60.1,
        protein: 25.8,
        fiber: 10.7,
        fat: 1.1,
        minerals: 'Excellent source of Iron (6.5mg), Folate, B vitamins'
      }
    },
    {
      name: 'Chana Dal (Bengal Gram)',
      description: 'Split chickpeas with a nutty flavor and firm texture.',
      nutrients: {
        calories: 364,
        carbs: 60.9,
        protein: 20.1,
        fiber: 9.9,
        fat: 5.3,
        minerals: 'High in Folate, Manganese, Phosphorus, Iron'
      }
    },
    {
      name: 'Urad Dal (Black Gram)',
      description: 'Black lentils, rich and creamy when cooked.',
      nutrients: {
        calories: 341,
        carbs: 58.9,
        protein: 25.2,
        fiber: 18.3,
        fat: 1.6,
        minerals: 'Rich in Iron, Magnesium, Potassium, Phosphorus'
      }
    },
    {
      name: 'Rajma (Kidney Beans)',
      description: 'Large red kidney beans, popular in North Indian cuisine.',
      nutrients: {
        calories: 333,
        carbs: 60.0,
        protein: 22.5,
        fiber: 15.2,
        fat: 1.4,
        minerals: 'High in Folate, Iron, Potassium, Magnesium'
      }
    }
  ];
  
  // Function to toggle item selection for comparison
  const toggleItemSelection = (item: FoodItem) => {
    if (selectedForComparison.some(selected => selected.name === item.name)) {
      setSelectedForComparison(selectedForComparison.filter(
        selected => selected.name !== item.name
      ));
    } else {
      // Limit to 6 items for better visualization
      if (selectedForComparison.length < 6) {
        setSelectedForComparison([...selectedForComparison, item]);
      }
    }
  };
  
  // Check if an item is selected for comparison
  const isItemSelected = (item: FoodItem) => {
    return selectedForComparison.some(selected => selected.name === item.name);
  };
  
  // Set default view mode based on screen size
  React.useEffect(() => {
    if (isMobile) {
      setViewMode('cards');
    }
  }, [isMobile]);
  
  // Reset comparison when search term changes
  React.useEffect(() => {
    if (searchTerm) {
      setSelectedForComparison([]);
    }
  }, [searchTerm]);
  
  // Filter items based on search term
  const filterItems = (items: FoodItem[]) => {
    if (!searchTerm) return items;
    
    return items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.nutrients.minerals && item.nutrients.minerals.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };
  
  const filteredGrainsAndCereals = filterItems(grainsAndCereals);
  const filteredDalsAndLegumes = filterItems(dalsAndLegumes);

  // Render card view for mobile devices
  const renderCardView = (items: FoodItem[], title: string) => {
    return (
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Info className="w-5 h-5 mr-2 text-green-500" />
          {title}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div key={index} className="relative">
              <button 
                onClick={() => toggleItemSelection(item)}
                className={`absolute top-3 right-3 z-10 p-1.5 rounded-full transition-all duration-200 ${isItemSelected(item) 
                  ? 'bg-green-500 text-white shadow-lg scale-110' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                title={isItemSelected(item) ? "Remove from comparison" : "Add to comparison"}
              >
                {isItemSelected(item) ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </button>
              <NutrientCard 
                name={item.name}
                description={item.description}
                nutrients={item.nutrients}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 bg-clinical-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-brand-gray dark:text-white mb-4"
          >
            Nutritional Information
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-gray dark:text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Explore the nutritional benefits of various grains, cereals, millets, and dals that form the foundation of our healthy meals. Get personalized nutrition recommendations based on your profile.
          </motion.p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
            <div className="flex space-x-4">
              <button
                onClick={() => setViewMode('table')}
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${viewMode === 'table' 
                  ? 'bg-vitality-teal text-white shadow-lg' 
                  : 'bg-light-gray dark:bg-gray-700 text-brand-gray dark:text-gray-300 hover:bg-light-gray dark:hover:bg-gray-600'}`}
              >
                <List className="w-5 h-5 mr-2" />
                Table View
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${viewMode === 'cards' 
                  ? 'bg-vitality-teal text-white shadow-lg' 
                  : 'bg-light-gray dark:bg-gray-700 text-brand-gray dark:text-gray-300 hover:bg-light-gray dark:hover:bg-gray-600'}`}
              >
                <Grid className="w-5 h-5 mr-2" />
                Card View
              </button>
              <button
                onClick={() => setShowHealthReport(true)}
                className="flex items-center px-4 py-2 rounded-lg bg-vitality-teal text-white hover:bg-vitality-teal/90 transition-all duration-200 shadow-lg"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Health Report
              </button>
            </div>
            
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <input
                type="text"
                placeholder="Search grains, dals, nutrients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-lg border border-light-gray dark:border-gray-600 bg-clinical-white dark:bg-gray-700 text-brand-gray dark:text-white focus:ring-2 focus:ring-vitality-teal focus:border-transparent transition-all duration-200"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brand-gray hover:text-brand-gray/80 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {viewMode === 'table' ? (
          <>
            {filteredGrainsAndCereals.length > 0 && (
              <FoodCategory 
                title="Grains, Cereals, and Millets" 
                description="These are staple food sources, primarily providing carbohydrates for energy, along with protein, fiber, and essential minerals."
                items={filteredGrainsAndCereals}
                toggleItemSelection={toggleItemSelection}
                isItemSelected={isItemSelected}
              />
            )}

            {filteredDalsAndLegumes.length > 0 && (
              <FoodCategory 
                title="Dals (Lentils and Legumes)" 
                description="Dals are a cornerstone of Indian cuisine, providing excellent plant-based protein, dietary fiber, and essential nutrients like folate and iron."
                items={filteredDalsAndLegumes}
                toggleItemSelection={toggleItemSelection}
                isItemSelected={isItemSelected}
              />
            )}
            
            {filteredGrainsAndCereals.length === 0 && filteredDalsAndLegumes.length === 0 && (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  No items found matching "{searchTerm}". Try a different search term.
                </p>
              </div>
            )}
          </>
        ) : (
          <>
            {filteredGrainsAndCereals.length > 0 && renderCardView(filteredGrainsAndCereals, "Grains, Cereals, and Millets")}
            {filteredDalsAndLegumes.length > 0 && renderCardView(filteredDalsAndLegumes, "Dals (Lentils and Legumes)")}
            
            {filteredGrainsAndCereals.length === 0 && filteredDalsAndLegumes.length === 0 && (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  No items found matching "{searchTerm}". Try a different search term.
                </p>
              </div>
            )}
          </>
        )}
        
        {/* Comparison Modal */}
        <AnimatePresence>
          {showComparison && selectedForComparison.length > 0 && (
            <NutrientComparison 
              items={selectedForComparison} 
              onClose={() => setShowComparison(false)} 
            />
          )}
        </AnimatePresence>

        {/* Health Report Modal */}
        <HealthReportPopup 
          isOpen={showHealthReport}
          onClose={() => setShowHealthReport(false)}
        />

        {/* Floating comparison button */}
        {selectedForComparison.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <button
              onClick={() => setShowComparison(true)}
              className="flex items-center px-4 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-200 hover:scale-105"
            >
              <BarChart2 className="w-5 h-5 mr-2" />
              Compare ({selectedForComparison.length})
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default NutritionalInfoSection;

