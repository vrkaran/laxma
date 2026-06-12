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

export default function SalesInternshipPage() {

  // --- START: Pre-written Mailto Link Configuration ---
  const email = 'careers@ayurgenx.in';
  const subject = encodeURIComponent("Internship Application: Sales & Revenue Operations");
  const body = encodeURIComponent(
`Dear AyurGenX Hiring Team,

I am writing to express my strong interest in the Sales & Revenue Operations Intern position.

- Name: [Your Name]
- Contact: [Your Phone Number and LinkedIn Profile URL]
- Education: [e.g., BBA Student, Final Year]

I am passionate about business operations and startup growth. My resume is attached for your review.

Sincerely,
[Your Name]`
  );

  const mailtoHref = `mailto:${email}?subject=${subject}&body=${body}`;
  // --- END: Mailto Link Configuration ---

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
            💼 Sales & Revenue Operations Intern
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            (B2C Sales • Corporate Sales Support • Revenue Operations)
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
                <p><strong className="text-vitality-teal">AyurGenX</strong> is a deep-tech preventive healthcare platform building the world’s first AI-driven Reverse Aging & Organ Health Ecosystem, integrating medicine, lifestyle science, and technology.</p>
                <p>Built within an <strong className="text-vitality-teal">IIT Madras</strong>–backed innovation ecosystem, <strong className="text-vitality-teal">AyurGenX</strong> applies <strong className="text-vitality-teal">IIM</strong>-aligned business and execution frameworks to build sustainable, scalable healthcare revenue systems — not short-term sales tactics.</p>
              </Section>
              
              {/* Internship Overview */}
              <Section title="🎯 Internship Overview">
                <p>As a Sales & Revenue Operations Intern, you will work directly within <strong className="text-vitality-teal">AyurGenX’s</strong> revenue execution layer, focusing entirely on sales operations, pipeline management, and revenue enablement.</p>
                <p>You will work under founder-level guidance, business mentors, and within an <strong className="text-vitality-teal">IIT Madras</strong>–supported startup environment, learning how real HealthTech revenue systems are built, measured, and scaled.</p>
              </Section>

              {/* Key Responsibilities */}
              <Section title="🧩 Key Responsibilities">
                <ul className="space-y-3">
                  <ListItem>Support sales operations and revenue tracking.</ListItem>
                  <ListItem>Assist in managing B2C and B2B lead pipelines.</ListItem>
                  <ListItem>Coordinate with internal teams to ensure smooth sales execution.</ListItem>
                  <ListItem>Maintain structured documentation of leads, conversions, and revenue metrics.</ListItem>
                  <ListItem>Assist in corporate and institutional outreach support.</ListItem>
                  <ListItem>Help improve internal sales workflows and efficiency.</ListItem>
                </ul>
              </Section>
              
              {/* Who Should Apply */}
              <Section title="🎓 Who Should Apply">
                  <p>Students or fresh graduates interested in business operations, sales execution, and startup revenue systems. This role is ideal for candidates who want hands-on exposure to how early-stage startups generate revenue and are comfortable working with numbers, processes, and accountability.</p>
              </Section>

              {/* What You Will Gain */}
               <Section title="🧠 What You Will Gain">
                <ul className="space-y-3">
                  <ListItem>Direct exposure to HealthTech revenue operations.</ListItem>
                  <ListItem>Understanding of pricing, conversion funnels, and sales metrics.</ListItem>
                  <ListItem>Experience working inside an <strong className="text-vitality-teal">IIT Madras</strong>–backed startup ecosystem.</ListItem>
                  <ListItem>Practical learning aligned with <strong className="text-vitality-teal">IIM</strong>-style business thinking.</ListItem>
                  <ListItem>A strong foundation for careers in startup operations, business development, or revenue strategy.</ListItem>
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
                  <InfoItem icon={Briefcase} label="Position" value="Sales & Revenue Intern" />
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
            <p className="text-slate-700 italic">"Interns at <strong className="text-vitality-teal">AyurGenX</strong> work within an <strong className="text-vitality-teal">IIT Madras</strong>–backed innovation ecosystem, gaining exposure to <strong className="text-vitality-teal">IIM</strong>-aligned business execution frameworks shaping the future of preventive healthcare platforms."</p>
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
