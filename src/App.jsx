import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Shield, CheckCircle, MessageCircle, Train, Camera, Ship, Mountain } from 'lucide-react';
import Header from './components/Header';
import HeroLanding from './components/HeroLanding';
import ItineraryTabs from './components/ItineraryTabs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <main>
        <HeroLanding />

        {/* Top Highlights */}
        <section className="py-12 md:py-16 bg-white" id="packages">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold">Top Highlights</h2>
              <p className="text-gray-600">RK Beach • Kailasagiri • Submarine Museum • Borra Caves • Araku Valley Train</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: 'RK Beach',
                  img: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1200&auto=format&fit=crop',
                  icon: Ship,
                },
                {
                  title: 'Kailasagiri',
                  img: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1200&auto=format&fit=crop',
                  icon: Mountain,
                },
                {
                  title: 'Submarine Museum',
                  img: 'https://images.unsplash.com/photo-1536227670291-7a0e94b5d9ae?q=80&w=1200&auto=format&fit=crop',
                  icon: Camera,
                },
                {
                  title: 'Araku Train',
                  img: 'https://images.unsplash.com/photo-1545243424-0ce743321e11?q=80&w=1200&auto=format&fit=crop',
                  icon: Train,
                },
              ].map((h) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4 }}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100"
                >
                  <div className="relative aspect-[4/3]">
                    <img src={h.img} alt={h.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                      <h3 className="font-semibold tracking-tight">{h.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Itinerary Tabs */}
        <ItineraryTabs />

        {/* Why Choose Us */}
        <section className="py-12 md:py-16 bg-teal-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold">Why Choose Us</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: 'Personalized Itineraries', icon: CheckCircle, text: 'Tailored to your pace & interests.' },
                { title: 'Local Experts', icon: MapPin, text: 'Operated by trusted Vizag–Araku pros.' },
                { title: '24×7 Support', icon: Shield, text: 'We\'re with you all along the way.' },
                { title: 'Best Price Promise', icon: Star, text: 'Great value with transparent pricing.' },
              ].map((w) => (
                <div key={w.title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                  <w.icon className="h-6 w-6 text-teal-600" />
                  <h3 className="mt-2 font-semibold text-gray-900">{w.title}</h3>
                  <p className="text-sm text-gray-600">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="reviews" className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold">Happy Travelers</h2>
              <p className="text-gray-600">Loved by families, friends and honeymooners</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  name: 'Ananya & Family',
                  text: 'Flawless planning! The Araku train ride and Borra Caves were unforgettable.',
                  img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200&auto=format&fit=crop',
                },
                {
                  name: 'Rahul & Neha',
                  text: 'Great value and super helpful team. Door-to-door transfers made it so easy!',
                  img: 'https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?q=80&w=1200&auto=format&fit=crop',
                },
                {
                  name: 'Karthik',
                  text: 'Prompt support throughout. Highly recommend Best Holiday Planners!',
                  img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
                },
              ].map((t) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl bg-teal-50 p-5 ring-1 ring-teal-100"
                >
                  <div className="flex items-center gap-3">
                    <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-gray-900">{t.name}</p>
                      <p className="text-xs text-rose-600">Verified traveler</p>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-700">“{t.text}”</p>
                  <div className="mt-3 flex items-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-white shadow-xl hover:bg-emerald-600 transition"
      >
        <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
      </a>
    </div>
  );
}

export default App;
