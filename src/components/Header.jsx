import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-teal-500 text-white grid place-items-center font-bold">BH</div>
            <span className="font-semibold tracking-tight text-gray-800">Best Holiday Planners</span>
          </a>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#" className="hover:text-teal-600">Home</a>
            <a href="#vizag-araku" className="hover:text-teal-600">Vizag–Araku</a>
            <a href="#packages" className="hover:text-teal-600">Packages</a>
            <a href="#reviews" className="hover:text-teal-600">Reviews</a>
            <a href="#faqs" className="hover:text-teal-600">FAQs</a>
            <a href="#contact" className="hover:text-teal-600">Contact</a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-teal-200 px-3 py-2 text-teal-600 hover:bg-teal-50 transition"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-4 py-2 text-white shadow-sm hover:bg-teal-700 transition"
            >
              <Phone className="h-4 w-4" />
              <span>Plan My Trip</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
