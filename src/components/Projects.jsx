import React, { useEffect, useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { MdHotel, MdLocalHospital } from 'react-icons/md'

const projects = [
  {
    number: '01',
    icon: MdHotel,
    title: 'Hotel Management System',
    description:
      'A comprehensive system designed to manage hotel bookings, customer data, and room availability efficiently. Built to simulate real-world hospitality operations.',
    features: ['Booking System', 'Customer Records', 'Billing & Invoicing'],
    tags: ['C++', 'OOP', 'File Handling'],
    github: 'https://github.com/',
    color: 'from-amber-50 to-orange-50',
    border: 'border-orange-100',
    accent: 'text-orange-500',
    iconBg: 'bg-orange-100',
  },
  {
    number: '02',
    icon: MdLocalHospital,
    title: 'Campus Healthcare System',
    description:
      'A web application that digitalizes student healthcare services on campus, enabling appointment scheduling and medical record management.',
    features: ['Appointment Booking', 'Records Management', 'Student Portal'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/',
    color: 'from-teal-50 to-cyan-50',
    border: 'border-teal-100',
    accent: 'text-teal-500',
    iconBg: 'bg-teal-100',
  },
]

export default function Projects() {
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
    <section id="projects" className="bg-white" ref={ref}>
      <div className="section-padding max-w-6xl mx-auto">
        {/* Header */}
        <div className="fade-up flex items-center gap-4 mb-14">
          <span className="font-mono text-navy-400 text-sm tracking-widest uppercase">04.</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-900">Projects</h2>
          <div className="flex-1 h-px bg-navy-100 ml-2" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(({ number, icon: Icon, title, description, features, tags, github, color, border, accent, iconBg }, i) => (
            <div
              key={title}
              className={`fade-up group relative rounded-2xl border ${border} bg-gradient-to-br ${color} p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Project number */}
              <span className={`absolute top-6 right-8 font-mono text-4xl font-bold ${accent} opacity-15 select-none`}>
                {number}
              </span>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-5`}>
                <Icon className={`${accent} text-2xl`} />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">{title}</h3>

              {/* Description */}
              <p className="font-body text-navy-600 text-sm leading-relaxed mb-5">{description}</p>

              {/* Features */}
              <div className="mb-5">
                <p className="font-body text-navy-400 text-xs uppercase tracking-widest mb-2">Features</p>
                <ul className="space-y-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-body text-navy-700 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full ${accent.replace('text-', 'bg-')} flex-shrink-0`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-navy-500 bg-white/70 border border-navy-100 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* GitHub button */}
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 font-body text-sm font-medium ${accent} border ${border} bg-white/60 hover:bg-white px-4 py-2.5 rounded-full transition-all duration-200 hover:shadow-sm`}
              >
                <FiGithub size={15} />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
