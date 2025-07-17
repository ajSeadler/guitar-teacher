// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import Lessons from "./Lessons";

const Home: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white px-6 font-sans">
        <section className="max-w-5xl mx-auto text-center pt-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Master the Guitar, One Note at a Time
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Personalized guitar lessons tailored to your style, goals, and skill
            level — whether you're a total beginner or a seasoned player.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            {/* Primary CTA */}
            <Link
              to="/lessons"
              className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg hover:from-indigo-600 hover:to-pink-600 transition"
            >
              Book a Lesson
            </Link>

            {/* Gradient border secondary CTA with rounded border */}
            <Link
              to="/about"
              className="relative inline-flex rounded-full p-[2px] text-white text-sm font-semibold hover:bg-gray-800 transition"
            >
              {/* Outer wrapper with gradient background acts as border */}
              <span
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500"
                aria-hidden="true"
              ></span>
              {/* Inner button content with solid background, rounded, and fills space */}
              <span className="relative block rounded-full bg-gray-900 px-6 py-3">
                Learn More
              </span>
            </Link>
          </div>
        </section>

        <section className="mt-24 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4 pb-24">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">Beginner Friendly</h3>
            <p className="text-gray-400 text-sm">
              Start from scratch with clear, step-by-step guidance. No prior
              experience needed.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">Custom Curriculum</h3>
            <p className="text-gray-400 text-sm">
              Lessons are built around your musical taste and learning pace. No
              cookie-cutter stuff.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-gray-400 text-sm">
              Learn in-person or online, weekdays or weekends — we work around
              your life.
            </p>
          </div>
        </section>
      </div>
      <Lessons />
    </>
  );
};

export default Home;
