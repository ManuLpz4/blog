'use client'

import Image from 'next/image'
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
          Hey, guys! How is it going? I{"'"}m a full-stack developer born in El
          Calafate, Argentina. Although I was born in the south of Argentina, I
          lived most of my life in Buenos Aires and 4 years in Alicante, Spain
          (10-15).
        </TypographyP>
        <TypographyP>
          I started my builder journey early when I was 12 by developing and
          launching an open-source copy of the old version of [Habbo
          Hotel](https://habbo.es) but with free credits that quickly sparked
          the interest of the developer community and converted in one of the
          highest-rated copies.
        </TypographyP>
        <TypographyP>
          When I was 13 I had a gameplays [YouTube
          channel](https://youtube.com/TheDarkyMagic), some websites and also
          mined a bit of bitcoin without knowing deeply what it was.
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
          At my 15 a friend of mine pushed me to start uploading [Minecraft
          Pocket Edition]() gameplays to my YouTube channel so I started to
          develop and publish open-source modifications with more than 1 million
          downloads and also pushed him to start. By the other hand, I managed
          to sneak into the Google{"'"}s Buenos Aires office with him.
        </TypographyP>
      </div>
    </div>
  )
}
