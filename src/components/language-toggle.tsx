'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Button } from './ui/button'

export function LanguageToggle({ className }: { className?: string }) {
  const [language, setLanguage] = useState('en-US')

  const toggleLanguage = () => {
    setLanguage(language == 'en-US' ? 'es-AR' : 'en-US')
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleLanguage}
      className={className}
    >
      <Image
        src="images/usa.svg"
        alt="Flag of the United States"
        width={1235}
        height={650}
        className={`absolute w-[1.2rem] transition-all ${language === 'en-US' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`}
      />
      <Image
        src="images/argentina.svg"
        alt="Flag of Argentina"
        width={800}
        height={500}
        className={`w-[1.2rem] transition-all ${language === 'es-AR' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`}
      />
      <span className="sr-only">Toggle language</span>
    </Button>
  )
}
