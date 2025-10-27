import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-teal-500 text-white grid place-items-center font-bold">BH</div>
              <span className="font-semibold tracking-tight text-white">Best Holiday Planners</span>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Vizag–Araku specialists crafting memorable, hassle‑free holidays with local expertise.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 99999 99999</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@bestholidayplanners.in</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Vizag & Araku, Andhra Pradesh</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#vizag-araku" className="hover:text-white">Vizag–Araku</a></li>
                <li><a href="#packages" className="hover:text-white">Packages</a></li>
                <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Support</h4>
              <ul className="space-y-2">
                <li><a href="#faqs" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>

          {/* Mini enquiry */}
          <div className="rounded-xl bg-gray-900 p-4 ring-1 ring-white/10">
            <h4 className="text-white font-semibold">Quick Enquiry</h4>
            <form className="mt-3 grid grid-cols-2 gap-2">
              <input placeholder="Name" className="col-span-2 rounded-lg bg-gray-800 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <input placeholder="Phone" className="col-span-2 sm:col-span-1 rounded-lg bg-gray-800 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <input placeholder="Email" className="col-span-2 sm:col-span-1 rounded-lg bg-gray-800 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <button className="col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700 transition">
                <MessageCircle className="h-4 w-4" /> Send Enquiry
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Best Holiday Planners. All rights reserved.</p>
          <div className="mt-3 sm:mt-0 flex items-center gap-4">
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
