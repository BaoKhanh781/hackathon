import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Mail } from 'lucide-react'
import MainNavigation from './components/main-navigation'
import { StatsBanner } from './components/stats-banner'

const DiscordIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="currentColor"/>
  </svg>
)

export default function Home() {
  return (
    <main className="min-h-screen bg-[#161a1d]">
      <MainNavigation />
      <div id="home" className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-[300px,1fr] gap-8 items-start">
          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-wide">
            Hey There!
          </h1>
          <div className="text-white text-xl space-y-4">
            <p className="font-bold leading-relaxed">
              Welcome to Oak Grove Hack Club,
            </p>
            <p className="leading-relaxed">
              Hack Club is a non-profit network of coding clubs from <span className="underline">all around the world</span>. 
              We're the Hack Club at Oak Grove High School in San Jose. 
              Our goal is to teach students Computer Science and inspire them to become passionate about technology
            </p>
          </div>
        </div>
      </div>
      <StatsBanner />
      <div className="bg-[#161a1d] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-5xl md:text-6xl font-bold mb-8 tracking-wide">
            What we do
          </h2>
          <p className="text-white text-xl leading-relaxed">
            At Hack Club, you can learn various programming such as building a website or exploring art concepts. Thanks to the wide range of projects offered by our parent organization Hack Club, we welcome everyone to join and enjoy coding together.
          </p>
        </div>
      </div>
      <div className="bg-[#161a1d] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-5xl md:text-6xl font-bold mb-8 tracking-wide">
            Hack Club Workshops
          </h2>
          <Link 
            href="https://workshops.hackclub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative w-full overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BCJl56Hi3EImu2QZPUcgcwuitCh6Qx.png"
              alt="Hack Club Workshops - Students working on computers in a classroom"
              width={1200}
              height={400}
              className="w-full object-cover"
            />
          </Link>
        </div>
      </div>
      <footer className="bg-[#161a1d] pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="https://www.instagram.com/oghshackclub?igsh=NTc4MTIwNjQ2YQ==" className="text-white hover:text-gray-300">
              <Instagram size={24} />
            </Link>
            <a href="mailto:oakgrovehackclub@gmail.com" className="text-white hover:text-gray-300">
              <Mail size={24} aria-label="Email" />
            </a>
            <Link href="https://discord.gg/ZJjTHVPd" className="text-white hover:text-gray-300">
              <DiscordIcon size={24} />
            </Link>
          </div>
          <p className="text-white text-sm text-center tracking-wide">
            Oak Grove Hack Club - Fiscally sponsored by{' '}
            <Link href="https://hackclub.com/fiscal-sponsorship/" className="underline">
              HCB
            </Link>
          </p>
        </div>
      </footer>
    </main>
  )
}

