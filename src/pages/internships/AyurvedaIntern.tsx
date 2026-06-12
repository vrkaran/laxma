import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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

export default function AyurvedaInternPage() {

  // --- Pre-written Mailto Link for this specific role ---
  const email = 'careers@ayurgenx.in';
  const subject = encodeURIComponent("Internship Application: Ayurveda & Preventive Medicine");
  const body = encodeURIComponent(
`Dear AyurGenX Hiring Team,

I am writing to express my strong interest in the Ayurveda & Preventive Medicine Intern position.

- Name: [Your Name]
- Contact: [Your Phone Number and LinkedIn Profile URL]
- Education: [e.g., BAMS Student/Graduate, Year]

I am passionate about preventive healthcare and believe my skills in [mention a key skill, e.g., research, protocol design] would be a great asset to your team.

My resume is attached for your review. Thank you for your time and consideration.

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
            Ayurveda & Preventive Medicine Intern
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
                <p><strong className="text-vitality-teal">AyurGenX</strong> is a deep-tech preventive healthcare platform building the world’s first AI-driven Reverse Aging & Organ Health Ecosystem, integrating Ayurveda, lifestyle medicine, nutrition, and technology.</p>
                <p>Built within an <strong className="text-vitality-teal">IIT Madras</strong>–backed innovation ecosystem, <strong className="text-vitality-teal">AyurGenX</strong> applies research-driven thinking and <strong className="text-vitality-teal">IIM</strong>-aligned execution frameworks to design scalable, preventive healthcare systems for modern lifestyles.</p>
              </Section>
              
              {/* Internship Overview */}
              <Section title="🎯 Internship Overview">
                <p>As an Ayurveda & Preventive Medicine Intern, you will work closely under experienced Ayurveda and medical mentors and within the <strong className="text-vitality-teal">IIT Madras</strong>–supported <strong className="text-vitality-teal">AyurGenX</strong> ecosystem, with guidance aligned to <strong className="text-vitality-teal">IIT</strong>-level research rigor and <strong className="text-vitality-teal">IIM</strong>-style systems thinking.</p>
                <p>This internship focuses on preventive healthcare design, not traditional OPD-style clinical practice. Interns actively contribute to building <strong className="text-vitality-teal">AyurGenX’s</strong> health intelligence layer — including lifestyle guidance, organ-health frameworks, and personalized preventive protocols.</p>
              </Section>

              {/* Key Responsibilities */}
              <Section title="🧩 Key Responsibilities">
                <ul className="space-y-3">
                  <ListItem>Assist in developing Ayurveda-based preventive health frameworks.</ListItem>
                  <ListItem>Contribute to Dosha-based lifestyle guidance, daily routines (Dinacharya), and seasonal protocols (Ritucharya).</ListItem>
                  <ListItem>Support mentors in converting Ayurvedic principles into structured, user-friendly health systems.</ListItem>
                  <ListItem>Collaborate with Naturopathy, Nutrition, Yoga, and Product teams.</ListItem>
                  <ListItem>Assist in documentation, validation, and internal research discussions.</ListItem>
                </ul>
              </Section>
              
              {/* Who Should Apply */}
              <Section title="🎓 Who Should Apply">
                  <p>BAMS students or graduates, and individuals interested in preventive Ayurveda, health system design, and HealthTech platforms. This role is ideal for those comfortable in a research-driven, structured innovation environment.</p>
              </Section>

              {/* What You Will Gain */}
               <Section title="🧠 What You Will Gain">
                <ul className="space-y-3">
                  <ListItem>Practical exposure to modern applications of Ayurveda in HealthTech.</ListItem>
                  <ListItem>Experience building preventive health systems at scale.</ListItem>
                  <ListItem>Opportunity to work under expert mentors within an <strong className="text-vitality-teal">IIT Madras</strong>–backed ecosystem.</ListItem>
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

                {/* The margin here is now mt-3, which pulls it right up under the Meals list item */}
                <div className="mt-3 p-3 rounded-lg bg-gradient-to-r from-vitality-teal/10 to-bio-tech-blue/10 text-sm text-slate-700">
                  Work directly with founding team and build AI + Ayurveda HealthTech solutions.
                </div>
              </div>
              
              {/* Box 2: Internship Details (Now with mt-8 for spacing) */}
              <div className="mt-8 bg-white rounded-2xl shadow-xl border border-light-gray p-6">
                <h3 className="text-2xl font-bold text-brand-gray mb-6">Internship Details</h3>
                <ul className="space-y-5 mb-8">
                  <InfoItem icon={Briefcase} label="Position" value="Ayurveda & Preventive Medicine Intern" />
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
                 <p className="text-sm text-slate-700">Work is guided by senior Ayurveda mentors, with research inspired by <strong className="text-vitality-teal">IIT Madras</strong> and platform-thinking aligned with <strong className="text-vitality-teal">IIM</strong> frameworks.</p>
              </div>

            </motion.div>
          </div>
        </div>

        {/* Closing Note Section */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
            <p className="text-slate-700 italic">"Interns at <strong className="text-vitality-teal">AyurGenX</strong> work within an <strong className="text-vitality-teal">IIT Madras</strong>–backed innovation ecosystem, gaining exposure to research-driven healthcare systems and <strong className="text-vitality-teal">IIM</strong>-aligned problem-solving approaches shaping the future of preventive medicine."</p>
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