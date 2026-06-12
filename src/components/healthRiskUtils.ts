// Health Risk Assessment Utilities
// TypeScript utilities for calculating health risks based on age, gender, and lifestyle factors

export interface HealthRiskProfile {
  age: number;
  gender: 'Male' | 'Female';
  diet: 'Vegetarian' | 'Non-Vegetarian';
  bodyFat: 'Low' | 'Medium' | 'High';
  activity: 'Sedentary' | 'Light Activity' | 'Gym / Sports Daily';
  foodSource: 'Home-cooked food' | 'Outside food' | 'Food delivery apps';
  smokeDrink: 'Yes' | 'No';
  longSittingHours: 'Yes' | 'No';
}

export interface HealthRisk {
  condition: string;
  maleRisk: 'Low' | 'Moderate' | 'High' | 'Very High';
  femaleRisk: 'Low' | 'Moderate' | 'High' | 'Very High';
  researchInsight: string;
  personalizedRisk: 'Low' | 'Moderate' | 'High' | 'Very High';
  riskFactors: string[];
  recommendations: string[];
}

export interface HealthRiskAssessment {
  ageGroup: string;
  overallRiskLevel: 'Low' | 'Moderate' | 'High' | 'Very High';
  risks: HealthRisk[];
  personalizedRecommendations: string[];
  urgentActions: string[];
}

/**
 * Get age group classification
 */
export function getAgeGroup(age: number): string {
  if (age >= 18 && age <= 24) return '18-24';
  if (age >= 25 && age <= 34) return '25-34';
  if (age >= 35 && age <= 45) return '35-45';
  if (age >= 46 && age <= 55) return '46-55';
  if (age >= 56 && age <= 65) return '56-65';
  return '65+';
}

/**
 * Calculate risk level based on multiple factors
 */
function calculatePersonalizedRisk(
  baseRisk: 'Low' | 'Moderate' | 'High' | 'Very High',
  riskFactors: string[]
): 'Low' | 'Moderate' | 'High' | 'Very High' {
  let riskScore = 0;
  
  // Base risk score
  switch (baseRisk) {
    case 'Low': riskScore = 1; break;
    case 'Moderate': riskScore = 2; break;
    case 'High': riskScore = 3; break;
    case 'Very High': riskScore = 4; break;
  }
  
  // Add risk factors
  riskScore += riskFactors.length * 0.5;
  
  // Convert back to risk level
  if (riskScore <= 1.5) return 'Low';
  if (riskScore <= 2.5) return 'Moderate';
  if (riskScore <= 3.5) return 'High';
  return 'Very High';
}

/**
 * Get health risks for age group 18-24
 */
function getRisks18to24(profile: HealthRiskProfile): HealthRisk[] {
  const risks: HealthRisk[] = [];
  
  // Metabolic Syndrome/Obesity
  const metabolicRiskFactors: string[] = [];
  if (profile.bodyFat === 'High') metabolicRiskFactors.push('High body fat');
  if (profile.activity === 'Sedentary') metabolicRiskFactors.push('Sedentary lifestyle');
  if (profile.foodSource !== 'Home-cooked food') metabolicRiskFactors.push('Poor food choices');
  
  risks.push({
    condition: 'Metabolic Syndrome/Obesity',
    maleRisk: 'Moderate',
    femaleRisk: 'Moderate',
    researchInsight: 'Among adolescents (10-19 yrs), ~5.7% of males and ~4.7% of females have MetS, rising with urban rapid weight gain',
    personalizedRisk: calculatePersonalizedRisk('Moderate', metabolicRiskFactors),
    riskFactors: metabolicRiskFactors,
    recommendations: [
      'Maintain healthy weight through balanced diet',
      'Engage in regular physical activity (150 min/week)',
      'Choose home-cooked meals over processed foods'
    ]
  });
  
  // Digestive Issues
  const digestiveRiskFactors: string[] = [];
  if (profile.activity === 'Sedentary') digestiveRiskFactors.push('Sedentary behavior');
  if (profile.foodSource === 'Food delivery apps') digestiveRiskFactors.push('Processed food consumption');
  if (profile.longSittingHours === 'Yes') digestiveRiskFactors.push('Prolonged sitting');
  
  risks.push({
    condition: 'Digestive Issues, Sedentary Effects',
    maleRisk: 'Moderate',
    femaleRisk: 'Moderate',
    researchInsight: 'Sedentary behavior high (>50%) in both genders, increasing obesity with age',
    personalizedRisk: calculatePersonalizedRisk('Moderate', digestiveRiskFactors),
    riskFactors: digestiveRiskFactors,
    recommendations: [
      'Take regular breaks from sitting every 30 minutes',
      'Include fiber-rich foods in diet',
      'Stay hydrated throughout the day'
    ]
  });
  
  // Eye Strain (CVS)
  const eyeStrainRiskFactors: string[] = [];
  if (profile.longSittingHours === 'Yes') eyeStrainRiskFactors.push('Extended screen time');
  
  risks.push({
    condition: 'Eye Strain (Computer Vision Syndrome)',
    maleRisk: 'Moderate',
    femaleRisk: 'Moderate',
    researchInsight: '~37% of screen-users aged 25-56 report dry eye symptoms; IT professionals significantly affected',
    personalizedRisk: calculatePersonalizedRisk('Moderate', eyeStrainRiskFactors),
    riskFactors: eyeStrainRiskFactors,
    recommendations: [
      'Follow 20-20-20 rule (every 20 min, look 20 feet away for 20 sec)',
      'Ensure proper lighting and screen distance',
      'Use artificial tears if needed'
    ]
  });
  
  return risks;
}

