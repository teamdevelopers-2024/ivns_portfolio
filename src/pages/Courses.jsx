import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  AcademicCapIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  BriefcaseIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const courseData = {
  diplomas: [
    {
      title: '6-Month Diploma in Logistics & Supply Chain Management',
      duration: '6 Months',
      location: 'In Campus + Goa',
      description: 'A specialized program designed to provide students with in-depth knowledge and hands-on experience in the logistics industries.',
      eligibility: '12th / 10th Pass',
      structure: [
        'First 4 Months - Training in Campus',
        'Next 2 Months - Training in Goa',
        'Industry-ready certification',
        'Guaranteed placement assistance'
      ],
      icon: AcademicCapIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: '1-Year Diploma in Logistics & Supply Chain Management',
      duration: '1 Year',
      location: 'In Campus + Goa',
      description: 'Comprehensive program with extended practical training and industry exposure for a deeper understanding of logistics.',
      eligibility: '12th / 10th Pass',
      structure: [
        'First 8 Months - Training in Campus',
        'Next 3 Months - Training in Goa',
        'Industry certifications included',
        'Guaranteed placement support'
      ],
      icon: BriefcaseIcon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ],
  degree: [
    {
      title: 'BBA with Logistics',
      duration: '3 Years',
      location: 'In Campus + Goa',
      description: 'An industry-aligned program that blends core business education with hands-on logistics and supply chain training.',
      eligibility: 'Plus Two / Equivalent',
      structure: [
        'Year 1: Foundation Year',
        '9 months academic training in Campus',
        '3 months practical internship in Goa',
        'Years 2 & 3: Work-Integrated Learning'
      ],
      icon: ChartBarIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'B.Com with Logistics',
      duration: '3 Years',
      location: 'In Campus + Goa',
      description: 'A perfect choice for students looking to combine commerce and finance education with a focused specialization in logistics.',
      eligibility: 'Plus Two / Equivalent',
      structure: [
        'Year 1: Foundation Year',
        '9 months academic training in Campus',
        '3 months practical internship in Goa',
        'Years 2 & 3: Work-Integrated Learning'
      ],
      icon: UserGroupIcon,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ]
};

function PremiumCourseGrid({ courses }) {
  // Use flex for 2 cards, grid for 3+
  const isTwo = courses.length === 2;
  return (
    <div className={isTwo ? "flex flex-col md:flex-row justify-center gap-10 w-full max-w-4xl mx-auto" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-5xl mx-auto"}>
      {courses.map((course, idx) => {
        const Icon = course.icon;
        return (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 * idx }}
            className="relative bg-white/80 backdrop-blur-2xl border border-blue-100 rounded-3xl shadow-2xl px-8 py-8 flex flex-col items-center max-w-md w-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-blue-200 group overflow-visible mx-auto"
          >
            {/* Floating icon */}
            <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full ${course.bgColor} ${course.color} bg-opacity-80 shadow-lg border-2 border-white/60 backdrop-blur-xl z-20`}>
              <Icon className="h-8 w-8" />
            </div>
            {/* Floating duration badge */}
            <span className="absolute top-6 right-6 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xs shadow-lg z-20">
              {course.duration}
            </span>
            <div className="pt-10 pb-2 w-full flex flex-col items-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{course.title}</h3>
              <div className="flex flex-wrap justify-center gap-2 mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100">
                  <MapPinIcon className="h-4 w-4 mr-1" /> {course.location}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold border border-purple-100">
                  <AcademicCapIcon className="h-4 w-4 mr-1" /> {course.eligibility}
                </span>
              </div>
              <p className="text-gray-600 text-base leading-relaxed mb-4 text-center">{course.description}</p>
              <ul className="list-none flex flex-col gap-2 mb-2 w-full">
                {course.structure.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center text-xs font-bold shadow">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function Courses() {
  const [activeTab, setActiveTab] = useState('diplomas');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-4">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative content-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Courses
            </h1>
            <p className="text-lg text-gray-600">
              Discover our comprehensive range of programs designed to shape your future in logistics and supply chain management
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Programs Section */}
      <section className="py-6 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
        <div className="content-container section-padding relative z-10">
          {/* Premium Glassy Tabs in Card */}
          <div className="flex justify-center mb-12">
            <div className="relative flex rounded-full bg-white/80 backdrop-blur-xl border border-blue-100 shadow-xl p-2 gap-2 max-w-xl w-full mx-auto">
              <button
                onClick={() => setActiveTab('diplomas')}
                className={`relative px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 focus:outline-none
                  ${activeTab === 'diplomas'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/60 border border-blue-100 text-blue-700 hover:bg-blue-100/60 hover:shadow'}
                `}
                style={{ zIndex: activeTab === 'diplomas' ? 2 : 1 }}
              >
                {activeTab === 'diplomas' && (
                  <motion.span
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 z-0"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">Diploma Programs</span>
              </button>
              <button
                onClick={() => setActiveTab('degree')}
                className={`relative px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 focus:outline-none
                  ${activeTab === 'degree'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/60 border border-blue-100 text-blue-700 hover:bg-blue-100/60 hover:shadow'}
                `}
                style={{ zIndex: activeTab === 'degree' ? 2 : 1 }}
              >
                {activeTab === 'degree' && (
                  <motion.span
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 z-0"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">Degree Programs</span>
              </button>
            </div>
          </div>

          {/* Premium Luxury Card Grid */}
          <PremiumCourseGrid courses={courseData[activeTab]} />
        </div>
      </section>
    </div>
  );
}

export default Courses;