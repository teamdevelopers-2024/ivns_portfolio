import { motion, AnimatePresence } from "framer-motion";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ChatBubbleLeftIcon,
  UserIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { useState } from "react";

const contactMethods = [
  {
    label: "WhatsApp",
    icon: <FaWhatsapp className="w-6 h-6" />,
    value: "+91 80757 24611",
    href: "https://wa.me/918075724611",
  },
  {
    label: "Instagram",
    icon: <FaInstagram className="w-6 h-6" />,
    value: "@IVANIOS_COLLEGE_ANCHAL",
    href: "https://www.instagram.com/ivanios_college_anchal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
];

const campuses = [
  {
    name: "Main Campus - Kollam",
    address:
      "Ivanios College, P.O Junction, Rd Line, Vijay Nagar, Anchal, Kerala 691306",
    phone: ["+91 96454 64544"],
    email: "admissions@ivanioscollege.ac.in",
  },
  {
    name: "Kozhikode Campus",
    address:
      "1st Floor, Kannankandy Chambers, Near Areyaadath Palam, Mavoor Rd, Puthiyara, Kozhikode, Kerala 673633",
    phone: ["+91 80757 24611", "+91 97465 54060"],
    email: "admissions@ivanioscollege.ac.in",
  },
  {
    name: "Thiruvananthapuram Campus",
    address: "Ivanios College, Palode, Near BMC Hospital",
    phone: ["+91 73066 07706"],
    email: "admissions@ivanioscollege.ac.in",
  },
];

function CampusInfoCard({ campus, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative bg-white/90 rounded-3xl shadow-2xl border border-blue-100 p-8 max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 text-2xl"
        >
          ×
        </button>
        <h3 className="text-2xl font-bold mb-2 text-blue-700">{campus.name}</h3>
        <div className="text-gray-700 mb-2">
          <b>Address:</b> {campus.address}
        </div>
        <div className="text-gray-700 mb-2 hover:underline ">
          <b>Phone:</b> {campus.phone.join(", ")}
        </div>
        {campus.email && (
          <div className="text-gray-700 mb-2">
            <b>Email:</b>{" "}
            <a
              href={`mailto:${campus.email}`}
              className="text-blue-600 hover:underline"
            >
              {campus.email}
            </a>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function Contact() {
  return (
    <div className="min-h-screen w-full bg-neutral-50 relative overflow-hidden px-4 py-12 md:py-16">
      {/* Subtle blurred background accent */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neutral-200/30 rounded-full blur-3xl z-0" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-3 tracking-tight">
            Connect with Us
          </h1>
          <p className="text-base text-neutral-500 max-w-xl mx-auto">
            We're here to help you start your journey in logistics education.
          </p>
        </section>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Social Connects */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-neutral-800 mb-2">
              Quick Connect
            </h2>
            {contactMethods.map((method, idx) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 20px 0 rgba(30,41,59,0.08)",
                }}
                className={`flex items-center gap-4 p-4 bg-white/90 border border-neutral-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 ${
                  method.label === "WhatsApp"
                    ? "hover:border-green-400"
                    : "hover:border-purple-400"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${
                    method.label === "WhatsApp"
                      ? "bg-green-50 text-green-600"
                      : "bg-purple-50 text-purple-600"
                  }`}
                >
                  {method.icon}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-neutral-900">
                    {method.label}
                  </div>
                  <div className="text-sm text-neutral-600">{method.value}</div>
                </div>
                <svg
                  className="w-5 h-5 text-neutral-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.a>
            ))}
          </section>

          {/* Right Column - Branch Details */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-neutral-800 mb-2">
              Our Campuses
            </h2>
            {campuses.map((campus, idx) => (
              <motion.div
                key={campus.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="p-4 bg-white/90 border border-neutral-200 rounded-xl shadow-sm"
              >
                <h3 className="font-semibold text-neutral-900 mb-2">
                  {campus.name}
                </h3>
                <div className="text-sm text-neutral-600 space-y-2">
                  <p>{campus.address}</p>
                  <p className="flex items-center gap-2">
                    <span className="font-medium">Phone:</span>
                    {campus.phone.map((phone, i) => (
                      <a
                        key={i}
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="text-blue-600 hover:underline hover:text-blue-700 transition-colors cursor-pointer z-10"
                      >
                        {phone}
                        {i < campus.phone.length - 1 && ", "}
                      </a>
                    ))}
                  </p>
                  {campus.email && (
                    <p className="flex items-center gap-2">
                      <span className="font-medium">Email:</span>
                      <a
                        href={`mailto:${campus.email}`}
                        className="text-blue-600 hover:underline hover:text-blue-700 transition-colors cursor-pointer z-10"
                      >
                        {campus.email}
                      </a>
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </section>
        </div>
      </div>

      {/* Sticky Help Button */}
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="fixed bottom-6 right-6 z-50 px-5 py-2.5 rounded-full bg-white/90 border border-neutral-200 shadow-lg text-neutral-800 text-sm font-medium backdrop-blur-xl hover:shadow-xl hover:border-neutral-300 transition-all duration-200"
        onClick={() => window.open("https://wa.me/918075724611", "_blank")}
      >
        Need Help?
      </motion.button>
    </div>
  );
}

export default Contact;