/**
 * Get health risks for age group 25-34
 */
function getRisks25to34(profile: HealthRiskProfile): HealthRisk[] {
  const risks: HealthRisk[] = [];
  
  // Abdominal Obesity, Diabetes Risk
  const diabetesRiskFactors: string[] = [];
  if (profile.bodyFat === 'High') diabetesRiskFactors.push('High body fat');
  if (profile.activity === 'Sedentary') diabetesRiskFactors.push('Sedentary lifestyle');
  if (profile.longSittingHours === 'Yes') diabetesRiskFactors.push('Prolonged sitting');
  if (profile.foodSource !== 'Home-cooked food') diabetesRiskFactors.push('Poor dietary habits');
  
  risks.push({
    condition: 'Abdominal Obesity, Diabetes Risk',
    maleRisk: 'High',
    femaleRisk: 'High',
    researchInsight: '57-58% of sedentary workers have abdominal obesity; sitting linked with 20% higher risk of diabetes/CVD',
    personalizedRisk: calculatePersonalizedRisk('High', diabetesRiskFactors),
    riskFactors: diabetesRiskFactors,
    recommendations: [
      'Monitor waist circumference regularly',
      'Reduce refined carbohydrates and sugar intake',
      'Incorporate strength training exercises',
      'Get regular health screenings for blood sugar'
    ]
  });
  
  // Metabolic Syndrome
  const metabolicRiskFactors: string[] = [];
  if (profile.bodyFat === 'High') metabolicRiskFactors.push('High body fat');
  if (profile.activity === 'Sedentary') metabolicRiskFactors.push('Low physical activity');
  if (profile.smokeDrink === 'Yes') metabolicRiskFactors.push('Smoking/drinking habits');
  
  risks.push({
    condition: 'Metabolic Syndrome',
    maleRisk: 'High',
    femaleRisk: 'High',
    researchInsight: 'South-India IT workers age 26-35 exposed to MetS risk factors; one-third central obesity, 10% diabetes, 27% hypertension',
    personalizedRisk: calculatePersonalizedRisk('High', metabolicRiskFactors),
    riskFactors: metabolicRiskFactors,
    recommendations: [
      'Maintain healthy BMI and waist circumference',
      'Monitor blood pressure and cholesterol levels',
      'Adopt Mediterranean-style diet patterns',
      'Quit smoking and limit alcohol consumption'
    ]
  });
  
  // Mental Health
  const mentalHealthRiskFactors: string[] = [];
  if (profile.longSittingHours === 'Yes') mentalHealthRiskFactors.push('Work-related stress');
  if (profile.activity === 'Sedentary') mentalHealthRiskFactors.push('Lack of physical activity');
  if (profile.smokeDrink === 'Yes') mentalHealthRiskFactors.push('Substance use');
  
  risks.push({
    condition: 'Mental Health (Stress, Burnout)',
    maleRisk: 'High',
    femaleRisk: 'Very High',
    researchInsight: 'One in five employees seeking mental health support; burnout prevalent before 40',
    personalizedRisk: calculatePersonalizedRisk(profile.gender === 'Female' ? 'Very High' : 'High', mentalHealthRiskFactors),
    riskFactors: mentalHealthRiskFactors,
    recommendations: [
      'Practice stress management techniques (meditation, yoga)',
      'Maintain work-life balance',
      'Seek professional help if experiencing persistent stress',
      'Build strong social support networks'
    ]
  });
  
  return risks;
}

/**
 * Get health risks for age group 35-45
 */
