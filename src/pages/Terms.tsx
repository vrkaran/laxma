import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import PageTransition from '../components/PageTransition'; // Assuming this component exists

const Terms = () => {
  // Concise, legally robust content.
  const sections = [
    {
      title: 'Purpose and Scope of Services',
      items: [
        'AyurGenX™ provides a technology platform for general wellness and lifestyle improvement through AI-driven insights. Our services are for informational and educational purposes only.',
        'CRITICAL DISCLAIMER: We do not provide medical advice, diagnosis, or treatment. Our services are not a substitute for a licensed physician or healthcare provider. You must consult a medical professional for any health concerns or before making any health-related decisions.',
      ],
    },
    {
      title: 'Eligibility and User Responsibilities',
      items: [
        'You must be 18 years or older to use our Services. You agree to provide accurate information and to use our platform lawfully and only for personal, non-commercial purposes. You are responsible for all activities under your account, including maintaining the confidentiality of your login credentials.',
      ],
    },
    {
      title: 'Intellectual Property Rights',
      items: [
        'All content, software, AI models, branding, and proprietary tools on our platform are the exclusive property of AyurGenX Private Limited and are protected by law. You may not copy, modify, distribute, sell, or reverse-engineer any part of our Services without our express written consent.',
      ],
    },
    {
      title: 'User-Generated Content',
      items: [
        'By submitting any content (such as health inputs or feedback), you grant AyurGenX™ a worldwide, royalty-free license to use, reproduce, and anonymize this data for the purpose of operating, improving, and researching our Services.',
      ],
    },
    {
      title: 'Payments and Subscriptions',
      items: [
        'Certain features of the Service may require payment. By purchasing a subscription or other paid service, you agree to our pricing and payment terms. All fees are handled in accordance with our separate Refund & Cancellation Policy.',
      ],
    },
    {
      title: 'Disclaimer of Warranties',
      items: [
        'The Services are provided "as is" and "as available" without any warranties, express or implied. AyurGenX™ does not warrant that the service will be uninterrupted, error-free, or that the AI-generated recommendations will be accurate or reliable. Your use of the Services is at your own sole risk.',
      ],
    },
    {
      title: 'Limitation of Liability',
      items: [
        'To the fullest extent permitted by law, AyurGenX Private Limited, its directors, and employees shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, resulting from your use of or reliance on our Services or AI recommendations.',
      ],
    },
    {
      title: 'Indemnification',
      items: [
        'You agree to indemnify, defend, and hold harmless AyurGenX™ from any and all claims, liabilities, damages, and costs arising from your use of the Services or your violation of these Terms.',
      ],
    },
    {
      title: 'Termination',
      items: [
        'We may terminate or suspend your access to our Services immediately, without prior notice, for any violation of these Terms. You may also delete your account at any time.',
      ],
    },
    {
      title: 'Governing Law',
      items: [
        'These Terms shall be governed by the laws of India, and any disputes shall be resolved exclusively in the courts of Chennai, Tamil Nadu.',
      ],
    },
    {
      title: 'Contact Information',
      items: [
        'For any questions about these Terms, please contact us:',
        'AyurGenX Private Limited',
        'Nirmaan, Sudha & Sankar Innovation Hub, IIT Madras, Chennai – 600036, India',
        '📧 Email: support@ayurgenx.in',
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-white shadow-xl border border-gray-200 p-8">
          {/* ----- HEADER SECTION ----- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Terms & Conditions
              </h1>
              {/* UPDATED: Replaced custom color with a standard one */}
              <p className="text-xl text-gray-600">
                Your Agreement for Using Our Services
              </p>
            </div>
            <div>
              <p className="text-slate-700">
                Welcome to AyurGenX™! By accessing or using our website, mobile application, AI wellness tools, or any services we offer (“Services”), you agree to be bound by these Terms & Conditions. If you do not agree with these terms, please do not use our Services. This agreement outlines your rights and responsibilities as a user.
              </p>
            </div>
          </motion.div>

          {/* ----- CONTENT SECTIONS ----- */}
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                {/* UPDATED: Using your specific hex code for the Shield icon */}
                <Shield className="text-[#2D8A82] mr-3" size={32} />
                <h2 className="text-3xl font-bold text-gray-800">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4">
                {section.items.map((item, idx) => {
                  const hasCritical = item.includes('CRITICAL DISCLAIMER:');
                  if (hasCritical) {
                    const parts = item.split('CRITICAL DISCLAIMER:');
                    return (
                      <motion.p
                        key={idx}
                        // UPDATED: Using your specific hex code for the border to match the icon
                        className="text-slate-700 text-lg leading-relaxed pl-4 border-l-2 border-[#2D8A82]"
                        whileHover={{ x: 10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <span className="font-semibold text-red-600">CRITICAL DISCLAIMER:</span>
                        {parts[1]}
                      </motion.p>
                    );
                  }
                  return (
                    <motion.p
                      key={idx}
                      // UPDATED: Using your specific hex code for the border to match the icon
                      className="text-slate-700 text-lg leading-relaxed pl-4 border-l-2 border-[#2D8A82]"
                      whileHover={{ x: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {item}
                    </motion.p>
                  );
                })}
              </div>
            </motion.div>
          ))}
          
          <div className="mt-8 text-gray-600">
            <p>We may update these Terms periodically, and your continued use of our Services signifies your acceptance of any changes. Thank you for being a part of the AyurGenX community.</p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Terms;
