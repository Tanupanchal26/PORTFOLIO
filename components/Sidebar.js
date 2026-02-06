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
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm shadow-lg z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-white font-bold text-xl tracking-wider">TANYA PANCHAL</div>
          <div className="flex space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-110 ${
                  activeSection === item.id
                    ? 'bg-white text-black shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
                title={item.label}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Sidebar
