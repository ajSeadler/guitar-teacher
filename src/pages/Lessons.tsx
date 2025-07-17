// src/pages/Lessons.tsx
import React from "react";

const lessonPlans = [
  {
    title: "Single Lesson",
    features: [
      "1 × 60‑minute private session",
      "Custom practice roadmap",
      "Homework & technique drills",
    ],
    price: "$50 / lesson",
    cta: "Select",
  },
  {
    title: "5‑Lesson Bundle",
    features: [
      "5 × 60‑minute private sessions",
      "10% bundle savings",
      "Milestone progress reviews",
      "Email support between lessons",
    ],
    price: "$225 / bundle", // 5 × $50 = $250 − 10% = $225
    cta: "Select",
  },
  {
    title: "10‑Lesson Intensive",
    features: [
      "10 × 60‑minute private sessions",
      "15% bundle savings",
      "Deep‑dive technique modules",
      "Performance coaching + recording feedback",
    ],
    price: "$425 / bundle", // 10 × $50 = $500 − 15% = $425
    cta: "Select",
  },
];

const Lessons: React.FC = () => (
  <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black  text-white px-6 font-sans">
    {/* offset for fixed navbar */}
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Lesson Packages
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Choose the plan that fits your goals—whether it’s a one‑off deep dive
          or a savings‑packed bundle.
        </p>
      </section>

      {/* Plans Grid */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {lessonPlans.map((plan) => (
          <div
            key={plan.title}
            className="flex flex-col h-full bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur hover:bg-white/10 transition"
          >
            {/* Header */}
            <h2 className="text-2xl font-semibold mb-4">{plan.title}</h2>

            {/* Features */}
            <ul className="flex-grow space-y-2 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <span className="mr-2 mt-1 text-indigo-400">•</span>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xl font-semibold">{plan.price}</span>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-full transition">
                {plan.cta}
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  </main>
);

export default Lessons;
