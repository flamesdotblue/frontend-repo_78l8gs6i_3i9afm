import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const data = {
  '2D1N': [
    { day: 'Day 1', text: 'Arrive Vizag • RK Beach • Submarine Museum • Kailasagiri' },
    { day: 'Day 2', text: 'Yarada Beach • Lighthouse • Drop' },
  ],
  '3D2N': [
    { day: 'Day 1', text: 'Vizag City Tour • RK Beach • Kailasagiri • Ropeway' },
    { day: 'Day 2', text: 'Araku Train Ride • Coffee Museum • Local Markets' },
    { day: 'Day 3', text: 'Borra Caves • Katiki Waterfalls • Drop' },
  ],
  '4D3N': [
    { day: 'Day 1', text: 'Vizag City Tour • Submarine & Aircraft Museums' },
    { day: 'Day 2', text: 'Araku Train • Tribal Museum • Coffee Plantations' },
    { day: 'Day 3', text: 'Borra Caves • Ananthagiri Hills • Camping Option' },
    { day: 'Day 4', text: 'Beach Leisure • Shopping • Departure' },
  ],
};

const tabs = Object.keys(data);

const ItineraryTabs = () => {
  const [active, setActive] = useState('3D2N');

  return (
    <section className="bg-white py-12 md:py-16" id="vizag-araku">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 md:mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Itinerary Options</h2>
          <p className="text-gray-600">Pick a plan or ask for a custom itinerary</p>
        </div>

        <div className="flex justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                active === t ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-gray-700 border-gray-200 hover:border-teal-300'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mx-auto max-w-3xl rounded-xl bg-teal-50 p-4 ring-1 ring-teal-100"
            >
              <ul className="space-y-3">
                {data[active].map((row) => (
                  <li key={row.day} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex min-w-[64px] justify-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-teal-700 shadow-sm ring-1 ring-teal-100">{row.day}</span>
                    <p className="text-gray-700">{row.text}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-center">
                <a href="#lead-form" className="inline-flex items-center justify-center rounded-full bg-rose-500 px-5 py-2 text-white font-semibold shadow hover:bg-rose-600 transition">
                  View Full Itinerary
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ItineraryTabs;
