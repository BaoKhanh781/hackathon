import MainNavigation from '../components/main-navigation'

export default function Donations() {
  return (
    <main className="min-h-screen bg-[#161a1d]">
      <MainNavigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-white text-4xl font-bold tracking-wide mb-8">Donations</h1>
        <div className="w-full max-w-4xl mx-auto">
          <iframe 
            src="https://hcb.hackclub.com/donations/start/oak-grove-hack-club" 
            name="donateFrame" 
            className="w-full aspect-[4/3] border-none"
            scrolling="yes" 
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </main>
  )
}

