import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { roles } from '../data/careers'
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

export function SlugVacancyDetail({ slug }: { slug: string }) {
  const vacancy = roles.find(r => r.slug === slug)

  if (!vacancy) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Role not found</h1>
          <p className="mt-4 text-gray-700">This vacancy may have been moved or closed.</p>
          <div className="mt-6">
            <Link to="/careers" className="px-4 py-2 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors">Back to Careers</Link>
          </div>
        </motion.div>
      </div>
    )
  }

  const isInternship = vacancy.type.toLowerCase().includes('internship') || vacancy.category.toLowerCase().includes('internship');

  const email = 'careers@ayurgenx.in';
  const subject = encodeURIComponent(`Application for ${vacancy.title}`);
  const mailtoHref = `mailto:${email}?subject=${subject}`;

  return (
    <div className="bg-clinical-white font-sans min-h-screen">
      {/* Page Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-32 pb-16 bg-gradient-to-r from-vitality-teal/5 to-bio-tech-blue/5"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-gray">
            {vacancy.title}
          </h1>
          <div className="mt-4 flex items-center justify-center gap-3 text-sm">
            <span className="px-3 py-1 rounded-full bg-vitality-teal/10 text-vitality-teal font-medium border border-vitality-teal/20">
              {vacancy.type}
            </span>
            <span className="text-slate-600 flex items-center gap-1">
              <Globe className="w-4 h-4" /> {vacancy.location}
            </span>
          </div>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            {vacancy.overview}
          </p>
        </div>
      </motion.header>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-x-12 gap-y-16">

          {/* Left Column: Role Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Section title="🎯 Responsibilities">
                <ul className="space-y-3">
                  {vacancy.responsibilities.map((item, idx) => (
                    <ListItem key={idx}>{item}</ListItem>
                  ))}
                </ul>
              </Section>
              
              <Section title="⚙️ Qualifications">
                <ul className="space-y-3">
                  {vacancy.qualifications.map((item, idx) => (
                    <ListItem key={idx}>{item}</ListItem>
                  ))}
                </ul>
              </Section>

              {isInternship && (
                <Section title="🔗 Certification & Growth Path">
                  <p>This internship is part of the AyurGenX Certified Program. Performance is evaluated continuously, and only the top 1–5% of interns earn the AyurGenX Certified Certificate.</p>
                </Section>
              )}

              <div className="mt-12 flex items-center gap-4">
                <Link to="/careers" className="text-vitality-teal hover:underline flex items-center gap-1">
                  ← Back to Careers
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sticky top-40"
            >
              {isInternship && (
                /* Box 1: Special Reward */
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
              )}
              
              {/* Box 2: Role Details */}
              <div className={`${isInternship ? 'mt-8' : 'mt-0'} bg-white rounded-2xl shadow-xl border border-light-gray p-6`}>
                <h3 className="text-2xl font-bold text-brand-gray mb-6">
                  {isInternship ? 'Internship Details' : 'Role Details'}
                </h3>
                <ul className="space-y-5 mb-8">
                  <InfoItem icon={Briefcase} label="Position" value={vacancy.title} />
                  <InfoItem icon={Globe} label="Location" value={vacancy.location} />
                  <InfoItem icon={Clock} label="Type" value={vacancy.type} />
                  {isInternship && (
                    <>
                      <InfoItem icon={Users} label="Openings" value="2–3" />
                      <InfoItem icon={FlaskConical} label="Commitment" value="~4–5 hours/day" />
                      <InfoItem icon={BadgeIndianRupee} label="Stipend" value="Learning-focused, unpaid" />
                    </>
                  )}
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
            <p className="text-slate-700 italic">"All {isInternship ? 'interns' : 'team members'} at <strong className="text-vitality-teal">AyurGenX</strong> work within an <strong className="text-vitality-teal">IIT Madras</strong>–backed innovation ecosystem, gaining exposure to real product development and <strong className="text-vitality-teal">IIM</strong>-aligned execution frameworks."</p>
        </div>
      </div>
    </div>
  )
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

export default function CareerVacancyDetail() {
  const { slug } = useParams()
  return <SlugVacancyDetail slug={slug || ''} />
}
