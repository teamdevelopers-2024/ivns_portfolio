import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  TrophyIcon,
  GlobeAltIcon,
  StarIcon,
  UserGroupIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const milestoneIcons = [
  TrophyIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  StarIcon,
  UserGroupIcon,
];

// Example milestone data (replace or pass as props)
const sampleMilestones = [
  {
    year: '2018',
    title: 'Founded Ivanios Edu Tech',
    description: 'Established with a vision to revolutionize logistics education and empower future leaders.',
    icon: TrophyIcon,
  },
  {
    year: '2019',
    title: 'Launched Diploma Programs',
    description: 'Introduced specialized diploma courses in logistics and supply chain management.',
    icon: AcademicCapIcon,
  },
  {
    year: '2020',
    title: 'Degree Program Expansion',
    description: 'Rolled out BBA and B.Com programs with industry-aligned curriculum.',
    icon: GlobeAltIcon,
  },
  {
    year: '2021',
    title: '50+ Industry Partnerships',
    description: 'Forged strong collaborations with leading logistics and e-commerce companies.',
    icon: StarIcon,
  },
  {
    year: '2022',
    title: 'Regional Expansion',
    description: 'Expanded to multiple locations, increasing student reach and impact.',
    icon: UserGroupIcon,
  },
  {
    year: '2025',
    title: 'New Milestone: Started in Kozhikode',
    description: 'Launched operations in Kozhikode, marking a new chapter of growth and opportunity.',
    icon: RocketLaunchIcon,
  },
];

export default function MilestoneTimeline({ milestones = sampleMilestones }) {
  return (
    <section className="relative py-20 px-2 bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-100 via-purple-100 to-white rounded-full blur-3xl opacity-40 z-0" />
      <div className="absolute -bottom-32 right-0 w-96 h-96 bg-gradient-to-tr from-purple-100 via-blue-100 to-white rounded-full blur-3xl opacity-40 z-0" />
      <div className="relative max-w-5xl mx-auto z-10">
        {/* Center line with animated dots */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-purple-200 opacity-40 -translate-x-1/2 z-0" />
        <div className="flex flex-col gap-16 relative">
          {milestones.map((milestone, idx) => {
            const Icon = milestone.icon || milestoneIcons[idx % milestoneIcons.length];
            const isLeft = idx % 2 === 0;
            return (
              <div key={milestone.year} className="relative flex flex-col md:flex-row items-center md:justify-between group min-h-[120px]">
                {/* Dot and connector */}
                <div className="hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                    className={`h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-lg ${idx === milestones.length - 1 ? 'animate-pulse' : ''}`}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  {idx < milestones.length - 1 && (
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: 64 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 * idx }}
                      className="w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-purple-200 opacity-40"
                      style={{ minHeight: '64px' }}
                    />
                  )}
                </div>
                {/* Card */}
                {isLeft ? (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 * idx }}
                    className="relative w-full md:w-1/2 z-20 flex justify-end mb-8 md:mb-0 pr-0 md:pr-12"
                  >
                    <div className="bg-white/70 backdrop-blur-2xl border border-blue-100 rounded-3xl shadow-2xl px-8 py-8 flex flex-col items-start md:items-end max-w-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-blue-200">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base shadow">
                          {milestone.year}
                        </span>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-base leading-relaxed">{milestone.description}</p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="hidden md:block md:w-1/2" />
                )}
                {/* Center line and dot are always centered */}
                {!isLeft ? (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 * idx }}
                    className="relative w-full md:w-1/2 z-20 flex justify-start mb-8 md:mb-0 pl-0 md:pl-12"
                  >
                    <div className="bg-white/70 backdrop-blur-2xl border border-blue-100 rounded-3xl shadow-2xl px-8 py-8 flex flex-col items-start md:items-start max-w-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-blue-200">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base shadow">
                          {milestone.year}
                        </span>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-base leading-relaxed">{milestone.description}</p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="hidden md:block md:w-1/2" />
                )}
              </div>
            );
          })}
        </div>
        {/* Mobile: vertical line and dots */}
        <div className="md:hidden absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-purple-200 opacity-40 -translate-x-1/2 z-0" />
      </div>
    </section>
  );
} 