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
    title: "Why Perform Satyanarayan Katha Pooja  ?",
    description: (
      <p>
        Satyanarayan Katha Puja is an important Hindu ritual, in which Lord
        Vishnu is worshiped. The main purpose of this puja is to worship Satya
        and Narayan (Vishnu).
      </p>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Meaning of Satyanarayan Katha Pooja:",
    description: (
      <>
        <p>
          The meaning of Satyanarayan Katha Puja is to worship Satya as Narayan
          (Vishnu). It also means that in this world, only Lord Narayan is the
          truth, and everything else is Maya.
        </p>
        <p>
          The worship of God is done in many forms, one of which is the
          Satyanarayan form of God described in this story. Its original text
          has about 170 verses in Sanskrit language, which are divided into five
          chapters.
        </p>
        <p>
          The two main themes of this story are forgetting the resolve and
          disrespecting the prasad. Through small stories in different chapters
          of the Vrat Katha, it is told that what kind of problems come if the
          truth is not followed.
        </p>
      </>
    ),
    badge: "",
    image: "",
  },

  {
    title: "Method of Satyanarayan Pooja:",
    description: (
      <>
        <p>
          For Satyanarayan Puja, apart from banana leaves and fruits,
          panchamrit, panchagavya, supari, paan, til, moli, roli, kumkum, and
          durva are required. For Satyanarayan Puja, panchamrit is made by
          mixing milk, honey, banana, Ganga water, tulsi leaves, and dry fruits,
          which is very dear to God.
        </p>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Prasad:",
    description: (
      <>
        <p>
          In Satyanarayan Puja, apart from fruits and sweets, a prasad called
          panjiri is made by roasting flour and mixing sugar, which is also
          offered to God.
        </p>
      </>
    ),
    badge: "",
    image: "",
  },
]

function SatyaNarayanKathaPuja() {
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
          Satya Narayan Katha Pooja
        </motion.h1>
      </LampContainer>
      <TracingBeamDemo />
    </>
  )
}

export default SatyaNarayanKathaPuja
