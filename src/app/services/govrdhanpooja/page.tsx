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
    title: "What is the meaning of Annaprasan sanskar pooja ?",
    description: (
      <>
        <p>
          Govardhan Puja is celebrated on the day after Diwali. It is also known
          as Annakoot. This festival holds great importance in Indian culture.
          During this festival, a direct connection between nature and humans is
          observed.
        </p>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Importance of Govardhan Puja:",
    description: (
      <>
        <p>
          During Govardhan Puja, cows are worshipped. According to the
          scriptures, cows are considered sacred, just like the Ganges River.
          Cows are also considered a symbol of Goddess Lakshmi. Just as Goddess
          Lakshmi provides happiness and prosperity, cows also provide health
          and wealth through their milk.
        </p>

        <h5>Procedure of Govardhan Puja</h5>
        <ul className="list-disc list-inside">
          <li>Cows are worshipped.</li>
          <li>Cows are bathed.</li>
          <li>Cows are dressed in new clothes.</li>
          <li>Cows are offered food and fruits.</li>
        </ul>
      </>
    ),
    badge: "",
    image: "",
  },
];

function GovrdhanPooja() {
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
          Govrdhan Pooja
        </motion.h1>
      </LampContainer>
      <TracingBeamDemo />
    </>
  );
}

export default GovrdhanPooja;
