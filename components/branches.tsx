'use client'

import { branchList, t } from '@/lib/site-data'
import { useLanguage } from './language-provider'
import { SectionHeading } from './section-heading'
import { ServiceIcon } from './service-icon'
import { Reveal } from './reveal'

export function Branches() {
  const { tr } = useLanguage()

  return (
    <section id="branches" className="relative bg-muted/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading title={tr(t.branchesHeading)} subtitle={tr(t.branchesNote)} />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {branchList.map((branch, i) => (
            <Reveal
              key={branch.name}
              delay={i * 90}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-primary/5"
            >
              <span
                className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
              >
                <ServiceIcon name={branch.icon} className="size-8" />
              </span>
              <h3 className="mt-5 font-display text-2xl text-primary">{branch.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-secondary">
                {tr(branch.type)}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={250}>
          <p className="mt-10 text-center text-sm text-muted-foreground">{tr(t.branchesSoon)}</p>
        </Reveal>
      </div>
    </section>
  )
}
