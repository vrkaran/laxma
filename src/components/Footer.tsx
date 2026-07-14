import { Instagram, Twitter, Youtube, Linkedin, MapPin, Phone, Mail, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import playstoreImg from '../image/icon/playstore.webp';
import appstoreImg from '../image/icon/appstore.webp';
import logoImg from '../image/icon/logo.webp';

const footerLinks = {
  Company: ['About Us', 'Blog', 'Careers', 'Contact Us'],
  Offerings: ['AyurGenX Store', 'Membership Plans', "Women's Wellness", 'Preventive Programs'],
  Opportunities: ['AyurGenX Hackathon', 'Campus Ambassador', 'Partner With Us'],
};

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/ayurgenx/' },
  { icon: Twitter, label: 'Twitter', href: 'https://x.com/ayurgenx' },
  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@AyurGenX' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/hbxx/' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 pt-16 pb-10 text-slate-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Brand + trust line */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shadow-lg">
              <img
                src={logoImg}
                alt="AyurGenX Logo"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div>
              <div className="text-2xl font-extrabold tracking-tight text-white">AyurGenX</div>
              <div className="text-[12px] text-slate-400">Predict. Prevent. Personalize. Prolong.</div>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[12px] text-white/80">
            <Shield className="w-4 h-4 text-slate-200" />
            <span>Secure • Private • Expert‑Backed</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-10">

          {/* Innovation Office & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Innovation Office</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-white/80" />
                <p className="text-white/80">
                  Nirmaan, Sudha & Shankar Innovation Hub, IIT Madras<br/>
                  Chennai, Tamil Nadu, India - 600036
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/80" />
                <a href="tel:+918608692978" className="text-white/80 hover:text-white">+91 86086 92978</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/80" />
                <a href="mailto:support@ayurgenx.in" className="text-white/80 hover:text-white">support@ayurgenx.in</a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-white/80">
              {footerLinks.Company.map((link, index) => (
                <li key={index}><FooterLink label={link} /></li>
              ))}
            </ul>
          </div>

          {/* Offerings Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Offerings</h3>
            <ul className="space-y-3 text-white/80">
              {footerLinks.Offerings.map((link, index) => (
                <li key={index}><FooterLink label={link} /></li>
              ))}
            </ul>
          </div>

          {/* Opportunities Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Opportunities</h3>
            <ul className="space-y-3 text-white/80">
              {footerLinks.Opportunities.map((link, index) => (
                <li key={index}><FooterLink label={link} /></li>
              ))}
            </ul>
          </div>

          {/* App + Social Media Section */}
          <div className="col-span-1 md:col-span-2 xl:col-span-1">
            <h3 className="text-white font-semibold mb-4">Get the App</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                 <img src={playstoreImg} alt="Play Store QR" className="h-24 w-auto" />
                 <img src={appstoreImg} alt="App Store QR" className="h-24 w-auto" />
              </div>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 hover:scale-105"
                      aria-label={social.label}
                      target="_blank" rel="noopener noreferrer"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              © 2026 AyurGenX Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-white/80 hover:text-white transition-colors">Terms & Conditions</Link>
              <FooterLink label="Medical Disclaimer" />
              <FooterLink label="Refund Policy" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ label }: { label: string }) {
  const routeMap: Record<string, string> = {
    'About Us': '/about',
    'Contact Us': '/contact',
    'Careers': '/careers',
    'Blog': '/blog',
    'AyurGenX Store': '/store',
    'AyurGenX Hackathon': '/hackathon',
    'Campus Ambassador': '/ambassador',
    'Privacy Policy': '/privacy',
    'Terms & Conditions': '/terms',
  };
  const to = routeMap[label];

  if (!to) {
    return <span className="text-white/40 cursor-default">{label}</span>;
  }

  return (
    <Link to={to} className="hover:text-white transition-colors">{label}</Link>
  );
}