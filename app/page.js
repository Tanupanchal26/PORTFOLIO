import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Sidebar />
      
      <div className="pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-white">Hi, I'm<br />Software Developer</h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-light">B.Tech CSE Student | Aspiring Software Developer</p>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-100">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-12">About</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              I am a passionate Software Developer and B.Tech Computer Science student with a strong interest in building modern, scalable, and user-focused web applications. I have a solid foundation in front-end and back-end technologies and enjoy turning ideas into practical digital solutions. Through academic learning and hands-on projects, I continuously work on improving my problem-solving skills, code quality, and understanding of real-world software development. I am eager to learn, grow, and contribute to meaningful projects as a developer.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}