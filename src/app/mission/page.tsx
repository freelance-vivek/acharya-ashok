"use client"
import React from "react"
import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

const words = `Acharya Ji firmly believes that in today's world, puja path and karma
          kand have become commercialized. As a result, uneducated,
          inexperienced, and insensitive individuals have also started
          performing these rituals. Additionally, most yajamans lack knowledge
          about puja procedures and karma kand methods, making them vulnerable
          to exploitation by unscrupulous individuals. Consequently, yajamans
          fail to achieve their desired objectives, leading to increased mental
          distress. Acharya Ji's objective is to: Provide yajamans with accurate
          information Educate yajamans on puja procedures and their
          benefits/drawbacks after ensuring they have proper knowledge Perform
          pujas with minimal and fair dakshina (donation) Acharya Ashok Dwivedi
          Ji aims to empower yajamans with knowledge, freeing them from mental
          turmoil and fostering positive change in their lives.
`

export default function Mission() {
  return (
    <div className=" h-[50rem] relative">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl heading-primary--main"
        >
          Mission
        </motion.h1>
      </LampContainer>
      <div className="flex items-center justify-center w-full flex-col px-4 h-full mt-[10rem] relative z-20">
        <div className="u-center-text u-margin-bottom-big mt-8">
          <h2 className="heading-secondary">
            Acharya Ashok Dwivedi Ji's Mission
          </h2>
        </div>

        <div className="max-w-5xl mx-auto text-3xl  text-neutral-700 dark:text-neutral-400 text-center text-justify pt-6 bg-white shadow-xl dark:bg-black p-[5rem] mt-[5rem]">
          <TextGenerateEffect words={words} duration={0.1} />
        </div>
      </div>
    </div>
  )
}
