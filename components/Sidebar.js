'use client'

import { useState, useEffect } from 'react'
import SplashCursor from './SplashCursor'

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home')

  const menuItems = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'about', icon: '👤', label: 'About' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id)
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <SplashCursor />
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm shadow-lg z-50 transition-colors duration-300 w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 flex justify-between items-center">
          <div className="text-white font-bold text-sm xs:text-base sm:text-lg md:text-xl tracking-wider truncate max-w-[50%] sm:max-w-none">TANYA PANCHAL</div>
          <div className="flex gap-1.5 xs:gap-2 sm:gap-4 md:gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-2 xs:px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-110 flex items-center justify-center whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-white text-black shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
                title={item.label}
              >
                <span className="text-base sm:text-lg">{item.icon}</span>
                <span className="hidden sm:inline ml-1 sm:ml-2">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Sidebar
