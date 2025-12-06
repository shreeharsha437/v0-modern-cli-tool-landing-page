"use client"

import { useEffect, useState } from "react"
import { Zap, Trophy, Calendar } from "lucide-react"

export default function AGENSIS2025() {
  const [showCursor, setShowCursor] = useState(true)
  const [matrixChars, setMatrixChars] = useState<string[]>([])
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({})

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedStates((prev) => ({ ...prev, [key]: true }))
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [key]: false }))
      }, 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  useEffect(() => {
    const chars = "AGENSIS2025GENAICLUB01010101".split("")
    const newMatrixChars = Array.from({ length: 100 }, () => chars[Math.floor(Math.random() * chars.length)])
    setMatrixChars(newMatrixChars)

    const interval = setInterval(() => {
      setMatrixChars((prev) => prev.map(() => chars[Math.floor(Math.random() * chars.length)]))
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  const heroAsciiText = `
   █████╗  ██████╗ ███████╗███╗   ██╗███████╗███████╗██╗███████╗
  ██╔══██╗██╔════╝ ██╔════╝████╗  ██║██╔════╝██╔════╝██║██╔════╝
  ███████║██║  ███╗█████╗  ██╔██╗ ██║█████╗  ███████╗██║███████╗
  ██╔══██║██║   ██║██╔══╝  ██║╚██╗██║██╔══╝  ╚════██║██║╚════██║
  ██║  ██║╚██████╔╝███████╗██║ ╚████║███████╗███████║██║███████║
  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝╚══════╝
  `

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-hidden relative">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-950/95 backdrop-blur-sm p-4 relative z-10 sticky top-0">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-lg">AGENSIS</span>
                <span className="text-gray-400 text-sm">2025</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8 ml-8">
              <a
                href="#schedule"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer relative group"
              >
                <span>Schedule</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a
                href="#hackathon"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer relative group"
              >
                <span>Hackathon</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a
                href="#prizes"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer relative group"
              >
                <span>Prizes</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a href="#faq" className="text-gray-400 hover:text-white transition-colors cursor-pointer relative group">
                <span>FAQ</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-gray-500 text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>LIVE</span>
            </div>

            <a
              href="https://forms.google.com/your-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative cursor-pointer"
            >
              <div className="absolute inset-0 border border-gray-600 bg-gray-900/20 transition-all duration-300 group-hover:border-white group-hover:shadow-lg group-hover:shadow-white/20"></div>
              <div className="relative border border-gray-400 bg-transparent text-white font-medium px-6 py-2 text-sm transition-all duration-300 group-hover:border-white group-hover:bg-gray-900/30 transform translate-x-0.5 translate-y-0.5 group-hover:translate-x-0 group-hover:translate-y-0">
                <span>Register</span>
              </div>
            </a>
          </div>
        </div>
      </nav>

      {/* Matrix Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-25 gap-1 h-full">
          {matrixChars.map((char, i) => (
            <div key={i} className="text-gray-500 text-xs animate-pulse">
              {char}
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-8">
              <pre className="text-white text-sm lg:text-base font-bold leading-tight inline-block whitespace-pre-wrap">
                {heroAsciiText}
              </pre>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
              Agentic AI Workshop <span className="text-gray-400">+</span>
              <br />
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Hackathon</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4">18 & 19 January 2025</p>

            <p className="text-base text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
              Join the Gen AI Club for an immersive two-day event exploring cutting-edge Agentic AI technologies,
              workflows, and automation tools. Learn from industry experts and compete in our flagship hackathon.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://forms.google.com/your-form-link"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative cursor-pointer w-full sm:w-auto"
              >
                <div className="absolute inset-0 border border-gray-600 bg-gray-900/20 transition-all duration-300 group-hover:border-white group-hover:shadow-lg group-hover:shadow-white/20"></div>
                <div className="relative border border-white bg-white text-black font-bold px-6 sm:px-10 py-4 text-base sm:text-lg transition-all duration-300 group-hover:bg-gray-100 group-hover:text-black transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 text-center">
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <span>Register Now</span>
                  </div>
                </div>
              </a>

              <a href="#schedule" className="group relative cursor-pointer w-full sm:w-auto">
                <div className="absolute inset-0 border-2 border-dashed border-gray-600 bg-gray-900/20 transition-all duration-300 group-hover:border-white group-hover:shadow-lg group-hover:shadow-white/20"></div>
                <div className="relative border-2 border-dashed border-gray-400 bg-transparent text-white font-bold px-10 py-4 text-lg transition-all duration-300 group-hover:border-white group-hover:bg-gray-900/30 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0">
                  <div className="flex items-center justify-center gap-3">
                    <span>Learn More</span>
                    <span className="text-gray-400">→</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Gen AI Club Section */}
      <section className="px-6 py-16 lg:px-12 border-t border-gray-800" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">About Gen AI Club</h2>
            <div className="max-w-3xl mx-auto space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                The Gen AI Club is a community of innovators, researchers, and developers passionate about advancing
                Artificial Intelligence. We're dedicated to exploring the latest AI technologies and fostering
                collaboration among AI enthusiasts.
              </p>
              <p>
                A.G.E.N.E.S.I.S 2025 represents our flagship event, bringing together talented individuals to learn,
                innovate, and compete in the rapidly evolving world of Agentic AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Schedule Section */}
      <section className="px-6 py-16 lg:px-12 border-t border-gray-800" id="schedule">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Event Schedule</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Day 1 */}
            <div className="bg-gray-950 border border-gray-800 p-8 hover:border-gray-600 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-white" />
                <h3 className="text-2xl font-bold">Day 1</h3>
              </div>
              <p className="text-gray-400 mb-4">18th January 2025</p>
              <div className="bg-black p-4 border border-gray-800">
                <p className="text-white font-semibold mb-2">Agentic AI Workshop</p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Fundamentals of Agentic AI</li>
                  <li>• AI Workflows & Automation</li>
                  <li>• Tools & Technologies</li>
                  <li>• Live Demonstrations</li>
                </ul>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-gray-950 border border-gray-800 p-8 hover:border-gray-600 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-6 h-6 text-white" />
                <h3 className="text-2xl font-bold">Day 2</h3>
              </div>
              <p className="text-gray-400 mb-4">19th January 2025</p>
              <div className="bg-black p-4 border border-gray-800">
                <p className="text-white font-semibold mb-2">A.G.E.N.E.S.I.S Hackathon</p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Problem Statement Release</li>
                  <li>• Team-based Competition</li>
                  <li>• 24-Hour Build Sprint</li>
                  <li>• Prize Announcements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathon Details Section */}
      <section className="px-6 py-16 lg:px-12 border-t border-gray-800" id="hackathon">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Hackathon Information</h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {/* Registration Fee */}
            <div className="bg-gray-950 border border-gray-800 p-6">
              <div className="text-4xl font-bold text-white mb-2">₹200</div>
              <p className="text-gray-400">Per Team</p>
            </div>

            {/* Team Limit */}
            <div className="bg-gray-950 border border-gray-800 p-6">
              <div className="text-4xl font-bold text-white mb-2">50</div>
              <p className="text-gray-400">Teams Maximum</p>
            </div>

            {/* Eligibility */}
            <div className="bg-gray-950 border border-gray-800 p-6">
              <div className="text-xl font-bold text-white mb-2">Open to All</div>
              <p className="text-gray-400">No Restrictions</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12 bg-gray-950 border border-gray-800 p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Zap className="w-6 h-6" />
              Key Details
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                <span className="text-white font-semibold">Problem Statement:</span> Will be announced immediately after
                the workshop concludes on Day 1.
              </p>
              <p>
                <span className="text-white font-semibold">Eligibility:</span> Open to all students and professionals.
              </p>
              <p>
                <span className="text-white font-semibold">Team Structure:</span> Form teams and compete to solve the
                problem using Agentic AI technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="px-6 py-16 lg:px-12 border-t border-gray-800" id="prizes">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Prizes & Recognition</h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {/* 1st Place */}
            <div className="relative">
              <div className="bg-gradient-to-b from-yellow-500/20 to-gray-950 border border-yellow-600/50 p-8 text-center">
                <div className="text-6xl font-bold text-yellow-400 mb-4">🥇</div>
                <h3 className="text-2xl font-bold mb-2">1st Place</h3>
                <p className="text-gray-400 text-sm">Cash Prize + Certificate</p>
              </div>
            </div>

            {/* 2nd Place */}
            <div>
              <div className="bg-gradient-to-b from-gray-500/20 to-gray-950 border border-gray-600/50 p-8 text-center">
                <div className="text-6xl font-bold text-gray-300 mb-4">🥈</div>
                <h3 className="text-2xl font-bold mb-2">2nd Place</h3>
                <p className="text-gray-400 text-sm">Cash Prize + Certificate</p>
              </div>
            </div>

            {/* 3rd Place */}
            <div>
              <div className="bg-gradient-to-b from-orange-500/20 to-gray-950 border border-orange-600/50 p-8 text-center">
                <div className="text-6xl font-bold text-orange-400 mb-4">🥉</div>
                <h3 className="text-2xl font-bold mb-2">3rd Place</h3>
                <p className="text-gray-400 text-sm">Cash Prize + Certificate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16 lg:px-12 border-t border-gray-800" id="faq">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-950 border border-gray-800 p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">What is the team size for the hackathon?</h3>
              <p className="text-gray-400">
                Teams can consist of 2-4 members. Each team member must register separately on the form.
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-800 p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">What is the registration fee?</h3>
              <p className="text-gray-400">
                The registration fee is ₹200 per team. Payment details will be shared upon registration.
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-800 p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">When will the problem statement be revealed?</h3>
              <p className="text-gray-400">
                The problem statement will be announced immediately after the workshop concludes on Day 1 (18th
                January).
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-800 p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">Do I need prior AI knowledge?</h3>
              <p className="text-gray-400">
                No prior experience is required. The workshop on Day 1 will cover all fundamentals. However, basic
                programming knowledge is recommended.
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-800 p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">What are the judging criteria?</h3>
              <p className="text-gray-400">
                Projects will be evaluated on innovation, technical implementation, use of Agentic AI concepts, and
                presentation quality.
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-800 p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">Is this event open to non-BMSITM students?</h3>
              <p className="text-gray-400">
                Yes! The event is open to all students and professionals. Everyone is welcome to participate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950/50 px-6 py-12 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-white font-bold text-lg">AGENSIS</span>
                <span className="text-gray-400 text-sm">2025</span>
              </div>
              <p className="text-gray-400 text-sm">
                A flagship event by the Gen AI Club exploring Agentic AI technologies and innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#schedule" className="hover:text-white transition-colors">
                    Schedule
                  </a>
                </li>
                <li>
                  <a href="#hackathon" className="hover:text-white transition-colors">
                    Hackathon Details
                  </a>
                </li>
                <li>
                  <a href="#prizes" className="hover:text-white transition-colors">
                    Prizes
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
              <p className="text-gray-400 text-sm mb-2">Gen AI Club, BMSITM</p>
              <p className="text-gray-400 text-sm">For queries and support</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
              <p>&copy; 2025 Gen AI Club. All rights reserved.</p>
              <p className="mt-4 md:mt-0">BMSITM | A.G.E.N.E.S.I.S 2025</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
