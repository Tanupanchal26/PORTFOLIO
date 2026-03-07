'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface GitHubUser {
  login: string
  avatar_url: string
  followers: number
  following: number
  public_repos: number
  public_gists: number
}

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
}

interface GitHubEvent {
  id: string
  type: string
  repo: { name: string }
  created_at: string
  payload: any
}

export default function GitHubSection({ username, isDark }: { username: string; isDark: boolean }) {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [events, setEvents] = useState<GitHubEvent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [userRes, reposRes, eventsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`),
          fetch(`https://api.github.com/users/${username}/events/public?per_page=10`)
        ])

        const userData = await userRes.json()
        const reposData = await reposRes.json()
        const eventsData = await eventsRes.json()

        setUser(userData)
        setRepos(reposData)
        setEvents(eventsData)
      } catch (error) {
        console.error('Error fetching GitHub data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [username])

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

  if (loading) {
    return (
      <section id="github" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">GitHub Activity</h2>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        </div>
      </section>
    )
  }

  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)
  const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0)

  return (
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
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-white"
          >
            GitHub Activity
          </motion.h2>

          {/* Stats Cards */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className={`border ${isDark ? 'border-gray-600' : 'border-gray-300'} p-6 text-center rounded-lg`}>
              <h3 className="text-3xl font-bold text-white mb-2">{user?.public_repos || 0}</h3>
              <p className="text-white text-sm">Repositories</p>
            </div>
            <div className={`border ${isDark ? 'border-gray-600' : 'border-gray-300'} p-6 text-center rounded-lg`}>
              <h3 className="text-3xl font-bold text-white mb-2">{totalStars}</h3>
              <p className="text-white text-sm">Total Stars</p>
            </div>
            <div className={`border ${isDark ? 'border-gray-600' : 'border-gray-300'} p-6 text-center rounded-lg`}>
              <h3 className="text-3xl font-bold text-white mb-2">{user?.followers || 0}</h3>
              <p className="text-white text-sm">Followers</p>
            </div>
            <div className={`border ${isDark ? 'border-gray-600' : 'border-gray-300'} p-6 text-center rounded-lg`}>
              <h3 className="text-3xl font-bold text-white mb-2">{totalForks}</h3>
              <p className="text-white text-sm">Total Forks</p>
            </div>
          </motion.div>

          {/* Contribution Graph */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">📊 Contribution Graph</h3>
            <div className="flex justify-center">
              <img 
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=0d1117&color=c9d1d9&line=3fb950&point=39d353&area=true&hide_border=false&border_color=30363d&area_color=0e4429`}
                alt="Contribution Graph" 
                className="border border-[#30363d] rounded-lg w-full max-w-5xl"
              />
            </div>
          </motion.div>

          {/* Top Repositories */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">📦 Top Repositories</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border ${isDark ? 'border-gray-600 hover:border-white' : 'border-gray-300 hover:border-black'} p-6 rounded-lg transition-all duration-300 group`}
                >
                  <h4 className="text-lg font-semibold mb-2 text-green-500 group-hover:text-green-400">
                    {repo.name}
                  </h4>
                  <p className="text-white text-sm mb-4 line-clamp-2">
                    {repo.description || 'No description'}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      {repo.language && (
                        <span className="text-white">
                          {repo.language}
                        </span>
                      )}
                      <span className="text-white">
                        ⭐ {repo.stargazers_count}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">⚡ Recent Activity</h3>
            <div className="space-y-4 max-w-3xl mx-auto">
              {events.slice(0, 5).map((event) => (
                <div
                  key={event.id}
                  className={`border ${isDark ? 'border-gray-600' : 'border-gray-300'} p-4 rounded-lg`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-white">
                        {event.type.replace('Event', '')} in {event.repo.name}
                      </p>
                      <p className="text-sm text-white mt-1">
                        {new Date(event.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* GitHub Stats Images */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="flex justify-center">
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=0d1117&text_color=c9d1d9&icon_color=58a6ff&title_color=f0f6fc&border_color=30363d`}
                alt="GitHub Stats" 
                className={`border ${isDark ? 'border-gray-600' : 'border-gray-300'} rounded-lg`}
              />
            </div>
            <div className="flex justify-center">
              <img 
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&bg_color=0d1117&text_color=c9d1d9&title_color=f0f6fc&border_color=30363d`}
                alt="Top Languages" 
                className={`border ${isDark ? 'border-gray-600' : 'border-gray-300'} rounded-lg`}
              />
            </div>
          </motion.div>

          {/* View Profile Button */}
          <motion.div variants={fadeInUp} className="text-center">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center border ${isDark ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'} px-8 py-3 transition-all duration-300`}
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Full GitHub Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
