import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeAsiaAustraliaIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  DocumentCheckIcon,
  ChartBarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    title: '100% Placement Guarantee',
    description: 'Secure your future with guaranteed placement in top logistics companies.',
    Icon: BriefcaseIcon,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Industry Certifications',
    description: 'Gain globally recognized certifications including WHRDE and NSDC.',
    Icon: DocumentCheckIcon,
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    title: 'Expert Faculty',
    description: 'Learn from industry professionals with extensive experience.',
    Icon: AcademicCapIcon,
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    title: 'Global Opportunities',
    description: 'Access international career opportunities and placements.',
    Icon: GlobeAsiaAustraliaIcon,
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
  },
  {
    title: 'Industry Partnerships',
    description: 'Benefit from our strong network of industry collaborations.',
    Icon: BuildingOfficeIcon,
    bgColor: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
  {
    title: 'Practical Training',
    description: 'Hands-on experience through internships and live projects.',
    Icon: UserGroupIcon,
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
];

const testimonials = [
  {
    quote: "The practical training and industry exposure at Ivanios helped me secure my dream job at Amazon. The faculty's support was invaluable throughout my journey.",
    author: "Sarah Johnson",
    position: "Supply Chain Manager, Amazon",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "Ivanios' industry partnerships and practical approach to learning gave me the edge I needed in my career. I'm now leading logistics operations at DHL.",
    author: "Michael Chen",
    position: "Operations Director, DHL",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "The curriculum is perfectly balanced between theory and practice. The global exposure helped me understand international logistics operations.",
    author: "Emma Davis",
    position: "Global Logistics Manager, FedEx",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative content-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Ivanios?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join the leading logistics training institute with a proven track record of excellence and industry recognition
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                ref={index === 0 ? ref : null}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
              >
                <div className={`${feature.bgColor} rounded-2xl p-4 inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.Icon className={`h-8 w-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-blue-600">
        <div className="content-container section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="text-center"
              >
                <div className="text-5xl font-bold text-white mb-3">{stat.value}</div>
                <div className="text-blue-100 text-lg font-medium">{stat.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white">
        <div className="content-container section-padding">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What Our Alumni Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-blue-100"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="content-container section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of successful alumni who transformed their careers with Ivanios
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-300">
              Apply Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const reasons = [
  {
    title: 'Industry-Experienced Faculty',
    description: 'Learn from professionals with extensive experience in logistics and business management.',
    icon: '👨‍🏫',
  },
  {
    title: 'Practical Training',
    description: 'Get hands-on experience through internships and industry projects.',
    icon: '🔧',
  },
  {
    title: '100% Placement Support',
    description: 'Dedicated placement cell to help you launch your career.',
    icon: '🎯',
  },
  {
    title: 'Modern Facilities',
    description: 'State-of-the-art infrastructure and learning resources.',
    icon: '🏢',
  },
  {
    title: 'Industry Partnerships',
    description: 'Strong connections with leading logistics companies.',
    icon: '🤝',
  },
  {
    title: 'Flexible Programs',
    description: 'Choose from various course durations and specializations.',
    icon: '📚',
  },
];

const stats = [
  { value: '5000+', title: 'Students Trained' },
  { value: '100%', title: 'Placement Rate' },
  { value: '150+', title: 'Industry Partners' },
  { value: '25+', title: 'Expert Faculty' },
];

export default WhyChooseUs;