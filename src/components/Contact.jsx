import React, { useEffect, useRef, useState } from 'react'
import { FiSend, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', message: '' })
    }, 3500)
  }

  const inputClass =
    'w-full font-body text-sm text-navy-900 bg-cream border border-navy-200 rounded-xl px-4 py-3.5 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-navy-400 transition-all duration-200'

  return (
    <section id="contact" className="bg-navy-950 relative overflow-hidden" ref={ref}>
      {/* Decorative bg elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-navy-800 opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-navy-800 opacity-20 blur-3xl pointer-events-none" />

      <div className="section-padding max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="fade-up flex items-center gap-4 mb-14">
          <span className="font-mono text-navy-400 text-sm tracking-widest uppercase">05.</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream">Get In Touch</h2>
          <div className="flex-1 h-px bg-navy-700 ml-2" />
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left: message */}
          <div className="fade-up" style={{ transitionDelay: '0.1s' }}>
            <p className="font-body text-navy-200 text-lg leading-relaxed mb-6">
              I'm currently open to internship opportunities, collaborations, and interesting
              conversations about tech. If you'd like to connect, I'd love to hear from you!
            </p>
            <p className="font-body text-navy-400 mb-8">
              Send me a message and I'll get back to you as soon as I can.
            </p>

            {/* Social links */}
            <div className="flex flex-col gap-4">
              {[
                { icon: FiMail, label: 'khushigupta010404@email.com', href: 'mailto:khushigupta010404@email.com' },
                { icon: FiLinkedin, label: 'linkedin.com/in/khushi-gupta', href: 'https://www.linkedin.com/in/khushi-gupta-a63800254?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
                { icon: FiGithub, label: 'https://github.com/KhushiGupta0104', href: 'https://github.com/KhushiGupta0104' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 text-navy-300 hover:text-cream transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-navy-800 group-hover:bg-navy-600 flex items-center justify-center transition-colors duration-200">
                    <Icon size={16} />
                  </div>
                  <span className="font-mono text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
            {submitted ? (
              <div className="bg-navy-800 rounded-2xl border border-navy-700 p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-green-900/50 border border-green-700 flex items-center justify-center mx-auto mb-4">
                  <FiSend className="text-green-400" size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold text-cream mb-2">Message Sent!</h3>
                <p className="font-body text-navy-400 text-sm">Thanks for reaching out. I'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-body text-navy-300 text-xs uppercase tracking-widest mb-1.5 block">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="font-body text-navy-300 text-xs uppercase tracking-widest mb-1.5 block">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="font-body text-navy-300 text-xs uppercase tracking-widest mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What would you like to say?"
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 bg-cream hover:bg-white text-navy-900 font-body font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <FiSend size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
