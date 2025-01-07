'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function MainNavigation() {
  const pathname = usePathname()

  const scrollToBottom = () => {
    const homeSection = document.getElementById('home')
    if (homeSection) {
      const bottomPosition = homeSection.offsetTop + homeSection.offsetHeight
      window.scrollTo({
        top: bottomPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="bg-[#161a1d] p-4 sticky top-0 z-10 border-b border-gray-800">
      <div className="container mx-auto flex items-center">
        <Link href="/" className="flex items-center text-white text-xl font-bold mr-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OGH-k4j8NrLVRfRryQSab9pZ5FhyaNERN4.png"
            alt="OGH Logo"
            width={32}
            height={30}
            className="mr-2"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
          Oak Grove Hack Club
        </Link>
        <ul className="flex space-x-6 font-bold">
          <li>
            <button onClick={scrollToBottom} className="text-white hover:underline">
              home
            </button>
          </li>
          <li>
            <Link href="/eagle-hack" className="text-white hover:underline">
              eagle.hack
            </Link>
          </li>
          <li>
            <Link href="/donations" className="text-white hover:underline">
              donations
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

