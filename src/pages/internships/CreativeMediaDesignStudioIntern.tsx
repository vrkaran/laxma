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

export default function CreativeInternshipPage() {

  const email = 'careers@ayurgenx.in';

  const subject = encodeURIComponent(
    "Internship Application: Graphic Design / UI UX / Branding Intern"
  );

  const body = encodeURIComponent(
`Dear AyurGenX Hiring Team,

I am writing to express my interest in the Design Internship opportunity.

- Name:
- Contact:
- College:
- Course:
- Portfolio / Behance / LinkedIn:

Skills:
Graphic Design / UI UX / Branding / Packaging / Content

Why I want to join AyurGenX:

Regards,
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
            Founding Design Internship
          </h1>

          <p className="mt-4 text-lg text-slate-700">
            (Graphic Design • UI/UX • Branding • Packaging • Merchandise)
          </p>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-x-12 gap-y-16">

          {/* Left Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >

              <Section title="🌍 About AyurGenX">
                <p>
                  <strong className="text-vitality-teal">AyurGenX</strong> is an emerging startup building what we envision as the world’s first AI-powered holistic health platform integrating Ayurveda, premium wellness products, and modern technology.
                </p>

                <p>
                  Built within an <strong className="text-vitality-teal">IIT Madras</strong> innovation ecosystem with support from prestigious institutions including <strong className="text-vitality-teal">IIT Roorkee</strong>.
                </p>
              </Section>

              <Section title="🎯 Internship Overview">
                <p>
                  This is a rare opportunity to become part of the early creative team and help shape how <strong className="text-vitality-teal">AyurGenX</strong> looks, feels, and communicates to the world.
                </p>

                <p>
                  You will work on graphics, UI/UX, packaging, merchandise, and premium brand systems.
                </p>
              </Section>

              <Section title="🎨 Key Responsibilities">
                <ul className="space-y-3">

                  <ListItem>Create creatives for social media, ads, website banners, campaigns, and launch materials.</ListItem>

                  <ListItem>Design UI/UX screens for AyurGenX mobile app, dashboards, and onboarding journeys.</ListItem>

                  <ListItem>Create packaging mockups for wellness kits, skincare, herbal, and future products.</ListItem>

                  <ListItem>Build and organize the official AyurGenX Brand Book (logo, fonts, colors, identity system).</ListItem>

                  <ListItem>Design merchandise such as hoodies, T-shirts, notebooks, mugs, founder kits, and welcome kits.</ListItem>

                  <ListItem>Create pitch deck visuals and startup storytelling assets.</ListItem>

                </ul>
              </Section>

              <Section title="🎓 Who Should Apply">
                <p>
                  Students or fresh graduates from NIFT, design colleges, media institutes, or creative backgrounds.
                </p>

                <p>
                  Basic knowledge of Figma, Canva, Photoshop, Illustrator, Adobe XD, or similar tools is preferred.
                </p>
              </Section>

              <Section title="🚀 What You Will Gain">
                <ul className="space-y-3">

                  <ListItem>Hands-on experience building a premium startup brand from zero.</ListItem>

                  <ListItem>Real portfolio work in branding, UI/UX, packaging, and campaigns.</ListItem>

                  <ListItem>Direct founder-level startup exposure.</ListItem>

                  <ListItem>Certificates, recommendation letters, and recognition.</ListItem>

                  <ListItem>Top candidates may receive future full-time opportunities.</ListItem>

                </ul>
              </Section>

              <Section title="🔗 Certification & Growth Path">
                <p>
                  Performance is evaluated continuously, and selected top candidates may receive AyurGenX Certified recognition and future growth opportunities.
                </p>
              </Section>

            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sticky top-40 mt-20"
            >

              {/* Special Reward */}
              <div className="mt-6 bg-white rounded-2xl shadow-xl border border-light-gray p-6">
                <h3 className="text-2xl font-bold text-brand-gray mb-8">
                  🏆 Special Reward
                </h3>

                <ul className="space-y-5">
                  <InfoItem icon={Users} label="Selected Candidates" value="Top Performers" />
                  <InfoItem icon={Globe} label="Location" value="IIT Ecosystem Exposure" />
                  <InfoItem icon={Clock} label="Growth Path" value="Future Full-Time Roles" />
                  <InfoItem icon={Briefcase} label="Mentorship" value="Direct Founder Access" />
                  <InfoItem icon={FlaskConical} label="Recognition" value="Certificates & Rewards" />
                </ul>

                <div className="mt-3 p-3 rounded-lg bg-gradient-to-r from-vitality-teal/10 to-bio-tech-blue/10 text-sm text-slate-700">
                  Build the visual identity of India’s future wellness-tech brand.
                </div>
              </div>

              {/* Internship Details */}
              <div className="mt-8 bg-white rounded-2xl shadow-xl border border-light-gray p-6">
                <h3 className="text-2xl font-bold text-brand-gray mb-6">
                  Internship Details
                </h3>

                <ul className="space-y-5 mb-8">
                  <InfoItem icon={Briefcase} label="Position" value="Graphic Design / UI UX / Branding Intern" />
                  <InfoItem icon={Users} label="Openings" value="2–5" />
                  <InfoItem icon={Globe} label="Mode" value="Remote / Hybrid" />
                  <InfoItem icon={Clock} label="Duration" value="2–3 Months" />
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
                <h4 className="font-semibold text-brand-gray mb-2">
                  🔹 Mentorship & Ecosystem
                </h4>

                <p className="text-sm text-slate-700">
                  Work inside an ecosystem inspired by <strong className="text-vitality-teal">IIT Madras</strong> and leading startup execution frameworks.
                </p>
              </div>

            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
         
            <p className="text-slate-700 italic">"Interns at <strong className="text-vitality-teal">AyurGenX</strong> work within an <strong className="text-vitality-teal">IIT Madras</strong>–backed innovation ecosystem, gaining exposure to research-driven healthcare systems and <strong className="text-vitality-teal">IIM</strong>-aligned problem-solving approaches shaping the future of preventive medicine."</p>
      
        </div>
      </div>
    </div>
  );
}

/* Components */

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-vitality-teal to-bio-tech-blue mb-5 pb-2 border-b border-light-gray">
      {title}
    </h2>
    <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
      {children}
    </div>
  </section>
);

const ListItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <CircleDot className="w-5 h-5 mt-1 text-vitality-teal flex-shrink-0" />
    <span>{children}</span>
  </li>
);

const InfoItem = ({ icon: Icon, label, value }) => (
  <li className="flex items-start gap-4">
    <Icon className="w-6 h-6 text-vitality-teal flex-shrink-0" />
    <div>
      <p className="font-bold text-brand-gray">{label}</p>
      <p className="text-slate-700">{value}</p>
    </div>
  </li>
);