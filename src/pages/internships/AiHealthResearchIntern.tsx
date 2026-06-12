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

export default function AiHealthResearchInternshipPage() {

  // --- Pre-written Mailto Link for this specific role ---
  const email = 'careers@ayurgenx.in';
  const subject = encodeURIComponent("Internship Application: AI Health Research Intern");
  const body = encodeURIComponent(
`Dear AyurGenX Hiring Team,

I am writing to express my strong interest in the AI Health Research Intern position.

- Name: [Your Name]
- Contact: [Your Phone Number and LinkedIn/Portfolio URL]
- Education: [e.g., B.Tech in AI/ML, M.Sc in Data Science]

I am passionate about the intersection of AI and preventive healthcare. My resume is attached for your review.

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
            AI Health Research Intern
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            (Healthcare AI • Predictive Modeling • Clinical Intelligence)
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
              <Section title="🔬 Role Summary">
                <p>This internship operates at the intersection of healthcare, research, and artificial intelligence. As an AI Health Research Intern, you will help <strong className="text-vitality-teal">AyurGenX</strong> build, validate, and iterate AI models that support health prediction, risk scoring, and personalized preventive protocols.</p>
                <p>You will work within an <strong className="text-vitality-teal">IIT Madras</strong>–backed innovation ecosystem, under mentorship frameworks influenced by <strong className="text-vitality-teal">IIT</strong> research culture and <strong className="text-vitality-teal">IIM</strong>-aligned strategic thinking, ensuring that AI systems are accurate, ethical, explainable, and clinically meaningful.</p>
              </Section>
              
              <Section title="🔹 Mentorship & Research Environment">
                <ul className="space-y-3">
                  <ListItem>Work under structured guidance and review processes inspired by <strong className="text-vitality-teal">IIT</strong> research labs.</ListItem>
                  <ListItem>Exposure to academic-grade validation, documentation, and model review practices.</ListItem>
                  <ListItem>Strategic framing of AI problems aligned with <strong className="text-vitality-teal">IIM</strong>-style product and decision frameworks.</ListItem>
                  <ListItem>Collaboration with medical, research, and product teams to ensure clinical relevance.</ListItem>
                </ul>
              </Section>

              <Section title="🧩 Core Responsibilities">
                <ul className="space-y-3">
                  <ListItem>Assist in data preprocessing, feature engineering, and dataset curation for health-related data.</ListItem>
                  <ListItem>Support training, validation, and evaluation of predictive health models using frameworks like TensorFlow or PyTorch.</ListItem>
                  <ListItem>Help build explainable AI components like health risk profiles and early disease indicators.</ListItem>
                  <ListItem>Document model performance, assumptions, biases, and limitations.</ListItem>
                  <ListItem>Collaborate with clinical teams to translate medical insights into usable AI features.</ListItem>
                </ul>
              </Section>
              
              <Section title="🎓 Who This Role Is For">
                  <p>Students or graduates from AI/ML, Data Science, Computer Science, Biomedical Engineering, or Health Informatics. This role is for individuals interested in ethical healthcare AI and how it is validated before real-world deployment.</p>
              </Section>

              <Section title="🚀 What You Will Gain">
                <ul className="space-y-3">
                  <ListItem>Practical experience working with real-world medical and health datasets.</ListItem>
                  <ListItem>Understanding of bias, fairness, and explainability in healthcare AI.</ListItem>
                  <ListItem>Insight into building AI systems within an <strong className="text-vitality-teal">IIT</strong> ecosystem–influenced research environment, aligned with <strong className="text-vitality-teal">IIM</strong>-style strategic thinking.</ListItem>
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
                  <InfoItem icon={Briefcase} label="Position" value="AI Health Research Intern" />
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
            <p className="text-slate-700 italic">"All interns at <strong className="text-vitality-teal">AyurGenX</strong> work within an <strong className="text-vitality-teal">IIT Madras</strong>–backed innovation ecosystem, gaining exposure to research rigor, ethical validation, and strategic frameworks inspired by <strong className="text-vitality-teal">IIT</strong> and <strong className="text-vitality-teal">IIM</strong> institutions."</p>
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

