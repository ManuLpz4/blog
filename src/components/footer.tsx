import Image from 'next/image'
import Link from 'next/link'

import { cn } from '../utils/tailwind'

export function Footer({ className }: Readonly<{ className?: string }>) {
  return (
    <footer
      className={cn(
        'flex flex-wrap items-center justify-center gap-6',
        className
      )}
    >
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://x.com/manulpz4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image aria-hidden src="/x.svg" alt="X icon" width={16} height={16} />
        Follow me on X
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/ManuLpz4/blog"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/github.svg"
          alt="GitHub icon"
          width={16}
          height={16}
        />
        Source code
      </Link>
    </footer>
  )
}
