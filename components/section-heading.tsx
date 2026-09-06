import { cn } from '@/lib/utils'

export function SectionHeading({
  title,
  subtitle,
  light = false,
  className,
}: {
  title: string
  subtitle?: string
  light?: boolean
  className?: string
}) {
  return (
    <div className={cn('mx-auto max-w-2xl text-center', className)}>
      <div className="mb-4 flex items-center justify-center gap-3" aria-hidden="true">
        <span className={cn('h-px w-10', light ? 'bg-accent/50' : 'bg-primary/30')} />
        <span className="text-lg text-secondary">{'\u0950'}</span>
        <span className={cn('h-px w-10', light ? 'bg-accent/50' : 'bg-primary/30')} />
      </div>
      <h2
        className={cn(
          'font-display text-3xl text-balance sm:text-4xl lg:text-[2.75rem]',
          light ? 'text-accent' : 'text-primary',
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed text-pretty sm:text-lg',
            light ? 'text-cream/80' : 'text-muted-foreground',
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
