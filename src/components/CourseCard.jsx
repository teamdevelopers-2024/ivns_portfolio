import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function CourseCard({ title, duration, location, description, eligibility, structure }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold text-blue-600 mb-2">{title}</h3>
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            {duration}
          </span>
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
            {location}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Eligibility</h4>
            <p className="text-gray-600">{eligibility}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Course Structure</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {structure.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 px-6 py-4">
        <button className="w-full btn-primary">
          Learn More
        </button>
      </div>
    </motion.div>
  );
}

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  eligibility: PropTypes.string.isRequired,
  structure: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CourseCard;