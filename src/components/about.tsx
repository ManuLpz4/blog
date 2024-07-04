'use client'

import Image from 'next/image'
import { useState } from 'react'

export function About() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div onClick={() => setIsExpanded(!isExpanded)}>
      <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        About
      </h2>
      <div
        className={`${isExpanded ? 'max-h-screen' : 'max-h-[200px]'} overflow-hidden transition-[max-height]`}
      >
        <Image
          src="/manu.png"
          alt="Profile picture"
          width={200}
          height={200}
          className="float-end mb-4 ml-4 w-40 rounded-full"
        />
        <p>
          Hey, guys! How is it going? I am Manu Lopez Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Aenean maximus facilisis
          pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean maximus facilisis pellentesque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          maximus facilisis pellentesque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          maximus facilisis pellentesque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          maximus facilisis pellentesque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          maximus facilisis pellentesque.
        </p>
        <p>
          Hey, guys! How is it going? I am Manu Lopez Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Aenean maximus facilisis
          pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean maximus facilisis pellentesque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          maximus facilisis pellentesque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          maximus facilisis pellentesque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          maximus facilisis pellentesque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          maximus facilisis pellentesque.
        </p>
      </div>
    </div>
  )
}
