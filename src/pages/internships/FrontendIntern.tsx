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

export default function FrontendInternshipPage() {

  // --- Pre-written Mailto Link for this specific role ---
  const email = 'careers@ayurgenx.in';
  const subject = encodeURIComponent("Internship Application: Frontend Developer (Next.js)");
  const body = encodeURIComponent(
`Dear AyurGenX Hiring Team,

I am writing to express my strong interest in the Frontend Developer Intern (Next.js) position.

- Name: [Your Name]
- Contact: [Your Phone Number, LinkedIn, and GitHub/Portfolio URL]
- Education: [e.g., B.Tech Computer Science, Year]

I am passionate about building high-quality user interfaces and believe my experience with React and Next.js would be a great asset. My resume is attached.

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
            Frontend Developer Intern (Next.js)
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            (Website • UI Development • User Experience)
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
                <p><strong className="text-vitality-teal">AyurGenX</strong> is a deep-tech preventive healthcare platform building the world’s first AI-driven Reverse Aging & Organ Health Ecosystem. Built within an <strong className="text-vitality-teal">IIT Madras</strong>–backed innovation ecosystem, we follow <strong className="text-vitality-teal">IIT</strong>-level technical rigor and <strong className="text-vitality-teal">IIM</strong>-aligned product execution frameworks to build credible and intuitive digital platforms.</p>
              </Section>
              
              {/* Internship Overview */}
              <Section title="🎯 Internship Overview">
                <p>As a Frontend Developer Intern, your core responsibility is to build, improve, and maintain the frontend of the <strong className="text-vitality-teal">AyurGenX</strong> website and web platform using modern technologies like Next.js. This role is focused on creating a clean, fast, and user-friendly frontend that reflects a premium HealthTech brand.</p>
              </Section>

              {/* Key Responsibilities */}
              <Section title="🎨 Key Responsibilities">
                <ul className="space-y-3">
                  <ListItem>Develop and enhance the <strong className="text-vitality-teal">AyurGenX</strong> website and web platform using Next.js.</ListItem>
                  <ListItem>Build clean, responsive, and creative UI that is performance-optimized.</ListItem>
                  <ListItem>Implement reusable components and follow best practices for code structure and version control.</ListItem>
                  <ListItem>Collaborate with Product, Design, and Backend teams to translate requirements into functional components.</ListItem>
                </ul>
              </Section>
              
              {/* Required Skills */}
              <Section title="⚙️ Required Skills & Tech Stack">
                <p><b>Must-Have:</b> Strong understanding of React & Next.js, along with HTML, CSS, and JavaScript/TypeScript. Ability to build visually appealing and user-friendly UI.</p>
                <p><b>Good-to-Have:</b> Experience with Tailwind CSS, basic understanding of REST APIs, and an eye for design and UX clarity.</p>
              </Section>

              {/* What You Will Gain */}
               <Section title="🧠 What You Will Gain">
                <ul className="space-y-3">
                  <ListItem>Hands-on experience building the official frontend of a HealthTech platform in a real production environment.</ListItem>
                  <ListItem>Strong exposure to Next.js and mentorship within an <strong className="text-vitality-teal">IIT Madras</strong>–backed startup ecosystem.</ListItem>
                  <ListItem>Understanding of how frontend integrates with product, backend, and AI-driven features.</ListItem>
                  <ListItem>A strong foundation for a career as a Frontend or Full-Stack Developer.</ListItem>
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
                  <InfoItem icon={Briefcase} label="Position" value="Frontend Developer Intern" />
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
            <p className="text-slate-700 italic">"All interns at <strong className="text-vitality-teal">AyurGenX</strong> work within an <strong className="text-vitality-teal">IIT Madras</strong>–backed innovation ecosystem, gaining exposure to real product development and <strong className="text-vitality-teal">IIM</strong>-aligned execution frameworks shaping the future of preventive healthcare platforms."</p>
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

