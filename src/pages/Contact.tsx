import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Home, 
  ChevronRight 
} from 'lucide-react';

const ContactUs: React.FC = () => {
  return (
    <div className="font-sans text-gray-600 bg-white">
      
      {/* ================= HERO SECTION ================= */}
      {/* Replicates elementor-section-height-default with background image */}
      <section 
        className="relative w-full h-[400px] flex flex-col justify-center items-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1920&auto=format&fit=crop')", // Wellness/Nature placeholder
          backgroundColor: "rgba(0,0,0,0.4)", // Overlay to match elementor background-overlay
          backgroundBlendMode: "overlay"
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 text-center space-y-4 animate-fadeInUp">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center space-x-2 text-sm md:text-base font-medium uppercase tracking-wide">
            <a href="#" className="flex items-center hover:text-emerald-400 transition-colors">
              <Home className="w-4 h-4 mr-1" /> Home
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-emerald-400">Contact Us</span>
          </div>

          {/* Page Title */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Contact Us</h1>
        </div>
      </section>

      {/* ================= MAIN CONTACT SECTION ================= */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            
            {/* LEFT COLUMN: Get in Touch */}
            <div className="flex flex-col justify-center space-y-6 animate-fadeInRight">
              {/* Divider Line */}
              <div className="w-16 h-1 bg-emerald-600"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get in Touch</h2>
              
              <p className="text-lg leading-relaxed text-gray-500">
                Sharing the vision of AyurGenX to create a healthier, disease-free future through the fusion of Ayurveda and Genomics.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4 pt-4">
                <a href="#" className="p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="bg-white p-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
              <p className="text-gray-500 mb-8">
                Feel free to send us any questions regarding our AI-Ayurveda ecosystem. We are happy to answer them.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Name" 
                      className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-vitality-teal transition-colors bg-transparent placeholder-gray-400"
                      required 
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="Phone" 
                      className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-vitality-teal transition-colors bg-transparent placeholder-gray-400"
                      required 
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Email" 
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-vitality-teal transition-colors bg-transparent placeholder-gray-400"
                    required 
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    placeholder="Message" 
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-vitality-teal transition-colors bg-transparent placeholder-gray-400 resize-y"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="group inline-flex items-center justify-center btn-primary text-sm uppercase tracking-widest"
                  >
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ICON BOX SECTION ================= */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Box 1: Head Office */}
            <div className="flex items-start space-x-4 p-6 hover:bg-white hover:shadow-md transition-all rounded-lg group">
              <div className="flex-shrink-0">
                <MapPin className="w-10 h-10 text-emerald-600 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Head Office</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nirmaan, Sudha & Sankar Innovation Hub,<br />
                  IIT Madras,<br />
                  Chennai, Tamil Nadu, India – 600036
                </p>
              </div>
            </div>

            {/* Box 2: Call Center */}
            <div className="flex items-start space-x-4 p-6 hover:bg-white hover:shadow-md transition-all rounded-lg group">
              <div className="flex-shrink-0">
                <Phone className="w-10 h-10 text-emerald-600 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Call Center</h3>
                <p className="text-gray-600">
                  <a href="tel:+919876543210" className="hover:text-emerald-600 transition-colors">
                    +91 98765 43210
                  </a>
                </p>
              </div>
            </div>

            {/* Box 3: Mail Address */}
            <div className="flex items-start space-x-4 p-6 hover:bg-white hover:shadow-md transition-all rounded-lg group">
              <div className="flex-shrink-0">
                <Mail className="w-10 h-10 text-emerald-600 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Mail Address</h3>
                <p className="text-gray-600">
                  <a href="mailto:contact@ayurgenx.com" className="hover:text-emerald-600 transition-colors">
                    contact@ayurgenx.com
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6768203038564!2d80.23116209999999!3d12.9925106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d7d1ece1ef5%3A0x1d139e69f576bae8!2sNirmaan%20Space!5e0!3m2!1sen!2sin!4v1765103946973!5m2!1sen!2sin"
          title="AyurGenX Location"
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          aria-label="AyurGenX Office Location"
        ></iframe>
      </section>

    </div>
  );
};

export default ContactUs;
