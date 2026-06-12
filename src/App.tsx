import NavBar from './components/NavBar';
import HeroSectionV2 from './components/HeroSectionV2';
import HeroHeadline from './components/HeroHeadline';
import EmotionalRelief from './components/EmotionalRelief';
import WhatIsHBXV2 from './components/WhatIsHBXV2';
import AyurvedaAIFusion from './components/AyurvedaAIFusion';
import HowItWorksV2 from './components/HowItWorksV2';
import DigitalBAMSDoctor from './components/DigitalBAMSDoctor';
import RealtimeMonitoring from './components/RealtimeMonitoring';
import HybridIntelligenceEngine from './components/HybridIntelligenceEngine';
import DataFusionVisualization from './components/DataFusionVisualization';
import InteractiveDiagnosticScanner from './components/InteractiveDiagnosticScanner';
import RealTimeTracking from './components/RealTimeTracking';
import ClosedLoop from './components/ClosedLoop';
import HBXStore from './components/HBXStore';
import WhyItWorks from './components/WhyItWorks';
import ScienceBacked from './components/ScienceBacked';
import TransformationsV2 from './components/TransformationsV2';
import HBXPromise from './components/HBXPromise';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import PageTransition from './components/PageTransition';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';
import StaticPage from './pages/StaticPage';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import CareerVacancyDetail from './pages/CareerVacancyDetail';
import Programs from './pages/Programs';
import PhilosophyPage from './pages/AyurGenXPhilosophy';
import AyurGenXStorePage from './pages/AyurGenXStorePage';
import MedicalIntern from './pages/internships/MedicalIntern';
import AiMlIntern from './pages/internships/AiMlIntern';
import ProductOperationsIntern from './pages/internships/ProductOperationsIntern';
import SalesRevenueOperationsIntern from './pages/internships/SalesRevenueOperationsIntern';
import CreativeDesignIntern from './pages/internships/CreativeDesignIntern';
import AiHealthResearchIntern from './pages/internships/AiHealthResearchIntern';
import StoreOperationsIntern from './pages/internships/StoreOperationsIntern';
import AyurvedaIntern from './pages/internships/AyurvedaIntern';
import NaturopathyIntern from './pages/internships/NaturopathyIntern';
import NutritionIntern from './pages/internships/NutritionIntern';
import MentalHealthWellbeingIntern from './pages/internships/MentalHealthWellbeingIntern';
import YogaLifestyleIntern from './pages/internships/YogaLifestyleIntern';
import MobileAppDevelopmentIntern from './pages/internships/MobileAppDevelopmentIntern';
import FrontendIntern from './pages/internships/FrontendIntern';
import BackendIntern from './pages/internships/BackendIntern';
import DigitalMarketingIntern from './pages/internships/DigitalMarketingIntern';
import PublicRelationsIntern from './pages/internships/PublicRelationsIntern';
import CreativeMediaDesignStudioIntern from './pages/internships/CreativeMediaDesignStudioIntern';
import OperationsFounderOfficeIntern from './pages/internships/OperationsFounderOfficeIntern';
import ResearchValidationIntern from './pages/internships/ResearchValidationIntern';
import StoreTherapeuticsIntern from './pages/internships/StoreTherapeuticsIntern';
import DataScienceIntern from './pages/internships/DataScienceIntern';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import WhatsAppButton from './components/WhatsAppButton';
import PcosPcod from './pages/diseases/PcosPcod';
import ChronicDisease from './pages/diseases/ChronicDisease';
import Constipation from './pages/diseases/Constipation';
import Gas from './pages/diseases/Gas';
import Heartburn from './pages/diseases/Heartburn';
import Skin from './pages/diseases/Skin';
import Fat from './pages/diseases/Fat';
import Diabetes from './pages/diseases/Diabetes';
import WeightLoss from './pages/diseases/WeightLoss';
import FattyLiver from './pages/diseases/FattyLiver';
import WomenCare from './pages/diseases/WomenCare';
import Thyroid from './pages/diseases/thyroid';
import Hackathon from './pages/hackathon';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <PageTransition>
              <HeroHeadline />
              <HeroSectionV2 />
              
              <FinalCTA />
            </PageTransition>
          }
        />
        {/* Footer-linked pages */}
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
        <Route path="/programs" element={<PageTransition><Programs /></PageTransition>} />
        <Route path="/ayurgenx-philosophy" element={<PageTransition><PhilosophyPage /></PageTransition>} />
        <Route path="/careers/:slug" element={<PageTransition><CareerVacancyDetail /></PageTransition>} />
        <Route path="/careers/internships/medical-intern" element={<PageTransition><MedicalIntern /></PageTransition>} />
        <Route path="/careers/internships/ai-ml-intern" element={<PageTransition><AiMlIntern /></PageTransition>} />
        <Route path="/careers/internships/ai-health-research-intern" element={<PageTransition><AiHealthResearchIntern /></PageTransition>} />
        
        <Route path="/careers/internships/sales-operations-intern" element={<PageTransition><SalesRevenueOperationsIntern /></PageTransition>} />
        <Route path="/careers/internships/creative-design-intern" element={<PageTransition><CreativeDesignIntern /></PageTransition>} />
        <Route path="/careers/internships/ayurveda-intern" element={<PageTransition><AyurvedaIntern /></PageTransition>} />
        <Route path="/careers/internships/naturopathy-intern" element={<PageTransition><NaturopathyIntern /></PageTransition>} />
        <Route path="/careers/internships/nutrition-intern" element={<PageTransition><NutritionIntern /></PageTransition>} />
        <Route path="/careers/internships/mental-health-wellbeing-intern" element={<PageTransition><MentalHealthWellbeingIntern /></PageTransition>} />
        <Route path="/careers/internships/yoga-lifestyle-intern" element={<PageTransition><YogaLifestyleIntern /></PageTransition>} />
        <Route path="/careers/internships/mobile-app-development-intern" element={<PageTransition><MobileAppDevelopmentIntern /></PageTransition>} />
        <Route path="/careers/internships/frontend-intern" element={<PageTransition><FrontendIntern /></PageTransition>} />
        <Route path="/careers/internships/backend-intern" element={<PageTransition><BackendIntern /></PageTransition>} />
        <Route path="/careers/internships/digital-marketing-growth-intern" element={<PageTransition><DigitalMarketingIntern /></PageTransition>} />
        <Route path="/careers/internships/pr-communications-public-affairs-intern" element={<PageTransition><PublicRelationsIntern /></PageTransition>} />
        <Route path="/careers/internships/creative-media-design-studio-intern" element={<PageTransition><CreativeMediaDesignStudioIntern /></PageTransition>} />
        <Route path="/careers/internships/operations-founder-office-intern" element={<PageTransition><OperationsFounderOfficeIntern /></PageTransition>} />
        <Route path="/careers/internships/research-validation-publications-intern" element={<PageTransition><ResearchValidationIntern /></PageTransition>} />
        <Route path="/careers/internships/store-therapeutics-intern" element={<PageTransition><StoreTherapeuticsIntern /></PageTransition>} />
        <Route path="/careers/internships/data-science-intern" element={<PageTransition><DataScienceIntern /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><StaticPage title="Blog" /></PageTransition>} />
        <Route path="/store" element={<PageTransition><AyurGenXStorePage /></PageTransition>} />
        <Route path="/how-it-works" element={<PageTransition><StaticPage title="How It Works" /></PageTransition>} />
        <Route path="/pricing" element={<PageTransition><StaticPage title="Pricing" /></PageTransition>} />
        <Route path="/download" element={<PageTransition><StaticPage title="Download App" /></PageTransition>} />
        <Route path="/library" element={<PageTransition><StaticPage title="Health Library" /></PageTransition>} />
        <Route path="/success-stories" element={<PageTransition><StaticPage title="Success Stories" /></PageTransition>} />
        <Route path="/expert-advice" element={<PageTransition><StaticPage title="Expert Advice" /></PageTransition>} />
        <Route path="/community" element={<PageTransition><StaticPage title="Community" /></PageTransition>} />
        <Route path="/diseases/pcos-pcod" element={<PageTransition><PcosPcod /></PageTransition>} />
        <Route path="/diseases/chronic-disease" element={<PageTransition><ChronicDisease /></PageTransition>} />
        <Route path="/diseases/constipation" element={<PageTransition><Constipation /></PageTransition>} />
        <Route path="/diseases/gas" element={<PageTransition><Gas /></PageTransition>} />
        <Route path="/diseases/heartburn" element={<PageTransition><Heartburn /></PageTransition>} />
        <Route path="/diseases/skin" element={<PageTransition><Skin /></PageTransition>} />
        <Route path="/diseases/fat" element={<PageTransition><Fat /></PageTransition>} />
        <Route path="/diseases/diabetes" element={<PageTransition><Diabetes /></PageTransition>} />
        <Route path="/diseases/weight-loss" element={<PageTransition><WeightLoss /></PageTransition>} />
        <Route path="/diseases/fatty-liver" element={<PageTransition><FattyLiver /></PageTransition>} />
        <Route path="/diseases/women-care" element={<PageTransition><WomenCare /></PageTransition>} />
        <Route path="/diseases/thyroid" element={<PageTransition><Thyroid /></PageTransition>} />
        <Route path="/hackathon" element={<PageTransition><Hackathon /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
        <Route path="/cookies" element={<PageTransition><CookiePolicy /></PageTransition>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
