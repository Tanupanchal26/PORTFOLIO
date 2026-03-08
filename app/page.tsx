'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isDark, setIsDark] = useState(true)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    setMounted(true)
    
    // Handle scroll for active section and header visibility
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }
      setLastScrollY(currentScrollY)
      
      // Active section detection
      const sections = ['hero', 'about', 'skills', 'projects', 'github', 'certificates', 'contact']
      const scrollPosition = window.scrollY + 100
      
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
    
    window.addEventListener('scroll', handleScroll)
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
      title: 'KaushalX – Job & Course Platform',
      year: '2025', 
      tech: 'React.js, Node.js, MongoDB, Express.js',
      description: 'Comprehensive platform for job and course listings with advanced search and filtering capabilities, real-time updates, and responsive design.',
      github: 'https://github.com/lucky-panchal/Secret.git'
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
    },
    {
      title: 'HotWheels – Automotive Showcase Platform',
      year: '2025',
      tech: 'React.js, Node.js, MongoDB, Express.js',
      description: 'An automotive showcase platform for browsing and comparing vehicle models with a responsive, user-friendly interface.',
      github: 'https://github.com/Tanupanchal26/hotwheels'
    },
    {
      title: 'JARVIS – AI Personal Assistant',
      year: '2026',
      tech: 'Python • Speech Recognition • NLP • Automation',
      description: 'An AI personal assistant that responds to voice commands, processes natural language, and automates tasks using speech recognition and NLP.',
      github: 'https://github.com/Tanupanchal26/JARVIS'
    },
    {
      title: 'Python Projects Collection',
      year: '2026',
      tech: 'Python',
      description: 'A curated set of Python applications demonstrating scripting, automation, data handling, and logic implementation for real-world utility and learning.',
      github: 'https://github.com/Tanupanchal26/Python-Projects'
    }
  ]

  return (
    <main data-theme={isDark ? 'dark' : 'light'} className={`min-h-screen ${isDark ? 'bg-[#000000] text-[#FFFFFF]' : 'bg-[#FFFFFF] text-[#111827]'}`}>
      {/* Top Menu Bar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: showHeader ? 0 : -100, opacity: showHeader ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-[#000000]/90' : 'bg-[#FFFFFF]/90'} backdrop-blur-sm border-b ${isDark ? 'border-[#1F1F1F]' : 'border-[#E5E7EB]'}`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Name on Left */}
          <div className="text-base font-bold ml-28">
            TANYA
          </div>
          
          {/* Navigation Icons in Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
            {[
              { id: 'hero', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', label: 'Home' },
              { id: 'about', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', label: 'About' },
              { id: 'skills', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Skills' },
              { id: 'projects', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', label: 'Projects' },
              { id: 'github', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', label: 'GitHub', fill: true },
              { id: 'certificates', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l7-3.889V17l-7 3-7-3v-6.889L12 14z', label: 'Certificates' },
              { id: 'contact', icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Contact' }
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  const element = document.getElementById(item.id)
                  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                whileTap={{ scale: 0.95 }}
                className={`ui-btn p-2 rounded transition-all duration-300 group relative ${
                  activeSection === item.id
                    ? isDark ? 'bg-[#111111] text-[#FFFFFF]' : 'bg-[#F9FAFB] text-[#111827]'
                    : isDark ? 'text-[#B3B3B3]' : 'text-[#4B5563]'
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill={item.fill ? 'currentColor' : 'none'}
                  stroke={item.fill ? 'none' : 'currentColor'}
                  viewBox="0 0 24 24"
                  strokeWidth={item.fill ? 0 : 1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 ${isDark ? 'bg-[#111111]' : 'bg-[#111827]'} text-[#FFFFFF] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>
          
          {/* Theme Toggle on Right */}
          <div className="mr-24">
            <motion.button
              onClick={() => setIsDark(!isDark)}
              whileTap={{ scale: 0.95 }}
              className={`ui-btn p-2 rounded transition-all duration-300 group relative ${isDark ? 'bg-[#000000] text-[#FFFFFF]' : 'bg-[#FFFFFF] text-[#111827]'}`}
            >
            {isDark ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
            <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 ${isDark ? 'bg-[#111111]' : 'bg-[#111827]'} text-[#FFFFFF] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
              {isDark ? 'Light Theme' : 'Dark Theme'}
            </span>
          </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="pt-16">
        {/* Hero Section */}
        <section id="hero" className={`min-h-screen flex items-center justify-center px-6 ${isDark ? 'bg-[#000000]' : 'bg-[#FFFFFF]'}`}>
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm Tanya Panchal
          </motion.h1>
          <motion.p 
            className={`text-xl md:text-2xl ${isDark ? 'text-[#B3B3B3]' : 'text-[#4B5563]'} mb-8`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Software Developer<br />
            B.Tech CSE Student | Aspiring Software Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#about" 
              className={`ui-btn inline-block border px-8 py-3 transition-all duration-300 ease-out ${isDark ? 'border-[#1F1F1F]' : 'border-[#E5E7EB]'}`}
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 ${isDark ? 'bg-[#000000]' : 'bg-[#FFFFFF]'}`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
            >
              About
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-[#B3B3B3]' : 'text-[#4B5563]'} text-center max-w-3xl mx-auto mb-12`}
            >
              I am a passionate Software Developer and B.Tech Computer Science student with a strong interest in building modern, scalable, and user-focused web applications. I have a solid foundation in front-end and back-end technologies and enjoy turning ideas into practical digital solutions. Through academic learning and hands-on projects, I continuously work on improving my problem-solving skills, code quality, and understanding of real-world software development. I am eager to learn, grow, and contribute to meaningful projects as a developer.
            </motion.p>
            
            <div className="text-center mt-12">
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/tanya resume.pdf';
                  link.download = 'tanya resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className={`ui-btn inline-block border px-8 py-3 transition-all duration-300 ease-out ${isDark ? 'border-[#1F1F1F]' : 'border-[#E5E7EB]'}`}
              >
                📄 Download Resume
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 ${isDark ? 'bg-[#000000]' : 'bg-[#FFFFFF]'}`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
            >
              Skills
            </motion.h2>
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={fadeInUp}
                  className={`border ${isDark ? 'border-[#1F1F1F] bg-[#000000] hover:border-[#D1D5DB]' : 'border-[#E5E7EB] bg-[#FFFFFF] hover:border-[#D1D5DB]'} px-4 py-3 text-center transition-colors duration-300`}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 ${isDark ? 'bg-[#000000]' : 'bg-[#FFFFFF]'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
            >
              Projects
            </motion.h2>
            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={fadeInUp}
                  className={`project-card border ${isDark ? 'border-[#1F1F1F] bg-[#000000] hover:border-[#9CA3AF]' : 'border-[#E5E7EB] bg-[#FFFFFF] hover:border-[#D1D5DB]'} p-6 transition-all duration-300 ease-out group`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`project-card-title text-xl font-semibold ${isDark ? 'text-[#FFFFFF]' : 'text-[#111827]'} transition-colors duration-300`}>
                      {project.title}
                    </h3>
                    <span className={`project-card-secondary ${isDark ? 'text-[#B3B3B3]' : 'text-[#4B5563]'} text-sm transition-colors duration-300`}>{project.year}</span>
                  </div>
                  <p className={`project-card-secondary ${isDark ? 'text-[#B3B3B3]' : 'text-[#4B5563]'} text-sm mb-4 transition-colors duration-300`}>{project.tech}</p>
                  <p className={`project-card-secondary ${isDark ? 'text-[#B3B3B3]' : 'text-[#4B5563]'} leading-relaxed mb-4 transition-colors duration-300`}>{project.description}</p>
                  <div className="text-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`ui-btn inline-flex items-center px-4 py-2 rounded border transition-all duration-300 ease-out ${isDark ? 'border-[#1F1F1F]' : 'border-[#E5E7EB]'} text-sm`}
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
      <section id="github" className={`py-20 px-6 ${isDark ? 'bg-[#000000]' : 'bg-[#FFFFFF]'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
            >
              GitHub Activity
            </motion.h2>
            
            {/* Contribution Graph */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h3 className={`text-2xl font-semibold mb-8 text-center ${isDark ? 'text-[#FFFFFF]' : 'text-[#111827]'}`}>📊 𝐂𝐨𝐧𝐭𝐫𝐢𝐛𝐮𝐭𝐢𝐨𝐧 𝐆𝐫𝐚𝐩𝐡</h3>
              <div className="flex justify-center mb-8">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  src={isDark ? "https://github-readme-activity-graph.vercel.app/graph?username=Tanupanchal26&bg_color=000000&color=FFFFFF&line=39FF14&point=FFFFFF&area_color=9333EA&hide_border=true&title_color=FFFFFF" : "https://github-readme-activity-graph.vercel.app/graph?username=Tanupanchal26&bg_color=FFFFFF&color=000000&line=2ECC71&point=000000&area_color=9333EA&hide_border=true&title_color=000000"}
                  alt="Contribution Graph" 
                  className={`${isDark ? 'border-2 border-black' : 'border border-gray-300'} rounded transition-all duration-300 w-full max-w-5xl h-auto cursor-pointer`}
                />
              </div>
              <div className="flex justify-center">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  src="https://raw.githubusercontent.com/Tanupanchal26/Tanupanchal26/output/pacman-contribution-graph-dark.svg"
                  alt="Pacman Contribution Graph" 
                  className={`${isDark ? 'border-2 border-black' : 'border border-gray-300'} rounded transition-all duration-300 w-full max-w-5xl h-auto cursor-pointer`}
                />
              </div>
            </motion.div>

            {/* GitHub Analytics */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h3 className={`text-2xl font-semibold mb-8 text-center ${isDark ? 'text-[#FFFFFF]' : 'text-[#111827]'}`}>📈 𝐆𝐢𝐭𝐇𝐮𝐛 𝐀𝐧𝐚𝐥𝐲𝐭𝐢𝐜𝐬</h3>
              
              <div className="flex justify-center mb-8">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  src={isDark ? "https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Tanupanchal26&theme=tokyonight" : "https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Tanupanchal26&theme=default"}
                  alt="Profile Details" 
                  className={`${isDark ? 'border-2 border-black' : 'border border-gray-300'} rounded transition-all duration-300 w-full max-w-3xl cursor-pointer`}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-x-48 gap-y-6 mb-8 max-w-4xl mx-auto">
                <div className="flex justify-center">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={isDark ? "https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=Tanupanchal26&theme=tokyonight" : "https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=Tanupanchal26&theme=default"}
                    alt="Repos per Language" 
                    className={`${isDark ? 'border-2 border-black' : 'border border-gray-300'} rounded transition-all duration-300 w-full cursor-pointer`}
                  />
                </div>
                <div className="flex justify-center">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={isDark ? "https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Tanupanchal26&theme=tokyonight" : "https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Tanupanchal26&theme=default"}
                    alt="Most Commit Language" 
                    className={`${isDark ? 'border-2 border-black' : 'border border-gray-300'} rounded transition-all duration-300 w-full cursor-pointer`}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-x-48 gap-y-6 max-w-4xl mx-auto">
                <div className="flex justify-center">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={isDark ? "https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Tanupanchal26&theme=tokyonight" : "https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Tanupanchal26&theme=default"}
                    alt="Stats" 
                    className={`${isDark ? 'border-2 border-black' : 'border border-gray-300'} rounded transition-all duration-300 w-full cursor-pointer`}
                  />
                </div>
                <div className="flex justify-center">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={isDark ? "https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=Tanupanchal26&theme=tokyonight&utcOffset=5.5" : "https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=Tanupanchal26&theme=default&utcOffset=5.5"}
                    alt="Productive Time" 
                    className={`${isDark ? 'border-2 border-black' : 'border border-gray-300'} rounded transition-all duration-300 w-full cursor-pointer`}
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            >
              {/* GitHub Stats Cards */}
              <motion.div
                variants={fadeInUp}
                className={`border ${isDark ? 'border-[#1F1F1F] bg-[#000000] hover:border-[#9CA3AF]' : 'border-[#E5E7EB] bg-[#FFFFFF] hover:border-[#D1D5DB]'} p-6 text-center transition-all duration-300`}
              >
                <h3 className="text-2xl font-bold text-[#2ECC71] mb-2">15+</h3>
                <p className={`${isDark ? 'text-[#B3B3B3]' : 'text-[#4B5563]'}`}>Public Repositories</p>
              </motion.div>
              
              <motion.div
                variants={fadeInUp}
                className={`border ${isDark ? 'border-[#1F1F1F] bg-[#000000] hover:border-[#9CA3AF]' : 'border-[#E5E7EB] bg-[#FFFFFF] hover:border-[#D1D5DB]'} p-6 text-center transition-all duration-300`}
              >
                <h3 className="text-2xl font-bold text-[#2ECC71] mb-2">JavaScript</h3>
                <p className={`${isDark ? 'text-[#B3B3B3]' : 'text-[#4B5563]'}`}>Primary Language</p>
              </motion.div>
              
              <motion.div
                variants={fadeInUp}
                className={`border ${isDark ? 'border-[#1F1F1F] bg-[#000000] hover:border-[#9CA3AF]' : 'border-[#E5E7EB] bg-[#FFFFFF] hover:border-[#D1D5DB]'} p-6 text-center transition-all duration-300`}
              >
                <h3 className="text-2xl font-bold text-[#2ECC71] mb-2">Active</h3>
                <p className={`${isDark ? 'text-[#B3B3B3]' : 'text-[#4B5563]'}`}>Developer Status</p>
              </motion.div>
            </motion.div>

{/* GitHub Profile Link */}
            <motion.div variants={fadeInUp} className="text-center">
              <motion.a
                href="https://github.com/Tanupanchal26/Tanupanchal26.git"
                target="_blank"
                rel="noopener noreferrer"
                className={`ui-btn inline-flex items-center border px-8 py-3 transition-all duration-300 ease-out ${isDark ? 'border-[#1F1F1F]' : 'border-[#E5E7EB]'}`}
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
      <section id="certificates" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
            >
              Certificates
            </motion.h2>
            
            <motion.div 
              variants={staggerContainer}
              className="space-y-4 max-w-3xl mx-auto"
            >
              {/* Deloitte Certificate */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className={`flex items-center justify-between p-4 border ${isDark ? 'border-gray-600' : 'border-gray-300'} rounded transition-all duration-300`}
              >
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technology Job Simulation</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mb-1`}>Deloitte Australia</p>
                  <span className={`${isDark ? 'text-gray-500' : 'text-gray-500'} text-xs`}>2025</span>
                </div>
                <a
                  href="https://res.cloudinary.com/dazqanb4h/image/upload/v1771257749/DELOITTE_b2xpfz.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ui-btn ml-6 inline-flex items-center px-4 py-2 rounded border transition-all duration-300 ease-out ${isDark ? 'border-gray-600' : 'border-gray-300'} text-sm`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-sm">View</span>
                </a>
              </motion.div>

              {/* BCG Certificate */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className={`flex items-center justify-between p-4 border ${isDark ? 'border-gray-600' : 'border-gray-300'} rounded transition-all duration-300`}
              >
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>GenAI Job Simulation</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mb-1`}>BCG</p>
                  <span className={`${isDark ? 'text-gray-500' : 'text-gray-500'} text-xs`}>2025</span>
                </div>
                <a
                  href="https://res.cloudinary.com/dazqanb4h/image/upload/v1771258036/BCG_rjnby0.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ui-btn ml-6 inline-flex items-center px-4 py-2 rounded border transition-all duration-300 ease-out ${isDark ? 'border-gray-600' : 'border-gray-300'} text-sm`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-sm">View</span>
                </a>
              </motion.div>

              {/* Google Cloud Certificate */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className={`flex items-center justify-between p-4 border ${isDark ? 'border-gray-600' : 'border-gray-300'} rounded transition-all duration-300`}
              >
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Introduction to Generative AI Studio</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mb-1`}>Google Cloud Certified</p>
                  <span className={`${isDark ? 'text-gray-500' : 'text-gray-500'} text-xs`}>2025</span>
                </div>
                <a
                  href="https://res.cloudinary.com/dazqanb4h/image/upload/v1771257868/google_s7mgni.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ui-btn ml-6 inline-flex items-center px-4 py-2 rounded border transition-all duration-300 ease-out ${isDark ? 'border-gray-600' : 'border-gray-300'} text-sm`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-sm">View</span>
                </a>
              </motion.div>

              {/* AWS Certificate */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className={`flex items-center justify-between p-4 border ${isDark ? 'border-gray-600' : 'border-gray-300'} rounded transition-all duration-300`}
              >
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Solutions Architecture Job Simulation</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mb-1`}>AWS</p>
                  <span className={`${isDark ? 'text-gray-500' : 'text-gray-500'} text-xs`}>2025</span>
                </div>
                <a
                  href="https://res.cloudinary.com/dazqanb4h/image/upload/v1771257944/AWS_hnbxzx.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ui-btn ml-6 inline-flex items-center px-4 py-2 rounded border transition-all duration-300 ease-out ${isDark ? 'border-gray-600' : 'border-gray-300'} text-sm`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-sm">View</span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-4 text-center"
            >
              Get In Touch
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-16 text-center max-w-2xl mx-auto`}
            >
              Let's connect and discuss opportunities. I'm always open to new projects and collaborations.
            </motion.p>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Cards */}
              <motion.div variants={fadeInUp} className="space-y-6">
                <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
                
                {/* Email Card */}
                <motion.a
                  href="mailto:tanyapanchal65@gmail.com"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center p-6 border ${isDark ? 'border-gray-600' : 'border-gray-300'} rounded transition-all duration-300`}
                >
                  <div className={`w-12 h-12 rounded-full border ${isDark ? 'border-gray-600' : 'border-gray-300'} flex items-center justify-center mr-4 transition-all duration-300`}>
                    <svg className={`w-6 h-6 ${isDark ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>Email</h4>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>Contact me</p>
                  </div>
                </motion.a>

                {/* Phone Card */}
                <motion.a
                  href="tel:+919998370911"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center p-6 border ${isDark ? 'border-gray-600' : 'border-gray-300'} rounded transition-all duration-300`}
                >
                  <div className={`w-12 h-12 rounded-full border ${isDark ? 'border-gray-600' : 'border-gray-300'} flex items-center justify-center mr-4 transition-all duration-300`}>
                    <svg className={`w-6 h-6 ${isDark ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>Phone</h4>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>Call me</p>
                  </div>
                </motion.a>

                {/* GitHub Card */}
                <motion.a
                  href="https://github.com/Tanupanchal26/Tanupanchal26.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center p-6 border ${isDark ? 'border-gray-600' : 'border-gray-300'} rounded transition-all duration-300`}
                >
                  <div className={`w-12 h-12 rounded-full border ${isDark ? 'border-gray-600' : 'border-gray-300'} flex items-center justify-center mr-4 transition-all duration-300`}>
                    <svg className={`w-6 h-6 ${isDark ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>GitHub</h4>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>View projects</p>
                  </div>
                </motion.a>

                {/* LinkedIn Card */}
                <motion.a
                  href="https://www.linkedin.com/in/tanya-panchal-142192322"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center p-6 border ${isDark ? 'border-gray-600' : 'border-gray-300'} rounded transition-all duration-300`}
                >
                  <div className={`w-12 h-12 rounded-full border ${isDark ? 'border-gray-600' : 'border-gray-300'} flex items-center justify-center mr-4 transition-all duration-300`}>
                    <svg className={`w-6 h-6 ${isDark ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>LinkedIn</h4>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>Connect with me</p>
                  </div>
                </motion.a>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={fadeInUp} className="">
                <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>
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
                    
                    try {
                      const response = await fetch('/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data)
                      });
                      
                      if (response.ok) {
                        alert('Message sent successfully!');
                        (e.target as HTMLFormElement).reset();
                      } else {
                        alert('Failed to send message. Please try again.');
                      }
                    } catch (error) {
                      alert('Failed to send message. Please try again.');
                    }
                  }}
                  className="space-y-6"
                >
                  <motion.div variants={fadeInUp}>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-black'}`}>Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={`w-full bg-transparent border ${isDark ? 'border-gray-600 focus:border-white' : 'border-black focus:border-black'} rounded px-4 py-3 ${isDark ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'} focus:outline-none transition-all duration-300`}
                      placeholder="Your full name"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-black'}`}>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={`w-full bg-transparent border ${isDark ? 'border-gray-600 focus:border-white' : 'border-black focus:border-black'} rounded px-4 py-3 ${isDark ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'} focus:outline-none transition-all duration-300`}
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-black'}`}>Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className={`w-full bg-transparent border ${isDark ? 'border-gray-600 focus:border-white' : 'border-black focus:border-black'} rounded px-4 py-3 ${isDark ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'} focus:outline-none transition-all duration-300 resize-none`}
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </motion.div>
                  
                  <motion.button
                    variants={fadeInUp}
                    type="submit"
                    whileTap={{ scale: 0.98 }}
                    className={`ui-btn w-full ${isDark ? 'bg-[#111111] text-white border border-[#1F1F1F]' : 'bg-white text-[#111827] border border-[#D1D5DB]'} py-3 px-6 rounded font-medium transition-all duration-300 flex items-center justify-center group`}
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
      <footer className={`py-8 px-6 border-t ${isDark ? 'border-gray-600' : 'border-gray-300'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2026 Tanya Panchal. All rights reserved.
          </p>
        </div>
      </footer>
      </div>

      {/* Floating Go to Home Button */}
      <motion.button
        onClick={() => {
          const element = document.getElementById('hero')
          if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }}
        whileTap={{ scale: 0.95 }}
        className={`ui-btn fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-lg group ${isDark ? 'bg-[#111111] text-white border border-[#1F1F1F]' : 'bg-white text-[#111827] border border-[#D1D5DB]'}`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
        <span className="absolute top-1/2 -translate-y-1/2 right-full mr-3 bg-gray-700 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Go to Home
        </span>
      </motion.button>
    </main>
  )
}

