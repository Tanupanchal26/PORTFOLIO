'use client'

import { useState, useEffect } from 'react'

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
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-blackSoft/90 backdrop-blur-sm shadow-lg z-40 flex justify-center items-center py-3 transition-colors duration-300">
        <div className="flex space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 relative z-50 ${
                activeSection === item.id
                  ? 'bg-purplePrimary text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              title={item.label}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Sidebar
