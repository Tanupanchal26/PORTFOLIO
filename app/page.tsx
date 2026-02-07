'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import SplashCursor from '../components/SplashCursor'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMenuVisible, setIsMenuVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    setMounted(true)
    
    // Handle scroll for active section and menu visibility
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Menu visibility logic
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsMenuVisible(false)
      } else {
        setIsMenuVisible(true)
      }
      
      setLastScrollY(currentScrollY)
      
      // Active section logic
      const sections = ['hero', 'about', 'skills', 'projects', 'github', 'certificates', 'contact']
      const scrollPosition = currentScrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  if (!mounted) return null

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const skills = [
    'JavaScript', 'HTML', 'CSS', 'C', 'C++', 'Java', 
    'Figma', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'Redis', 
    'Git/GitHub', 'React.js', 'Next.js', 'Tailwind CSS'
  ]

  const projects = [
    {
      title: 'JARVIS – AI Personal Assistant',
      year: '2026',
      tech: 'Python • Speech Recognition • NLP • Automation',
      description: 'An AI personal assistant that responds to voice commands, processes natural language, and automates tasks using speech recognition and NLP.',
      github: 'https://github.com/Tanupanchal26/JARVIS.git'
    },
    {
      title: 'KaushalX – Job & Course Platform',
      year: '2025', 
      tech: 'React.js, Node.js, MongoDB, Express.js',
      description: 'Comprehensive platform for job and course listings with advanced search and filtering capabilities, real-time updates, and responsive design.',
      github: 'https://github.com/lucky-panchal/Secret.git'
    },
    {
      title: 'HotWheels – Automotive Showcase Platform',
      year: '2025',
      tech: 'React.js, Node.js, MongoDB, Express.js',
      description: 'An automotive showcase platform for browsing and comparing vehicle models with a responsive, user-friendly interface.',
      github: 'https://github.com/Tanupanchal26/hotwheels.git'
    },
    {
      title: 'HerRides – Women\'s Transportation UI',
      year: '2025',
      tech: 'Next.js, Tailwind CSS, Figma',
      description: 'Safety-oriented transportation app UI focusing on user research, wireframes, prototypes, and responsive implementation for women\'s safety.',
      github: 'https://github.com/Tanupanchal26/HerRides-UI.git'
    },
    {
      title: 'Portfolio Website',
      year: '2025',
      tech: 'React.js, CSS, JavaScript',
      description: 'Personal portfolio website showcasing projects and skills with smooth animations, responsive design, and modern UI/UX principles.',
      github: 'https://github.com/Tanupanchal26/PORTFOLIO.git'
    }
  ]

  return (
    <main className={isDarkMode ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-[#ECEFF1] text-[#111111]'}>
      <SplashCursor />
      {/* Fixed Top Menubar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isMenuVisible ? 0 : -100, 
          opacity: isMenuVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 backdrop-blur-sm z-50 ${
          isDarkMode ? 'bg-black/90 shadow-lg' : 'bg-[#ECEFF1] shadow-[0_2px_8px_rgba(0,0,0,0.08)]'
        }`}
        style={{ position: 'relative' }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
          e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-2.5 flex justify-between items-center relative">
          <div 
            className="absolute inset-0 pointer-events-none hidden md:block"
            style={{
              background: 'radial-gradient(circle 150px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.08), transparent)',
              opacity: 0.5
            }}
          />
          <div className={`font-bold text-base sm:text-lg tracking-wider relative z-10 ${
            isDarkMode ? 'text-white' : 'text-[#111111]'
          }`}>TANYA</div>
          <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 relative z-10">
            {[
              { id: 'hero', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
              { id: 'about', label: 'About', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
              { id: 'skills', label: 'Skills', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
              { id: 'projects', label: 'Projects', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
              { id: 'github', label: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', fill: true },
              { id: 'certificates', label: 'Certificates', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
              { id: 'contact', label: 'Contact', icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  const element = document.getElementById(item.id)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center transition-all duration-300 group relative ${
                  activeSection === item.id
                    ? isDarkMode ? 'bg-white shadow-lg' : 'bg-[#111111] shadow-lg'
                    : isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-[#E0E1E3]'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={item.label}
              >
                <svg
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 transition-colors duration-300 ${
                    activeSection === item.id 
                      ? isDarkMode ? 'text-black' : 'text-white'
                      : isDarkMode ? 'text-gray-300 group-hover:text-white' : 'text-[#374151] group-hover:text-[#111111]'
                  }`}
                  fill={item.fill ? "currentColor" : "none"}
                  stroke={item.fill ? "none" : "currentColor"}
                  viewBox="0 0 24 24"
                  strokeWidth={item.fill ? 0 : 1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <div className="absolute top-full mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                  {item.label}
                </div>
              </motion.button>
            ))}
          </div>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center transition-all duration-300 relative z-10 group ${
              isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-[#D8D9DB] hover:bg-[#C8C9CB]'
            }`}
            aria-label="Toggle theme"
          >
            <svg className={`w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 ${
              isDarkMode ? 'text-gray-300' : 'text-[#111111]'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isDarkMode ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              )}
            </svg>
            <div className={`absolute top-full mt-2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50 ${
              isDarkMode ? 'bg-gray-800 text-white' : 'bg-[#111111] text-white'
            }`}>
              {isDarkMode ? 'Light Theme' : 'Dark Theme'}
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Main Content with Top Padding */}
      <div className="pt-14 sm:pt-16">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 -mt-8 sm:-mt-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm Tanya Panchal<br />Software Developer
          </motion.h1>
          <motion.p 
            className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 ${
              isDarkMode ? 'text-gray-400' : 'text-[#4B5563]'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            B.Tech CSE Student | Aspiring Software Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#about" 
              className={`inline-block px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-300 ${
                isDarkMode 
                  ? 'border border-white hover:bg-white hover:text-black' 
                  : 'border border-[#D8D9DB] hover:bg-[#111111] hover:text-white hover:border-[#111111]'
              }`}
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center"
            >
              About
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className={`text-base sm:text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 ${
                isDarkMode ? 'text-gray-400' : 'text-[#4B5563]'
              }`}
            >
              I am a passionate Software Developer and B.Tech Computer Science student with a strong interest in building modern, scalable, and user-focused web applications. I have a solid foundation in front-end and back-end technologies and enjoy turning ideas into practical digital solutions. Through academic learning and hands-on projects, I continuously work on improving my problem-solving skills, code quality, and understanding of real-world software development. I am eager to learn, grow, and contribute to meaningful projects as a developer.
            </motion.p>
            
            <div className="text-center mt-8 sm:mt-10 md:mt-12">
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/tanya resume.pdf';
                  link.download = 'tanya resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className={`inline-block px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-300 ${
                  isDarkMode 
                    ? 'border border-white hover:bg-white hover:text-black' 
                    : 'border border-[#D8D9DB] hover:bg-[#111111] hover:text-white hover:border-[#111111]'
                }`}
              >
                📄 Download Resume
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center"
            >
              Skills
            </motion.h2>
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={fadeInUp}
                  className={`px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-center transition-colors duration-300 ${
                    isDarkMode 
                      ? 'border border-gray-600 hover:border-white' 
                      : 'bg-[#F0F1F3] border border-[#D8D9DB] hover:border-[#C0C1C3]'
                  }`}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center"
            >
              Projects
            </motion.h2>
            <motion.div 
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-6 sm:gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={fadeInUp}
                  className={`p-4 sm:p-5 md:p-6 transition-all duration-300 group ${
                    isDarkMode 
                      ? 'border border-gray-600 hover:border-white' 
                      : 'bg-[#F0F1F3] border border-[#D8D9DB] hover:border-[#C0C1C3] shadow-sm'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className={isDarkMode ? 'text-gray-400 text-sm' : 'text-[#6B7280] text-sm'}>{project.year}</span>
                  </div>
                  <p className={`text-xs sm:text-sm mb-3 sm:mb-4 ${isDarkMode ? 'text-gray-400' : 'text-[#6B7280]'}`}>{project.tech}</p>
                  <p className={`text-sm sm:text-base leading-relaxed mb-4 ${isDarkMode ? 'text-gray-400' : 'text-[#4B5563]'}`}>{project.description}</p>
                  <div className="text-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 rounded-lg transition-all duration-300 text-sm ${
                        isDarkMode 
                          ? 'border border-gray-600 hover:border-white hover:bg-white hover:text-black' 
                          : 'border border-[#D8D9DB] hover:bg-[#111111] hover:text-white hover:border-[#111111]'
                      }`}
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Source Code
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* GitHub Section */}
      <section id="github" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center"
            >
              GitHub Activity
            </motion.h2>
            
            {/* Contribution Graph */}
            <motion.div variants={fadeInUp} className="mb-8 sm:mb-10 md:mb-12">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center">📊 𝐂𝐨𝐧𝐭𝐫𝐢𝐛𝐮𝐭𝐢𝐨𝐧 𝐆𝐫𝐚𝐩𝐡</h3>
              <div className="flex justify-center">
                <a href="https://github.com/Tanupanchal26" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={isDarkMode 
                      ? "https://github-readme-activity-graph.vercel.app/graph?username=Tanupanchal26&bg_color=000000&color=c9d1d9&line=22c55e&point=ffffff&area=true&hide_border=false&border_color=30363d" 
                      : "https://github-readme-activity-graph.vercel.app/graph?username=Tanupanchal26&bg_color=F0F1F3&color=111111&line=22c55e&point=111111&area=true&hide_border=false&border_color=D8D9DB"
                    }
                    alt="Contribution Graph" 
                    className="hover:scale-105 transition-all duration-300 w-full max-w-5xl"
                  />
                </a>
              </div>
            </motion.div>

            {/* GitHub Analytics */}
            <motion.div variants={fadeInUp} className="mb-8 sm:mb-10 md:mb-12">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center">📈 𝐆𝐢𝐭𝐇𝐮𝐛 𝐀𝐧𝐚𝐥𝐲𝐭𝐢𝐜𝐬</h3>
              
              <div className="mb-6 sm:mb-8">
                <div className="flex justify-center">
                  <a href="https://github.com/Tanupanchal26" target="_blank" rel="noopener noreferrer">
                    <img 
                      src={isDarkMode 
                        ? "https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Tanupanchal26&theme=github_dark" 
                        : "https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Tanupanchal26&theme=default"
                      }
                      alt="Profile Details" 
                      className="hover:scale-105 transition-all duration-300 w-full max-w-4xl"
                    />
                  </a>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex justify-center">
                  <a href="https://github.com/Tanupanchal26" target="_blank" rel="noopener noreferrer">
                    <img 
                      src={isDarkMode 
                        ? "https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=Tanupanchal26&theme=github_dark" 
                        : "https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=Tanupanchal26&theme=default"
                      }
                      alt="Repos per Language" 
                      className="hover:scale-105 transition-all duration-300"
                    />
                  </a>
                </div>
                <div className="flex justify-center">
                  <a href="https://github.com/Tanupanchal26" target="_blank" rel="noopener noreferrer">
                    <img 
                      src={isDarkMode 
                        ? "https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Tanupanchal26&theme=github_dark" 
                        : "https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Tanupanchal26&theme=default"
                      }
                      alt="Most Commit Language" 
                      className="hover:scale-105 transition-all duration-300"
                    />
                  </a>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex justify-center">
                  <a href="https://github.com/Tanupanchal26" target="_blank" rel="noopener noreferrer">
                    <img 
                      src={isDarkMode 
                        ? "https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Tanupanchal26&theme=github_dark" 
                        : "https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Tanupanchal26&theme=default"
                      }
                      alt="Stats" 
                      className="hover:scale-105 transition-all duration-300"
                    />
                  </a>
                </div>
                <div className="flex justify-center">
                  <a href="https://github.com/Tanupanchal26" target="_blank" rel="noopener noreferrer">
                    <img 
                      src={isDarkMode 
                        ? "https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=Tanupanchal26&theme=github_dark&utcOffset=5.5" 
                        : "https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=Tanupanchal26&theme=default&utcOffset=5.5"
                      }
                      alt="Productive Time" 
                      className="hover:scale-105 transition-all duration-300"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
            



            
            <motion.div 
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12"
            >
              {/* GitHub Stats Cards */}
              <motion.div
                variants={fadeInUp}
                className={`p-4 sm:p-5 md:p-6 text-center transition-all duration-300 ${
                  isDarkMode 
                    ? 'border border-gray-600 hover:border-white' 
                    : 'bg-[#F0F1F3] border border-[#D8D9DB] hover:border-[#C0C1C3]'
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-2">15+</h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-[#6B7280]'}>Public Repositories</p>
              </motion.div>
              
              <motion.div
                variants={fadeInUp}
                className={`p-4 sm:p-5 md:p-6 text-center transition-all duration-300 ${
                  isDarkMode 
                    ? 'border border-gray-600 hover:border-white' 
                    : 'bg-[#F0F1F3] border border-[#D8D9DB] hover:border-[#C0C1C3]'
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-2">JavaScript</h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-[#6B7280]'}>Primary Language</p>
              </motion.div>
              
              <motion.div
                variants={fadeInUp}
                className={`p-4 sm:p-5 md:p-6 text-center transition-all duration-300 ${
                  isDarkMode 
                    ? 'border border-gray-600 hover:border-white' 
                    : 'bg-[#F0F1F3] border border-[#D8D9DB] hover:border-[#C0C1C3]'
                }`}
              >
                <h3 className="text-2xl font-bold text-green-400 mb-2">Active</h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-[#6B7280]'}>Developer Status</p>
              </motion.div>
            </motion.div>

            {/* GitHub Profile Link */}
            <motion.div variants={fadeInUp} className="text-center">
              <motion.a
                href="https://github.com/Tanupanchal26/Tanupanchal26.git"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className={`inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-300 ${
                  isDarkMode 
                    ? 'border border-white hover:bg-white hover:text-black' 
                    : 'border border-[#D8D9DB] hover:bg-[#111111] hover:text-white hover:border-[#111111]'
                }`}
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Full GitHub Profile
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center"
            >
              Certificates
            </motion.h2>
            
            <motion.div 
              variants={staggerContainer}
              className="space-y-4 sm:space-y-6 max-w-4xl mx-auto"
            >
              {/* Deloitte Certificate */}
              <motion.div
                variants={fadeInUp}
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 md:p-6 rounded-lg transition-all duration-300 group gap-4 sm:gap-0 ${
                  isDarkMode 
                    ? 'border border-gray-600 hover:border-white' 
                    : 'bg-[#F0F1F3] border border-[#D8D9DB] hover:border-[#C0C1C3] shadow-sm'
                }`}
              >
                <div className="flex-1">
                  <h3 className={`text-lg sm:text-xl font-semibold mb-2 transition-colors ${
                    isDarkMode ? 'group-hover:text-gray-300' : ''
                  }`}>Technology Job Simulation</h3>
                  <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-[#6B7280]'}`}>Deloitte Australia</p>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-[#9CA3AF]'}`}>2025</span>
                </div>
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/deloitte-certificate.pdf';
                    link.download = 'Deloitte-Technology-Job-Simulation.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base w-full sm:w-auto justify-center sm:ml-6 ${
                    isDarkMode 
                      ? 'border border-gray-600 hover:border-white hover:bg-white hover:text-black' 
                      : 'border border-[#D8D9DB] hover:bg-[#111111] hover:text-white hover:border-[#111111]'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-sm">Download</span>
                </button>
              </motion.div>

              {/* BCG Certificate */}
              <motion.div
                variants={fadeInUp}
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 md:p-6 rounded-lg transition-all duration-300 group gap-4 sm:gap-0 ${
                  isDarkMode 
                    ? 'border border-gray-600 hover:border-white' 
                    : 'bg-[#F0F1F3] border border-[#D8D9DB] hover:border-[#C0C1C3] shadow-sm'
                }`}
              >
                <div className="flex-1">
                  <h3 className={`text-lg sm:text-xl font-semibold mb-2 transition-colors ${
                    isDarkMode ? 'group-hover:text-gray-300' : ''
                  }`}>GenAI Job Simulation</h3>
                  <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-[#6B7280]'}`}>BCG</p>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-[#9CA3AF]'}`}>2025</span>
                </div>
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/bcg-certificate.pdf';
                    link.download = 'BCG-GenAI-Job-Simulation.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base w-full sm:w-auto justify-center sm:ml-6 ${
                    isDarkMode 
                      ? 'border border-gray-600 hover:border-white hover:bg-white hover:text-black' 
                      : 'border border-[#D8D9DB] hover:bg-[#111111] hover:text-white hover:border-[#111111]'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-sm">Download</span>
                </button>
              </motion.div>

              {/* Google Cloud Certificate */}
              <motion.div
                variants={fadeInUp}
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 md:p-6 rounded-lg transition-all duration-300 group gap-4 sm:gap-0 ${
                  isDarkMode 
                    ? 'border border-gray-600 hover:border-white' 
                    : 'bg-[#F0F1F3] border border-[#D8D9DB] hover:border-[#C0C1C3] shadow-sm'
                }`}
              >
                <div className="flex-1">
                  <h3 className={`text-lg sm:text-xl font-semibold mb-2 transition-colors ${
                    isDarkMode ? 'group-hover:text-gray-300' : ''
                  }`}>Introduction to Generative AI Studio</h3>
                  <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-[#6B7280]'}`}>Google Cloud Certified</p>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-[#9CA3AF]'}`}>2025</span>
                </div>
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/google-cloud-certificate.pdf';
                    link.download = 'Google-Cloud-GenAI-Certificate.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base w-full sm:w-auto justify-center sm:ml-6 ${
                    isDarkMode 
                      ? 'border border-gray-600 hover:border-white hover:bg-white hover:text-black' 
                      : 'border border-[#D8D9DB] hover:bg-[#111111] hover:text-white hover:border-[#111111]'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-sm">Download</span>
                </button>
              </motion.div>

              {/* AWS Certificate */}
              <motion.div
                variants={fadeInUp}
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 md:p-6 rounded-lg transition-all duration-300 group gap-4 sm:gap-0 ${
                  isDarkMode 
                    ? 'border border-gray-600 hover:border-white' 
                    : 'bg-[#F0F1F3] border border-[#D8D9DB] hover:border-[#C0C1C3] shadow-sm'
                }`}
              >
                <div className="flex-1">
                  <h3 className={`text-lg sm:text-xl font-semibold mb-2 transition-colors ${
                    isDarkMode ? 'group-hover:text-gray-300' : ''
                  }`}>Solutions Architecture Job Simulation</h3>
                  <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-[#6B7280]'}`}>AWS</p>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-[#9CA3AF]'}`}>2025</span>
                </div>
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/aws-certificate.pdf';
                    link.download = 'AWS-Solutions-Architecture-Certificate.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base w-full sm:w-auto justify-center sm:ml-6 ${
                    isDarkMode 
                      ? 'border border-gray-600 hover:border-white hover:bg-white hover:text-black' 
                      : 'border border-[#D8D9DB] hover:bg-[#111111] hover:text-white hover:border-[#111111]'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-sm">Download</span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center"
            >
              Get In Touch
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className={`text-base sm:text-lg mb-10 sm:mb-12 md:mb-16 text-center max-w-2xl mx-auto ${
                isDarkMode ? 'text-gray-400' : 'text-[#111111]'
              }`}
            >
              Let's connect and discuss opportunities. I'm always open to new projects and collaborations.
            </motion.p>
            
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
              {/* Contact Cards */}
              <motion.div variants={fadeInUp} className="space-y-4 sm:space-y-6">
                <h3 className={`text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 ${
                  isDarkMode ? '' : 'text-[#111111]'
                }`}>Contact Information</h3>
                
                {/* Email Card */}
                <motion.a
                  href="mailto:panchaltanya32@gmail.com"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`flex items-center p-4 sm:p-5 md:p-6 rounded-lg transition-all duration-300 group ${
                    isDarkMode 
                      ? 'border border-gray-600 hover:border-white hover:shadow-lg hover:shadow-white/10' 
                      : 'bg-[#F0F1F3] border border-[#D8D9DB] hover:border-[#C0C1C3]'
                  }`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 transition-all duration-300 ${
                    isDarkMode 
                      ? 'border border-gray-600 group-hover:border-white group-hover:bg-white/5' 
                      : 'border border-[#D8D9DB] group-hover:border-[#C0C1C3]'
                  }`}>
                    <svg className={`w-6 h-6 transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-[#374151] group-hover:text-[#111111]'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-white group-hover:text-gray-200' : 'text-[#111111]'
                    }`}>Email</h4>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400 group-hover:text-gray-300' : 'text-[#111111]'
                    }`}>Contact me</p>
                  </div>
                </motion.a>

                {/* Phone Card */}
                <motion.a
                  href="https://wa.me/919998370911"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`flex items-center p-4 sm:p-5 md:p-6 rounded-lg transition-all duration-300 group ${
                    isDarkMode 
                      ? 'border border-gray-600 hover:border-white hover:shadow-lg hover:shadow-white/10' 
                      : 'bg-[#F0F1F3] border border-[#D8D9DB] hover:border-[#C0C1C3]'
                  }`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 transition-all duration-300 ${
                    isDarkMode 
                      ? 'border border-gray-600 group-hover:border-white group-hover:bg-white/5' 
                      : 'border border-[#D8D9DB] group-hover:border-[#C0C1C3]'
                  }`}>
                    <svg className={`w-6 h-6 transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-[#374151] group-hover:text-[#111111]'
                    }`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-white group-hover:text-gray-200' : 'text-[#111111]'
                    }`}>WhatsApp</h4>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400 group-hover:text-gray-300' : 'text-[#111111]'
                    }`}>Chat with me</p>
                  </div>
                </motion.a>

                {/* GitHub Card */}
                <motion.a
                  href="https://github.com/Tanupanchal26/Tanupanchal26.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`flex items-center p-4 sm:p-5 md:p-6 rounded-lg transition-all duration-300 group ${
                    isDarkMode 
                      ? 'border border-gray-600 hover:border-white hover:shadow-lg hover:shadow-white/10' 
                      : 'bg-[#F0F1F3] border border-[#D8D9DB] hover:border-[#C0C1C3]'
                  }`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 transition-all duration-300 ${
                    isDarkMode 
                      ? 'border border-gray-600 group-hover:border-white group-hover:bg-white/5' 
                      : 'border border-[#D8D9DB] group-hover:border-[#C0C1C3]'
                  }`}>
                    <svg className={`w-6 h-6 transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-[#374151] group-hover:text-[#111111]'
                    }`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-white group-hover:text-gray-200' : 'text-[#111111]'
                    }`}>GitHub</h4>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400 group-hover:text-gray-300' : 'text-[#111111]'
                    }`}>View projects</p>
                  </div>
                </motion.a>

                {/* LinkedIn Card */}
                <motion.a
                  href="https://www.linkedin.com/in/tanya-panchal-142192322"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`flex items-center p-4 sm:p-5 md:p-6 rounded-lg transition-all duration-300 group ${
                    isDarkMode 
                      ? 'border border-gray-600 hover:border-white hover:shadow-lg hover:shadow-white/10' 
                      : 'bg-[#F0F1F3] border border-[#D8D9DB] hover:border-[#C0C1C3]'
                  }`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 transition-all duration-300 ${
                    isDarkMode 
                      ? 'border border-gray-600 group-hover:border-white group-hover:bg-white/5' 
                      : 'border border-[#D8D9DB] group-hover:border-[#C0C1C3]'
                  }`}>
                    <svg className={`w-6 h-6 transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-[#374151] group-hover:text-[#111111]'
                    }`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-white group-hover:text-gray-200' : 'text-[#111111]'
                    }`}>LinkedIn</h4>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400 group-hover:text-gray-300' : 'text-[#111111]'
                    }`}>Connect with me</p>
                  </div>
                </motion.a>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={fadeInUp} className="">
                <h3 className={`text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 ${
                  isDarkMode ? '' : 'text-[#111111]'
                }`}>Send a Message</h3>
                <motion.form 
                  variants={staggerContainer}
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    const data = {
                      name: formData.get('name'),
                      email: formData.get('email'),
                      message: formData.get('message')
                    };
                    
                    // Create mailto link with form data
                    const subject = encodeURIComponent(`Portfolio Contact: ${data.name}`);
                    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
                    const mailtoLink = `mailto:panchaltanya32@gmail.com?subject=${subject}&body=${body}`;
                    
                    // Open email client
                    window.location.href = mailtoLink;
                    
                    // Reset form
                    (e.target as HTMLFormElement).reset();
                  }}
                  className="space-y-4 sm:space-y-6"
                >
                  <motion.div variants={fadeInUp}>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-[#111111]'
                    }`}>Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-[#111111]'
                    }`}>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-[#111111]'
                    }`}>Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </motion.div>
                  
                  <motion.button
                    variants={fadeInUp}
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group text-sm sm:text-base ${
                      isDarkMode 
                        ? 'bg-white text-black hover:bg-gray-200' 
                        : 'border border-[#D8D9DB] hover:bg-[#111111] hover:text-white hover:border-[#111111]'
                    }`}
                  >
                    <span>Send Message</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </motion.button>
                </motion.form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-600">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm sm:text-base text-gray-400">
            © 2024 Tanya Panchal. All rights reserved.
          </p>
        </div>
      </footer>
      
      {/* Floating Scroll to Top Button */}
      <motion.button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-y-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
      </div>
    </main>
  )
}