import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-neutral-950 focus-visible:ring-neutral-950/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:focus-visible:border-neutral-300 dark:focus-visible:ring-neutral-300/50 dark:aria-invalid:ring-destructive-foreground/20 dark:dark:aria-invalid:ring-destructive-foreground/40 dark:aria-invalid:border-destructive-foreground',
  {
    variants: {
      variant: {
        default:
          'cursor-pointer bg-primary text-neutral-50 shadow-xs hover:bg-primary/90 dark:bg-primary dark:text-neutral-900 dark:hover:bg-neutral-50/90',
        destructive:
          'cursor-pointer bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 dark:bg-destructive-foreground dark:hover:bg-destructive/90 dark:focus-visible:ring-destructive-foreground/20 dark:dark:focus-visible:ring-destructive-foreground/40 dark:dark:bg-destructive-foreground/60',
        outline:
          'cursor-pointer border bg-white shadow-xs hover:bg-neutral-100 hover:text-neutral-900 dark:bg-neutral-200/30 dark:border-neutral-200 dark:hover:bg-neutral-200/50 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:dark:bg-neutral-800/30 dark:dark:border-neutral-800 dark:dark:hover:bg-neutral-800/50',
        secondary:
          'cursor-pointer bg-neutral-100 text-neutral-900 shadow-xs hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80',
        ghost:
          'cursor-pointer hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-100/50 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:dark:hover:bg-neutral-800/50',
        link: 'cursor-pointer text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
