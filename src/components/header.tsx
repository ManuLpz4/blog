import Link from 'next/link'

import { cn } from '../utils/tailwind'
import { ThemeToggle } from './theme-toggle'

export function Header({ className }: Readonly<{ className?: string }>) {
  return (
    <header className={cn('flex justify-between', className)}>
      <Link href="/">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Manu Lopez
        </h1>
      </Link>
      <ThemeToggle />
    </header>
  )
}
