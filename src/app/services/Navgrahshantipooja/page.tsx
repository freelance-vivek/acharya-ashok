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
            className=" relative overflow-hidden rounded-2xl  py-[1rem]"
          >
            {item.badge ? (
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>
            ) : null}

            <p className="title-text paragraph-sevices ">{item.title}</p>

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
    title: "Why Perform Navagraha Puja?",
    description: (
      <>
        <p>
          Navagraha Puja is a prayer ritual dedicated to the nine celestial
          bodies in our solar system. These bodies are believed to have a
          profound impact on our lives and destinies. The nine planets included
          in Navagraha Puja are Sun, Moon, Mars, Mercury, Jupiter, Venus,
          Saturn, Rahu, and Ketu.
        </p>
        <p>
          {" "}
          People believe that these celestial bodies influence our fortunes and
          experiences. Therefore, performing Navagraha Puja helps us to seek the
          blessings of these planets and bring peace, prosperity, and happiness
          into our lives.
        </p>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Importance of Navagraha Puja",
    description: (
      <>
        <p>
          Navagraha Puja helps to balance the energy of the celestial bodies and
          reduce any negative impact on people's lives. This puja is like
          seeking help from the guardians in the sky, who help to make our lives
          happy and prosperous.
        </p>

        <p>
          Each celestial body has its own color, gemstone, and offering, which
          are used during the puja. For example, the color red is associated
          with Mars, and the color yellow is associated with Jupiter. During the
          puja, people use these colors, gemstones, and offerings to connect
          with the celestial bodies and receive their blessings.
        </p>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Benefits of Navagraha Puja",
    description: (
      <>
        <p>Performing Navagraha Puja can have several benefits, including:</p>
        <ul className="list-disc list-inside">
          <li>Attaining happiness and prosperity in life</li>
          <li>Reducing negative energy</li>
          <li>Achieving balance and peace in life</li>
          <li>Receiving blessings from the celestial bodies</li>
          <li>Experiencing positive changes in life</li>
        </ul>
      </>
    ),
    badge: "",
    image: "",
  },
]

function Kaalsarpdoshpooja() {
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
          className="mt-10 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent  heading-primary--main"
        >
          Navgrah shanti pooja
        </motion.h1>
      </LampContainer>
      <TracingBeamDemo />
    </>
  )
}

export default Kaalsarpdoshpooja
