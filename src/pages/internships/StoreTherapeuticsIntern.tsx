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

export default function StoreInternshipPage() {

  // --- Pre-written Mailto Link for this specific role ---
  const email = 'careers@ayurgenx.in';
  const subject = encodeURIComponent("Internship Application: Store & Therapeutics Intern");
  const body = encodeURIComponent(
`Dear AyurGenX Hiring Team,

I am writing to express my strong interest in the Store & Therapeutics Intern position.

- Name: [Your Name]
- Contact: [Your Phone Number and LinkedIn Profile URL]
- Education: [e.g., B.Pharm / BAMS Student]

I am passionate about the intersection of health products and technology. My resume is attached for your review.

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
            Store & Therapeutics Intern
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            (Product Research • Packaging • Compliance • Store Operations)
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
              <Section title="🌍 About AyurGenX">
                <p><strong className="text-vitality-teal">AyurGenX</strong> is a deep-tech preventive healthcare platform building the world’s first AI-powered Reverse Aging & Organ Health Intelligence System. We design therapeutic products and digital health solutions rooted in medical science.</p>
                <p>Operating within an <strong className="text-vitality-teal">IIT Madras</strong>–backed innovation ecosystem, we align our execution with <strong className="text-vitality-teal">IIM</strong>-style analytical and operational frameworks.</p>
              </Section>
              
              <Section title="🎯 Internship Overview">
                <p>As a Store & Therapeutics Intern, you will work on the core product backbone of <strong className="text-vitality-teal">AyurGenX</strong> — from researching products to ensuring accurate packaging, documentation, and store readiness.</p>
                <p>This role brings together medical research, regulatory awareness, and operational clarity. You will work under medical and product mentors with guidance inspired by the <strong className="text-vitality-teal">IIT Madras</strong> / <strong className="text-vitality-teal">IIM</strong> ecosystem.</p>
              </Section>

              <Section title="🧪 Key Responsibilities">
                <h3 className="text-lg font-semibold text-brand-gray mb-2">🌿 Therapeutic Product Research</h3>
                <ul className="space-y-2 mb-4">
                  <ListItem>Research Ayurvedic, naturopathy, and lifestyle-based therapeutic products.</ListItem>
                  <ListItem>Study ingredients, formulations, and intended health outcomes.</ListItem>
                </ul>
                <h3 className="text-lg font-semibold text-brand-gray mb-2">📦 Packaging, Labeling & Documentation</h3>
                <ul className="space-y-2 mb-4">
                  <ListItem>Draft and review product descriptions, ingredient lists, and usage instructions.</ListItem>
                  <ListItem>Ensure packaging content aligns with medical logic and compliance needs.</ListItem>
                </ul>
                <h3 className="text-lg font-semibold text-brand-gray mb-2">📜 Compliance & Regulatory Support</h3>
                <ul className="space-y-2">
                  <ListItem>Assist with documentation related to AYUSH and FSSAI.</ListItem>
                  <ListItem>Maintain structured compliance records and audit-ready files.</ListItem>
                </ul>
              </Section>
              
              <Section title="🎓 Who Should Apply">
                  <p>Students or graduates from Ayurveda, Naturopathy, Pharmacy, Life Sciences, or Healthcare Management. This role is for individuals who value precision, responsibility, and healthcare integrity.</p>
              </Section>

               <Section title="🚀 What You Will Gain">
                <ul className="space-y-3">
                  <ListItem>Exposure to real therapeutic product development and HealthTech store operations.</ListItem>
                  <ListItem>Experience within an <strong className="text-vitality-teal">IIT Madras</strong>–backed innovation ecosystem.</ListItem>
                  <ListItem>Understanding of healthcare product compliance and medical documentation standards.</ListItem>
                  <ListItem>A strong foundation for a career in health product management or healthcare operations.</ListItem>
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
                  <InfoItem icon={Briefcase} label="Position" value="Store & Therapeutics Intern" />
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
            <p className="text-slate-700 italic">"All interns at <strong className="text-vitality-teal">AyurGenX</strong> work within an <strong className="text-vitality-teal">IIT Madras</strong>–backed innovation ecosystem, gaining exposure to research-driven execution and <strong className="text-vitality-teal">IIM</strong>-aligned decision-making frameworks in preventive healthcare."</p>
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
