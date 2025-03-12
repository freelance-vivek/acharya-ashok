"use client"
import React from "react"
import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"
import KaalsarLogo from "../../../../public/images/Kaalsarpdoshpooja.jpeg"
import Image from "next/image"

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
    title: "What is the meaning of Kala Sarpa Dosha?",
    description: (
      <>
        <p>
          If a person has killed or caused the death of an innocent animal or a
          snake during his/her lifetime, then they will have the Kaal Sarp Yog
          in their Kundlis in their next birth. It is also said that those with
          Kaal Sarp Yog in their horoscope have to take a rebirth to fulfill
          their unfulfilled desires.
        </p>
      </>
    ),
    badge: "",
    image: "/images/Kaalsarpdoshpooja.jpeg",
  },
  {
    title: "Effects of Kaal Sarp Yog:",
    description: (
      <>
        <p>
          The effects of Kaal Sarp Yog can be very deep on a person's life. This
          yog can cause a person to face many types of problems, such as:
        </p>
        <ul className="list-disc list-inside">
          <li> Financial problems</li>
          <li>Health problems</li>
          <li>Marital problems</li>
          <li>Family problems</li>
          <li>Mental stress and anxiety</li>
        </ul>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Remedies for Kaal Sarp Yog:",
    description: (
      <>
        <p>
          There are many remedies that can be done to alleviate the effects of
          Kaal Sarp Yog, such as:
        </p>
        <ul className="list-disc list-inside">
          <li>Worshiping Lord Shiva</li>
          <li>Worshiping snakes</li>
          <li>Performing Kaal Sarp Yog Nivaran Puja</li>
          <li>
            Astrological remedies such as wearing gemstones, chanting mantras,
            etc.
          </li>
        </ul>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "How long does Sarpa Dosha last?",
    description: (
      <>
        <ul className="list-disc list-inside">
          <li>33 Years</li>
          <li>
            KalaSarpa Dosha After 33 Years: When all the planets are between
            Rahu and Ketu, it is called as Kala Sarpa.
          </li>
        </ul>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "What is Kala Sarpa Dosha effects?",
    description: (
      <>
        <p>
          Kaal Sarpaa Dosha is a planetary combination with Rahu and Ketu on one
          side and the other planets on other side. As one would know, in
          astrology, Rau and Ketu is Shadow planet and not planets in reality,
          thus Kaal Sarpaa Dosha will control the strength of the rest of the
          planets by helming them under their grip.
        </p>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "How many types of Kala Sarpa Dosha are there?",
    description: (
      <>
        <ul className="list-disc list-inside">
          <li>12 types</li>
          <li>
            Types of Kala Sarpa Dosha. There can be 12 types of Kala Sarpa Yoga
            according to the Placement of Rahu and Ketu.
          </li>
        </ul>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "How do I know if I have Kaal Sarp Dosh?",
    description: (
      <>
        <p>
          Kaal sarp yog or kal sarp dosh is malefic astrological combination of
          planets in a person's birth chart which has detrimental effect. A
          person is said to have Kaalsarp dosh when all the 7 planets in his
          birth chart are place between Rahu and Ketu.
        </p>
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
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Kaalsarp dosh pooja
        </motion.h1>
      </LampContainer>
      <TracingBeamDemo />
    </>
  )
}

export default Kaalsarpdoshpooja
