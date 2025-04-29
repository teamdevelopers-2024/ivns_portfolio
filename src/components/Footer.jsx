import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

const footerLinks = {
  company: [
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Placements', href: '#placements' },
  ],
  resources: [
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

function Footer() {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ivanios College. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;