import { Section } from "@/components/ui/Section";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <Section>
        <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start">
          <div>
            <h1 className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Contact
            </h1>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Let&apos;s discuss systems worth building.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Open to full stack roles, AI-focused collaborations, and research
              work where engineering rigour is a requirement — not an afterthought.
            </p>
            <form className="mt-6 space-y-4 text-sm">
              <div>
                <label className="block text-[0.75rem] font-medium uppercase tracking-[0.16em] text-slate-400">
                  Name
                </label>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none transition-all duration-250 ease-lab-ease focus:border-emerald-400/80 focus:bg-slate-950"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[0.75rem] font-medium uppercase tracking-[0.16em] text-slate-400">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none transition-all duration-250 ease-lab-ease focus:border-emerald-400/80 focus:bg-slate-950"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-[0.75rem] font-medium uppercase tracking-[0.16em] text-slate-400">
                  Project / Opportunity
                </label>
                <textarea
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none transition-all duration-250 ease-lab-ease focus:border-emerald-400/80 focus:bg-slate-950"
                  rows={4}
                  placeholder="Describe what you’d like to build or explore."
                />
              </div>
              <button type="submit" className="btn-primary" data-cursor="button">
                Send Message
              </button>
            </form>
          </div>
          <div className="glass-surface card-hover rounded-2xl p-5 text-sm text-slate-300">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Direct Channels
            </p>
            <ul className="mt-3 space-y-2">
              <li>Email: your.email@example.com</li>
              <li>GitHub: github.com/your-handle</li>
              <li>LinkedIn: linkedin.com/in/your-handle</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}