function getRisks35to45(profile: HealthRiskProfile): HealthRisk[] {
  const risks: HealthRisk[] = [];
  
  // Type 2 Diabetes, Hypertension, Heart Disease
  const cardiovascularRiskFactors: string[] = [];
  if (profile.bodyFat === 'High') cardiovascularRiskFactors.push('Obesity');
  if (profile.activity === 'Sedentary') cardiovascularRiskFactors.push('Physical inactivity');
  if (profile.smokeDrink === 'Yes') cardiovascularRiskFactors.push('Smoking/alcohol use');
  if (profile.foodSource !== 'Home-cooked food') cardiovascularRiskFactors.push('Poor diet quality');
  if (profile.longSittingHours === 'Yes') cardiovascularRiskFactors.push('Sedentary work');
  
  risks.push({
    condition: 'Type 2 Diabetes, Hypertension, Heart Disease',
    maleRisk: 'Very High',
    femaleRisk: 'High',
    researchInsight: 'Diabetes/hypertension surge in Gujarat among 30-40s; drug sales up ~50% in past 2 years',
    personalizedRisk: calculatePersonalizedRisk('Very High', cardiovascularRiskFactors),
    riskFactors: cardiovascularRiskFactors,
    recommendations: [
      'Get comprehensive health screening annually',
      'Monitor blood pressure, blood sugar, and cholesterol',
      'Adopt DASH diet for heart health',
      'Engage in regular cardiovascular exercise',
      'Manage stress through relaxation techniques'
    ]
  });
  
  // Advanced Metabolic Syndrome
  const advancedMetabolicRiskFactors: string[] = [];
  if (profile.bodyFat === 'High') advancedMetabolicRiskFactors.push('Central obesity');
  if (profile.activity === 'Sedentary') advancedMetabolicRiskFactors.push('Insulin resistance risk');
  if (profile.diet === 'Non-Vegetarian' && profile.foodSource !== 'Home-cooked food') {
    advancedMetabolicRiskFactors.push('High saturated fat intake');
  }
  
  risks.push({
    condition: 'Advanced Metabolic Syndrome',
    maleRisk: 'Very High',
    femaleRisk: 'Very High',
    researchInsight: 'MetS prevalence high among IT employees 26-35, and likely worsens with age',
    personalizedRisk: calculatePersonalizedRisk('Very High', advancedMetabolicRiskFactors),
    riskFactors: advancedMetabolicRiskFactors,
    recommendations: [
      'Implement comprehensive lifestyle modification',
      'Consider working with nutritionist and fitness trainer',
      'Regular monitoring of metabolic markers',
      'Medication compliance if prescribed'
    ]
  });
  
  // Heart Disease
  const heartDiseaseRiskFactors: string[] = [];
  if (profile.gender === 'Male') heartDiseaseRiskFactors.push('Male gender (higher risk)');
  if (profile.smokeDrink === 'Yes') heartDiseaseRiskFactors.push('Smoking/drinking');
  if (profile.longSittingHours === 'Yes') heartDiseaseRiskFactors.push('Sedentary occupation');
  if (profile.bodyFat === 'High') heartDiseaseRiskFactors.push('Obesity');
  
  risks.push({
    condition: 'Heart Disease',
    maleRisk: 'Very High',
    femaleRisk: 'High',
    researchInsight: 'CVD occurs 5-10 years earlier in India; young executives in early 30s showing more heart issues',
    personalizedRisk: calculatePersonalizedRisk(profile.gender === 'Male' ? 'Very High' : 'High', heartDiseaseRiskFactors),
    riskFactors: heartDiseaseRiskFactors,
    recommendations: [
      'Immediate lifestyle intervention required',
      'Regular cardiac health monitoring',
      'Stress management is crucial',
      'Consider cardiac risk assessment with cardiologist'
    ]
  });
  
  return risks;
}

/**
 * Get personalized recommendations based on profile
 */
function getPersonalizedRecommendations(profile: HealthRiskProfile): string[] {
  const recommendations: string[] = [];
  
  // Diet-based recommendations
  if (profile.diet === 'Vegetarian') {
    recommendations.push('Ensure adequate B12, iron, and protein intake through diverse plant sources');
  } else {
    recommendations.push('Choose lean proteins and limit red meat consumption');
  }
  
  // Activity-based recommendations
  if (profile.activity === 'Sedentary') {
    recommendations.push('URGENT: Start with 10-minute walks, gradually increase to 150 min/week');
  } else if (profile.activity === 'Light Activity') {
    recommendations.push('Increase intensity with strength training 2-3 times per week');
  }
  
  // Food source recommendations
  if (profile.foodSource !== 'Home-cooked food') {
    recommendations.push('Prioritize home-cooked meals to control sodium, sugar, and unhealthy fats');
  }
  
  // Lifestyle recommendations
  if (profile.smokeDrink === 'Yes') {
    recommendations.push('CRITICAL: Quit smoking and limit alcohol to reduce multiple health risks');
  }
  
  if (profile.longSittingHours === 'Yes') {
    recommendations.push('Use standing desk, take hourly breaks, and do desk exercises');
  }
  
  // Body fat recommendations
  if (profile.bodyFat === 'High') {
    recommendations.push('Focus on sustainable weight loss (1-2 lbs/week) through caloric deficit');
  }
  
  return recommendations;
}

