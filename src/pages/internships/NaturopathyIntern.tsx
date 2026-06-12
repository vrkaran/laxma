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

export default function NaturopathyIntern() {

  const email = 'careers@ayurgenx.in';
  const subject = encodeURIComponent("Internship Application: Naturopathy & Lifestyle Medicine");
  const body = encodeURIComponent(
`Dear AyurGenX Hiring Team,

I am writing to express my strong interest in the Naturopathy & Lifestyle Medicine Intern position.

- Name: [Your Name]
- Contact: [Your Phone Number and LinkedIn Profile URL]
- Education: [e.g., BNYS Student/Graduate, Year]

I am passionate about preventive healthcare and believe my skills would be a great asset to your team. My resume is attached for your review.

Sincerely,
[Your Name]`
  );

  const mailtoHref = `mailto:${email}?subject=${subject}&body=${body}`;

  return (    <div className="bg-clinical-white font-sans">
      {/* Page Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-32 pb-16 bg-gradient-to-r from-vitality-teal/5 to-bio-tech-blue/5"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-gray">
            Naturopathy & Lifestyle Medicine Intern
          </h1>
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
                <p><strong className="text-vitality-teal">AyurGenX</strong> is a deep-tech preventive healthcare platform building the world’s first AI-driven Reverse Aging & Organ Health Ecosystem, integrating Naturopathy, Ayurveda, Nutrition, Lifestyle Medicine, and Technology.</p>
                <p>Built within an <strong className="text-vitality-teal">IIT Madras</strong>–backed innovation ecosystem, <strong className="text-vitality-teal">AyurGenX</strong> works at the intersection of medical science, research, and scalable health technology to solve real-world lifestyle health problems.</p>
              </Section>
              
              {/* Internship Overview */}
              <Section title="🎯 Internship Overview">
                <p>As a Naturopathy & Lifestyle Medicine Intern, you will work closely under experienced medical mentors within the <strong className="text-vitality-teal">AyurGenX</strong> ecosystem, with guidance aligned to <strong className="text-vitality-teal">IIT</strong> and <strong className="text-vitality-teal">IIM</strong>–level research rigor and execution standards.</p>
                <p>You will actively contribute to building a future-ready preventive health platform, shaping lifestyle protocols, wellness frameworks, and naturopathy-driven interventions used across the system.</p>
              </Section>

              {/* Key Responsibilities */}
              <Section title="🧩 Key Responsibilities">
                <ul className="space-y-3">
                  <ListItem>Assist in developing naturopathy-based lifestyle and wellness protocols.</ListItem>
                  <ListItem>Contribute to daily-life health solutions covering sleep, digestion, stress, and detoxification.</ListItem>
                  <ListItem>Support mentors in translating naturopathy principles into scalable health frameworks.</ListItem>
                  <ListItem>Help document lifestyle practices and preventive guidelines for the platform.</ListItem>
                  <ListItem>Collaborate with Ayurveda, Nutrition, and Product teams to build a unified health system.</ListItem>
                  <ListItem>Participate in internal research discussions and validation processes.</ListItem>
                </ul>
              </Section>
              
              {/* Who Should Apply */}
              <Section title="🎓 Who Should Apply">
                  <p>BNYS students or graduates, and individuals deeply interested in preventive healthcare, lifestyle medicine, and how medical knowledge integrates with technology. This role is ideal for those comfortable in a research-driven, structured innovation environment.</p>
              </Section>

              {/* What You Will Gain */}
               <Section title="🧠 What You Will Gain">
                <ul className="space-y-3">
                  <ListItem>Hands-on exposure to building a future healthcare platform.</ListItem>
                  <ListItem>Experience working under medical mentors within an <strong className="text-vitality-teal">IIT Madras</strong>–supported ecosystem.</ListItem>
                  <ListItem>Understanding of how medical and product decisions are made at scale.</ListItem>
                  <ListItem>A strong foundation for careers in preventive healthcare, HealthTech startups, or research labs.</ListItem>
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
                  <InfoItem icon={Briefcase} label="Position" value="Naturopathy Intern" />
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
            <p className="text-slate-700 italic">"At <strong className="text-vitality-teal">AyurGenX</strong>, interns work within an <strong className="text-vitality-teal">IIT Madras</strong>–backed innovation ecosystem, gaining exposure to research-driven healthcare systems and <strong className="text-vitality-teal">IIM</strong>-aligned problem-solving approaches shaping the future of preventive medicine."</p>
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
