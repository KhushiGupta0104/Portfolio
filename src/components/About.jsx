import React, { useEffect, useRef } from 'react'
import { FiCode, FiCpu, FiGlobe, FiSmartphone } from 'react-icons/fi'

const interests = [
  {
    icon: FiCpu,
    label: 'DSA',
    desc: 'Solving algorithmic problems with C++',
  },
  {
    icon: FiGlobe,
    label: 'Web Dev',
    desc: 'Building full-stack web applications',
  },
  {
    icon: FiSmartphone,
    label: 'App Dev',
    desc: 'Building iOS apps & exploring backend dev',
    
  },
  {
    icon: FiCode,
    label: 'New Tech',
    desc: 'Always learning the latest tools',
  },
]

export default function About() {
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
    <section id="about" className="bg-white" ref={ref}>
      <div className="section-padding max-w-6xl mx-auto">
        {/* Section header */}
        <div className="fade-up flex items-center gap-4 mb-14">
          <span className="font-mono text-navy-400 text-sm tracking-widest uppercase">02.</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-900">About Me</h2>
          <div className="flex-1 h-px bg-navy-100 ml-2" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text */}
          <div className="fade-up md:col-span-3 space-y-5" style={{ transitionDelay: '0.1s' }}>
            <p className="font-body text-navy-700 text-lg leading-relaxed">
              Hi, I'm <span className="font-semibold text-navy-900">Khushi Gupta</span> — a second-year
              BTech student with a strong curiosity for how software shapes the world around us.
            </p>
            <p className="font-body text-navy-600 leading-relaxed">
              I'm currently pursuing my undergraduate degree in Computer Science and Communication Engineering. Over the
              past year, I've been honing my skills in{' '}
              <span className="font-medium text-navy-800">Data Structures & Algorithms</span>,{' '}
              <span className="font-medium text-navy-800">Web Development</span>, and exploring new
              technologies that push the boundaries of what I can build.
            </p>
            <p className="font-body text-navy-600 leading-relaxed">
              I believe in learning by doing — every project I build teaches me something new. I enjoy
              tackling real-world problems, writing clean code, and continuously improving my craft as a
              developer.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 pt-4">
              {[
                { num: '2nd', label: 'Year BTech' },
                { num: '2+', label: 'Projects Built' },
                { num: '7+', label: 'Technologies' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="font-display text-2xl font-bold text-navy-800">{num}</div>
                  <div className="font-body text-navy-400 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Interest cards */}
          <div className="fade-up md:col-span-2 flex flex-col gap-4" style={{ transitionDelay: '0.2s' }}>
            {interests.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="group flex items-start gap-4 p-5 rounded-xl border border-navy-100 hover:border-navy-300 hover:shadow-md transition-all duration-200 bg-cream/50"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-navy-50 group-hover:bg-navy-800 flex items-center justify-center transition-colors duration-200">
                  <Icon className="text-navy-500 group-hover:text-cream transition-colors duration-200" size={18} />
                </div>
                <div>
                  <div className="font-body font-semibold text-navy-900 text-sm mb-1">{label}</div>
                  <div className="font-body text-navy-500 text-sm">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
