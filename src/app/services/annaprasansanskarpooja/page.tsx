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
      <div className="text-2xl">
        <p>
          Annaprashan is one of the 16 sanskars performed in Hinduism. This
          sanskar marks the first time a baby is fed solid food other than milk.
          Through this sanskar, the baby is given permission to start eating
          solid food.
        </p>

        <p>
          Annaprashan is an important sanskar in Hinduism. This sanskar is
          typically performed when the baby is around six or seven months old.
          During this sanskar, the baby is fed solid food for the first time.
        </p>
      </div>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Procedure of Annaprashan Sanskar:",
    description: (
      <>
        <ul className="list-disc list-inside">
          <li>The baby is fed solid food for the first time.</li>
          <li>
            During the Annaprashan Sanskar, mantras such as "Shivau te stam
            vrihiyavavabalasavadomadhau" are chanted.
          </li>
          <li>
            After the Annaprashan Sanskar, a havan yajna is also performed for
            the better and brighter future of the child.
          </li>
        </ul>
      </>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Importance of Annaprashan Sanskar:",
    description: (
      <>
        <ul className="list-disc list-inside">
          <li>
            This sanskar gives permission to the baby to start eating solid
            food.
          </li>
          <li>
            This sanskar is performed for the better and brighter future of the
            baby.
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
          Annaprasan sanskar pooja
        </motion.h1>
      </LampContainer>
      <TracingBeamDemo />
    </>
  )
}

export default AnnaprashanSanskarPooja
