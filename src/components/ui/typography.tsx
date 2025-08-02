import { cn } from "@/lib/utils"
import { HTMLAttributes, forwardRef } from "react"

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-lg' | 'caption'
  as?: keyof JSX.IntrinsicElements
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'body', as: Component = 'p', ...props }, ref) => {
    const variants = {
      h1: 'text-4xl sm:text-5xl font-bold leading-tight',
      h2: 'text-3xl sm:text-4xl font-bold leading-tight',
      h3: 'text-2xl sm:text-3xl font-semibold leading-tight',
      h4: 'text-xl sm:text-2xl font-semibold leading-tight',
      'body-lg': 'text-lg sm:text-xl leading-relaxed',
      body: 'text-base sm:text-lg leading-relaxed',
      caption: 'text-sm leading-relaxed text-muted-foreground'
    }

    const Comp = Component as any

    return (
      <Comp
        ref={ref as any}
        className={cn(variants[variant], className)}
        {...props}
      />
    )
  }
)

Typography.displayName = "Typography"

export { Typography }
