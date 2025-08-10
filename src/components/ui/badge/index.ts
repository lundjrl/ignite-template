import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Badge } from './Badge.vue'

export const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md border border-neutral-200 px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-neutral-950 focus-visible:ring-neutral-950/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden dark:border-neutral-800 dark:focus-visible:border-neutral-300 dark:focus-visible:ring-neutral-300/50 dark:aria-invalid:ring-destructive-foreground/20 dark:dark:aria-invalid:ring-destructive-foreground/40 dark:aria-invalid:border-destructive-foreground',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-neutral-900 text-neutral-50 [a&]:hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:[a&]:hover:bg-neutral-50/90',
        secondary:
          'border-transparent bg-neutral-100 text-neutral-900 [a&]:hover:bg-neutral-100/90 dark:bg-neutral-800 dark:text-neutral-50 dark:[a&]:hover:bg-neutral-800/90',
        destructive:
         'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 dark:bg-destructive-foreground dark:[a&]:hover:bg-destructive-foreground/90 dark:focus-visible:ring-destructive-foreground/20 dark:dark:focus-visible:ring-destructive-foreground/40 dark:dark:bg-destructive-foreground/60',
        outline:
          'text-neutral-950 [a&]:hover:bg-neutral-100 [a&]:hover:text-neutral-900 dark:text-neutral-50 dark:[a&]:hover:bg-neutral-800 dark:[a&]:hover:text-neutral-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
export type BadgeVariants = VariantProps<typeof badgeVariants>
