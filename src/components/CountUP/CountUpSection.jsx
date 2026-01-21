"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

const CountUpSection = () => {
  const countupItems = [
    {
      label: "Happy Customers",
      val: 467,
      unit: "+",
      img: "/healthcare.png",
    },
    {
      label: "Free Medicine",
      val: 1267,
      unit: "k",
      img: "/drugs.png",
    },
    {
      label: "Blood Donated",
      val: 713,
      unit: "+",
      img: "/blood-test.png",
    },
    {
      label: "Telemedicine",
      val: 432,
      unit: "k",
      img: "/defribillator.png",
    },
  ];
  return (
    <div>
      <div>
        <section className="relative py-20 min-h-screen flex items-center px-6 md:px-12 bg-[#489fb5] overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 items-center relative z-10">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-4">
                The Finest Design Agency
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                You convey the idea,
                <span className="text-gray-600">
                  we deliver a refined interface.
                </span>
              </h2>
              <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
                We’re a premier web design agency partnering with startups and
                founders to build high-impact digital products and websites.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-sky-700 text-white rounded-xl font-semibold hover:opacity-80 transition-all shadow-lg hover:shadow-xl active:scale-95">
                  More Details
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-all">
                  Our Portfolio
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6 w-full lg:w-auto">
              {countupItems.map((stat, idx) => (
                <div
                  key={idx}
                  className={`bg-white p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center transition-transform hover:-translate-y-2 ${idx % 2 !== 0 ? "mt-8" : ""}`}
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                    <Image
                      src={stat.img}
                      alt="icon"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    <CountUp end={stat.val} enableScrollSpy duration={3} />
                    {stat.unit}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-tighter">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CountUpSection;
