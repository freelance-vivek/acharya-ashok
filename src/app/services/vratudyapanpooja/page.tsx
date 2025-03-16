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
    title: "What is the meaning of Annaprasan sanskar pooja ?",
    description: (
      <>
        <p>
          Vrat Udyapan Puja is an important ritual in Hinduism. It is believed
          that only after performing the Udyapan ritual, one can attain the
          complete benefits and Punya of the Vrat.
        </p>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Importance of Vrat Udyapan Puja:",
    description: (
      <>
        <ul className="list-disc list-inside">
          <li>
            During the Vrat, if any mistakes are made unknowingly, we seek
            forgiveness from the Lord during the Udyapan Puja.
          </li>
          <li>
            During the Udyapan, we perform charity and Havan according to our
            capacity and feed the Brahmins.
          </li>
          <li>
            We try to please the Lord by performing Vrat and seek the fruits of
            our Tapasya through the Udyapan ritual.
          </li>
        </ul>
      </>
    ),
    badge: "",
    image: "",
  },
]

function VratUdyapanPooja() {
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
          Vrat Udyapan Pooja
        </motion.h1>
      </LampContainer>

      <TracingBeamDemo />
    </>
  )
}

export default VratUdyapanPooja
