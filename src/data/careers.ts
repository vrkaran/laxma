export interface Role {
  title: string;
  slug: string;
  category: string;
  location: string;
  type: string;
  overview: string;
  responsibilities: string[];
  qualifications: string[];
}

export const roles: Role[] = [
  // ================= Medical & Wellness =================
  {
    title: "Ayurveda Doctor (BAMS / MD)",
    slug: "ayurveda-doctor",
    category: "Medical & Wellness",
    location: "Chennai, India • Hybrid",
    type: "Full-time",
    overview: "Provide personalized Ayurvedic guidance aligned with non-clinical wellness protocols. You will be at the forefront of integrating ancient wisdom with modern technology.",
    responsibilities: [
      "Offer preventive wellness consultations to users.",
      "Design personalized lifestyle and nutrition plans based on Ayurvedic principles.",
      "Collaborate with the product team to refine AI-driven recommendations.",
      "Ensure ethical, non-diagnostic advisory and maintain high standards of care."
    ],
    qualifications: [
      "BAMS or MD (Ayurveda) degree with valid registration.",
      "Strong communication and empathy.",
      "Comfort with digital-first consultation workflows.",
      "Commitment to evidence-informed Ayurveda."
    ]
  },
  {
    title: "Naturopathy Doctor (BNYS)",
    slug: "naturopathy-doctor",
    category: "Medical & Wellness",
    location: "Chennai, India • Hybrid",
    type: "Full-time",
    overview: "Guide users using naturopathy principles and holistic routines to restore natural health balance.",
    responsibilities: [
      "Conduct lifestyle-focused consultations and assessments.",
      "Create nature-based protocols for diet, sleep, and stress management.",
      "Support product content and education initiatives.",
      "Work cross-functionally with the wellness and tech teams."
    ],
    qualifications: [
      "BNYS degree from a recognized institution.",
      "Experience in preventive care and lifestyle management.",
      "Clear documentation and user communication skills.",
      "Tech-friendly work style."
    ]
  },
  {
    title: "Clinical Nutritionist",
    slug: "clinical-nutritionist",
    category: "Medical & Wellness",
    location: "Chennai, India • Remote friendly",
    type: "Full-time",
    overview: "Design science-backed nutrition plans that complement Ayurvedic and Naturopathic interventions.",
    responsibilities: [
      "Assess user dietary habits and nutritional needs.",
      "Develop personalized meal plans for various health goals (weight loss, diabetes management, etc.).",
      "Monitor user progress and adjust plans as needed.",
      "Contribute to the nutritional database and algorithm logic."
    ],
    qualifications: [
      "Master's degree in Clinical Nutrition or Dietetics.",
      "Certified Registered Dietitian (RD) preferred.",
      "Experience with chronic disease management.",
      "Strong understanding of functional food and holistic nutrition."
    ]
  },
  {
    title: "Yoga & Lifestyle Therapist",
    slug: "yoga-lifestyle-therapist",
    category: "Medical & Wellness",
    location: "Chennai, India • Hybrid",
    type: "Part-time / Full-time",
    overview: "Lead guided yoga, breathwork, and stress-modulation sessions to improve physical and mental well-being.",
    responsibilities: [
      "Conduct online/offline yoga and meditation classes.",
      "Create structured programs tailored to user health conditions.",
      "Collaborate on video content modules for the app.",
      "Track participant progress and provide feedback."
    ],
    qualifications: [
      "Certified Yoga Instructor (RYT 200/500 or equivalent).",
      "Experience with therapeutic yoga and mindfulness practices.",
      "Good camera presence for recording sessions.",
      "Empathetic instruction style."
    ]
  },
  {
    title: "Mental Health Professional",
    slug: "mental-health-professional",
    category: "Medical & Wellness",
    location: "Chennai, India • Remote friendly",
    type: "Part-time / Full-time",
    overview: "Provide psychological support and counseling to help users manage stress, anxiety, and lifestyle changes.",
    responsibilities: [
      "Conduct one-on-one counseling sessions.",
      "Develop strategies for behavioral change and habit formation.",
      "Work with the medical team to provide holistic care.",
      "Create content on mental wellness and resilience."
    ],
    qualifications: [
      "Master's in Psychology or Counseling.",
      "Experience in clinical or health psychology.",
      "Empathetic, non-judgmental approach.",
      "Experience with cognitive behavioral therapy (CBT) is a plus."
    ]
  },
  {
    title: "Yoga & Lifestyle Intern",
    slug: "yoga-lifestyle-intern",
    category: "Medical & Wellness Internships",
    location: "Chennai, India • Hybrid",
    type: "Internship",
    overview: "Assist in developing yoga-based preventive and therapeutic routines focused on stress regulation, mobility, and organ health.",
    responsibilities: [
      "Assist in developing yoga-based preventive and therapeutic routines.",
      "Contribute to protocols focused on stress regulation, mobility, breathwork (Pranayama), and sleep.",
      "Support mentors in converting yogic principles into structured, repeatable programs.",
      "Collaborate with Ayurveda, Naturopathy, Nutrition, and Product teams."
    ],
    qualifications: [
      "Certified Yoga Instructor or student from Yoga Therapy programs.",
      "Interest in preventive yoga, mind-body medicine, and digital health.",
      "Comfortable in a research-driven, structured environment.",
      "Good communication skills."
    ]
  },
  {
    title: "Medical Intern (Mentor-Led)",
    slug: "medical-intern",
    category: "Medical & Wellness",
    location: "Chennai, India • Hybrid",
    type: "Internship",
    overview: "Gain hands-on experience in integrative healthcare under the mentorship of experienced doctors.",
    responsibilities: [
      "Assist in patient history taking and documentation.",
      "Support the creation of health protocols.",
      "Participate in case discussions and learning sessions.",
      "Help with health content research and verification."
    ],
    qualifications: [
      "Final year student or recent graduate in BAMS, BNYS, or Nutrition.",
      "Eager to learn about integrative medicine.",
      "Good communication and organizational skills.",
      "Proactive and responsible attitude."
    ]
  },

  // ================= AI, ML & Engineering =================
  {
    title: "AI / ML Engineer",
    slug: "ai-ml-engineer",
    category: "AI, ML & Engineering",
    location: "Chennai, India • Remote friendly",
    type: "Full-time",
    overview: "Build and deploy machine learning models that power our health diagnostics and personalization engine.",
    responsibilities: [
      "Develop and fine-tune ML models for health data analysis.",
      "Work on recommendation systems for diet and lifestyle.",
      "Collaborate with backend engineers to deploy models to production.",
      "Analyze model performance and optimize for accuracy and speed."
    ],
    qualifications: [
      "Strong proficiency in Python, TensorFlow, or PyTorch.",
      "Experience with classical ML and deep learning.",
      "Familiarity with data processing libraries (Pandas, NumPy).",
      "Understanding of MLOps and model deployment."
    ]
  },
  {
    title: "Computer Vision Engineer",
    slug: "computer-vision-engineer",
    category: "AI, ML & Engineering",
    location: "Chennai, India • Remote friendly",
    type: "Full-time",
    overview: "Develop cutting-edge computer vision models for non-invasive health scanning (tongue, face, eyes).",
    responsibilities: [
      "Build CV models for tongue analysis, facial diagnostics, and vitals monitoring.",
      "Optimize inference for mobile and edge devices.",
      "Design data pipelines for image preprocessing and augmentation.",
      "Collaborate with medical experts to validate model outputs."
    ],
    qualifications: [
      "Solid experience with OpenCV and deep learning for vision (CNNs, ViTs).",
      "Experience with mobile deployment (TFLite, CoreML) is a plus.",
      "Strong mathematical foundation in image processing.",
      "Problem-solving mindset."
    ]
  },
  {
    title: "Backend Engineer (Health Systems)",
    slug: "backend-engineer",
    category: "AI, ML & Engineering",
    location: "Chennai, India • Remote friendly",
    type: "Full-time",
    overview: "Design and maintain robust, scalable, and secure backend services for our health platform.",
    responsibilities: [
      "Develop RESTful/GraphQL APIs using Node.js or Python.",
      "Ensure data security and HIPAA/GDPR compliance.",
      "Optimize database queries and system architecture.",
      "Integrate with third-party health services and devices."
    ],
    qualifications: [
      "Proficiency in backend technologies (Node.js, Python, Go).",
      "Experience with SQL (PostgreSQL) and NoSQL (MongoDB) databases.",
      "Knowledge of cloud infrastructure (AWS/GCP/Azure).",
      "Focus on code quality and testing."
    ]
  },
  {
    title: "Mobile App Engineer (Flutter / React Native)",
    slug: "mobile-app-engineer",
    category: "AI, ML & Engineering",
    location: "Chennai, India • Remote friendly",
    type: "Full-time",
    overview: "Build high-performance, user-friendly mobile applications for iOS and Android.",
    responsibilities: [
      "Develop feature-rich mobile apps using React Native or Flutter.",
      "Ensure smooth performance and responsive UI.",
      "Integrate native modules and device sensors.",
      "Collaborate with designers to implement pixel-perfect UIs."
    ],
    qualifications: [
      "Experience with React Native or Flutter development.",
      "Strong understanding of mobile app architecture and state management.",
      "Familiarity with native build tools (Xcode, Gradle).",
      "Portfolio of published apps."
    ]
  },
  {
    title: "AI / ML Intern",
    slug: "ai-ml-intern",
    category: "AI, ML & Engineering",
    location: "Chennai, India • Remote friendly",
    type: "Internship",
    overview: "Support ML experiments, data pipelines, and model evaluation under the guidance of senior engineers.",
    responsibilities: [
      "Prototype ML models and utilities.",
      "Assist with dataset preparation and cleaning.",
      "Write tests and evaluation scripts.",
      "Document findings and present to the team."
    ],
    qualifications: [
      "Python and ML basics.",
      "Familiarity with Pandas/NumPy.",
      "Curiosity and execution focus.",
      "Good communication skills."
    ]
  },

  // ================= Research & Publications =================
  {
    title: "Health Research Scientist",
    slug: "health-research-scientist",
    category: "Research & Publications",
    location: "Chennai, India • Remote friendly",
    type: "Full-time",
    overview: "Lead research initiatives to validate our health methodologies and publish scientific papers.",
    responsibilities: [
      "Design and conduct studies on the efficacy of our health interventions.",
      "Analyze data and interpret results.",
      "Write research papers for peer-reviewed journals.",
      "Collaborate with academic and clinical partners."
    ],
    qualifications: [
      "PhD or Master's in Health Sciences, Public Health, or related field.",
      "Strong statistical analysis skills.",
      "Track record of scientific publications.",
      "Ability to translate research into product insights."
    ]
  },
  {
    title: "Clinical Research Intern",
    slug: "clinical-research-intern",
    category: "Research & Publications",
    location: "Chennai, India • Hybrid",
    type: "Internship",
    overview: "Assist in the coordination and execution of clinical studies and data collection.",
    responsibilities: [
      "Help with participant recruitment and data management.",
      "Assist in literature reviews.",
      "Support the preparation of research protocols.",
      "Maintain research documentation."
    ],
    qualifications: [
      "Student in Life Sciences, Medicine, or related field.",
      "Detail-oriented and organized.",
      "Basic understanding of research methodology.",
      "Good writing skills."
    ]
  },
  {
    title: "AI Health Research Intern",
    slug: "ai-health-research-intern",
    category: "Research & Publications",
    location: "Chennai, India • Remote friendly",
    type: "Internship",
    overview: "Research literature and health datasets to inform product decisions and AI models.",
    responsibilities: [
      "Survey literature on preventive health and AI applications.",
      "Summarize findings for the product and tech teams.",
      "Assist in designing evaluation criteria for AI models.",
      "Collaborate with medical experts to bridge the gap."
    ],
    qualifications: [
      "Strong research and writing skills.",
      "Analytical thinking.",
      "Interest in healthtech and AI.",
      "Self-driven and curious."
    ]
  },
  {
    title: "Research Paper & Publications Associate",
    slug: "research-publications-associate",
    category: "Research & Publications",
    location: "Chennai, India • Remote friendly",
    type: "Full-time",
    overview: "Manage the publication process of our research findings and white papers.",
    responsibilities: [
      "Draft and edit scientific manuscripts and white papers.",
      "Manage submission processes to journals and conferences.",
      "Ensure compliance with publication ethics.",
      "Collaborate with researchers to refine content."
    ],
    qualifications: [
      "Experience in scientific writing and publishing.",
      "Strong command of English grammar and style.",
      "Familiarity with citation managers and formatting.",
      "Attention to detail."
    ]
  },

  // ================= Product & Mobile App =================
  {
    title: "Product Manager (Health Platform)",
    slug: "product-manager-health",
    category: "Product & Mobile App",
    location: "Chennai, India • Remote friendly",
    type: "Full-time",
    overview: "Define the product vision and roadmap for our health platform, ensuring user value and business growth.",
    responsibilities: [
      "Gather requirements from stakeholders and users.",
      "Prioritize features and manage the product backlog.",
      "Work closely with engineering and design to deliver high-quality products.",
      "Analyze product metrics and iterate on features."
    ],
    qualifications: [
      "Experience in product management, preferably in healthtech.",
      "Strong analytical and problem-solving skills.",
      "Excellent communication and leadership abilities.",
      "User-centric mindset."
    ]
  },
  {
    title: "Health UX Researcher",
    slug: "health-ux-researcher",
    category: "Product & Mobile App",
    location: "Chennai, India • Remote friendly",
    type: "Full-time",
    overview: "Understand user needs and behaviors to inform the design of intuitive and effective health experiences.",
    responsibilities: [
      "Conduct user interviews, surveys, and usability testing.",
      "Analyze qualitative and quantitative data to generate insights.",
      "Create personas, journey maps, and user flows.",
      "Collaborate with designers to implement user-centered solutions."
    ],
    qualifications: [
      "Experience in UX research methodologies.",
      "Strong empathy and observational skills.",
      "Ability to synthesize complex data into actionable insights.",
      "Background in psychology or HCI is a plus."
    ]
  },
  {
    title: "Product Operations Intern",
    slug: "product-operations-intern",
    category: "Product & Mobile App",
    location: "Chennai, India • Remote friendly",
    type: "Internship",
    overview: "Support the product team in streamlining processes and managing data.",
    responsibilities: [
      "Assist with product documentation and release notes.",
      "Help track product metrics and user feedback.",
      "Coordinate beta testing programs.",
      "Support cross-functional communication."
    ],
    qualifications: [
      "Interest in product management and operations.",
      "Strong organizational skills.",
      "Proficiency with productivity tools.",
      "Eager to learn and contribute."
    ]
  },

  // ================= AyurGenX Store & Therapeutics =================
  {
    title: "Head of Store & Therapeutic Products",
    slug: "head-store-therapeutics",
    category: "AyurGenX Store & Therapeutics",
    location: "Chennai, India",
    type: "Full-time",
    overview: "Lead the strategy and operations for our e-commerce store and therapeutic product line.",
    responsibilities: [
      "Manage the product portfolio and inventory.",
      "Oversee supply chain and logistics.",
      "Develop marketing strategies to drive store sales.",
      "Ensure product quality and regulatory compliance."
    ],
    qualifications: [
      "Experience in e-commerce or retail management.",
      "Background in health or wellness products.",
      "Strong leadership and business acumen.",
      "Operational excellence."
    ]
  },
  {
    title: "Ayurvedic Product Research Associate",
    slug: "ayurvedic-product-research",
    category: "AyurGenX Store & Therapeutics",
    location: "Chennai, India • Hybrid",
    type: "Full-time",
    overview: "Research and develop new Ayurvedic formulations and therapeutic products.",
    responsibilities: [
      "Review classical texts and modern research for product ideas.",
      "Formulate and test new products.",
      "Work with manufacturers to ensure quality standards.",
      "Document product specifications and benefits."
    ],
    qualifications: [
      "Degree in Ayurveda or Pharmacy.",
      "Experience in product development or R&D.",
      "Knowledge of herbal ingredients and formulations.",
      "Detail-oriented."
    ]
  },
  {
    title: "Packaging & Compliance Executive (AYUSH/FSSAI)",
    slug: "packaging-compliance-executive",
    category: "AyurGenX Store & Therapeutics",
    location: "Chennai, India",
    type: "Full-time",
    overview: "Ensure all products meet regulatory requirements and have attractive, functional packaging.",
    responsibilities: [
      "Manage packaging design and procurement.",
      "Ensure compliance with AYUSH and FSSAI regulations.",
      "Handle labeling and documentation.",
      "Coordinate with regulatory bodies."
    ],
    qualifications: [
      "Experience in regulatory affairs or packaging.",
      "Knowledge of Indian food and drug regulations.",
      "Strong attention to detail.",
      "Good coordination skills."
    ]
  },
  {
    title: "Store Operations Intern",
    slug: "store-operations-intern",
    category: "AyurGenX Store & Therapeutics",
    location: "Chennai, India",
    type: "Internship",
    overview: "Assist in the day-to-day operations of the AyurGenX online store.",
    responsibilities: [
      "Help with order processing and customer inquiries.",
      "Assist in inventory management.",
      "Support marketing campaigns for the store.",
      "Monitor website performance."
    ],
    qualifications: [
      "Interest in e-commerce and operations.",
      "Basic computer skills.",
      "Customer-service oriented.",
      "Reliable and organized."
    ]
  },

  // ================= Sales & Revenue =================
  {
    title: "B2C Sales Executive",
    slug: "b2c-sales-executive",
    category: "Sales & Revenue",
    location: "Chennai, India • Remote friendly",
    type: "Full-time",
    overview: "Drive direct-to-consumer sales of our health plans and products.",
    responsibilities: [
      "Engage with potential customers to understand their needs.",
      "Explain product benefits and convert leads.",
      "Meet or exceed sales targets.",
      "Provide feedback to marketing on lead quality."
    ],
    qualifications: [
      "Experience in B2C sales or customer service.",
      "Strong communication and persuasion skills.",
      "Self-motivated and goal-oriented.",
      "Resilient and positive attitude."
    ]
  },
  {
    title: "Corporate Sales Specialist (B2B)",
    slug: "corporate-sales-specialist",
    category: "Sales & Revenue",
    location: "Chennai, India • Remote friendly",
    type: "Full-time",
    overview: "Drive B2B partnerships and enterprise subscriptions for employee wellness.",
    responsibilities: [
      "Prospect and close deals with corporate clients.",
      "Manage relationships with key accounts.",
      "Own proposals, presentations, and demos.",
      "Track sales pipeline and targets."
    ],
    qualifications: [
      "B2B sales experience, preferably in wellness or SaaS.",
      "Strong networking and negotiation skills.",
      "Process discipline and strategic thinking.",
      "Excellent presentation skills."
    ]
  },
  {
    title: "Sales Operations Intern",
    slug: "sales-operations-intern",
    category: "Sales & Revenue",
    location: "Chennai, India • Remote friendly",
    type: "Internship",
    overview: "Support the sales team with data, reporting, and process improvements.",
    responsibilities: [
      "Maintain the CRM database.",
      "Generate sales reports and analysis.",
      "Assist with lead generation research.",
      "Support sales training and enablement."
    ],
    qualifications: [
      "Interest in sales and business analysis.",
      "Proficiency in Excel and data tools.",
      "Detail-oriented.",
      "Eager to learn sales processes."
    ]
  },

  // ================= PR, Brand & Marketing =================
  {
    title: "PR & Communications Manager",
    slug: "pr-communications-manager",
    category: "PR, Brand & Marketing",
    location: "Chennai, India • Remote friendly",
    type: "Full-time",
    overview: "Build and maintain a positive public image for AyurGenX through strategic communications.",
    responsibilities: [
      "Develop PR strategies and media relations.",
      "Write press releases and manage inquiries.",
      "Coordinate speaking engagements and events.",
      "Monitor brand sentiment and handle crisis comms."
    ],
    qualifications: [
      "Experience in PR or corporate communications.",
      "Strong network with media and influencers.",
      "Excellent writing and storytelling skills.",
      "Strategic thinking."
    ]
  },
  {
    title: "Brand & Narrative Strategist",
    slug: "brand-narrative-strategist",
    category: "PR, Brand & Marketing",
    location: "Chennai, India • Remote friendly",
    type: "Full-time",
    overview: "Craft and shape the AyurGenX brand story across all touchpoints.",
    responsibilities: [
      "Define brand voice, tone, and messaging.",
      "Develop brand campaigns and creative concepts.",
      "Ensure brand consistency across all channels.",
      "Collaborate with design and content teams."
    ],
    qualifications: [
      "Experience in brand strategy or creative planning.",
      "Strong portfolio of brand work.",
      "Deep understanding of storytelling.",
      "Creative and analytical mindset."
    ]
  },
  {
    title: "Digital Marketing Strategist",
    slug: "digital-marketing-strategist",
    category: "PR, Brand & Marketing",
    location: "Chennai, India • Remote friendly",
    type: "Full-time",
    overview: "Plan and manage digital campaigns across channels to drive growth and engagement.",
    responsibilities: [
      "Own performance marketing channels (Ads, SEO, Email).",
      "Run experiments and optimize campaigns.",
      "Analyze marketing data and report insights.",
      "Coordinate with content and design teams."
    ],
    qualifications: [
      "Hands-on experience with ad platforms (Google, Meta).",
      "Strong analytical skills and data fluency.",
      "Copywriting skills.",
      "Execution mindset."
    ]
  },
  {
    title: "Community & Social Media Manager",
    slug: "community-social-manager",
    category: "PR, Brand & Marketing",
    location: "Chennai, India • Remote friendly",
    type: "Full-time",
    overview: "Build and engage our community of health-conscious individuals on social platforms.",
    responsibilities: [
      "Manage social media accounts and content calendar.",
      "Engage with followers and build community.",
      "Monitor trends and join relevant conversations.",
      "Organize community events and contests."
    ],
    qualifications: [
      "Experience in social media management.",
      "Strong understanding of platform algorithms and trends.",
      "Creative content creation skills.",
      "Community-building mindset."
    ]
  },

  // ================= Creative & Media =================
  {
    title: "Graphic Designer",
    slug: "graphic-designer",
    category: "Creative & Media",
    location: "Chennai, India • Remote friendly",
    type: "Full-time",
    overview: "Create visually stunning designs for marketing, product, and brand materials.",
    responsibilities: [
      "Design social media graphics, ads, and presentations.",
      "Create illustrations and infographics.",
      "Maintain brand visual standards.",
      "Collaborate with marketing and product teams."
    ],
    qualifications: [
      "Proficiency in Adobe Creative Suite and Figma.",
      "Strong portfolio of graphic design work.",
      "Understanding of typography and layout.",
      "Creativity and attention to detail."
    ]
  },
  {
    title: "Video Editor & Motion Designer",
    slug: "video-editor-motion",
    category: "Creative & Media",
    location: "Chennai, India • Remote friendly",
    type: "Full-time",
    overview: "Produce engaging video content and motion graphics for our digital channels.",
    responsibilities: [
      "Edit video footage for social media and ads.",
      "Create motion graphics and animations.",
      "Handle color correction and audio mixing.",
      "Stay updated on video trends."
    ],
    qualifications: [
      "Proficiency in Premiere Pro, After Effects, or similar tools.",
      "Strong storytelling and visual rhythm.",
      "Portfolio of video and motion work.",
      "Ability to work with tight deadlines."
    ]
  },
  {
    title: "Podcast & Media Producer",
    slug: "podcast-media-producer",
    category: "Creative & Media",
    location: "Chennai, India • Remote friendly",
    type: "Full-time",
    overview: "Produce high-quality audio and media content for our podcast and other channels.",
    responsibilities: [
      "Record, edit, and mix podcast episodes.",
      "Manage production schedules and guests.",
      "Create show notes and promotional assets.",
      "Ensure high audio quality standards."
    ],
    qualifications: [
      "Experience in audio production and editing.",
      "Familiarity with podcasting platforms and tools.",
      "Strong organizational and communication skills.",
      "Passion for storytelling."
    ]
  },
  {
    title: "Creative Design Intern",
    slug: "creative-design-intern",
    category: "Creative & Media",
    location: "Chennai, India • Remote friendly",
    type: "Internship",
    overview: "Support the creative team in designing assets and brainstorming concepts.",
    responsibilities: [
      "Assist with graphic design tasks.",
      "Help with asset management and organization.",
      "Participate in creative brainstorming sessions.",
      "Learn from senior designers."
    ],
    qualifications: [
      "Student in Design or related field.",
      "Basic proficiency in design tools.",
      "Creative portfolio.",
      "Eager to learn and grow."
    ]
  },

  // ================= People & Operations =================
  {
    title: "People & Operations Manager",
    slug: "people-operations-manager",
    category: "People & Operations",
    location: "Chennai, India • Hybrid",
    type: "Full-time",
    overview: "Foster a positive company culture and manage HR and operational processes.",
    responsibilities: [
      "Manage recruitment and onboarding processes.",
      "Oversee employee engagement and performance management.",
      "Handle HR administration and compliance.",
      "Streamline office and remote operations."
    ],
    qualifications: [
      "Experience in HR or People Operations.",
      "Strong interpersonal and communication skills.",
      "Knowledge of labor laws and HR best practices.",
      "Empathy and problem-solving ability."
    ]
  },
  {
    title: "Founder’s Executive Assistant",
    slug: "founder-executive-assistant",
    category: "People & Operations",
    location: "Chennai, India • Hybrid",
    type: "Full-time",
    overview: "Provide high-level administrative support to the Founder, enabling them to focus on strategic goals.",
    responsibilities: [
      "Manage calendar, travel, and meetings.",
      "Handle correspondence and communications.",
      "Assist with special projects and research.",
      "Maintain confidentiality and discretion."
    ],
    qualifications: [
      "Experience as an Executive Assistant.",
      "Exceptional organizational and time-management skills.",
      "Strong written and verbal communication.",
      "Proactive and adaptable."
    ]
  },
  {
    title: "HR & Internship Coordinator",
    slug: "hr-internship-coordinator",
    category: "People & Operations",
    location: "Chennai, India • Hybrid",
    type: "Full-time",
    overview: "Manage our robust internship program and support general HR activities.",
    responsibilities: [
      "Coordinate internship recruitment and onboarding.",
      "Monitor intern progress and mentorship.",
      "Organize learning and engagement events for interns.",
      "Assist with general HR tasks."
    ],
    qualifications: [
      "Experience in HR or program coordination.",
      "Passion for talent development.",
      "Strong organizational and communication skills.",
      "Ability to connect with students and early-career professionals."
    ]
  },
  {
    title: "Ayurveda Intern",
    slug: "ayurveda-intern",
    category: "Medical & Wellness",
    location: "Chennai, India • Remote friendly",
    type: "Internship",
    overview: "Support Ayurvedic wellness programs and protocol development under mentorship.",
    responsibilities: [
      "Assist in lifestyle and nutrition planning.",
      "Support preventive health consultations.",
      "Contribute to Ayurvedic content and research."
    ],
    qualifications: [
      "Student in Ayurveda or related field.",
      "Interest in preventive health.",
      "Good communication and organization."
    ]
  },
  {
    title: "Naturopathy Intern",
    slug: "naturopathy-intern",
    category: "Medical & Wellness",
    location: "Chennai, India • Remote friendly",
    type: "Internship",
    overview: "Assist in naturopathic protocol design and wellness planning.",
    responsibilities: [
      "Support lifestyle and detox protocols.",
      "Assist in user guidance and tracking.",
      "Contribute to educational materials."
    ],
    qualifications: [
      "Student in Naturopathy or wellness.",
      "Detail-oriented and empathetic.",
      "Strong interest in holistic health."
    ]
  },
  {
    title: "Nutrition Intern",
    slug: "nutrition-intern",
    category: "Medical & Wellness",
    location: "Chennai, India • Remote friendly",
    type: "Internship",
    overview: "Contribute to nutrition plans and health content creation.",
    responsibilities: [
      "Assist in personalized nutrition planning.",
      "Support content research and writing.",
      "Track user outcomes with mentors."
    ],
    qualifications: [
      "Student in Nutrition or Dietetics.",
      "Strong research and writing skills.",
      "Basics of macronutrients and meal planning."
    ]
  },
  {
    title: "Mental Health & Wellbeing Intern",
    slug: "mental-health-wellbeing-intern",
    category: "Medical & Wellness",
    location: "Chennai, India • Remote friendly",
    type: "Internship",
    overview: "Support wellbeing programs and user engagement initiatives.",
    responsibilities: [
      "Assist in wellbeing content and sessions.",
      "Engage with community initiatives.",
      "Document user feedback and insights."
    ],
    qualifications: [
      "Interest in mental health and wellbeing.",
      "Empathy and communication skills.",
      "Organized and proactive."
    ]
  },
  {
    title: "Yoga & Lifestyle Intern",
    slug: "yoga-lifestyle-intern",
    category: "Medical & Wellness",
    location: "Chennai, India • Remote friendly",
    type: "Internship",
    overview: "Assist in yoga routines and lifestyle habit design for users.",
    responsibilities: [
      "Design simple yoga flows with mentors.",
      "Support lifestyle tracking and guidance.",
      "Contribute to educational content."
    ],
    qualifications: [
      "Interest in yoga and lifestyle medicine.",
      "Good documentation and communication.",
      "Team collaboration mindset."
    ]
  },
  {
    title: "Mobile App Development Intern",
    slug: "mobile-app-development-intern",
    category: "Product & Mobile App",
    location: "Chennai, India • Remote friendly",
    type: "Internship",
    overview: "Support mobile app features and quality with mentorship from product engineers.",
    responsibilities: [
      "Implement UI components.",
      "Write simple tests and fix bugs.",
      "Collaborate on sprint tasks."
    ],
    qualifications: [
      "Basics of mobile frameworks.",
      "Git and collaborative workflows.",
      "Eagerness to learn."
    ]
  },
  {
    title: "Frontend Intern",
    slug: "frontend-intern",
    category: "Product & Mobile App",
    location: "Chennai, India • Remote friendly",
    type: "Internship",
    overview: "Assist in frontend feature development and UI polishing.",
    responsibilities: [
      "Build UI components.",
      "Fix UI bugs and accessibility issues.",
      "Collaborate with design."
    ],
    qualifications: [
      "Basics of React or similar.",
      "CSS and component design.",
      "Attention to detail."
    ]
  },
  {
    title: "Backend Intern",
    slug: "backend-intern",
    category: "AI, ML & Engineering",
    location: "Chennai, India • Remote friendly",
    type: "Internship",
    overview: "Support backend APIs and data pipelines under guidance.",
    responsibilities: [
      "Implement API endpoints.",
      "Write tests and docs.",
      "Assist with database tasks."
    ],
    qualifications: [
      "Basics of Node or Python backend.",
      "Understanding of REST.",
      "Curiosity and ownership."
    ]
  },
  {
    title: "Data Science Intern",
    slug: "data-science-intern",
    category: "AI, ML & Engineering",
    location: "Chennai, India • Remote friendly",
    type: "Internship",
    overview: "Assist in data preparation, analysis, and model evaluation tasks.",
    responsibilities: [
      "Prepare datasets and EDA.",
      "Support evaluation scripts.",
      "Document insights."
    ],
    qualifications: [
      "Python and data libraries.",
      "Analytical thinking.",
      "Clear communication."
    ]
  },
  {
    title: "Digital Marketing & Growth Intern",
    slug: "digital-marketing-growth-intern",
    category: "PR, Brand & Marketing",
    location: "Chennai, India • Remote friendly",
    type: "Internship",
    overview: "Support digital campaigns, content, and performance tracking.",
    responsibilities: [
      "Assist with social and ads.",
      "Create and publish content.",
      "Track metrics and report."
    ],
    qualifications: [
      "Basics of ads and SEO.",
      "Copywriting skills.",
      "Execution mindset."
    ]
  },
  {
    title: "PR, Communications & Public Affairs Intern",
    slug: "pr-communications-public-affairs-intern",
    category: "PR, Brand & Marketing",
    location: "Chennai, India • Remote friendly",
    type: "Internship",
    overview: "Assist PR efforts, media outreach, and communications tasks.",
    responsibilities: [
      "Draft communications and releases.",
      "Maintain media lists.",
      "Support events and outreach."
    ],
    qualifications: [
      "Writing and storytelling.",
      "Organized and proactive.",
      "Interest in brand building."
    ]
  },
  {
    title: "Creative, Media & Design Studio Intern",
    slug: "creative-media-design-studio-intern",
    category: "Creative & Media",
    location: "Chennai, India • Remote friendly",
    type: "Internship",
    overview: "Support creative production across design, video, and assets.",
    responsibilities: [
      "Design and edit assets.",
      "Collaborate on creative briefs.",
      "Maintain brand standards."
    ],
    qualifications: [
      "Basic design tools.",
      "Creative portfolio.",
      "Attention to detail."
    ]
  },
  {
    title: "Operations & Founder Office Intern",
    slug: "operations-founder-office-intern",
    category: "People & Operations",
    location: "Chennai, India • Hybrid",
    type: "Internship",
    overview: "Assist the founder office and operations with coordination tasks.",
    responsibilities: [
      "Coordinate meetings and tasks.",
      "Prepare summaries and notes.",
      "Support cross-team ops."
    ],
    qualifications: [
      "Organization and communication.",
      "Process discipline.",
      "Ownership mindset."
    ]
  },
  {
    title: "Research, Validation & Publications Intern",
    slug: "research-validation-publications-intern",
    category: "Research & Publications",
    location: "Chennai, India • Remote friendly",
    type: "Internship",
    overview: "Support research validation and publication drafting.",
    responsibilities: [
      "Literature review and synthesis.",
      "Draft methods and results.",
      "Maintain documentation."
    ],
    qualifications: [
      "Research methods basics.",
      "Clear writing.",
      "Detail orientation."
    ]
  },
  {
    title: "Store & Therapeutics Intern",
    slug: "store-therapeutics-intern",
    category: "AyurGenX Store & Therapeutics",
    location: "Chennai, India • Remote friendly",
    type: "Internship",
    overview: "Assist therapeutic product workflows and store operations.",
    responsibilities: [
      "Support product listings.",
      "Coordinate therapeutic assets.",
      "Assist with customer queries."
    ],
    qualifications: [
      "Interest in e-commerce.",
      "Process and communication.",
      "Reliable and organized."
    ]
  }
];
