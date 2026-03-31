import React from 'react'
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-body text-navy-400 text-sm">
          <span>© {new Date().getFullYear()}</span>
          <span className="font-display font-semibold text-cream">Khushi Gupta</span>
          <span>— All rights reserved.</span>
        </div>

        <div className="flex items-center gap-2 font-body text-navy-500 text-xs">
          <span>Built with</span>
          <FiHeart size={11} className="text-red-400" />
          <span>using React & Tailwind</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-navy-500 hover:text-cream transition-colors duration-200"
            aria-label="GitHub"
          >
            <FiGithub size={17} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-navy-500 hover:text-cream transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={17} />
          </a>
        </div>
      </div>
    </footer>
  )
}
