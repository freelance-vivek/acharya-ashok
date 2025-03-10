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
          Namkaran Sanskar is an important Sanskar that is performed after the
          birth of a child. This Sanskar is performed on the 12th day after the
          birth of the child. Through this Sanskar, an attempt is made to
          provide the newly born child with a beneficial and auspicious
          environment.
        </p>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Purpose of Namkaran Sanskar:",
    description: (
      <>
        <p>
          The purpose of Namkaran Sanskar is to liberate the individual from
          their past negative tendencies and to acknowledge and appreciate their
          positive tendencies. During this ritual, the environment should be
          created to foster the innate positive tendencies and aspirations of
          the child.
        </p>

        <p>
          There should be no discrimination based on the gender of the child
          during Namkaran Sanskar. Both male and female children should be
          treated with equal importance and respect.
        </p>

        <h5>Absence of Gender Discrimination in Indian Culture</h5>
        <p>
          Indian culture does not have any gender-based discrimination. A
          virtuous daughter is considered equal to ten sons. "Dasha putra-sama
          kanya yasya shilavati suta." On the other hand, a son can also be a
          destroyer of the family's moral values. "Jimi kaputa ke upaje kula
          sad-dharma nasahim."
        </p>

        <h5>Purpose of Namkaran Sanskar</h5>
        <p>
          Therefore, whether it is a son or a daughter, the purpose of Namkaran
          Sanskar is to eliminate the undesirable tendencies within the child
          and to create a flow towards the best. The purpose of Namkaran Sanskar
          is to give the child a good and happy life, not to discriminate based
          on gender.
        </p>
      </>
    ),
    badge: "",
    image: "",
  },
];

function NamkaranSanskarPooja() {
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
          Namkaran Sanskar Pooja
        </motion.h1>
      </LampContainer>
      <TracingBeamDemo />
    </>
  );
}

export default NamkaranSanskarPooja;
