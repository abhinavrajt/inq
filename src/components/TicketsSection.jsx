import React from 'react'

const tickets = [
  {
    title: 'Day 1',
    image: '/images/ticket-day1.png',
    date: 'Oct 25, 2024',
    price: '₹199',
    events: ['Automotive Summit', 'dfdf', 'Tech Conclave'],
  },
  {
    title: 'Day 2',
    image: '/images/ticket-day2.png',
    date: 'Oct 26, 2024',
    price: '₹199',
    events: ['Hackathon', 'AI Workshop', 'Drone Race'],
  },
  {
    title: 'Day 3',
    image: '/images/ticket-day3.png',
    date: 'Oct 27, 2024',
    price: '₹199',
    events: ['Robo War', 'Closing Ceremony', 'AR Expo'],
  },
  {
    title: 'Super Pass',
    image: '/images/ticket-super.png',
    date: 'All Days',
    price: '₹499',
    events: ['Access All Areas', 'VIP Entry', 'Free Merch'],
  },
]

export default function TicketsSection() {
  return (
    <section
      id="tickets"
      className="relative bg-black py-32 text-white text-center px-6 md:px-12 overflow-hidden"
    >
      {/* === Top Marquee === */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="bg-yellow-400 border-y-4 border-black border-dashed py-2 whitespace-nowrap animate-marquee font-bold text-black text-xl tracking-widest font-mono">
          {'GET YOUR TICKETS NOW!  •  '.repeat(20)}
        </div>
      </div>

      {/* === Section Title === */}
      <h2 className="text-6xl sm:text-5xl pixel-font text-white mb-4">Grab Your Pass</h2>
      <p className="text-xl sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-10">
        Step into the future with your INQUA25 ticket — your passport to innovation, creativity, and unforgettable experiences across all event days!
      </p>

      {/* === Ticket Cards === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1300px] mx-auto">
        {tickets.map((ticket, i) => (
          <div
            key={i}
            className="relative bg-[#0f0f0f] border-2 border-white rounded-[20px] shadow-[0_0_40px_#00ffff33] overflow-hidden
              flex flex-col justify-between px-6 py-6 w-[285px] sm:max-w-[260px] mx-auto hover:scale-105 transition-all duration-300 group"
            style={{
              background: 'linear-gradient(145deg, #1a1a1a, #0d0d0d)',
            }}
          >
            {/* === Punch-hole Circles === */}
            <div className="absolute left-[-12px] top-12 h-6 w-6 bg-black rounded-full border-2 border-white z-10" />
            <div className="absolute left-[-12px] bottom-12 h-6 w-6 bg-black rounded-full border-2 border-white z-10" />
            <div className="absolute right-[-12px] top-12 h-6 w-6 bg-black rounded-full border-2 border-white z-10" />
            <div className="absolute right-[-12px] bottom-12 h-6 w-6 bg-black rounded-full border-2 border-white z-10" />

            {/* === Title === */}
            <h3 className="text-4xl font-bold text-white tracking-widest text-center mb-4 font-mono">
              {ticket.title.toUpperCase()}
            </h3>

            {/* === Image === */}
            <img
              src={ticket.image}
              alt={ticket.title}
              className="mx-auto object-cover border border-white rounded-lg shadow-md"
              style={{ height: '240px', width: '100%' }}
            />

            {/* === Date === */}
            <p className="text-md text-gray-400 mt-4">{ticket.date}</p>

            {/* === Tear Line === */}
            <div className="border-t border-dashed border-white my-4 relative">
              <div className="absolute left-[-8px] top-[-6px] w-4 h-4 bg-black border-2 border-white rounded-full" />
              <div className="absolute right-[-8px] top-[-6px] w-4 h-4 bg-black border-2 border-white rounded-full" />
            </div>

            {/* === Events === */}
            <ul className="text-left space-y-2 text-base font-medium px-1">
              {ticket.events.map((event, idx) => (
                <li
                  key={idx}
                  className="text-gray-200 before:content-['•'] before:mr-2 before:text-cyan-400"
                >
                  {event}
                </li>
              ))}
            </ul>

            {/* === Buy Now Button === */}
            <a
              href="#"
              className="mt-6 flex justify-between items-center px-4 py-3 border-2 border-white rounded-md text-base text-white font-bold 
                hover:bg-white hover:text-black transition duration-300"
            >
              <span className="text-red-500">Buy Now</span>
              <span>{ticket.price}</span>
            </a>

            {/* === Barcode === */}
            <div className="bg-white px-3 py-2 rounded-md border border-black w-fit mx-auto mt-6 shadow-lg">
              <img
                src="https://barcode.tec-it.com/barcode.ashx?data=Inqua-cetkr&multiplebarcodes=true&translate-esc=on"
                alt="Ticket Barcode"
                className="mx-auto"
                style={{ height: '50px', width: '160px', filter: 'contrast(1.2)' }}
              />
              <p className="text-xs text-black text-center font-mono mt-1">Inqua-cetkr</p>
            </div>
          </div>
        ))}
      </div>

      {/* === Bottom Marquee === */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="bg-yellow-400 border-y-4 border-black border-dashed py-2 whitespace-nowrap animate-marquee font-bold text-black text-xl tracking-widest font-mono">
          {'GET YOUR TICKETS NOW!  •  '.repeat(20)}
        </div>
      </div>
    </section>
  )
}
