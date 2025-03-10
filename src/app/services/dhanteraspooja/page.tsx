"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

function TracingBeamDemo() {
  return (
    <div className="px-6 flex">
      <div className="max-w-7xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div
            key={`content-${index}`}
            className="mb-10 relative overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-black p-[5rem]"
          >
            {item.badge ? (
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>
            ) : null}

            <p className="text-5xl mb-4">{item.title}</p>

            <div className="text-2xl  prose prose-sm dark:prose-invert">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
const dummyContent = [
  {
    title: "What is the meaning of Dhanteras  pooja ?",
    description: (
      <>
        <p>
          Dhanteras Puja is celebrated on the 13th day of the Krishna Paksha of
          the Kartik month. On this day, Lord Dhanvantari emerged from the ocean
          with the pot of nectar during the Samudra Manthan, hence this day is
          known as Dhanteras or Dhantrayodashi.
        </p>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Importance of Dhanteras Pooja:",
    description: (
      <>
        <ul className="list-disc list-inside">
          <li>Lord Dhanvantari is worshipped on this day.</li>
          <li>
            Worshipping Lord Dhanvantari on this day is believed to bring health
            and wealth.
          </li>
          <li>
            On this day, people light diyas in their homes and worship Lord
            Dhanvantari.
          </li>
        </ul>
      </>
    ),
    badge: "",
    image: "",
  },
];

function AnnaprashanSanskarPooja() {
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Dhanteras pooja
        </motion.h1>
      </LampContainer>
      <TracingBeamDemo />
    </>
  );
}

export default AnnaprashanSanskarPooja;
