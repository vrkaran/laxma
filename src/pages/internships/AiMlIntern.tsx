import { motion } from 'framer-motion';
import {
  CircleDot,
  Clock,
  Globe,
  Users,
  Briefcase,
  FlaskConical,
  ArrowRight,
  BadgeIndianRupee
} from 'lucide-react';

export default function AiMlInternshipPage() {

  // --- Pre-written Mailto Link for this specific role ---
  const email = 'careers@ayurgenx.in';
  const subject = encodeURIComponent("Internship Application: AI / ML Developer Intern");
  const body = encodeURIComponent(
`Dear AyurGenX Hiring Team,

I am writing to express my strong interest in the AI / ML Developer Intern position.

- Name: [Your Name]
- Contact: [Your Phone Number, LinkedIn, and GitHub/Portfolio URL]
- Education: [e.g., B.Tech/M.Tech in AI/ML or Computer Science]

I am passionate about applying AI to solve real-world problems and believe my skills in [mention a key skill, e.g., Python, Computer Vision, TensorFlow] would be a great asset. My resume is attached.

Sincerely,
[Your Name]`
  );

  const mailtoHref = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <div className="bg-clinical-white font-sans">
      {/* Page Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-32 pb-16 bg-gradient-to-r from-vitality-teal/5 to-bio-tech-blue/5"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-gray">
            AyurGenX AI / ML Developer Intern
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            (Health AI • Computer Vision • Predictive Intelligence)
          </p>
        </div>
      </motion.header>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-x-12 gap-y-16">

          {/* Left Column: Job Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* About AyurGenX */}
              <Section title="🌍 About AyurGenX">
                <p><strong className="text-vitality-teal">AyurGenX</strong> is a deep-tech preventive healthcare platform building the world’s first AI-driven Reverse Aging & Organ Health Intelligence System. We combine medical science, AI/ML, and real-world health data to solve long-term health problems.</p>
                <p>Developed within an <strong className="text-vitality-teal">IIT Madras</strong>–backed innovation ecosystem, we follow <strong className="text-vitality-teal">IIT</strong>-grade research discipline with <strong className="text-vitality-teal">IIM</strong>-aligned product and execution thinking.</p>
              </Section>
              
              {/* Internship Overview */}
              <Section title="🎯 Internship Overview">
                <p>As an AI / ML Developer Intern, you will work on the core intelligence systems of <strong className="text-vitality-teal">AyurGenX</strong>, including health recommendations, computer vision–based analysis, and health pattern detection.</p>
                <p>You will work under experienced AI, medical, and product mentors within an <strong className="text-vitality-teal">IIT Madras</strong> / <strong className="text-vitality-teal">IIM</strong>-guided ecosystem, learning how production-level health AI systems are built responsibly.</p>
              </Section>

              {/* Key Responsibilities */}
              <Section title="🧠 Key Responsibilities">
                <ul className="space-y-3">
                  <ListItem>Build and improve ML models for personalized health recommendations and risk scoring.</ListItem>
                  <ListItem>Contribute to computer vision analysis (face, tongue, nail) in collaboration with medical mentors.</ListItem>
                  <ListItem>Analyze health data to detect patterns and early risk signals for prevention.</ListItem>
                  <ListItem>Integrate ML models with backend systems and mobile/web platforms.</ListItem>
                  <ListItem>Validate model outputs with medical experts and improve the explainability of AI results.</ListItem>
                </ul>
              </Section>
              
              {/* Required Skills */}
              <Section title="⚙️ Required Skills & Tech Stack">
                <p><b>Must-Have:</b> A strong foundation in Machine Learning fundamentals, Python programming, and familiarity with Pandas, NumPy, and Scikit-learn.</p>
                <p><b>Good-to-Have:</b> Experience with TensorFlow/PyTorch, Computer Vision (OpenCV, CNNs), data pipelines, and model evaluation metrics.</p>
              </Section>

              {/* What You Will Gain */}
               <Section title="🚀 What You Will Gain">
                <ul className="space-y-3">
                  <ListItem>Hands-on experience building health-focused AI systems and computer vision models.</ListItem>
                  <ListItem>Mentorship within an <strong className="text-vitality-teal">IIT Madras</strong>–backed startup ecosystem.</ListItem>
                  <ListItem>Experience working at the intersection of medicine, AI, and product design.</ListItem>
                  <ListItem>A strong portfolio for future roles in AI/ML Development, HealthTech, and research startups.</ListItem>
                </ul>
              </Section>

              <Section title="🔗 Certification & Growth Path">
                <p>This internship is part of the AyurGenX Certified Program. Performance is evaluated continuously, and only the top 1–5% of interns earn the AyurGenX Certified Certificate.</p>
              </Section>

            </motion.div>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sticky top-40 mt-20"
            >
              {/* Box 1: Special Reward */}
              <div className="mt-6 bg-white rounded-2xl shadow-xl border border-light-gray p-6">
                <h3 className="text-2xl font-bold text-brand-gray mb-8">
                  🏆 Special Reward
                </h3>

                <ul className="space-y-5">
                  <InfoItem 
                    icon={Users} 
                    label="Selected Candidates" 
                    value="Top 2–3 Performers" 
                  />
                  <InfoItem 
                    icon={Globe} 
                    label="Location" 
                    value="Onsite at IIT Madras" 
                  />
                  <InfoItem 
                    icon={Clock} 
                    label="Duration" 
                    value="1 Month" 
                  />
                  <InfoItem 
                    icon={Briefcase} 
                    label="Accommodation" 
                    value="Free Stay Provided" 
                  />
                  <InfoItem 
                    icon={FlaskConical} 
                    label="Meals" 
                    value="Free Food Included" 
                  />
                </ul>

                <div className="mt-3 p-3 rounded-lg bg-gradient-to-r from-vitality-teal/10 to-bio-tech-blue/10 text-sm text-slate-700">
                  Work directly with founding team and build AI + Ayurveda HealthTech solutions.
                </div>
              </div>
              
              {/* Box 2: Internship Details */}
              <div className="mt-8 bg-white rounded-2xl shadow-xl border border-light-gray p-6">
                <h3 className="text-2xl font-bold text-brand-gray mb-6">Internship Details</h3>
                <ul className="space-y-5 mb-8">
                  <InfoItem icon={Briefcase} label="Position" value="AI / ML Developer Intern" />
                  <InfoItem icon={Users} label="Openings" value="2–3" />
                  <InfoItem icon={Globe} label="Mode" value="Remote / Hybrid" />
                  <InfoItem icon={Clock} label="Duration" value="3 Months" />
                  <InfoItem icon={FlaskConical} label="Commitment" value="~4–5 hours/day" />
                  <InfoItem icon={BadgeIndianRupee} label="Stipend" value="Learning-focused, unpaid" />
                </ul>
                <a 
                  href={mailtoHref}
                  className="w-full bg-gradient-to-r from-vitality-teal to-bio-tech-blue text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Apply Now <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              
              <div className="mt-10 text-center p-4 bg-slate-50 rounded-lg border border-light-gray">
                 <h4 className="font-semibold text-brand-gray mb-2">🔹 Mentorship & Ecosystem</h4>
                 <p className="text-sm text-slate-700">Work is guided by senior mentors, with research inspired by <strong className="text-vitality-teal">IIT Madras</strong> and platform-thinking aligned with <strong className="text-vitality-teal">IIM</strong> frameworks.</p>
              </div>

            </motion.div>
          </div>
        </div>

        {/* Closing Note Section */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
            <p className="text-slate-700 italic">"All interns at <strong className="text-vitality-teal">AyurGenX</strong> work within an <strong className="text-vitality-teal">IIT Madras</strong>–backed innovation ecosystem, gaining exposure to real product development guided by experienced mentors and <strong className="text-vitality-teal">IIM</strong>-aligned leadership."</p>
        </div>
      </div>
    </div>
  );
}

// Helper components
const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-vitality-teal to-bio-tech-blue mb-5 pb-2 border-b border-light-gray">
      {title}
    </h2>
    <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
      {children}
    </div>
  </section>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <CircleDot className="w-5 h-5 mt-1 text-vitality-teal flex-shrink-0" />
    <span>{children}</span>
  </li>
);

const InfoItem = ({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: string }) => (
  <li className="flex items-start gap-4">
    <Icon className="w-6 h-6 text-vitality-teal flex-shrink-0" />
    <div>
      <p className="font-bold text-brand-gray">{label}</p>
      <p className="text-slate-700">{value}</p>
    </div>
  </li>
);

