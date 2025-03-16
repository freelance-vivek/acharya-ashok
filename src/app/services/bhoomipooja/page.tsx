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
    title: "What is the meaning ofBhoomi pooja ?",
    description: (
      <>
        <p>
          In the scriptures of Sanatan Dharma, the earth or land is given the
          status of mother. Our earth mother takes care of the entire universe.
          The earth mother has within her all the necessities of life such as
          food, air, water, and precious stones.
        </p>

        <p>
          Our scriptures state- "Matrabhoomi: putro aham prithivyah." Meaning,
          the earth is our mother, and we are all her children. It becomes our
          duty to worship and adore her in a proper manner.
        </p>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Procedure of Bhoomi Pujan:",
    description: (
      <>
        <ul className="list-disc list-inside">
          <li>A cow should be made to graze on the land.</li>
          <li>
            The land should be plastered with cow dung, Ganga water, and cow
            urine.
          </li>
          <li>A special mantra should be recited during Bhoomi Pujan.</li>
          <li>
            After Bhoomi Pujan, construction work can be started on that site.
          </li>
        </ul>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Importance of Bhoomi Pujan:",
    description: (
      <>
        <p>
          Bhoomi Pujan is an important ritual in Hinduism. When we buy a new
          land and plan to construct a building on it, we should perform Bhoomi
          Pujan before starting the construction work.
        </p>
        <p>
          The purpose of Bhoomi Pujan is to pray to the gods and goddesses,
          including the goddess of the earth, Lord Vastu, and the gods and
          goddesses of the area, to grant us permission to construct a building
          on that land.
        </p>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Benefits of Bhoomi Pujan:",
    description: (
      <>
        <p>Performing Bhoomi Pujan has several benefits:</p>
        <ul className="list-disc list-inside">
          <li>It removes negativity and brings positivity to the land.</li>
          <li>It is essential to pray to the underground living beings.</li>
          <li>
            If any living being is harmed during the construction process, the
            owner of the land is held responsible, hence Bhoomi Pujan is
            performed to seek forgiveness for any unintentional harm caused.
          </li>
          <li>
            Performing Bhoomi Pujan eliminates all the sins related to the
            construction of the house.
          </li>
        </ul>
      </>
    ),
    badge: "",
    image: "",
  },
]

function AnnaprashanSanskarPooja() {
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
          Bhoomi pooja
        </motion.h1>
      </LampContainer>
      <TracingBeamDemo />
    </>
  )
}

export default AnnaprashanSanskarPooja
