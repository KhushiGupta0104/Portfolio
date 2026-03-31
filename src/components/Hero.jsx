import React from 'react'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-cream"
    >
      {/* Background geometric decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-navy-50 opacity-60" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-sand opacity-80" />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-navy-300 opacity-40" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-navy-400 opacity-30" />
        {/* Decorative line */}
        <div className="absolute top-0 left-24 w-px h-40 bg-gradient-to-b from-transparent to-navy-200" />
      </div>

      <div className="section-padding max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-2xl">
          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-navy-400" />
            <span className="font-mono text-navy-500 text-sm tracking-widest uppercase">
              Portfolio
            </span>
          </div>

          {/* Name */}
          <h1 className="font-display text-5xl md:text-7xl font-bold text-navy-950 leading-tight mb-4">
            Khushi
            <br />
            <span className="text-navy-600 italic font-normal">Gupta</span>
          </h1>

          {/* Title */}
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-sm text-navy-500 bg-navy-50 border border-navy-100 px-3 py-1.5 rounded-full">
              Aspiring Software Developer
            </span>
            <span className="font-mono text-sm text-navy-400">BTech 2nd Year</span>
          </div>

          {/* Tagline */}
          <p className="font-body text-navy-600 text-lg leading-relaxed mb-10 max-w-xl">
            Passionate about building real-world projects and solving problems using code.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-cream font-body font-medium text-sm px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-navy-200 hover:-translate-y-0.5"
            >
              View Projects
              <FiArrowDown className="group-hover:translate-y-0.5 transition-transform duration-200" />
            </button>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center w-11 h-11 rounded-full border border-navy-200 text-navy-600 hover:bg-navy-800 hover:text-cream hover:border-navy-800 transition-all duration-200"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center w-11 h-11 rounded-full border border-navy-200 text-navy-600 hover:bg-navy-800 hover:text-cream hover:border-navy-800 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <div className="w-px h-8 bg-navy-400" />
        <FiArrowDown className="text-navy-400" size={14} />
      </div>
    </section>
  )
}