/**
 * Get urgent actions based on risk profile
 */
function getUrgentActions(profile: HealthRiskProfile, risks: HealthRisk[]): string[] {
  const urgentActions: string[] = [];
  
  // Check for very high risks
  const veryHighRisks = risks.filter(risk => risk.personalizedRisk === 'Very High');
  
  if (veryHighRisks.length > 0) {
    urgentActions.push('Schedule comprehensive health screening within 2 weeks');
  }
  
  if (profile.smokeDrink === 'Yes' && profile.age >= 30) {
    urgentActions.push('Consult healthcare provider about smoking cessation programs');
  }
  
  if (profile.bodyFat === 'High' && profile.activity === 'Sedentary') {
    urgentActions.push('Start supervised exercise program immediately');
  }
  
  if (profile.longSittingHours === 'Yes' && profile.age >= 35) {
    urgentActions.push('Get cardiovascular risk assessment');
  }
  
  return urgentActions;
}

/**
 * Calculate overall risk level
 */
function calculateOverallRiskLevel(risks: HealthRisk[]): 'Low' | 'Moderate' | 'High' | 'Very High' {
  const riskCounts = {
    'Very High': risks.filter(r => r.personalizedRisk === 'Very High').length,
    'High': risks.filter(r => r.personalizedRisk === 'High').length,
    'Moderate': risks.filter(r => r.personalizedRisk === 'Moderate').length,
    'Low': risks.filter(r => r.personalizedRisk === 'Low').length
  };
  
  if (riskCounts['Very High'] >= 2) return 'Very High';
  if (riskCounts['Very High'] >= 1 || riskCounts['High'] >= 2) return 'High';
  if (riskCounts['High'] >= 1 || riskCounts['Moderate'] >= 2) return 'Moderate';
  return 'Low';
}

/**
 * Main function to assess health risks
 */
export function assessHealthRisks(profile: HealthRiskProfile): HealthRiskAssessment {
  const ageGroup = getAgeGroup(profile.age);
  let risks: HealthRisk[] = [];
  
  // Get age-specific risks
  switch (ageGroup) {
    case '18-24':
      risks = getRisks18to24(profile);
      break;
    case '25-34':
      risks = getRisks25to34(profile);
      break;
    case '35-45':
      risks = getRisks35to45(profile);
      break;
    default:
      // For ages outside our specific ranges, use 35-45 as baseline
      risks = getRisks35to45(profile);
  }
  
  const overallRiskLevel = calculateOverallRiskLevel(risks);
  const personalizedRecommendations = getPersonalizedRecommendations(profile);
  const urgentActions = getUrgentActions(profile, risks);
  
  return {
    ageGroup,
    overallRiskLevel,
    risks,
    personalizedRecommendations,
    urgentActions
  };
}

/**
 * Get risk level color for UI
 */
export function getRiskLevelColor(riskLevel: 'Low' | 'Moderate' | 'High' | 'Very High'): {
  color: string;
  bg: string;
  border: string;
} {
  switch (riskLevel) {
    case 'Low':
      return {
        color: 'text-green-700 dark:text-green-400',
        bg: 'bg-green-50 dark:bg-green-900/20',
        border: 'border-green-200 dark:border-green-800'
      };
    case 'Moderate':
      return {
        color: 'text-yellow-700 dark:text-yellow-400',
        bg: 'bg-yellow-50 dark:bg-yellow-900/20',
        border: 'border-yellow-200 dark:border-yellow-800'
      };
    case 'High':
      return {
        color: 'text-orange-700 dark:text-orange-400',
        bg: 'bg-orange-50 dark:bg-orange-900/20',
        border: 'border-orange-200 dark:border-orange-800'
      };
    case 'Very High':
      return {
        color: 'text-red-700 dark:text-red-400',
        bg: 'bg-red-50 dark:bg-red-900/20',
        border: 'border-red-200 dark:border-red-800'
      };
  }
}

