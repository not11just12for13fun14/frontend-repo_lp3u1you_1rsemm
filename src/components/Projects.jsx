import { motion } from 'framer-motion'
import { Code2, Cpu, Globe, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Chat App',
    desc: 'WebSocket-powered chat with rooms, typing indicators, and emoji support.',
    icon: <Globe className="text-blue-600" size={20} />,
    tags: ['React', 'FastAPI', 'WebSocket'],
    link: '#'
  },
  {
    title: 'ML Playground',
    desc: 'Interactive visualizations to learn ML concepts like clusters and decision trees.',
    icon: <Cpu className="text-purple-600" size={20} />,
    tags: ['Python', 'sklearn', 'D3'],
    link: '#'
  },
  {
    title: 'UI Micro-interactions',
    desc: 'A gallery of tiny, delightful motion experiments with Framer Motion.',
    icon: <Sparkles className="text-pink-600" size={20} />,
    tags: ['Framer Motion', 'UX'],
    link: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            <Code2 size={14} /> Featured Work
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Projects</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">A collection of hands-on builds showing curiosity, craft, and care for the small details.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-950">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
