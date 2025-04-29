import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  AcademicCapIcon,
  LightBulbIcon,
  ScaleIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import MilestoneTimeline from '../components/MilestoneTimeline';

const coreValues = [
  {
    title: 'Excellence',
    description: 'Striving for the highest standards in education and training.',
    icon: AcademicCapIcon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Innovation',
    description: 'Embracing new ideas and methods in logistics education.',
    icon: LightBulbIcon,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Integrity',
    description: 'Maintaining ethical standards and professional conduct.',
    icon: ScaleIcon,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    title: 'Leadership',
    description: 'Developing future leaders in logistics and supply chain.',
    icon: UserGroupIcon,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
];

const milestones = [
  {
    year: '2018',
    title: 'Establishment of Ivanios Edu Tech',
    description: 'Founded with a vision to revolutionize logistics education',
  },
  {
    year: '2019',
    title: 'Launch of Diploma Programs',
    description: 'Introduced specialized diploma courses in logistics',
  },
  {
    year: '2020',
    title: 'Introduction of BBA/B.Com Programs',
    description: 'Expanded our offerings to degree programs',
  },
  {
    year: '2021',
    title: 'Industry Partnerships',
    description: 'Established partnerships with 50+ industry leaders',
  },
  {
    year: '2022',
    title: 'Expansion Phase',
    description: 'Expanded to multiple locations across the region',
  },
  {
    year: '2025',
    title: 'New Milestone: Started in Kozhikode',
    description: 'Launched operations in Kozhikode, marking a new chapter of growth and opportunity.',
  },
];

function About() {
  const [ref, inView] = useInView({
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      

      {/* Core Values Section - Premium Style */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
        <div className="content-container section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our institution and shape our students' success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`relative group rounded-3xl bg-white/60 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col items-center text-center p-8 border border-blue-100`}
              >
                <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-4 ${value.bgColor}`}>
                  <value.icon className={`h-8 w-8 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-600 text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Premium Milestone Timeline */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
        <div className="content-container section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A timeline of growth, innovation, and excellence
            </p>
          </motion.div>
          <MilestoneTimeline milestones={milestones} />
        </div>
      </section>
    </div>
  );
}

export default About;
