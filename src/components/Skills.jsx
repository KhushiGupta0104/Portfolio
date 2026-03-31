import React, { useEffect, useRef } from 'react'
import {
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiGit,
} from 'react-icons/si'
import { FiCode, FiGlobe } from 'react-icons/fi'

const skills = [
  {
    icon: SiCplusplus,
    name: 'C++',
    level: 'Proficient',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: SiJavascript,
    name: 'JavaScript',
    level: 'Intermediate',
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
    border: 'border-yellow-100',
  },
  {
    icon: SiReact,
    name: 'React',
    level: 'Learning',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
  {
    icon: SiHtml5,
    name: 'HTML',
    level: 'Proficient',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
  },
  {
    icon: FiGlobe,
    name: 'CSS',
    level: 'Intermediate',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
  },
  {
    icon: SiGit,
    name: 'Git',
    level: 'Intermediate',
    color: 'text-red-600',
    bg: 'bg-red-50',
    border: 'border-red-100',
  },
  {
    icon: FiCode,
    name: 'DSA',
    level: 'Practicing',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
]

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="bg-cream" ref={ref}>
      <div className="section-padding max-w-6xl mx-auto">
        {/* Header */}
        <div className="fade-up flex items-center gap-4 mb-14">
          <span className="font-mono text-navy-400 text-sm tracking-widest uppercase">03.</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-900">Skills</h2>
          <div className="flex-1 h-px bg-navy-100 ml-2" />
        </div>

        <div className="fade-up mb-8" style={{ transitionDelay: '0.05s' }}>
          <p className="font-body text-navy-500 text-base">
            Technologies I've been working with recently:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map(({ icon: Icon, name, level, color, bg, border }, i) => (
            <div
              key={name}
              className={`fade-up group p-5 rounded-xl border ${border} ${bg} hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-default`}
              style={{ transitionDelay: `${0.05 * i + 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className={`${color} text-2xl flex-shrink-0`} />
                <span className="font-body font-semibold text-navy-900 text-sm">{name}</span>
              </div>
              <span className={`font-mono text-xs ${color} opacity-70`}>{level}</span>
            </div>
          ))}
        </div>

        {/* Currently learning note */}
        <div className="fade-up mt-10 p-5 rounded-xl border border-navy-100 bg-white flex items-start gap-3" style={{ transitionDelay: '0.5s' }}>
          <span className="text-navy-400 font-mono text-lg leading-none mt-0.5">→</span>
          <p className="font-body text-navy-500 text-sm">
            Currently deepening my understanding of{' '}
            <span className="font-medium text-navy-700">React</span>,{' '}
            <span className="font-medium text-navy-700">Node.js</span>, and competitive programming
            with <span className="font-medium text-navy-700">C++</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
