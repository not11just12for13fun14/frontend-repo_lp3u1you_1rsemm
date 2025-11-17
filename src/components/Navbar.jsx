import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-xl sm:text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            cs.studio
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-slate-200" />
            <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-600 hover:text-slate-900">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-600 hover:text-slate-900">
                <Linkedin size={20} />
              </a>
              <a href="#contact" aria-label="Email" className="text-slate-600 hover:text-slate-900">
                <Mail size={20} />
              </a>
            </div>
          </nav>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-md border border-slate-200">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white/70 p-4 shadow-sm">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700">
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-slate-200" />
              <div className="flex items-center gap-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-600 hover:text-slate-900">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-600 hover:text-slate-900">
                  <Linkedin size={20} />
                </a>
                <a href="#contact" aria-label="Email" className="text-slate-600 hover:text-slate-900">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
