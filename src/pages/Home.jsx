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
import heroImg from '../assets/illustrations/hero.png';
import { useState, useEffect, useRef } from 'react';

function Home() {
  // Parallax state for bubbles
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  // Confetti state and helpers
  const [confetti, setConfetti] = useState([]);
  const confettiId = useRef(0);
  const confettiColors = [
    '#60a5fa', // blue
    '#a78bfa', // purple
    '#34d399', // green
    '#fbbf24', // yellow
    '#f472b6', // pink
    '#f87171', // red
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Only apply on desktop
      if (window.innerWidth < 768) return;
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (confetti.length > 0) {
      const timeout = setTimeout(() => setConfetti([]), 1200);
      return () => clearTimeout(timeout);
    }
  }, [confetti]);

  return (
    <div className="w-full min-h-screen overflow-hidden">
      {/* Hero Section: Placement Guarantee + Custom Illustration */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        {/* Angled Blue Accent Bar (Geometric Shape) */}
        <div className="absolute left-0 top-[-80px] w-[160vw] h-64 md:h-80 rotate-[-8deg] bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-transparent z-0" style={{ pointerEvents: 'none' }} />
        {/* Extra Geometric Shapes */}
        <svg className="absolute left-[-60px] bottom-[-60px] w-64 h-64 z-0" style={{ pointerEvents: 'none' }} viewBox="0 0 256 256" fill="none">
          <polygon points="0,256 256,256 0,0" fill="#a78bfa22" />
        </svg>
        <div className="absolute right-[-40px] top-[-40px] w-40 h-40 rounded-full bg-green-200/20 z-0" style={{ pointerEvents: 'none' }} />
        <svg className="absolute right-[-50px] bottom-[-30px] w-32 h-32 z-0" style={{ pointerEvents: 'none' }} viewBox="0 0 100 100" fill="none">
          <polygon points="20,80 80,100 100,20 60,0" fill="#fde68a33" />
        </svg>
        {/* Animated Floating Career Icons */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* Floating Icons */}
          <BriefcaseIcon className="floating-icon text-blue-400/30" style={{ left: '18%', top: '32%', width: 44, height: 44, position: 'absolute' }} />
          <ChartBarIcon className="floating-icon text-purple-400/30" style={{ left: '65%', top: '18%', width: 38, height: 38, position: 'absolute' }} />
          <AcademicCapIcon className="floating-icon text-green-400/30" style={{ left: '75%', top: '65%', width: 48, height: 48, position: 'absolute' }} />
          <StarIcon className="floating-icon text-yellow-400/30" style={{ left: '32%', top: '75%', width: 36, height: 36, position: 'absolute' }} />
          {/* Bubbles */}
          {[
            { class: "bg-blue-100 opacity-30", left: '8%', top: '18%', w: 60, h: 60, px: 30, py: 20 },
            { class: "bg-gray-200 opacity-25", left: '72%', top: '22%', w: 90, h: 90, px: -40, py: 10 },
            { class: "bg-purple-200 opacity-20", left: '48%', top: '68%', w: 50, h: 50, px: 20, py: -30 },
            { class: "bg-blue-200 opacity-20", left: '82%', top: '62%', w: 70, h: 70, px: -25, py: 25 },
            { class: "bg-gray-300 opacity-20", left: '28%', top: '78%', w: 55, h: 55, px: 35, py: -20 },
            { class: "bg-blue-200 opacity-15", left: '60%', top: '40%', w: 40, h: 40, px: -15, py: 15 },
            { class: "bg-purple-100 opacity-20", left: '20%', top: '60%', w: 80, h: 80, px: 10, py: -35 },
            { class: "bg-gray-100 opacity-20", left: '40%', top: '30%', w: 65, h: 65, px: -20, py: 20 },
          ].map((b, i) => (
            <div
              key={i}
              className={`bubble ${b.class}`}
              style={{
                left: b.left,
                top: b.top,
                width: b.w,
                height: b.h,
                transform: `translate3d(${(window.innerWidth >= 768 ? (mouse.x - 0.5) * b.px : 0)}px, ${(window.innerWidth >= 768 ? (mouse.y - 0.5) * b.py : 0)}px, 0)`
              }}
            />
          ))}
        </div>
        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center w-full px-4 py-12 md:py-24 max-w-6xl mx-auto gap-8 md:gap-0">
          {/* Left: Professional Placement Guarantee and Caption */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center">
            <div className="px-4 py-8 md:px-10 md:py-14 flex flex-col items-center md:items-start max-w-2xl w-full">
              <motion.h1
                className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-green-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                  Your Career, Secured.
                </span>
              </motion.h1>
              <motion.h2
                className="text-xl md:text-2xl font-semibold text-blue-700 mb-3 flex items-center gap-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <span className="animate-bounce">
                  <svg className="w-6 h-6 text-green-500 inline" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                </span>
                <span className="shimmer-glow">100% Placement Guarantee</span>
              </motion.h2>
              <motion.p
                className="text-base md:text-lg text-gray-700 font-medium mb-8 max-w-xl animate-fade-in"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                Ivanios College partners with top global recruiters to ensure every graduate receives a placement offer.<br />
                <span className="text-blue-600 font-semibold">Our commitment: your future, guaranteed.</span>
              </motion.p>
              <motion.a
                href="#courses"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-600 mb-4 transform hover:-translate-y-1 relative overflow-visible"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                onClick={e => {
                  setConfetti(
                    Array.from({ length: 18 }).map((_, i) => ({
                      id: confettiId.current++,
                      angle: (i / 18) * 2 * Math.PI,
                      color: confettiColors[i % confettiColors.length],
                    }))
                  );
                }}
              >
                Explore Programs
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                {/* Confetti burst */}
                <span className="absolute left-1/2 top-1/2 z-50 pointer-events-none" style={{ transform: 'translate(-50%, -50%)' }}>
                  {confetti.map((c, i) => (
                    <span
                      key={c.id}
                      className="confetti-particle"
                      style={{
                        background: c.color,
                        '--angle': c.angle + 'rad',
                        '--distance': '60px',
                      }}
                    />
                  ))}
                </span>
              </motion.a>
              <motion.span
                className="inline-block bg-green-50 text-green-700 px-5 py-2 rounded-full font-semibold shadow border border-green-200 text-sm tracking-wide mt-2 animate-pulse"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
              >
                Placement Guaranteed by Leading Companies
              </motion.span>
            </div>
          </div>
          {/* Right: Custom Illustration */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
            <div className="relative w-64 md:w-[420px] max-w-full overflow-hidden rounded-2xl">
              <motion.img
                src={heroImg}
                alt="Hero Illustration"
                className="w-full h-auto object-contain"
                loading="lazy"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              />
              {/* Shining effect overlay */}
              <motion.div
                className="absolute left-0 top-0 w-full h-full pointer-events-none z-20 rounded-2xl"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 2.8, ease: 'linear' }}
                style={{
                  background: 'linear-gradient(120deg, transparent 60%, rgba(255,255,255,0.35) 80%, transparent 100%)',
                  mixBlendMode: 'lighten',
                }}
              />
            </div>
          </div>
        </div>
        {/* Animations for gradient, fade-in, and bubbles */}
        <style>{`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 4s ease-in-out infinite;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1.2s ease-out;
          }
          .bubble {
            position: absolute;
            border-radius: 9999px;
            filter: blur(3px);
            animation: float-bubble 10s ease-in-out infinite alternate, drift-bubble 16s linear infinite alternate, pulse-bubble 6s ease-in-out infinite;
          }
          .bubble:nth-child(2) { animation-delay: 1.5s, 0.5s, 2s; }
          .bubble:nth-child(3) { animation-delay: 3s, 1.2s, 3.5s; }
          .bubble:nth-child(4) { animation-delay: 4.5s, 2.2s, 1s; }
          .bubble:nth-child(5) { animation-delay: 6s, 3.1s, 4s; }
          .bubble:nth-child(6) { animation-delay: 2.5s, 1.7s, 2.8s; }
          .bubble:nth-child(7) { animation-delay: 5.5s, 2.7s, 3.2s; }
          .bubble:nth-child(8) { animation-delay: 7s, 4.2s, 1.7s; }
          @keyframes float-bubble {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-30px) scale(1.08); }
            100% { transform: translateY(0) scale(1); }
          }
          @keyframes drift-bubble {
            0% { transform: translateX(0); }
            100% { transform: translateX(30px); }
          }
          @keyframes pulse-bubble {
            0%, 100% { opacity: 0.18; }
            50% { opacity: 0.32; }
          }
          .floating-icon {
            opacity: 0.7;
            filter: blur(0.5px);
            animation: float-icon 8s ease-in-out infinite alternate, drift-icon 14s linear infinite alternate;
            will-change: transform, opacity;
          }
          .floating-icon:nth-child(1) { animation-delay: 0.5s, 0.2s; }
          .floating-icon:nth-child(2) { animation-delay: 2s, 1.1s; }
          .floating-icon:nth-child(3) { animation-delay: 3.5s, 2.2s; }
          .floating-icon:nth-child(4) { animation-delay: 1.7s, 1.7s; }
          @keyframes float-icon {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-18px) scale(1.08) rotate(-6deg); }
            100% { transform: translateY(0) scale(1); }
          }
          @keyframes drift-icon {
            0% { transform: translateX(0); }
            100% { transform: translateX(18px); }
          }
          .shimmer-glow {
            position: relative;
            display: inline-block;
            background: linear-gradient(90deg, #2563eb 0%, #22d3ee 50%, #a78bfa 100%);
            background-size: 200% 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 7s linear infinite;
            filter: drop-shadow(0 0 6px #a5b4fc88);
          }
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
      </section>

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

          {/* Top Recruiters Row
          <div className="mt-16 flex flex-wrap justify-center items-center gap-6">
            {["/logo/dhl.png","/logo/maersk.png","/logo/amazon.png","/logo/fedex.png","/logo/flipkart.png","/logo/bluedart.png"].map((src, i) => (
              <img key={src} src={src} alt="Recruiter Logo" className="h-10 w-auto grayscale hover:grayscale-0 transition duration-300" />
            ))}
          </div> */}
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