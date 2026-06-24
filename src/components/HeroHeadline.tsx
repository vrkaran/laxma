import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ayurveda35 from '../image/ayurveda/35.webp';
import SEO from './SEO';

export default function HeroHeadline() {
  return (
    <section className="relative w-full min-h-screen bg-clinical-white flex items-center" style={{ fontFamily: "'Space Grotesk', sans-serif"}}>
      <SEO 
        title="World's #1 AI-Powered Precision Ayurveda & Reverse Ageing Platform"
        description="AyurGenX™ combines ancient Ayurvedic wisdom with AI technology. Consult with an Ayurvedic doctor, get personalized nutrition plans, and stay healthy from your home."
        keywords="AI in Ayurveda, Ayurvedic doctor, stay healthy from your home, Precision Ayurveda, reverse ageing, Ayurveda healthcare, Ayurvedic consultation"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.08),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(14,165,233,0.08),_transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* Left: Copy */}
          <div className="md:col-span-7 text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 mt-10 mb-8">
              <span className="text-sm md:text-base font-medium text-vitality-teal">
                AI-Powered Precision Ayurveda
              </span>
            </div>

            <h1 className="mt-6 text-6xl md:text-8xl font-bold tracking-[-0.05em] leading-[0.92] text-brand-gray animate-fadeIn">
              AyurGenX
              <sup className="text-2xl md:text-3xl ml-1 font-medium opacity-80">
                ™
              </sup>
            </h1>

            <h2 className="mt-5 text-2xl md:text-4xl font-semibold leading-[1.05] max-w-3xl text-brand-gray animate-slideUp">
              World's #1 AI-Powered Precision Ayurveda & Reverse Ageing Platform
            </h2>

            <p
              className="mt-8 text-lg md:text-xl text-slate-700 max-w-2xl leading-relaxed animate-fadeIn"
              style={{ animationDelay: "120ms" }}
            >
              Where ancient Ayurvedic wisdom meets AI-driven intelligence to reverse
              ageing, restore metabolism, and create a personalized wellness journey
              tailored to your unique body.
            </p>

            <div
              className="mt-10 flex flex-col sm:flex-row gap-4 animate-fadeIn"
              style={{ animationDelay: "220ms" }}
            >
              <Link
                to="/#how-it-works"
                className="group inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-to-r from-vitality-teal to-bio-tech-blue text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Explore How It Works
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-light-gray text-brand-gray font-semibold hover:bg-light-gray transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right: Minimal visual accent */}
          <div className="md:col-span-5 hidden md:block">
            <div className="relative h-[320px] md:h-[420px] rounded-3xl bg-gradient-to-br from-light-gray to-clinical-white border border-light-gray shadow-xl animate-fadeIn overflow-hidden" style={{ animationDelay: '180ms' }}>
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
            <div className="absolute inset-0 bg-gradient-to-tr from-vitality-teal/10 via-transparent to-bio-tech-blue/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
              
              
              {/* Subtle ring overlay */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

