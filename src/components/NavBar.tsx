import { Menu, X } from 'lucide-react'; // Removed Heart icon from imports as it's no longer used
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../image/icon/logo.webp';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-clinical-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          aria-label="Go to homepage"
          className="flex items-center gap-2 group"
        >
          {/* ----- START: CORRECTED LOGO SECTION ----- */}
          {/* Your logo image is now placed INSIDE the div with the green background */}
          <div className="w-10 h-10 rounded-xl bg-vitality-teal flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <img
              src={logoImg}
              alt="AyurGenX Logo"
              className="w-full h-full object-contain p-1" // Adjust padding/object-contain as needed for your specific logo image
            />
          </div>
          {/* ----- END: CORRECTED LOGO SECTION ----- */}
          
          <span className="text-2xl font-bold text-brand-gray">AyurGenX</span>
        </Link>

        {/* The rest of your navigation remains the same */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-vitality-teal font-medium inline-block" style={{ transform: 'scale(1.05)', willChange: 'transform' }}>
            Home
          </Link>
          <Link to="/programs" className="text-vitality-teal font-medium inline-block" style={{ transform: 'scale(1.05)', willChange: 'transform' }}>
            Programs
          </Link>
          <Link to="/store" className="text-vitality-teal font-medium inline-block" style={{ transform: 'scale(1.05)', willChange: 'transform' }}>
            Store
          </Link>
          <Link to="/about" className="text-vitality-teal font-medium inline-block" style={{ transform: 'scale(1.05)', willChange: 'transform' }}>
            About Us
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="btn-secondary">
            Sign In
          </button>
          <button className="btn-primary">
            Subscribe Now
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
        {isOpen ? (
            <X className="w-6 h-6 text-brand-gray" />
          ) : (
            <Menu className="w-6 h-6 text-brand-gray" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-clinical-white/95 backdrop-blur-lg border-t border-light-gray">
          <div className="px-6 py-4 space-y-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-vitality-teal font-medium" style={{ transform: 'scale(1.05)', willChange: 'transform' }}>
              Home
            </Link>
            <Link to="/programs" onClick={() => setIsOpen(false)} className="block text-vitality-teal font-medium" style={{ transform: 'scale(1.05)', willChange: 'transform' }}>
              Programs
            </Link>
            <Link to="/store" onClick={() => setIsOpen(false)} className="block text-vitality-teal font-medium" style={{ transform: 'scale(1.05)', willChange: 'transform' }}>
              Store
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block text-vitality-teal font-medium" style={{ transform: 'scale(1.05)', willChange: 'transform' }}>
              About Us
            </Link>
            <div className="pt-4 border-t border-light-gray space-y-2">
              <button className="w-full btn-secondary">
                Sign In
              </button>
              <button className="w-full btn-primary">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      )}

    {/*Announcement Banner */}
            {location.pathname !== "/hackathon" && (
              <a
                href="/hackathon"
                className="block w-full bg-[#318B97] text-white overflow-hidden whitespace-nowrap py-3 border-b border-white/10"
              >
                <div className="animate-marquee inline-block text-sm font-medium tracking-wide">

                  🚀 AyurGenX Hackathon 2026 Registrations Open Now •
                  AI • Healthcare • Ayurveda • Women's Wellness •
                  Student Wellness • Click Here to Explore •

                </div>
              </a>
            )}
    </nav>
  );
}
