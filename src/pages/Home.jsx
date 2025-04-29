import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
  LightBulbIcon,
  BuildingOfficeIcon,
  BeakerIcon,
  RocketLaunchIcon,
  SparklesIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

function Home() {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      {/* Hero Section with Smooth Transition */}
      <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Background with Goa training dummy image on right, with smooth transition */}
        <div className="absolute inset-0">
          <div className="w-full h-full flex">
            <div className="w-1/2 h-full bg-white"></div>
            <div className="w-1/2 h-full bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')"}}>
              {/* Gradient overlay for smooth transition */}
              <div className="absolute left-0 top-0 h-full w-1/2" style={{background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)'}}></div>
              {/* Attracting text overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-3 bg-black/30 rounded-xl px-4 py-2 inline-block">Train Where the World Vacations</h2>
                <p className="text-lg md:text-xl font-medium text-white drop-shadow bg-black/20 rounded-lg px-3 py-2 inline-block">Exclusive Logistics Training Experience in Goa</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Left Side - Logo Reveal and Goa Highlight */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex items-center relative z-10 justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl w-full flex flex-col items-center text-center"
          >
            <motion.img
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              src="/src/assets/logo/logo_reveal.gif"
              alt="Ivanios Logo Reveal"
              className="mx-auto rounded-xl object-contain mb-6"
              // style={{ maxWidth: '220px' }}
            />
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-base font-semibold mb-4 shadow">
              Experience Logistics in Goa
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
              Your Gateway to a Global Logistics Career
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md">
              Study, train, and launch your future in India's most vibrant destination. World-class faculty, real industry exposure, and a campus like no other.
            </p>
            <a
              href="#courses"
              className="border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50 hover:text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl mb-4"
            >
              Start Your Journey
            </a>
            <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full font-bold shadow border border-green-200 text-sm tracking-wide">
              {`Admissions Open ${new Date().getFullYear()}`}
            </span>
          </motion.div>
        </div>

        {/* Right Side - Empty, just background image */}
        <div className="hidden md:block w-1/2"></div>
      </section>

      {/* Floating Badge Between Hero and Programs Sections */}
      <div className="relative z-50 w-full flex justify-center">
        <span className="inline-block bg-green-100 text-green-700 px-6 py-2 rounded-full font-bold shadow-lg border border-green-200 text-sm tracking-wide animate-pulse -mt-8">
          100% Placement Guarantee
        </span>
      </div>

      {/* Programs Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden -mt-5">
        <div className="content-container section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of programs designed to prepare you for success in the logistics industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Diploma in Logistics & Supply Chain Management',
                description: '6-month & 1-year diploma with hands-on training, 100% placement, and industry-ready curriculum. Includes training in Kozhikode & Goa.',
                icon: BuildingOfficeIcon,
                badge: '6 Months / 1 Year',
                badgeColor: 'bg-blue-100 text-blue-700',
                eligibility: '10th/12th Pass',
              },
              {
                title: 'BBA with Logistics',
                description: '3-year industry-aligned program blending business education with logistics & supply chain training. Includes internships and work-integrated learning.',
                icon: ChartBarIcon,
                badge: '3 Years',
                badgeColor: 'bg-purple-100 text-purple-700',
                eligibility: 'Plus Two / Equivalent',
              },
              {
                title: 'B.Com with Logistics',
                description: '3-year program combining commerce, finance, and logistics. Strong academic foundation and industry-relevant skills for a competitive edge.',
                icon: BriefcaseIcon,
                badge: '3 Years',
                badgeColor: 'bg-yellow-100 text-yellow-700',
                eligibility: 'Plus Two / Equivalent',
              },
            ].map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative group rounded-3xl bg-white/60 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
                style={{ border: '1.5px solid #e0e7ff' }}
              >
                {/* Badge */}
                <span className={`absolute top-6 left-6 px-4 py-1 rounded-full font-semibold text-xs shadow ${program.badgeColor}`}>{program.badge}</span>
                {/* Eligibility */}
                <span className="absolute top-6 right-6 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">{program.eligibility}</span>
                {/* Icon */}
                <div className="flex items-center justify-center h-32">
                  <program.icon className="h-16 w-16 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                {/* Content */}
                <div className="flex-1 flex flex-col justify-between p-8 pt-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">{program.title}</h3>
                  <p className="text-gray-600 mb-6 text-base">{program.description}</p>
                  <a href="#" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition-all duration-300 text-base group-hover:scale-105">
                    Learn More <ArrowRightIcon className="h-5 w-5 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Badge Between Sections */}
      <div className="relative z-50 w-full flex justify-center">
        <span className="inline-block bg-blue-100 text-blue-700 px-6 py-2 rounded-full font-bold shadow-lg border border-blue-200 text-sm tracking-wide animate-pulse -mt-8 ">
          Top Reasons to Enroll
        </span>
      </div>

      {/* Why Choose Us Section */}
      <section className="relative py-20 bg-gradient-to-br from-white to-blue-50 overflow-hidden -mt-5">
        <div className="content-container section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Ivanios?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what sets us apart and why our students succeed in the world of logistics and business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: BriefcaseIcon,
                title: '100% Placement Guarantee',
                desc: 'Secured jobs with top recruiters like DHL, Maersk, Amazon, FedEx, Flipkart, Blue Dart, and more.',
                color: 'bg-green-100 text-green-700',
              },
              {
                icon: AcademicCapIcon,
                title: 'Global Certifications',
                desc: 'International & national certifications (WHRDE, NSDC, DOL) valid for global career opportunities.',
                color: 'bg-yellow-100 text-yellow-700',
              },
              {
                icon: GlobeAltIcon,
                title: 'Industry Collaborations',
                desc: 'Live projects, guest lectures, and hands-on training with leading logistics firms and e-commerce giants.',
                color: 'bg-blue-100 text-blue-700',
              },
              {
                icon: LightBulbIcon,
                title: 'Internships & On-the-Job Learning',
                desc: '3-month internships, real supply chain projects, and warehouse training for practical experience.',
                color: 'bg-purple-100 text-purple-700',
              },
              {
                icon: UserGroupIcon,
                title: 'Career Guidance & Mentorship',
                desc: 'One-on-one coaching, resume building, and mock interviews with HR experts from top companies.',
                color: 'bg-pink-100 text-pink-700',
              },
              {
                icon: RocketLaunchIcon,
                title: 'Entrepreneurship & Start-up Support',
                desc: 'Business incubation and support for logistics start-ups and young entrepreneurs.',
                color: 'bg-orange-100 text-orange-700',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`relative group rounded-3xl bg-white/60 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col items-center text-center p-8 border border-blue-100`}
              >
                <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-4 shadow ${feature.color}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 text-base">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Top Recruiters Row */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-6">
            {["/logo/dhl.png","/logo/maersk.png","/logo/amazon.png","/logo/fedex.png","/logo/flipkart.png","/logo/bluedart.png"].map((src, i) => (
              <img key={src} src={src} alt="Recruiter Logo" className="h-10 w-auto grayscale hover:grayscale-0 transition duration-300" />
            ))}
          </div>
        </div>
      </section>

      {/* About Ivanios Edu Tech Section - Premium Style */}
      <section className="relative py-20 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
        <div className="content-container section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Ivanios Edu Tech
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empowering the next generation of logistics professionals through innovative education and industry partnerships
            </p>
          </motion.div>

          {/* --- Mission & Vision: Option 1 - Vertical Timeline Cards (Active) --- */}
          <div className="relative max-w-2xl mx-auto flex flex-col items-center">
            {/* Vertical line accent */}
            <div className="absolute left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-purple-300 opacity-40 -translate-x-1/2 z-0" />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative z-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl border border-blue-200 mb-10 w-full flex flex-col items-center"
            >
              <LightBulbIcon className="h-10 w-10 mb-3 text-yellow-200" />
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-lg text-blue-100">
                To equip students with the knowledge and skills necessary to excel in logistics and supply chain management through comprehensive curricula, practical experiences, and industry engagement.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10 bg-white rounded-3xl p-8 shadow-xl border border-blue-100 w-full flex flex-col items-center"
            >
              <GlobeAltIcon className="h-10 w-10 mb-3 text-blue-500" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be a leading provider of logistics and supply chain education, producing professionals who drive innovation and efficiency in the global marketplace.
              </p>
            </motion.div>
          </div>

          {/* --- Mission & Vision: Option 2 - Overlapping/Stepped Cards (Commented) --- */}
          {false && (
          <div className="relative max-w-3xl mx-auto flex flex-col items-center mt-16">
            <motion.div
              initial={{ opacity: 0, x: -40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="absolute left-0 top-0 w-2/3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl border border-blue-200 z-10 -translate-y-8 -translate-x-4"
            >
              <LightBulbIcon className="h-10 w-10 mb-3 text-yellow-200" />
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-lg text-blue-100">
                To equip students with the knowledge and skills necessary to excel in logistics and supply chain management through comprehensive curricula, practical experiences, and industry engagement.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute right-0 bottom-0 w-2/3 bg-white rounded-3xl p-8 shadow-2xl border border-blue-100 z-20 translate-y-8 translate-x-4"
            >
              <GlobeAltIcon className="h-10 w-10 mb-3 text-blue-500" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be a leading provider of logistics and supply chain education, producing professionals who drive innovation and efficiency in the global marketplace.
              </p>
            </motion.div>
            <div className="h-56" /> {/* Spacer for overlap */}
          </div>
          )}

          {/* --- Mission & Vision: Option 3 - Single Card with Tabs (Commented) --- */}
          {false && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-2xl bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl border border-blue-100 p-10 text-center mt-12"
          >
            <div className="flex justify-center mb-6 gap-2">
              <button className="px-6 py-2 rounded-full font-semibold text-base bg-blue-600 text-white shadow transition">Mission</button>
              <button className="px-6 py-2 rounded-full font-semibold text-base bg-gray-100 text-blue-700 shadow transition">Vision</button>
            </div>
            {/* Mission content (active by default) */}
            <div>
              <LightBulbIcon className="h-10 w-10 mb-3 text-yellow-400 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To equip students with the knowledge and skills necessary to excel in logistics and supply chain management through comprehensive curricula, practical experiences, and industry engagement.
              </p>
            </div>
            {/* Vision content (swap in if tab is active) */}
            {/*
            <div>
              <GlobeAltIcon className="h-10 w-10 mb-3 text-blue-500 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To be a leading provider of logistics and supply chain education, producing professionals who drive innovation and efficiency in the global marketplace.
              </p>
            </div>
            */}
          </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

const programs = [
  {
    title: 'Logistics Management',
    description: 'Master the fundamentals of supply chain and logistics management with hands-on training.',
    icon: BuildingOfficeIcon,
  },
  {
    title: 'Business Analytics',
    description: 'Learn data-driven decision making and business intelligence tools.',
    icon: ChartBarIcon,
  },
  {
    title: 'International Trade',
    description: 'Understand global trade practices and international business operations.',
    icon: GlobeAltIcon,
  },
];

const features = [
  {
    title: 'Industry-Ready Curriculum',
    description: 'Programs designed in collaboration with industry experts.',
    icon: AcademicCapIcon,
  },
  {
    title: 'Expert Faculty',
    description: 'Learn from experienced professionals with real-world insights.',
    icon: UserGroupIcon,
  },
  {
    title: 'Placement Support',
    description: '100% placement assistance with top companies.',
    icon: BriefcaseIcon,
  },
  {
    title: 'Innovative Learning',
    description: 'State-of-the-art facilities and modern teaching methods.',
    icon: BeakerIcon,
  },
];

const stats = [
  { value: '5000+', label: 'Students Trained', icon: UserGroupIcon },
  { value: '100%', label: 'Placement Rate', icon: ChartBarIcon },
  { value: '150+', label: 'Industry Partners', icon: BuildingOfficeIcon },
  { value: '25+', label: 'Expert Faculty', icon: AcademicCapIcon },
];

const keyFeatures = [
  {
    title: 'Industry-Ready Curriculum',
    description: 'Programs designed in collaboration with industry experts to ensure job readiness.',
    icon: AcademicCapIcon,
  },
  {
    title: 'Global Opportunities',
    description: 'Connect with international partners and explore global career paths.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Innovation Hub',
    description: 'State-of-the-art facilities for practical learning and research.',
    icon: LightBulbIcon,
  },
  {
    title: 'Career Support',
    description: 'Personalized guidance and placement assistance for career growth.',
    icon: BriefcaseIcon,
  },
];

const quickLinks = [
  { title: 'Apply Now', icon: ArrowRightIcon },
  { title: 'Programs', icon: AcademicCapIcon },
  { title: 'Campus Life', icon: UserGroupIcon },
  { title: 'Contact Us', icon: BriefcaseIcon },
];

const featuredPrograms = [
  {
    title: 'Logistics Management',
    description: 'Master supply chain and logistics with hands-on training.',
    icon: BuildingOfficeIcon,
  },
  {
    title: 'Business Analytics',
    description: 'Learn data-driven decision making and business intelligence.',
    icon: ChartBarIcon,
  },
  {
    title: 'International Trade',
    description: 'Understand global trade practices and operations.',
    icon: GlobeAltIcon,
  },
];

export default Home;