import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Sidebar />
      
      <div className="w-full">
        <section id="home" className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 pt-16 sm:pt-20">
          <div className="text-center max-w-4xl mx-auto w-full">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 tracking-tight text-white leading-tight px-2">Hi, I'm<br />Software Developer</h1>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light px-2">B.Tech CSE Student | Aspiring Software Developer</p>
          </div>
        </section>

        <section id="about" className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 bg-gray-100">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 md:mb-12 text-center px-2">About</h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center px-2">
              I am a passionate Software Developer and B.Tech Computer Science student with a strong interest in building modern, scalable, and user-focused web applications. I have a solid foundation in front-end and back-end technologies and enjoy turning ideas into practical digital solutions. Through academic learning and hands-on projects, I continuously work on improving my problem-solving skills, code quality, and understanding of real-world software development. I am eager to learn, grow, and contribute to meaningful projects as a developer.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}