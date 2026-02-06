import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Sidebar />
      
      <div className="ml-0 md:ml-16">
        <section id="home" className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">Tanya Panchal</h1>
            <p className="text-2xl md:text-3xl text-gray-600 font-light">B.Tech CSE Student | Aspiring Software Developer</p>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-100">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-12">About</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Passionate and driven B.Tech 2nd-year student with a keen interest in Software Development, 
              UI/UX design, and competitive programming. Strong foundation in front-end and back-end technologies, 
              version control systems, and problem-solving.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
