import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import PageTransition from '../components/PageTransition'; // Assuming this component exists

const Privacy = () => {
  // Updated with your new, detailed privacy policy content
  const sections = [
    {
      title: 'Scope of This Policy',
      content: [
        'This Privacy Policy applies to:',
        '• https://www.ayurgenx.in',
        '• AyurGenX mobile applications',
        '• AI wellness tools and dashboards',
        '• Questionnaires, assessments, and forms',
        '• Subscriptions, programs, and digital services',
        'This policy does not apply to third-party websites or services linked from our platform.',
      ]
    },
    {
      title: 'Information We Collect',
      content: [
        'We collect information strictly necessary to deliver personalized, secure, and effective wellness services.',
        'Personal Information: We may collect your full name, email address, phone number, age and gender, city and state, and account login credentials.',
        'Wellness & Lifestyle Information (Non-Medical): This includes your daily routine, food preferences, sleep patterns, stress levels, physical activity, Ayurvedic constitution (Dosha) inputs, and wellness goals. We DO NOT collect medical diagnoses, prescriptions, or clinical lab reports.',
        'Device & Technical Information: This is collected automatically for security and includes your IP address, device type, operating system, browser, app usage, and cookies.',
        'Optional Third-Party Integrations: Only if you explicitly connect them, we may access data from wearables (steps, sleep hours) or fitness apps.',
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'We use your data for legitimate purposes, including providing AI-driven wellness insights, personalizing recommendations, improving algorithm accuracy, managing subscriptions, customer support, and platform security.',
        '🚫 We do not use your data for medical diagnosis or treatment.',
      ]
    },
    {
      title: 'Legal Basis for Processing',
      content: [
        'We process personal data based on your explicit consent, performance of our service contract, legitimate business interests, and compliance with Indian laws and regulations.',
      ]
    },
    {
      title: 'Data Sharing & Disclosure',
      content: [
        'AyurGenX does not sell, rent, or trade personal data.',
        'We may share data with trusted service providers (like cloud hosting and analytics services) under strict confidentiality agreements, or with legal authorities if required by law.',
      ]
    },
    {
      title: 'Data Storage & Security',
      content: [
        'We follow industry-standard security practices like SSL/HTTPS encryption, secure cloud infrastructure, role-based access controls, and regular security audits.',
        '⚠️ While we take strong measures, no digital system is 100% secure. Users are responsible for protecting their login credentials.',
      ]
    },
    {
      title: 'Data Retention',
      content: [
        'We retain personal data only as long as necessary for service delivery, legal compliance, or legitimate business purposes. Anonymized data may be kept for research.',
      ]
    },
    {
      title: 'Your Rights',
      content: [
        'You have the right to access, correct, or request deletion of your personal data. You can also withdraw consent, restrict processing, and opt out of non-essential communication.',
        'To exercise your rights, email us at: support@ayurgenx.in',
      ]
    },
    {
      title: 'Children’s Privacy',
      content: [
        'AyurGenX Services are not intended for individuals under 18 years. We do not knowingly collect data from minors.',
      ]
    },
    {
      title: 'Cookies & Tracking Technologies',
      content: [
        'We use cookies for functionality, analytics, personalization, and security. Full details are provided in our Cookies Policy.',
      ]
    },
    {
      title: 'Limitation of Liability',
      content: [
        'AyurGenX is not liable for decisions made based on AI wellness insights, incorrect user-provided data, or unauthorized access due to user negligence.',
      ]
    },
    {
      title: 'Contact & Grievance Officer',
      content: [
        'For questions, concerns, or grievances:',
        'AyurGenX Private Limited',
        'Nirmaan, Sudha & Sankar Innovation Hub, IIT Madras, Chennai – 600036, India',
        '📧 Email: support@ayurgenx.in',
        '🌐 Website: https://www.ayurgenx.in',
      ]
    }
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
              Privacy Policy
            </h1>
            <p className="text-2xl text-gray-600 font-semibold">
              Your privacy is our priority
            </p>
          </div>
          <div>
            <p className="text-gray-700 text-lg leading-relaxed">
              At AyurGenX™, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, store, and safeguard your data when you use our services, including our website, mobile application, and AI wellness platform. By using our services, you agree to the practices described in this policy.
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
              {/* UPDATED: Shield icon color set to your specific hex code */}
              <Shield className="text-[#2D8A82] mr-3" size={32} />
              <h2 className="text-3xl font-bold text-gray-800">
                {section.title}
              </h2>
            </div>
            <div className="space-y-4">
              {section.content.map((item, idx) => (
                <motion.p
                  key={idx}
                  // UPDATED: Paragraph border color set to your specific hex code to match the icon
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
        
        <div className="mt-8 text-gray-600">
          <p>By using our services, you acknowledge that you have read and understood this Privacy Policy. We are dedicated to protecting your data and providing a secure, transparent, and empowering wellness experience.</p>
        </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Privacy;
