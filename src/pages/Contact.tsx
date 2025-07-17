// src/pages/Contact.tsx
import React from "react";

const Contact: React.FC = () => (
  <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white font-sans px-6 py-24 overflow-x-hidden flex items-center">
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
      {/* Left: Contact Info */}
      <section className="space-y-8 max-w-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]">
          Contact
        </h1>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-md tracking-wide">
          I’m here to help you achieve your guitar goals with personalized
          lessons and expert guidance. Reach out anytime — I respond promptly
          and look forward to connecting.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-pink-500 tracking-widest uppercase mb-1 border-b border-pink-500 pb-1 max-w-max">
              Email
            </h2>
            <a
              href="mailto:ajseadlerguitar@gmail.com"
              className="text-indigo-400 hover:text-indigo-300 transition-colors break-all font-medium text-base md:text-lg"
            >
              ajseadlerguitar@gmail.com
            </a>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-pink-500 tracking-widest uppercase mb-1 border-b border-pink-500 pb-1 max-w-max">
              Phone
            </h2>
            <a
              href="tel:+12345678900"
              className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium text-base md:text-lg"
            >
              (123) 456-7890
            </a>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-pink-500 tracking-widest uppercase mb-1 border-b border-pink-500 pb-1 max-w-max">
              Location
            </h2>
            <p className="text-gray-400 font-medium tracking-wide max-w-xs text-sm md:text-base">
              Louisville, Kentucky · Virtual Lessons Available
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-pink-500 tracking-widest uppercase mb-1 border-b border-pink-500 pb-1 max-w-max">
              Hours
            </h2>
            <p className="text-gray-400 font-medium tracking-wide max-w-xs text-sm md:text-base">
              Monday – Friday · 10AM – 6PM EST
            </p>
          </div>
        </div>
      </section>

      {/* Right: Callout & Tags */}
      <section className="max-w-lg flex flex-col justify-center gap-10">
        <div className="bg-white/5 rounded-3xl p-8 shadow-lg backdrop-blur-sm border border-white/20">
          <h3 className="text-lg md:text-xl font-semibold mb-3 tracking-wide text-pink-400">
            Ready to Start?
          </h3>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg font-medium">
            Book your first lesson today and join the many students mastering
            guitar with tailored, expert instruction.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {[
            "Beginner to Advanced",
            "Live & Virtual Sessions",
            "Personalized Curriculum",
            "Flexible Scheduling",
            "Performance Coaching",
          ].map((tag) => (
            <span
              key={tag}
              className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-full font-semibold text-white text-sm md:text-base shadow-lg whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  </main>
);

export default Contact;
