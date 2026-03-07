// USAGE EXAMPLE - Add to your layout.tsx or page.tsx

import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* Navbar Example */}
        <nav className="border-b border-border bg-background/95 backdrop-blur">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-xl font-bold text-foreground">Tanya Panchal</h1>
            <ThemeToggle />
          </div>
        </nav>

        {/* Content with all color examples */}
        <main className="p-6">
          {/* Primary Button */}
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded hover:opacity-90">
            Primary Button
          </button>

          {/* Secondary Card */}
          <div className="bg-secondary text-secondary-foreground p-6 rounded mt-4">
            Secondary Card
          </div>

          {/* Accent Section */}
          <div className="bg-accent p-6 rounded mt-4">
            Accent Section
          </div>

          {/* Border Example */}
          <div className="border border-border p-6 rounded mt-4">
            Bordered Content
          </div>

          {/* Ring Focus */}
          <input 
            className="border border-border rounded px-4 py-2 mt-4 focus:ring-2 focus:ring-ring focus:outline-none"
            placeholder="Focus for ring color"
          />
        </main>

        {children}
      </div>
    </ThemeProvider>
  )
}
