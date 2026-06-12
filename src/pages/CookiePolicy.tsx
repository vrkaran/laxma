import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import PageTransition from '../components/PageTransition'; // Assuming this component exists

const CookiePolicy = () => {
  // Updated sections array: No numbering and the "Introduction" section has been removed.
  const sections = [
    {
      title: 'What Are Cookies?',
      items: [
        'Cookies are small text files stored on your device that help websites function smoothly and improve user experience.',
        'They help us recognize your preferences, improve speed, personalize your experience, analyze performance, enhance security, and understand how you interact with our Services.',
        'Cookies do not give us access to your personal files or device.',
      ],
    },
    {
      title: 'Types of Cookies We Use',
      items: [
        'Essential (Strictly Necessary) Cookies: Required for our platform to work, allowing secure login, navigation, and core functionality.',
        'Performance & Analytics Cookies: Help us understand user behavior and improve our services using tools like Google Analytics. All data is anonymous.',
        'Functionality Cookies: Remember your preferences like login details or language settings to improve convenience.',
        'Advertising & Marketing Cookies: Measure ad effectiveness and show relevant offers. You may opt out of these anytime.',
        'AI Personalization Cookies: Help improve the accuracy of our AI-driven wellness recommendations and insights.',
      ],
    },
    {
      title: 'Third-Party Cookies',
      items: [
        'Some cookies are placed by trusted partners like analytics providers and cloud services. They operate under strict confidentiality rules. AyurGenX never sells or rents any cookie-based data.',
      ],
    },
    {
      title: 'Why We Use Cookies',
      items: [
        'We use cookies to provide core platform functions, personalize insights, track performance, diagnose technical problems, and enhance product development. They support the safety and efficiency of our platform.',
      ],
    },
    {
      title: 'How You Can Control Cookies',
      items: [
        'Browser Settings: You can block or delete cookies through your browser (Chrome, Safari, Firefox, etc.), though this may affect certain features.',
        'App & Device Settings: You can control app tracking permissions, privacy settings, and notifications on your mobile device.',
        'Opt-Out Tools: You can disable marketing and analytics cookies using tools like the Google Analytics Opt-Out Tool.',
      ],
    },
    {
      title: 'Do Cookies Store Personal Data?',
      items: [
        'Most cookies do not store identifiable information. Some may store anonymous session IDs or basic preferences. We never use cookies to store passwords, financial info, or sensitive medical data.',
      ],
    },
    {
      title: 'Data Security',
      items: [
        'We use industry-standard protections like SSL/HTTPS encryption and secure servers to ensure cookies are stored responsibly.',
      ],
    },
    {
      title: 'Updates to This Cookies Policy',
      items: [
        'We may update this policy to reflect new features or legal requirements. The "Last Updated" date will always be shown at the top of the policy.',
      ],
    },
    {
      title: 'Contact Us',
      items: [
        'If you have questions about this Cookies Policy:',
        'AyurGenX Private Limited',
        'Nirmaan, Sudha & Sankar Innovation Hub, IIT Madras, Chennai – 600036, India',
        '📧 Email: support@ayurgenx.in',
        '🌐 Website: https://www.ayurgenx.in',
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-white shadow-xl border border-gray-200 p-8">
        {/* ----- START: The new header you requested ----- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            {/* UPDATED: Main heading color */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cookies Policy
            </h1>
            {/* UPDATED: Tagline color */}
            <p className="text-xl text-gray-600 font-semibold">
              Your privacy is our priority
            </p>
          </div>
          <div>
            {/* UPDATED: Introductory paragraph color */}
            <p className="text-gray-700">
              At AyurGenX™, we believe in being transparent about how we use your data. This Cookies Policy explains how we use cookies and similar tracking technologies on our website, mobile application, and AI wellness platform (“Services”). By using our Services, you consent to the use of cookies as described here.
            </p>
          </div>
        </motion.div>
        {/* ----- END: New header ----- */}

        {/* The rest of the page with the updated, non-numbered sections */}
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Ensures animation only happens once
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              {/* UPDATED: Shield icon color */}
              <Shield className="text-[#2D8A82] mr-3" size={32} />
              {/* UPDATED: Section heading color */}
              <h2 className="text-3xl font-bold text-gray-800">
                {section.title}
              </h2>
            </div>
            <div className="space-y-4">
              {section.items.map((item, idx) => (
                <motion.p
                  key={idx}
                  // UPDATED: Paragraph text color and left border color
                  className="text-gray-700 text-lg leading-relaxed pl-4 border-l-2 border-[#2D8A82]"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>
        ))}
        
        {/* UPDATED: Final paragraph color */}
        <div className="mt-8 text-gray-600">
          <p>You can manage your cookie preferences at any time through your browser or device settings. For more details on how we handle your personal data, please review our Privacy Policy.</p>
        </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CookiePolicy;
