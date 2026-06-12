import React from 'react';
import {
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Import all your vacancy category images
import AIMLInternshipsImg from '../image/vacancy/aiml.webp';
import CreativeMediaImg from '../image/vacancy/creative_media.webp';
import DigitalMarketingGrowthImg from '../image/vacancy/digital_marketing.webp';
import MedicalWellnessInternshipsImg from '../image/vacancy/medical wellens.webp';
import PRCommunicationsImg from '../image/vacancy/pr.webp';
import ResearchPublicationsImg from '../image/vacancy/research.webp';
import SalesRevenueImg from '../image/vacancy/sells.webp';
import MISSIONImg from '../image/vacancy/mission.webp'; // Your new mission image

// ... (rest of your imports and component code)

const categories = [
    { name: 'People & Operations', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800' },
    { name: 'Creative & Media', image: CreativeMediaImg },
    { name: 'Digital Marketing & Growth', image: DigitalMarketingGrowthImg },
    { name: 'PR & Communications', image: PRCommunicationsImg },
    { name: 'Sales & Revenue', image: SalesRevenueImg },
    { name: 'Research & Publications', image: ResearchPublicationsImg },
    { name: 'AI, ML & Internships', image: AIMLInternshipsImg },
    { name: 'Medical & Wellness Internships', image: MedicalWellnessInternshipsImg },
    { name: 'Product & Store Internships', image: 'https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?auto=format&fit=crop&q=80&w=800' }
];

const roles = [
    { title: "People, Operations & Founder's Office", slug: "operations-founder-office-intern", category: "People & Operations", type: 'Internship' },
    { title: "Creative, Media & Design Studio", slug: "creative-media-design-studio-intern", category: "Creative & Media", type: 'Internship' },
    { title: "Digital Marketing & Growth Division", slug: "digital-marketing-growth-intern", category: "Digital Marketing & Growth", type: 'Internship' },
    { title: "PR, Communications & Public Affairs Division", slug: "pr-communications-public-affairs-intern", category: "PR & Communications", type: 'Internship' },
    { title: "Sales & Revenue Division", slug: "sales-operations-intern", category: "Sales & Revenue", type: 'Internship' },
    { title: "Research, Validation & Publications Lab", slug: "research-validation-publications-intern", category: "Research & Publications", type: 'Internship' },
    { title: "AI Health Research Intern", slug: "ai-health-research-intern", category: "Research & Publications", type: 'Internship' },
    { title: "AI, ML Intern", slug: "ai-ml-intern", category: "AI, ML & Internships", type: 'Internship' },
    { title: "Mobile App Developer Intern", slug: "mobile-app-development-intern", category: "AI, ML & Internships", type: 'Internship' },
    { title: "Frontend Intern", slug: "frontend-intern", category: "AI, ML & Internships", type: 'Internship' },
    { title: "Backend Intern", slug: "backend-intern", category: "AI, ML & Internships", type: 'Internship' },
    { title: "Data Science Intern", slug: "data-science-intern", category: "AI, ML & Internships", type: 'Internship' },
    { title: "Ayurveda Intern", slug: "ayurveda-intern", category: "Medical & Wellness Internships", type: 'Internship' },
    { title: "Naturopathy Intern", slug: "naturopathy-intern", category: "Medical & Wellness Internships", type: 'Internship' },
    { title: "Nutrition Intern", slug: "nutrition-intern", category: "Medical & Wellness Internships", type: 'Internship' },
    { title: "Mental Health & Wellbeing Intern", slug: "mental-health-wellbeing-intern", category: "Medical & Wellness Internships", type: 'Internship' },
    { title: "Yoga & Lifestyle Intern", slug: "yoga-lifestyle-intern", category: "Medical & Wellness Internships", type: 'Internship' },
    { title: "Medical Intern", slug: "medical-intern", category: "Medical & Wellness Internships", type: 'Internship' },
    { title: "Store & Therapeutics Division", slug: "store-therapeutics-intern", category: "Product & Store Internships", type: 'Internship' }
];

const CareerPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = React.useState<string>('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <div className="font-sans text-gray-800 bg-white">
      <SEO 
        title="AyurGenX Internship Program | AI Healthcare & HealthTech Internship India"
        description="Apply for the AyurGenX Internship Program in AI Healthcare. Work on live HealthTech systems, earn an AyurGenX certification, and qualify for a paid apprenticeship after internship."
        keywords="Internship in healthcare, Ayurveda internship, Medical intern, AI in Ayurveda jobs, healthcare careers, Ayurvedic doctor careers"
      />
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-gray leading-tight mb-6">
                Career at <span className="text-transparent bg-clip-text bg-gradient-to-r from-vitality-teal to-bio-tech-blue">AyurGenX</span>  <br />
                <span className="text-3xl md:text-5xl font-light">Transform the World</span>
              </h1>
              <div className="prose prose-lg text-slate-600 mb-8">
                <p>
                  At AyurGenX, we are building the world’s first AI-powered Preventive Health Ecosystem that restores organ health, prevents lifestyle diseases, and helps people live longer, healthier lives.
                </p>
                <p className="mt-4 font-medium text-vitality-teal">
                  Join us and become part of a mission that will transform healthcare for millions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
                  alt="AyurGenX Team" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION SECTION (IMAGE UPDATED) ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                {/* UPDATED: Using the imported MISSIONImg variable */}
                <img 
                  src={MISSIONImg} 
                  alt="Our Mission" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-brand-gray mb-6 relative inline-block">
                Our Mission
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-vitality-teal to-bio-tech-blue rounded-full"></span>
              </h2>
              <div className="text-slate-600 text-lg space-y-4">
                <p>
                  To heal, protect, and optimize the human body by combining ancient organ-healing sciences (Ayurveda + Naturopathy) with AI, ML, computer vision, and real-time biomarker intelligence.
                </p>
                <p>
                  We aim to make preventive healthcare accessible, affordable, predictive, and continuous — not just for cities, but for rural India as well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ... (The rest of your component remains the same) ... */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-brand-gray">Why Work With AyurGenX?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                {[
                  { title: "Transformational Impact", desc: "Your work directly reduces lifestyle diseases across India." },
                  { title: "Cutting-Edge Innovation", desc: "Work at the intersection of Ayurveda, Naturopathy, AI/ML, and digital diagnostics." },
                  { title: "Unified Health Subscription", desc: "Be part of a system that provides complete health in one plan like top global enterprises." },
                  { title: "Human-in-the-Loop Healthcare", desc: "Collaborate with doctors, engineers, and data scientists on real-time health solutions." },
                  { title: "Flexibility & Growth", desc: "Remote-friendly, innovation-driven, high-learning environment." }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-vitality-teal" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-brand-gray">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-full min-h-[400px]">
               <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                  alt="Team Collaboration" 
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" id="vacancies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-gray">Current Openings</h2>
            <p className="mt-4 text-slate-500">Explore opportunities to join our mission-driven team.</p>
            <p className="mt-2 text-sm text-vitality-teal font-semibold">
              All internships at AyurGenX are mentor-led and department-driven.
            </p>
          </div>

          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {['All', ...categories.map(c => c.name)].map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                    selectedDept === dept
                      ? 'bg-gradient-to-r from-vitality-teal to-bio-tech-blue text-white border-transparent'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80">
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search roles"
                className="w-full rounded-full border border-slate-200 py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-vitality-teal"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const categoryRoles = roles.filter(
                (r) => 
                  r.category === category.name && 
                  r.title.toLowerCase().includes(searchTerm.toLowerCase())
              );
              
              if ((selectedDept !== 'All' && selectedDept !== category.name) || categoryRoles.length === 0) {
                return null;
              }
              
              return (
                <VacancyCard 
                  key={category.name}
                  image={category.image}
                  category={category.name}
                  roles={categoryRoles}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

interface VacancyCardProps {
  image: string;
  category: string;
  roles: { title: string; slug: string; type: string }[];
}

const VacancyCard: React.FC<VacancyCardProps> = ({ image, category, roles }) => {
  if (roles.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col h-full">
      <div className="h-48 overflow-hidden relative">
        <img src={image} alt={category} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-gray/80 to-transparent flex items-end">
          <h3 className="text-white font-bold text-xl p-4">{category}</h3>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <ul className="mb-6 space-y-2">
            {roles.map(({ title, slug, type }, idx) => (
              <li key={idx} id={slug} className="flex items-center text-slate-600 text-sm scroll-mt-32">
                 <span className="w-1.5 h-1.5 bg-vitality-teal rounded-full mr-2"></span>
                 <Link to={type === 'Internship' ? `/careers/internships/${slug}` : `/careers/${slug}`} className="hover:text-vitality-teal transition-colors">{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
