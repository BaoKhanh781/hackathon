'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationProps {
  fontClass?: string;
}

export default function Navigation({ fontClass = '' }: NavigationProps) {
  const pathname = usePathname()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="bg-[#161a1d] p-4 sticky top-0 z-10 border-b border-gray-800">
      <div className="container mx-auto flex items-center">
        <Link href="/" className={`text-white text-xl font-bold mr-auto ${fontClass}`}>
          eagle.hack
        </Link>
        <ul className={`flex space-x-6 ${fontClass}`}>
          {pathname === '/eagle-hack' ? (
            <>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-white hover:underline">
                  about
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('schedule')} className="text-white hover:underline">
                  schedule
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="text-white hover:underline">
                  faq
                </button>
              </li>
            </>
          ) : null}
          <li>
            <Link href="/" className="text-white hover:underline">
              main page
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

