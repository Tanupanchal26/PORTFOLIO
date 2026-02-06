'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import SplashCursor from '../components/SplashCursor'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    setMounted(true)
    
    // Handle scroll for active section
    const handleScroll = () => {
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
  }, [])

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
      year: '2024', 
      tech: 'React.js, Node.js, MongoDB, Express.js',
      description: 'Comprehensive platform for job and course listings with advanced search and filtering capabilities, real-time updates, and responsive design.'
    },
    {
      title: 'HerRides – Women\'s Transportation UI',
      year: '2024',
      tech: 'Next.js, Tailwind CSS, Figma',
      description: 'Safety-oriented transportation app UI focusing on user research, wireframes, prototypes, and responsive implementation for women\'s safety.'
    },
    {
      title: 'Portfolio Website',
      year: '2024',
      tech: 'React.js, CSS, JavaScript',
      description: 'Personal portfolio website showcasing projects and skills with smooth animations, responsive design, and modern UI/UX principles.'
    }
  ]

  return (
    <main className="min-h-screen">
      <SplashCursor />
      {/* Fixed Vertical Sidebar */}
      <motion.nav 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed left-0 top-0 h-full w-16 bg-black z-50 flex flex-col items-center py-8 shadow-2xl"
      >
        {/* Name - Vertical */}
        <div className="mb-16 mt-8">
          <div className="transform -rotate-90 origin-center whitespace-nowrap text-xs text-gray-500 font-medium tracking-wider">
            TANYA PANCHAL
          </div>
        </div>

        {/* Navigation Icons */}
        <div className="flex flex-col space-y-8 flex-1 justify-center">
          {[
            { id: 'hero', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', label: 'Home' },
            { id: 'about', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', label: 'About' },
            { id: 'skills', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Skills' },
            { id: 'projects', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', label: 'Projects' },
            { id: 'github', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', label: 'GitHub', fill: true },
            { id: 'certificates', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z', label: 'Certificates' },
            { id: 'contact', icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Contact' }
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => {
                const element = document.getElementById(item.id)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group relative ${
                activeSection === item.id 
                  ? 'bg-green-500/20 shadow-lg shadow-green-500/20' 
                  : 'hover:bg-gray-900 hover:shadow-lg'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className={`w-5 h-5 transition-colors duration-300 ${
                  activeSection === item.id ? 'text-green-400' : 'text-gray-500 group-hover:text-gray-300'
                }`}
                fill={item.fill ? "currentColor" : "none"}
                stroke={item.fill ? "none" : "currentColor"}
                viewBox="0 0 24 24"
                strokeWidth={item.fill ? 0 : 1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                {item.label}
              </div>
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Main Content with Left Margin */}
      <div className="ml-16">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-6">
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
            Tanya Panchal
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 mb-8"
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
              className="inline-block border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
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
              className="text-lg md:text-xl leading-relaxed text-gray-400 text-center max-w-3xl mx-auto mb-12"
            >
              Passionate and driven B.Tech 2nd-year student with a keen interest in Software Development, 
              UI/UX design, and competitive programming. Strong foundation in front-end and back-end technologies, 
              version control systems, and problem-solving. Eager to learn, innovate, and apply my skills to 
              real-world projects while continuously improving as a developer.
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
                className="inline-block border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
              >
                📄 Download Resume
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-900/20">
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
                  className="border border-gray-600 px-4 py-3 text-center hover:border-white transition-colors duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
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
                  className="border border-gray-600 p-6 hover:border-white transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-gray-400 text-sm">{project.year}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{project.tech}</p>
                  <p className="text-gray-400 leading-relaxed">{project.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* GitHub Section */}
      <section id="github" className="py-20 px-6">
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
              <h3 className="text-2xl font-semibold mb-8 text-center">📊 𝐂𝐨𝐧𝐭𝐫𝐢𝐛𝐮𝐭𝐢𝐨𝐧 𝐆𝐫𝐚𝐩𝐡</h3>
              <div className="flex justify-center">
                <a href="https://github.com/Tanupanchal26" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://github-readme-activity-graph.vercel.app/graph?username=Tanupanchal26&bg_color=000000&color=c9d1d9&line=22c55e&point=ffffff&area=true&hide_border=false&border_color=30363d" 
                    alt="Contribution Graph" 
                    className="hover:scale-105 transition-all duration-300 w-full max-w-5xl"
                  />
                </a>
              </div>
            </motion.div>

            {/* GitHub Analytics */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 text-center">📈 𝐆𝐢𝐭𝐇𝐮𝐛 𝐀𝐧𝐚𝐥𝐲𝐭𝐢𝐜𝐬</h3>
              
              <div className="mb-8">
                <div className="flex justify-center">
                  <a href="https://github.com/Tanupanchal26" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Tanupanchal26&theme=github_dark" 
                      alt="Profile Details" 
                      className="hover:scale-105 transition-all duration-300 w-full max-w-4xl"
                    />
                  </a>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex justify-center">
                  <a href="https://github.com/Tanupanchal26" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=Tanupanchal26&theme=github_dark" 
                      alt="Repos per Language" 
                      className="hover:scale-105 transition-all duration-300"
                    />
                  </a>
                </div>
                <div className="flex justify-center">
                  <a href="https://github.com/Tanupanchal26" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Tanupanchal26&theme=github_dark" 
                      alt="Most Commit Language" 
                      className="hover:scale-105 transition-all duration-300"
                    />
                  </a>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex justify-center">
                  <a href="https://github.com/Tanupanchal26" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Tanupanchal26&theme=github_dark" 
                      alt="Stats" 
                      className="hover:scale-105 transition-all duration-300"
                    />
                  </a>
                </div>
                <div className="flex justify-center">
                  <a href="https://github.com/Tanupanchal26" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=Tanupanchal26&theme=github_dark&utcOffset=5.5" 
                      alt="Productive Time" 
                      className="hover:scale-105 transition-all duration-300"
                    />
                  </a>
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
                className="border border-gray-600 p-6 text-center hover:border-white transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-green-400 mb-2">15+</h3>
                <p className="text-gray-400">Public Repositories</p>
              </motion.div>
              
              <motion.div
                variants={fadeInUp}
                className="border border-gray-600 p-6 text-center hover:border-white transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-green-400 mb-2">JavaScript</h3>
                <p className="text-gray-400">Primary Language</p>
              </motion.div>
              
              <motion.div
                variants={fadeInUp}
                className="border border-gray-600 p-6 text-center hover:border-white transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-green-400 mb-2">Active</h3>
                <p className="text-gray-400">Developer Status</p>
              </motion.div>
            </motion.div>

            {/* Featured Repositories */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 text-center">Featured Repositories</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.a
                  href="https://github.com/Tanupanchal26/Tanupanchal26.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  className="border border-gray-600 p-6 hover:border-white transition-all duration-300 group block"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold group-hover:text-gray-300 transition-colors">Portfolio</h4>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <p className="text-gray-400 mb-4">Personal portfolio website built with React.js and modern web technologies</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-800 text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-gray-800 text-xs rounded">Next.js</span>
                    <span className="px-2 py-1 bg-gray-800 text-xs rounded">Tailwind CSS</span>
                  </div>
                </motion.a>
                
                <motion.div
                  variants={fadeInUp}
                  className="border border-gray-600 p-6 hover:border-white transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold group-hover:text-gray-300 transition-colors">More Projects</h4>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <p className="text-gray-400 mb-4">Explore additional projects and contributions on my GitHub profile</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-800 text-xs rounded">JavaScript</span>
                    <span className="px-2 py-1 bg-gray-800 text-xs rounded">Python</span>
                    <span className="px-2 py-1 bg-gray-800 text-xs rounded">Java</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* GitHub Profile Link */}
            <motion.div variants={fadeInUp} className="text-center">
              <motion.a
                href="https://github.com/Tanupanchal26/Tanupanchal26.git"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
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
      <section id="certificates" className="py-20 px-6 bg-gray-900/20">
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
              className="space-y-6 max-w-4xl mx-auto"
            >
              {/* Deloitte Certificate */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-between p-6 border border-gray-600 rounded-lg hover:border-white transition-all duration-300 group"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-300 transition-colors">Technology Job Simulation</h3>
                  <p className="text-gray-400 text-sm mb-1">Deloitte Australia</p>
                  <span className="text-gray-500 text-sm">2025</span>
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
                  className="ml-6 px-4 py-2 border border-gray-600 rounded-lg hover:border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-2"
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
                className="flex items-center justify-between p-6 border border-gray-600 rounded-lg hover:border-white transition-all duration-300 group"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-300 transition-colors">GenAI Job Simulation</h3>
                  <p className="text-gray-400 text-sm mb-1">BCG</p>
                  <span className="text-gray-500 text-sm">2025</span>
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
                  className="ml-6 px-4 py-2 border border-gray-600 rounded-lg hover:border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-2"
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
                className="flex items-center justify-between p-6 border border-gray-600 rounded-lg hover:border-white transition-all duration-300 group"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-300 transition-colors">Introduction to Generative AI Studio</h3>
                  <p className="text-gray-400 text-sm mb-1">Google Cloud Certified</p>
                  <span className="text-gray-500 text-sm">2025</span>
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
                  className="ml-6 px-4 py-2 border border-gray-600 rounded-lg hover:border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-2"
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
                className="flex items-center justify-between p-6 border border-gray-600 rounded-lg hover:border-white transition-all duration-300 group"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-300 transition-colors">Solutions Architecture Job Simulation</h3>
                  <p className="text-gray-400 text-sm mb-1">AWS</p>
                  <span className="text-gray-500 text-sm">2025</span>
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
                  className="ml-6 px-4 py-2 border border-gray-600 rounded-lg hover:border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-2"
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
      <section id="contact" className="py-20 px-6 bg-gray-900/20">
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
              className="text-lg text-gray-400 mb-16 text-center max-w-2xl mx-auto"
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
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center p-6 border border-gray-600 rounded-lg hover:border-white hover:shadow-lg hover:shadow-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center mr-4 group-hover:border-white group-hover:bg-white/5 transition-all duration-300">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-gray-200 transition-colors duration-300">Email</h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Contact me</p>
                  </div>
                </motion.a>

                {/* Phone Card */}
                <motion.a
                  href="tel:+919998370911"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center p-6 border border-gray-600 rounded-lg hover:border-white hover:shadow-lg hover:shadow-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center mr-4 group-hover:border-white group-hover:bg-white/5 transition-all duration-300">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-gray-200 transition-colors duration-300">Phone</h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Call me</p>
                  </div>
                </motion.a>

                {/* GitHub Card */}
                <motion.a
                  href="https://github.com/Tanupanchal26/Tanupanchal26.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center p-6 border border-gray-600 rounded-lg hover:border-white hover:shadow-lg hover:shadow-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center mr-4 group-hover:border-white group-hover:bg-white/5 transition-all duration-300">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-gray-200 transition-colors duration-300">GitHub</h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">View projects</p>
                  </div>
                </motion.a>

                {/* LinkedIn Card */}
                <motion.a
                  href="https://www.linkedin.com/in/tanya-panchal-142192322"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center p-6 border border-gray-600 rounded-lg hover:border-white hover:shadow-lg hover:shadow-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center mr-4 group-hover:border-white group-hover:bg-white/5 transition-all duration-300">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-gray-200 transition-colors duration-300">LinkedIn</h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Connect with me</p>
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
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
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
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
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
                    className="w-full bg-white text-black py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 flex items-center justify-center group"
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
      <footer className="py-8 px-6 border-t border-gray-600">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Tanya Panchal. All rights reserved.
          </p>
        </div>
      </footer>
      
      {/* Floating Scroll to Top Button */}
      <motion.button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <svg
          className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1"
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