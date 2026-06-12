import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ayurveda35 from '../image/ayurveda/35.webp';
import SEO from './SEO';

export default function HeroHeadline() {
  return (
    <section className="relative w-full bg-clinical-white">
      <SEO 
        title="World’s #1 AI-Powered Precision Ayurveda & Reverse Ageing Platform"
        description="AyurGenX™ combines ancient Ayurvedic wisdom with AI technology. Consult with an Ayurvedic doctor, get personalized nutrition plans, and stay healthy from your home."
        keywords="AI in Ayurveda, Ayurvedic doctor, stay healthy from your home, Precision Ayurveda, reverse ageing, Ayurveda healthcare, Ayurvedic consultation"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.08),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(14,165,233,0.08),_transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* Left: Copy */}
          <div className="md:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-slate-200 shadow-sm backdrop-blur">
              <span className="text-xs font-medium tracking-wide text-slate-700">Precision Ayurveda + AI</span>
            </div>

            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-brand-gray animate-fadeIn">
              AyurGenX™
            </h1>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-brand-gray animate-slideUp">
              — World’s #1 AI-Powered Precision Ayurveda & Reverse Ageing Platform
            </h2>

            <p className="mt-8 text-lg md:text-xl text-slate-700 max-w-2xl animate-fadeIn" style={{ animationDelay: '120ms' }}>
              Where ancient Ayurvedic healing meets AI-driven intelligence to reverse ageing, restore metabolism, and rebuild your internal wellness — personalized for your unique body.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: '220ms' }}>
              <Link
                to="/#how-it-works"
                className="group inline-flex items-center justify-center px-6 py-3 rounded-full bg-vitality-teal text-white font-semibold shadow-sm hover:bg-vitality-teal/90 transition-colors"
                aria-label="Explore How It Works"
              >
                <span className="flex items-center gap-2">
                  Explore How It Works
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-light-gray text-brand-gray font-semibold hover:bg-light-gray transition-colors"
                aria-label="Learn More About AyurGenX"
              >
                Learn More
              </Link>
            </div>

            {/* Credibility chips */}
            <div className="mt-8 flex flex-wrap gap-3 animate-fadeIn" style={{ animationDelay: '320ms' }}>
              <span className="px-3 py-1.5 rounded-full bg-clinical-white text-brand-gray text-sm border border-light-gray">Trusted by Doctors</span>
              <span className="px-3 py-1.5 rounded-full bg-clinical-white text-brand-gray text-sm border border-light-gray">AI-powered Health Intelligence</span>
              <span className="px-3 py-1.5 rounded-full bg-clinical-white text-brand-gray text-sm border border-light-gray">Personalized Nutrition Protocols</span>
              <span className="px-3 py-1.5 rounded-full bg-clinical-white text-brand-gray text-sm border border-light-gray">Privacy-first, Secure by Design</span>
            </div>
          </div>

          {/* Right: Minimal visual accent */}
          <div className="md:col-span-5 hidden md:block">
            <div className="relative h-64 md:h-80 rounded-3xl bg-gradient-to-br from-light-gray to-clinical-white border border-light-gray shadow-sm animate-fadeIn overflow-hidden" style={{ animationDelay: '180ms' }}>
              {/* Soft gradient accents */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-bio-tech-blue to-vitality-teal opacity-20 blur-md" />
              <div className="absolute bottom-6 left-6 w-20 h-20 rounded-full bg-gradient-to-br from-vitality-teal to-bio-tech-blue opacity-20 blur-md" />

              {/* Featured Ayurveda image */}
              <img
                src={ayurveda35}
                alt="Ayurveda Insight"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                loading="lazy"
              />

              

              {/* Subtle ring overlay */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

