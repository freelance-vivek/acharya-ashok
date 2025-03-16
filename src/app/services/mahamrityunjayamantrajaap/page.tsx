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
    title: "Why PerformMaha Mrityunjaya Mantra?",
    description: (
      <>
        <p>
          The Maha Mrityunjaya Mantra, also known as the Mrit Sanjivani Mantra,
          is a powerful and sacred mantra in Hinduism. Chanting this mantra can
          have several benefits, including:
        </p>

        <p>
          Om Haum Joom Sah Om Bhurbhuvah Svah Om Tryambakam Yajamahe Sugandhim
          Pushtivardhanam Urvarukamiva Bandhanan Mrityor Mukshiya Mamritat Om
          Svah Bhuvah Bhuh Om Sah Joom Haum Om.
        </p>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Chanting Maha Mrityunjaya Mantra:",
    description: (
      <>
        <h5>
          According to the scriptures, chanting this mantra can even give life
          to a dying person. Additionally, this mantra provides several other
          benefits, such as:{" "}
        </h5>
        <ul className="list-disc list-inside">
          <li>Attaining happiness and prosperity in life</li>
          <li>Removing negative energy</li>
          <li>Achieving balance and peace in life</li>
          <li>Receiving the blessings of Lord Shiva</li>
        </ul>
      </>
    ),
    badge: "",
    image: "",
  },
]

function MahaMrityunJayaMantraJaap() {
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
          Maha Mrityunjaya Mantra
        </motion.h1>
      </LampContainer>
      <TracingBeamDemo />
    </>
  )
}

export default MahaMrityunJayaMantraJaap
