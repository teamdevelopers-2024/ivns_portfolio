import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  BriefcaseIcon,
  AcademicCapIcon,
  ChartBarIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  StarIcon,
  SparklesIcon,
  BeakerIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const companies = [
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    positions: ['Supply Chain Manager', 'Logistics Coordinator', 'Operations Manager'],
    highlights: ['Global Operations', 'Innovation Leader', 'Career Growth']
  },
  {
    name: 'DHL',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/DHL_Express_logo.svg',
    positions: ['Logistics Manager', 'Supply Chain Analyst', 'Operations Supervisor'],
    highlights: ['International Network', 'Professional Development', 'Work-Life Balance']
  },
  {
    name: 'FedEx',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/FedEx_Express_logo.svg',
    positions: ['Operations Executive', 'Supply Chain Coordinator', 'Logistics Analyst'],
    highlights: ['Global Reach', 'Training Programs', 'Career Advancement']
  },
  {
    name: 'Maersk',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Maersk_Group_logo.svg',
    positions: ['Shipping Coordinator', 'Logistics Manager', 'Supply Chain Executive'],
    highlights: ['Maritime Leader', 'Global Opportunities', 'Professional Growth']
  },
  {
    name: 'Blue Dart',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Blue_Dart_Express_logo.svg',
    positions: ['Operations Manager', 'Logistics Coordinator', 'Supply Chain Analyst'],
    highlights: ['Express Delivery', 'Regional Leadership', 'Career Development']
  },
  {
    name: 'DB Schenker',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/DB_Schenker_logo.svg',
    positions: ['Logistics Executive', 'Supply Chain Manager', 'Operations Analyst'],
    highlights: ['Global Logistics', 'Innovation Focus', 'Professional Excellence']
  },
];

const guaranteeFeatures = [
  {
    icon: SparklesIcon,
    title: 'Personalized Career Mentorship',
    desc: 'One-on-one guidance from industry experts to shape your unique career path.'
  },
  {
    icon: BeakerIcon,
    title: 'Industry-Integrated Internships',
    desc: 'Real-world experience with leading logistics and supply chain companies.'
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Brand Partnerships',
    desc: 'Opportunities with top global recruiters and international exposure.'
  },
  {
    icon: AcademicCapIcon,
    title: 'Resume & Interview Mastery',
    desc: 'Professional resume building and interview coaching for guaranteed success.'
  },
  {
    icon: BriefcaseIcon,
    title: 'On-the-Job Training',
    desc: 'Hands-on training and placement in real logistics operations.'
  },
  {
    icon: UserGroupIcon,
    title: 'Alumni Success Network',
    desc: 'Lifetime access to a thriving network of successful alumni.'
  },
];

const recentPlacements = [
  {
    name: 'Priya Sharma',
    position: 'Supply Chain Manager',
    company: 'Amazon',
    achievements: ['Led cross-functional teams', 'Optimized supply chain processes', 'Received performance awards'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Rahul Verma',
    position: 'Operations Manager',
    company: 'DHL',
    achievements: ['Streamlined operations', 'Improved efficiency metrics', 'Mentored junior team members'],
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Aisha Patel',
    position: 'Logistics Coordinator',
    company: 'Maersk',
    achievements: ['Managed global shipments', 'Reduced delivery times', 'Implemented new tracking systems'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

function Placements() {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [placementsRef, placementsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [recruitersRef, recruitersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative content-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
           
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              100% Placement Guarantee
            </h1>
            <p className="text-xl text-gray-600">
              We don't just promise opportunities—we guarantee them. Our students launch their careers with top global brands, supported by dedicated mentorship and real-world experience.
            </p>
          </motion.div>

          {/* Luxury Feature Cards */}
          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 justify-center">
            {guaranteeFeatures.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative bg-white/80 backdrop-blur-2xl border border-blue-100 rounded-3xl shadow-2xl px-8 py-10 flex flex-col items-center max-w-md w-full mx-auto transition-transform duration-300 hover:-translate-y-2 hover:shadow-blue-200 group overflow-visible"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg border-2 border-white/60 backdrop-blur-xl z-20">
                  <feature.icon className="h-8 w-8" />
                </div>
                <div className="pt-10 pb-2 w-full flex flex-col items-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed text-center">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Placements Section - Luxury Cards */}
      <section ref={placementsRef} className="py-16 bg-gradient-to-br from-white/80 via-blue-50/80 to-purple-50/80">
        <div className="content-container section-padding">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={placementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Recent Success Stories
          </motion.h2>
          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {recentPlacements.map((placement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={placementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white/80 backdrop-blur-2xl border border-blue-100 rounded-3xl shadow-2xl px-8 py-10 flex flex-col items-center max-w-md w-full mx-auto transition-transform duration-300 hover:-translate-y-2 hover:shadow-blue-200 group overflow-visible"
              >
                {/* Floating profile image */}
                <img
                  src={placement.image}
                  alt={placement.name}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover z-20 bg-gradient-to-br from-yellow-100 to-purple-100"
                />
                <div className="pt-12 pb-2 w-full flex flex-col items-center">
                  <h4 className="font-bold text-lg text-gray-900 mb-1 text-center">{placement.name}</h4>
                  <div className="text-blue-600 font-semibold text-base mb-1">{placement.position}</div>
                  <div className="text-gray-500 text-sm mb-2">{placement.company}</div>
                  <ul className="list-none flex flex-col gap-2 mb-2 w-full">
                    {placement.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                        <span className="w-5 h-5 rounded-full bg-gradient-to-br from-yellow-400 to-purple-400 text-white flex items-center justify-center text-xs font-bold shadow">
                          <StarIcon className="h-4 w-4" />
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 text-xs text-gray-500 text-center">Placement guaranteed through mentorship & global partnerships</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Recruiters Section - Luxury Cards */}
      <section ref={recruitersRef} className="py-16 bg-gradient-to-br from-white/80 via-blue-50/80 to-purple-50/80">
        <div className="content-container section-padding">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={recruitersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Our Hiring Partners
          </motion.h2>
          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 40 }}
                animate={recruitersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white/80 backdrop-blur-2xl border border-blue-100 rounded-3xl shadow-2xl px-8 py-10 flex flex-col items-center max-w-md w-full mx-auto transition-transform duration-300 hover:-translate-y-2 hover:shadow-blue-200 group overflow-visible"
              >
                {/* Floating company logo */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 flex items-center justify-center rounded-full bg-white border-4 border-blue-100 shadow-lg z-20">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div className="pt-12 pb-2 w-full flex flex-col items-center">
                  <h3 className="text-xl font-bold text-center text-gray-900 mb-3">{company.name}</h3>
                  <div className="space-y-2 mb-2 w-full">
                    {company.positions.map((position, idx) => (
                      <div key={idx} className="text-gray-700 text-sm flex items-center">
                        <BriefcaseIcon className="h-4 w-4 mr-2 text-blue-600" />
                        {position}
                      </div>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-blue-100 w-full">
                    <div className="space-y-2">
                      {company.highlights.map((highlight, idx) => (
                        <div key={idx} className="text-sm text-gray-600 flex items-center">
                          <StarIcon className="h-4 w-4 mr-2 text-yellow-400" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Placements;