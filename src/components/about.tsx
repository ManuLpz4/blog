'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { TypographyH2, TypographyP } from './ui/typography'

export function About() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div onClick={() => setIsExpanded(!isExpanded)}>
      <TypographyH2>About</TypographyH2>
      <div
        className={`${isExpanded ? 'max-h-screen' : 'max-h-40'} overflow-hidden transition-[max-height]`}
      >
        <Image
          src="/manu.png"
          alt="Profile picture"
          width={200}
          height={200}
          className="float-end mb-4 ml-4 w-40 rounded-full"
        />
        <TypographyP>
          I{"'"}m a product engineer and co-founder of{' '}
          <Link href="https://belo.app" className="text-blue-500">
            belo
          </Link>
          . I was born in El Calafate, Argentina and now live in Buenos Aires.
        </TypographyP>
        <TypographyP>
          I started my builder journey early when I was 12 by developing and
          launching an open-source copy of the old version of{' '}
          <Link href="https://habbo.com" className="text-blue-500">
            Habbo Hotel
          </Link>{' '}
          but with free credits that quickly sparked the interest of the
          developer community and converted in one of the highest-rated copies.
        </TypographyP>
        <TypographyP>
          When I was 13 I had a gameplays{' '}
          <Link
            href="https://youtube.com/TheDarkyMagic"
            className="text-blue-500"
          >
            YouTube channel
          </Link>
          , some websites and also mined a bit of bitcoin without knowing deeply
          what it was.
        </TypographyP>
        <TypographyP>
          When I was 14 I was very active in the gaming and game development
          community and started a team to try to build a photorealistic first
          person shooter called BattleShock and then WAR. I wasn{"'"}t prepared
          to build that and ended up building Cheff Dotto, a stacking game with
          the help of a spanish designer that liked the project.
        </TypographyP>
        <TypographyP>
          When I was 15 I arrived back to Argentina and noticed the damage that
          inflation causes to the people, that pushed me to learn about
          economics and finance.
        </TypographyP>
        <TypographyP>
          At my 15 a friend of mine pushed me to start uploading{' '}
          <Link href="https://minecraft.net" className="text-blue-500">
            Minecraft
          </Link>{' '}
          gameplays to my YouTube channel so I started to develop and publish
          open-source modifications with more than 1 million downloads and also
          pushed him to start. By the other hand, I managed to sneak into the
          Google{"'"}s Buenos Aires office with him.
        </TypographyP>
      </div>
    </div>
  )
}
