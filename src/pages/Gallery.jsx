import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
  CameraIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const galleryCategories = [
  { id: 'all', name: 'All Photos', icon: CameraIcon, count: 12 },
  { id: 'campus', name: 'Campus Life', icon: BuildingOfficeIcon, count: 4 },
  { id: 'events', name: 'Events', icon: UserGroupIcon, count: 4 },
  { id: 'academic', name: 'Academic', icon: AcademicCapIcon, count: 4 },
];

const galleryImages = [
  {
    id: 1,
    category: 'campus',
    title: 'Modern Campus Infrastructure',
    description: 'State-of-the-art facilities designed for optimal learning experience',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1186&q=80',
    size: 'large',
  },
  {
    id: 2,
    category: 'events',
    title: 'Industry Expert Session',
    description: 'Learning from industry leaders and experts',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    size: 'medium',
  },
  {
    id: 3,
    category: 'academic',
    title: 'Practical Training',
    description: 'Hands-on experience in modern facilities',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    size: 'small',
  },
  {
    id: 4,
    category: 'campus',
    title: 'Student Lounge',
    description: 'Modern spaces for student collaboration',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    size: 'medium',
  },
  {
    id: 5,
    category: 'events',
    title: 'Annual Logistics Summit',
    description: 'Bringing together industry leaders and students',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80',
    size: 'large',
  },
  {
    id: 6,
    category: 'academic',
    title: 'Classroom Sessions',
    description: 'Interactive learning environment',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    size: 'medium',
  },
  {
    id: 7,
    category: 'campus',
    title: 'Library',
    description: 'Extensive collection of resources',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    size: 'small',
  },
  {
    id: 8,
    category: 'events',
    title: 'Placement Drive',
    description: 'Connecting students with top companies',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    size: 'medium',
  },
  {
    id: 9,
    category: 'academic',
    title: 'Group Projects',
    description: 'Collaborative learning experiences',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    size: 'large',
  },
];

const featuredImages = galleryImages.slice(0, 5);

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredImages = galleryImages.filter(
    (image) => activeCategory === 'all' || image.category === activeCategory
  );

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative content-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Gallery
            </h1>
            <p className="text-lg text-gray-600">
              Explore life at Ivanios through our collection of memories and achievements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Images Carousel */}
      <section className="py-8 bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 aspect-[16/9]">
            {featuredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className={`relative rounded-2xl overflow-hidden cursor-pointer ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(image)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="content-container">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {galleryCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={ref} className="py-8 bg-white">
        <div className="content-container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layoutId={`image-${image.id}`}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`relative cursor-pointer rounded-2xl overflow-hidden shadow-lg ${
                    image.size === 'large' ? 'md:col-span-2' : ''
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="group aspect-[4/3] overflow-hidden">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200">{selectedImage.description}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-200 bg-black/50 rounded-full p-2 backdrop-blur-sm"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
