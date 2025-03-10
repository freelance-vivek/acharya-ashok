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
          Ganesh Chaturthi is a significant festival celebrated by Hindus across
          various parts of India. This festival is celebrated on a grand scale
          in Maharashtra and Karnataka.
        </p>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Importance of Ganesh Chaturthi:",
    description: (
      <>
        <h5>Importance of Ganesh Chaturthi</h5>
        <p>
          According to the Puranas, Lord Ganesha was born on Ganesh Chaturthi.
          On this day, Hindus worship Lord Ganesha. Large idols of Lord Ganesha
          are installed in various prominent locations, and worshiped for nine
          days.
        </p>

        <h5>Ganesh Chaturthi Puja Vidhi</h5>
        <ul className="list-disc list-inside">
          <li>The idol of Lord Ganesha is installed.</li>
          <li>The idol is worshiped for nine days.</li>
          <li>
            On the ninth day, the idol is immersed in water amidst music and
            festivities.
          </li>
        </ul>
      </>
    ),
    badge: "",
    image: "",
  },
];

function GaneshChaturthiPooja() {
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
          Ganesh chaturthi pooja
        </motion.h1>
      </LampContainer>
      <TracingBeamDemo />
    </>
  );
}

export default GaneshChaturthiPooja;
