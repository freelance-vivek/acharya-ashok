"use client"
import React from "react"
import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"

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
  )
}
const dummyContent = [
  {
    title: "What is Pitra dosh pooja ?",
    description: (
      <div className="text-2xl">
        <p>
          Pitra Dosh Puja is a Hindu ritual performed to appease the souls of
          one's ancestors. It is believed that if the ancestors are not at
          peace, they can cause various problems in the lives of their
          descendants. The puja is performed to seek forgiveness and blessings
          from the ancestors.
        </p>
      </div>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Symptoms and Remedies of Pitru Dosh:",
    description: (
      <>
        <p>
          Pitru Dosh is a condition where a person needs to perform certain
          rituals to pacify the souls of their ancestors. Some symptoms of Pitru
          Dosh are:
        </p>
        <ul className="list-disc list-inside">
          <li>
            A peepal tree growing in the courtyard or in the cracks of the house
            without being planted
          </li>
          <li>Facing obstacles in career and business despite hard work</li>
          <li>Children falling ill frequently</li>
          <li>Frequent conflicts among family members</li>
          <li>Frequent minor accidents</li>
          <li>Obstacles in the progress of the family</li>
          <li>Continuous conflict in the house</li>
          <li>Problems related to marriage and children</li>
        </ul>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Some remedies for Pitru Dosh are:",
    description: (
      <>
        <ul className="list-disc list-inside">
          <li>Perform tarpan and pind daan during Pitru Paksha</li>
          <li>Feed and donate to Brahmins</li>
          <li>
            Offer water, flowers, milk, and black sesame seeds to the peepal
            tree
          </li>
          <li>Light a lamp with oil in the southern direction of the house</li>
          <li>Feed, donate, or help a poor girl get married.</li>
        </ul>
      </>
    ),
    badge: "",
    image: "",
  },
]

function PitradoshPooja() {
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
          Pitra Dosh Pooja
        </motion.h1>
      </LampContainer>
      <TracingBeamDemo />
    </>
  )
}

export default PitradoshPooja
