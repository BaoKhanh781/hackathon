import { Instagram, Mail } from 'lucide-react'
import Link from 'next/link'
import Navigation from '../components/navigation'

const DiscordIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="currentColor"/>
  </svg>
)

export default function EagleHack() {
  return (
    <main className="min-h-screen bg-[#161a1d]">
      <Navigation fontClass="font-bold" />
      <div className="container mx-auto py-16">
        <section id="about" className="mb-16 flex flex-col items-center px-4">
          <h1 className="text-6xl font-bold mb-4 text-white text-center tracking-wide">eagle.hack</h1>
          <div className="mb-4 text-center">
            <span className="text-gray-400 font-bold mr-2 tracking-wide">February 15th, 2024 @</span>
            <span className="text-blue-500 font-bold tracking-wide">Oak Grove High School</span>
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            <Link href="https://www.google.com" className="text-white hover:text-gray-300">
              <Instagram size={24} />
            </Link>
            <a href="mailto:oakgrovehackclub@gmail.com" className="text-white hover:text-gray-300">
              <Mail size={24} aria-label="Email" />
            </a>
            <Link href="https://discord.gg/ZJjTHVPd" className="text-white hover:text-gray-300">
              <DiscordIcon size={24} />
            </Link>
          </div>
          <Link 
            href="https://www.google.com"
            className="inline-block bg-[#ec3750] text-white text-xl px-12 py-4 rounded-full hover:opacity-90 transition-opacity tracking-wide font-bold"
          >
            Register Now
          </Link>
        </section>

        <div className="w-full bg-[#ec3750] py-8 mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-white text-center tracking-wide">
              Details and Ideas
            </h2>
          </div>
        </div>
        
        <div className="scroll-mt-20 px-4" id="schedule">
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-white text-center tracking-wide">Schedule</h2>
            <div className="max-w-2xl mx-auto">
              <div className="rounded-lg overflow-hidden">
                {[
                  { time: "7:45-8:30", event: "check-in" },
                  { time: "8:30-9:15", event: "debrief" },
                  { time: "9:30-10:15", event: "workshop #1" },
                  { time: "10:15-11:00", event: "workshop #2" },
                  { time: "11:30-1:00", event: "lunch" },
                  { time: "2:00-2:45", event: "workshop #3" },
                  { time: "3:00-3:45", event: "workshop #4" },
                  { time: "7:00", event: "submissions due" },
                  { time: "5:30-6:30", event: "dinner" },
                  { time: "7:30-9:00", event: "presentations" },
                  { time: "9:15-9:30", event: "award ceremony" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center p-4 ${
                      index % 2 === 0 ? 'bg-[#1E1E1E]' : 'bg-[#2D2D2D]'
                    }`}
                  >
                    <div className="w-1/3 text-white tracking-wide font-bold">{item.time}</div>
                    <div className="w-2/3 text-white tracking-wide">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        
        <div className="scroll-mt-20 px-4" id="faq">
          <section className="mb-16">
            <h2 className="text-5xl font-bold mb-8 text-white text-center tracking-wide">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-[#ec3750] bg-[#161a1d] p-6">
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">How large can a team be?</h3>
                <p className="text-white text-justify leading-relaxed">Team can have up to 1-4 members</p>
              </div>
              <div className="rounded-lg border border-[#ec3750] bg-[#161a1d] p-6">
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Where will eagle.hack be?</h3>
                <p className="text-white text-justify leading-relaxed">At Oak Grove High School in San Jose, we'll start in the school theater.</p>
              </div>
              <div className="rounded-lg border border-[#ec3750] bg-[#161a1d] p-6">
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Will lunch and dinner be provided?</h3>
                <p className="text-white text-justify leading-relaxed">Yes, we'll provide food for lunch and dinner. Make sure to tell if you have any allergies</p>
              </div>
              <div className="rounded-lg border border-[#ec3750] bg-[#161a1d] p-6">
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">What do we have to bring?</h3>
                <p className="text-white text-justify leading-relaxed">Only computer and charger!</p>
              </div>
              <div className="rounded-lg border border-[#ec3750] bg-[#161a1d] p-6">
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Is there anything specific we have to develop?</h3>
                <p className="text-white text-justify leading-relaxed">No, you can develop anything with your creativity. Also, we have specific ideas for inspiration!</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

