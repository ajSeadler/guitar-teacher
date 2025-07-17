// src/pages/About.tsx
import React from "react";

const About: React.FC = () => (
  <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white font-sans px-6 py-24 overflow-x-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      {/* Image container */}
      <div className="md:col-span-7 w-full rounded-[40px] overflow-hidden shadow-2xl shadow-pink-600/40 relative">
        {/* Abstract shape behind */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute -top-20 -left-20 w-[500px] h-[500px] rounded-[120px_0_120px_0] bg-gradient-to-tr from-indigo-600 via-pink-500 to-pink-400 opacity-30 filter blur-3xl"
          style={{ zIndex: 0 }}
        />
        {/* Main image */}
        <img
          src="/about-img.jpg"
          alt="AJ teaching guitar"
          className="
            w-full
            h-[350px]
            sm:h-[450px]
            md:h-[650px]
            lg:h-[700px]
            object-cover
            rounded-[40px]
            relative
            z-10
          "
          loading="lazy"
          draggable={false}
          style={{ maxWidth: "100%", height: "auto", minHeight: "350px" }}
        />
        {/* Floating vignette */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none rounded-[40px] bg-gradient-to-t from-black/70 via-transparent to-transparent"
          style={{ zIndex: 10 }}
        />
        {/* Floating shape overlay */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute -bottom-16 -right-16 w-32 h-32 bg-pink-600 rounded-full opacity-60 blur-3xl"
          style={{ zIndex: 0 }}
        />
      </div>

      {/* Text content */}
      <div className="md:col-span-5 flex flex-col gap-10 max-w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight max-w-full break-words">
          About AJ Seadler
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed max-w-full break-words">
          With over a decade performing worldwide, AJ combines professional
          stage experience with a highly personalized teaching approach that
          fits your unique goals.
        </p>

        <section className="space-y-6 max-w-full">
          <h2 className="text-3xl font-semibold border-b border-pink-500 pb-2 max-w-max">
            My Journey
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            From street corners to international festivals — AJ’s path has been
            rich and varied, providing real-world performance insight that
            informs every lesson.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            His teaching style balances solid fundamentals with your favorite
            songs for rapid progress and true joy in playing.
          </p>
        </section>

        <section className="flex flex-wrap gap-4 max-w-full">
          {[
            "Tailored Lessons",
            "Comprehensive Skill Building",
            "Supportive Guidance",
            "Flexible Scheduling",
            "Performance Coaching",
          ].map((value) => (
            <span
              key={value}
              className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-full font-semibold text-white text-sm shadow-lg whitespace-nowrap"
            >
              {value}
            </span>
          ))}
        </section>
      </div>
    </div>
  </main>
);

export default About;
