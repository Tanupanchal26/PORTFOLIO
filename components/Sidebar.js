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
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-16 bg-white shadow-lg z-50 flex-col items-center py-8">
        <div className="space-y-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 ${
                activeSection === item.id
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              title={item.label}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </nav>
      
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 flex justify-around items-center py-3">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
              activeSection === item.id
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600'
            }`}
            title={item.label}
          >
            {item.icon}
          </button>
        ))}
      </nav>
    </>
  )
}

export default Sidebar
