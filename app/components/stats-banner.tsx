export function StatsBanner() {
  return (
    <div className="w-full bg-[#ec3750] py-16 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-5xl font-bold mb-2 tracking-wide">20+ Students</h2>
            <p className="text-xl tracking-wide">from OG Highschool</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-2 tracking-wide">Hackathon</h2>
            <p className="text-xl tracking-wide">in February</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-2 tracking-wide">Win Prize</h2>
            <p className="text-xl tracking-wide">depends on project</p>
          </div>
        </div>
      </div>
    </div>
  )
}

