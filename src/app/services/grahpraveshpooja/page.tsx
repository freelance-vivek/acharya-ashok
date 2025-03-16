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
    title: "Grah pravesh pooja?",
    description: (
      <>
        <p>
          After buying or building a new house, a Grah pravesh pooja is
          performed before living in it. This puja is mainly done to express
          gratitude to God.
        </p>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Some things related to Grah pravesh pooja",
    description: (
      <>
        <ul className="list-disc list-inside">
          <li>
            It is important to pay attention to the auspicious day, date, day,
            and constellation for the Grah pravesh pooja.
          </li>
          <li>
            The months of Magh, Phalguna, Vaishakh, and Jyeshtha are considered
            auspicious for the Grah pravesh pooja.
          </li>
          <li>
            Except for Amavasya and Purnima, the second, third, fifth, sixth,
            seventh, tenth, eleventh, and thirteenth days of the Shukla Paksha
            are considered auspicious for housewarming.
          </li>
          <li>
            It is considered auspicious to enter the house on Monday, Wednesday,
            Thursday, and Friday.
          </li>
          <li>
            Grah pravesh pooja can include the establishment of a kalash, havan,
            general puja, and recitation of the Sundarkand.
          </li>
          <li>Milk should be boiled on the day of the Grah pravesh pooja.</li>
          <li>
            Coconuts should be broken before entering the house on the day of
            the Grah pravesh pooja.
          </li>
          <li>
            On the day of the Grah pravesh pooja, the right foot should be used
            to enter the house.
          </li>
          <li>
            It is advisable to sleep in the same house on the night of the Grah
            pravesh pooja.
          </li>
        </ul>
      </>
    ),
    badge: "",
    image: "",
  },
]

function Grahpraveshpooja() {
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
          Grah pravesh pooja
        </motion.h1>
      </LampContainer>
      <TracingBeamDemo />
    </>
  )
}

export default Grahpraveshpooja
