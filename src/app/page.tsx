import Image from 'next/image'
import Link from 'next/link'

import RecentPosts from '../components/recent-posts'

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <RecentPosts />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
          href="https://github.com/ManuLpz4/web"
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
    </div>
  )
}
