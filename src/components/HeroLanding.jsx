import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Hotel, MessageCircle } from 'lucide-react';

const packages = [
  {
    tag: '2D1N',
    title: 'Vizag Quick Escape',
    price: '₹5,999',
    img: 'https://images.unsplash.com/photo-1598099946937-8a1d3fddf2bf?q=80&w=1200&auto=format&fit=crop',
  },
  {
    tag: '3D2N',
    title: 'Vizag + Araku Delight',
    price: '₹9,999',
    img: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1200&auto=format&fit=crop',
  },
  {
    tag: '4D3N',
    title: 'Beach, Hills & Caves',
    price: '₹13,999',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  },
];

const HeroLanding = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    startDate: '',
    length: '',
    travelers: '',
    pickup: '',
    hotel: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks! We\'ll get back to you shortly.');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-rose-50">
      {/* decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-64 w-64 rounded-full bg-teal-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-rose-200/50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left copy and packages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Vizag–Araku Packages — Planned Perfectly for You
            </h1>
            <p className="text-lg text-gray-600">
              Beach, Hills & Coffee Estates — curated by trusted local experts.
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-700">
              {['Door-to-door transfers', 'Scenic Araku train ride', '24×7 local support'].map((pt) => (
                <li key={pt} className="flex items-center gap-2 bg-white rounded-full px-3 py-2 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-teal-500" /> {pt}
                </li>
              ))}
            </ul>

            {/* Packages */}
            <div id="packages" className="grid sm:grid-cols-3 gap-4 pt-2">
              {packages.map((p) => (
                <div key={p.tag} className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img src={p.img} alt={p.title} className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wide text-rose-500">{p.tag}</span>
                      <span className="text-xs text-gray-500">from <span className="font-semibold text-gray-700">{p.price}</span></span>
                    </div>
                    <h3 className="mt-1 text-sm font-semibold text-gray-900">{p.title}</h3>
                    <button className="mt-3 w-full rounded-lg bg-teal-600 px-3 py-2 text-sm font-medium text-white hover:bg-teal-700 transition">
                      Book / Enquire
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="#lead-form" className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-white font-semibold shadow hover:bg-teal-700 transition">
                Get My Custom Quote
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-200 px-6 py-3 text-teal-700 bg-white hover:bg-teal-50 transition"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp Now
              </a>
            </div>

            {/* Trust bar */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              {[
                '⭐ 10,000+ Happy Travelers',
                '4.8★ Google',
                'TTAA Member',
                'Secure Payments',
              ].map((t) => (
                <div key={t} className="rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-gray-100 text-gray-700 text-center">
                  {t}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right lead form */}
          <motion.div
            id="lead-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">Get A Free Trip Plan</h3>
              <p className="text-sm text-gray-500">We\'ll design a perfect Vizag–Araku holiday for you</p>
              <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Name" className="col-span-1 sm:col-span-2 w-full rounded-lg border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none" />
                <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone" className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none" />
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none" />
                <div className="relative">
                  <Calendar className="pointer-events-none absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input name="startDate" value={form.startDate} onChange={handleChange} placeholder="Start Date" type="date" className="w-full rounded-lg border border-gray-200 px-3 py-2 pr-9 focus:ring-2 focus:ring-teal-500 focus:outline-none" />
                </div>
                <input name="length" value={form.length} onChange={handleChange} placeholder="Trip Length (days)" className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none" />
                <div className="relative">
                  <Users className="pointer-events-none absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input name="travelers" value={form.travelers} onChange={handleChange} placeholder="Travelers" className="w-full rounded-lg border border-gray-200 px-3 py-2 pr-9 focus:ring-2 focus:ring-teal-500 focus:outline-none" />
                </div>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input name="pickup" value={form.pickup} onChange={handleChange} placeholder="Pickup City" className="w-full rounded-lg border border-gray-200 px-3 py-2 pr-9 focus:ring-2 focus:ring-teal-500 focus:outline-none" />
                </div>
                <div className="relative">
                  <Hotel className="pointer-events-none absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                  <select name="hotel" value={form.hotel} onChange={handleChange} className="w-full rounded-lg border border-gray-200 px-3 py-2 pr-9 focus:ring-2 focus:ring-teal-500 focus:outline-none text-gray-700">
                    <option value="">Hotel Type</option>
                    <option>Budget</option>
                    <option>Comfort</option>
                    <option>Premium</option>
                    <option>Luxury</option>
                  </select>
                </div>
                <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Notes (optional)" className="col-span-1 sm:col-span-2 w-full rounded-lg border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none" rows={3} />
                <button type="submit" className="col-span-1 sm:col-span-2 mt-1 w-full rounded-lg bg-rose-500 px-4 py-3 font-semibold text-white shadow hover:bg-rose-600 transition">
                  Request Callback
                </button>
              </form>
            </div>

            {/* Offer ribbon */}
            <div className="mt-3 rounded-xl bg-gradient-to-r from-rose-500 to-teal-500 p-[2px] shadow">
              <div className="rounded-[10px] bg-white px-4 py-2 text-center text-sm font-medium text-gray-700">
                This week only: <span className="text-rose-600 font-semibold">Free Kailasagiri Ropeway Tickets</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;
