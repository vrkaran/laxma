// Nutrition Calculation Utilities
// TypeScript utilities for calculating BMR, TDEE, and macronutrients

export interface UserProfile {
  age: number;
  gender: 'Male' | 'Female';
  height: number; // in cm
  weight: number; // in kg
  activityLevel: 'Sedentary' | 'Light Activity' | 'Moderate Activity' | 'Very Active' | 'Extremely Active';
  goal?: 'maintenance' | 'weight_loss' | 'weight_gain';
}

export interface MacronutrientBreakdown {
  calories: number;
  protein: {
    grams: number;
    calories: number;
    percentage: number;
  };
  carbohydrates: {
    grams: number;
    calories: number;
    percentage: number;
  };
  fat: {
    grams: number;
    calories: number;
    percentage: number;
  };
}

export interface NutritionResults {
  bmr: number;
  tdee: number;
  targetCalories: number;
  macros: MacronutrientBreakdown;
  waterIntake: number; // in liters
  bmi: number;
  bmiCategory: string;
}

/**
 * Calculate BMR using Mifflin-St Jeor Equation (most accurate)
 */
export function calculateBMR(profile: UserProfile): number {
  const { weight, height, age, gender } = profile;
  
  if (gender === 'Male') {
    return (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else {
    return (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }
}

/**
 * Calculate BMR using Harris-Benedict Equation (alternative)
 */
export function calculateBMRHarrisBenedict(profile: UserProfile): number {
  const { weight, height, age, gender } = profile;
  
  if (gender === 'Male') {
    return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }
}

/**
 * Get activity factor multiplier
 */
export function getActivityFactor(activityLevel: UserProfile['activityLevel']): number {
  const factors = {
    'Sedentary': 1.2,           // Little to no exercise
    'Light Activity': 1.375,    // Light exercise 1-3 days/week
    'Moderate Activity': 1.55,  // Moderate exercise 3-5 days/week
    'Very Active': 1.725,       // Hard exercise 6-7 days/week
    'Extremely Active': 1.9     // Very hard exercise, physical job
  };
  
  return factors[activityLevel];
}

/**
 * Calculate TDEE (Total Daily Energy Expenditure)
 */
export function calculateTDEE(bmr: number, activityLevel: UserProfile['activityLevel']): number {
  const activityFactor = getActivityFactor(activityLevel);
  return Math.round(bmr * activityFactor);
}

/**
 * Calculate target calories based on goal
 */
export function calculateTargetCalories(tdee: number, goal: UserProfile['goal'] = 'maintenance'): number {
  switch (goal) {
    case 'weight_loss':
      return Math.round(tdee * 0.8); // 20% deficit
    case 'weight_gain':
      return Math.round(tdee * 1.15); // 15% surplus
    default:
      return tdee; // maintenance
  }
}

/**
 * Calculate macronutrient breakdown
 */
export function calculateMacronutrients(
  targetCalories: number, 
  profile: UserProfile,
  customRatios?: { protein: number; carbs: number; fat: number }
): MacronutrientBreakdown {
  // Default macro ratios (can be customized)
  let proteinRatio = 0.30; // 30%
  let carbRatio = 0.45;    // 45%
  let fatRatio = 0.25;     // 25%
  
  // Apply custom ratios if provided
  if (customRatios) {
    proteinRatio = customRatios.protein / 100;
    carbRatio = customRatios.carbs / 100;
    fatRatio = customRatios.fat / 100;
  }
  
  // Adjust ratios based on goal
  if (profile.goal === 'weight_loss') {
    proteinRatio = 0.35; // Higher protein for muscle preservation
    carbRatio = 0.35;    // Lower carbs
    fatRatio = 0.30;     // Moderate fat
  } else if (profile.goal === 'weight_gain') {
    proteinRatio = 0.25; // Moderate protein
    carbRatio = 0.50;    // Higher carbs for energy
    fatRatio = 0.25;     // Moderate fat
  }
  
  // Calculate protein (minimum 1.6g per kg body weight for active individuals)
  const minProteinGrams = Math.max(profile.weight * 1.6, (targetCalories * proteinRatio) / 4);
  const proteinGrams = Math.round(minProteinGrams);
  const proteinCalories = proteinGrams * 4;
  
  // Calculate fat
  const fatCalories = Math.round(targetCalories * fatRatio);
  const fatGrams = Math.round(fatCalories / 9);
  
  // Calculate carbs (remaining calories)
  const carbCalories = targetCalories - proteinCalories - fatCalories;
  const carbGrams = Math.round(carbCalories / 4);
  
  // Recalculate percentages based on actual values
  const actualProteinPercentage = Math.round((proteinCalories / targetCalories) * 100);
  const actualCarbPercentage = Math.round((carbCalories / targetCalories) * 100);
  const actualFatPercentage = Math.round((fatCalories / targetCalories) * 100);
  
  return {
    calories: targetCalories,
    protein: {
      grams: proteinGrams,
      calories: proteinCalories,
      percentage: actualProteinPercentage
    },
    carbohydrates: {
      grams: carbGrams,
      calories: carbCalories,
      percentage: actualCarbPercentage
    },
    fat: {
      grams: fatGrams,
      calories: fatCalories,
      percentage: actualFatPercentage
    }
  };
}

/**
 * Calculate BMI and category
 */
export function calculateBMI(weight: number, height: number): { bmi: number; category: string } {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  
  let category: string;
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 25) {
    category = 'Normal weight';
  } else if (bmi < 30) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }
  
  return { bmi: Math.round(bmi * 10) / 10, category };
}

/**
 * Calculate daily water intake
 */
export function calculateWaterIntake(weight: number, activityLevel: UserProfile['activityLevel']): number {
  // Base water intake: 35ml per kg body weight
  let waterIntake = (weight * 35) / 1000; // Convert to liters
  
  // Add extra water for activity
  const activityBonus = {
    'Sedentary': 0,
    'Light Activity': 0.3,
    'Moderate Activity': 0.5,
    'Very Active': 0.7,
    'Extremely Active': 1.0
  };
  
  waterIntake += activityBonus[activityLevel];
  
  return Math.round(waterIntake * 10) / 10; // Round to 1 decimal place
}

/**
 * Get personalized recommendations
 */
export function getPersonalizedRecommendations(profile: UserProfile, results: NutritionResults): string[] {
  const recommendations: string[] = [];
  
  // Age-based recommendations
  if (profile.age > 50) {
    recommendations.push('Focus on calcium and vitamin D for bone health');
    recommendations.push('Consider higher protein intake to preserve muscle mass');
  }
  
  // BMI-based recommendations
  if (results.bmi < 18.5) {
    recommendations.push('Consider increasing caloric intake with nutrient-dense foods');
  } else if (results.bmi > 25) {
    recommendations.push('Focus on portion control and regular physical activity');
  }
  
  // Activity-based recommendations
  if (profile.activityLevel === 'Sedentary') {
    recommendations.push('Try to incorporate at least 30 minutes of daily movement');
  } else if (profile.activityLevel === 'Very Active' || profile.activityLevel === 'Extremely Active') {
    recommendations.push('Ensure adequate recovery time between intense workouts');
    recommendations.push('Consider post-workout nutrition within 30 minutes');
  }
  
  // Goal-based recommendations
  if (profile.goal === 'weight_loss') {
    recommendations.push('Prioritize protein to maintain muscle mass during weight loss');
    recommendations.push('Include fiber-rich foods to help with satiety');
  } else if (profile.goal === 'weight_gain') {
    recommendations.push('Focus on calorie-dense, nutritious foods');
    recommendations.push('Consider eating more frequent, smaller meals');
  }
  
  return recommendations;
}

/**
 * Main function to calculate all nutrition data
 */
export function calculateNutritionProfile(
  profile: UserProfile,
  customMacroRatios?: { protein: number; carbs: number; fat: number }
): NutritionResults {
  const bmr = calculateBMR(profile);
  const tdee = calculateTDEE(bmr, profile.activityLevel);
  const targetCalories = calculateTargetCalories(tdee, profile.goal);
  const macros = calculateMacronutrients(targetCalories, profile, customMacroRatios);
  const waterIntake = calculateWaterIntake(profile.weight, profile.activityLevel);
  const { bmi, category } = calculateBMI(profile.weight, profile.height);
  
  return {
    bmr,
    tdee,
    targetCalories,
    macros,
    waterIntake,
    bmi,
    bmiCategory: category
  };
}

/**
 * Validate user profile data
 */
export function validateUserProfile(profile: Partial<UserProfile>): string[] {
  const errors: string[] = [];
  
  if (!profile.age || profile.age < 10 || profile.age > 120) {
    errors.push('Age must be between 10 and 120 years');
  }
  
  if (!profile.weight || profile.weight < 20 || profile.weight > 300) {
    errors.push('Weight must be between 20 and 300 kg');
  }
  
  if (!profile.height || profile.height < 100 || profile.height > 250) {
    errors.push('Height must be between 100 and 250 cm');
  }
  
  if (!profile.gender || !['Male', 'Female'].includes(profile.gender)) {
    errors.push('Gender must be specified as Male or Female');
  }
  
  if (!profile.activityLevel) {
    errors.push('Activity level must be specified');
  }
  
  return errors;
}

