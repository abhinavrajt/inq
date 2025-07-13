import React from 'react'

const tickets = [
  {
    title: 'Day 1',
    image: '/images/ticket-day1.png',
    date: 'Oct 25, 2024',
    price: '₹199',
    events: ['Automotive Summit', 'Glitch Tathva', 'Tech Conclave'],
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] max-w-[1200px] mx-auto">
        {tickets.map((ticket, i) => (
          <div
            key={i}
            className="ticket-style flex flex-col justify-between border-2 border-white p-4 
              h-[800px] sm:h-[680px] w-[285px] sm:w-full sm:max-w-[260px] 
              mx-auto hover:shadow-[0_0_30px_#ffffff33] 
              transition-transform hover:scale-105 duration-300"
          >
            <h3 className="text-white text-4xl sm:text-3xl font-extrabold mb-4 tracking-widest">
              {ticket.title.toUpperCase()}
            </h3>

            {/* Ticket Image */}
            <img
              src={ticket.image}
              alt={ticket.title}
              className="mx-auto object-cover border border-white rounded mb-4"
              style={{ height: '274px', width: '220px' }}
            />

            {/* Date */}
            <p className="text-lg sm:text-base text-gray-400 mb-4 text-center">{ticket.date}</p>

            {/* Dotted Divider */}
            <div className="border-t border-dashed border-white mb-4 w-full"></div>

            {/* Events */}
            <ul className="text-left space-y-2 text-lg sm:text-base mb-6 px-2 font-medium">
              {ticket.events.map((event, idx) => (
                <li
                  key={idx}
                  className="text-gray-200 before:content-['•'] before:mr-2 before:text-cyan-400"
                >
                  {event}
                </li>
              ))}
            </ul>

            {/* Buy Button */}
            <a
              href="#"
              className="flex justify-between items-center px-4 py-3 border border-white rounded-md text-lg sm:text-base text-white font-bold hover:bg-white hover:text-black transition duration-300"
            >
              <span className="text-red-500">Buy Now</span>
              <span>{ticket.price}</span>
            </a>

            {/* Barcode */}
            <div className="bg-white p-1 rounded-sm border border-black w-fit mx-auto mt-2">
              <img
                src="https://barcode.tec-it.com/barcode.ashx?data=Inqua-cetkr&multiplebarcodes=true&translate-esc=on"
                alt="Ticket Barcode"
                className="mx-auto"
                style={{ height: '50px', width: '160px' }}
              />
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
