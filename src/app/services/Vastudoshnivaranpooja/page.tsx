"use client"
import React from "react"
import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"
import VastuLogo from "../../../../public/images/vastu_dosh_nivaran_pooja.jpeg"
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
    title: "Vastu dosh nivaran pooja?",
    description: (
      <>
        <p>
          Vastu Dosh Puja is also known as Vastu Shanti Puja or Vastu Dosh
          Nivaran Puja. It is a ritual in which the deities of Vastu Shastra are
          worshiped. The purpose of this puja is to purify the place and create
          a flow of positive energy throughout the house.
        </p>

        <p>
          Vastu Shanti Puja brings good fortune, prosperity, and happiness to
          the home. This puja helps to make the lives of the residents of the
          house happy and prosperous.
        </p>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Benefits of Vastu Shanti Puja",
    description: (
      <>
        <p>Some benefits of performing Vastu Shanti Puja are:</p>

        <ul className="list-disc list-inside">
          <li>
            Positive energy enters the home and negative energy is removed.
          </li>
          <li>
            It brings harmony and balance among the five elements of the home.
          </li>
          <li>It helps to prevent unexpected disasters.</li>
          <li>It improves the beauty of the home.</li>
        </ul>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Remedies to Remove Vastu Dosh",
    description: (
      <>
        <ul className="list-disc list-inside">
          <li>
            Keep a conch shell in the temple of the home and blow it regularly.
          </li>
          <li>
            Install a bulb in the southeast direction of the kitchen and light
            it every day with attention.
          </li>
          <li>
            Hang a picture of Lord Shiva's family in the northeast direction.
          </li>
          <li>
            Plant a Bilva tree in the east or northwest direction of the home
            and water it regularly.
          </li>
        </ul>
      </>
    ),
    badge: "",
    image: "",
  },
]

function Vastudoshnivaranpooja() {
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
          Vastu dosh nivaran pooja
        </motion.h1>
      </LampContainer>

      <TracingBeamDemo />
    </>
  )
}

export default Vastudoshnivaranpooja
