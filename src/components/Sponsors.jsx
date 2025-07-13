import React from 'react'

const sponsors = ["Google", "GitHub", "Figma", "Nvidia"]

function Sponsors() {
  return (
    <section className="bg-black py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Sponsors</h2>
      <div className="flex flex-wrap justify-center items-center gap-6 px-4">
        {sponsors.map((s, i) => (
          <div key={i} className="bg-white text-black px-6 py-3 rounded-xl font-semibold text-lg shadow-md">{s}</div>
        ))}
      </div>
    </section>
  )
}

export default Sponsors