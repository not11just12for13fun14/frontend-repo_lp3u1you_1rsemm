import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-slate-900"
          >
            Let’s connect
          </motion.h3>
          <p className="mt-2 text-slate-600">Have a question, idea, or opportunity? I’d love to hear from you.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              const form = Object.fromEntries(new FormData(e.currentTarget))
              const subject = encodeURIComponent(`[Portfolio] ${form.name || 'Hi'} — ${form.topic || 'General'}`)
              const body = encodeURIComponent(`${form.message || ''}\n\n— ${form.name || ''} (${form.email || ''})`)
              window.location.href = `mailto:me@example.com?subject=${subject}&body=${body}`
            }}
            className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <input name="name" placeholder="Your name" className="rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-slate-300" />
            <input name="email" type="email" placeholder="Email" className="rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-slate-300" />
            <select name="topic" className="rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-slate-300">
              <option>Project</option>
              <option>Collaboration</option>
              <option>Internship</option>
              <option>General</option>
            </select>
            <input name="portfolio" placeholder="Link (optional)" className="rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-slate-300" />
            <textarea name="message" placeholder="Message" className="sm:col-span-2 min-h-[120px] rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-slate-300" />
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-white font-semibold shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 transition sm:w-max">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
