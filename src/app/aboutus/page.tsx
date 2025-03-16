"use client"
import React from "react"
import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"
import Image from "next/image"

const dummyContent = [
  {
    title: "Acharya Ashok Dwivedi Ji",
    description: (
      <>
        <p>
          Acharya Ashok Dwivedi Ji (born April 10, 1973) is a distinguished
          Vedacharya, Jyotishacharya, and spiritual guide. With over 29 years of
          experience in this field, he has guided thousands of people in life
          through Vedic traditions, astrology, and spiritual remedies. Acharya
          Ji is well-versed in the Vedas, Upanishads, and Jyotish Shastra, and
          is renowned for his accurate astrological analysis, karma kand, and
          spiritual counseling.
        </p>
      </>
    ),
    image: "/images/arch.jpeg",
  },
  {
    description: (
      <>
        <p>
          Having developed an interest in Sanskrit and Vedic studies from an
          early age, Acharya Ji acquired expertise in this field through
          extensive research and study. He is particularly famous for Kalsarp
          Dosh Nivaran Puja, Grah Shanti Yagya, Vastu Shastra consultation, and
          auspicious karma kand. His puja methods and astrological remedies have
          helped countless individuals achieve balance and positive energy in
          life.
        </p>
      </>
    ),
  },
  {
    description: (
      <>
        <p>
          Acharya Ji's mission is to make Vedic knowledge relevant in the modern
          era and empower people spiritually and mentally. With over three
          decades of experience, he is adept at presenting the profound secrets
          of Indian culture and astrological science in a simple and effective
          manner.
        </p>
      </>
    ),
  },
]

function TracingBeamDemo() {
  return (
    <div className="px-6 ">
      <div className="max-w-4xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 ">
            {item.title ? (
              <div className="text-title-bg mb-8">
                <p className="title-text">{item.title}</p>
              </div>
            ) : null}

            <div className="paragraph-aboutus prose prose-sm dark:prose-invert">
              {item?.image && (
                <figure className="story__shape">
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="140"
                    width="240"
                    className="rounded-lg mb-10 object-cover "
                  />
                </figure>
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AboutUs() {
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
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl heading-primary--main"
        >
          ABOUT US
        </motion.h1>
      </LampContainer>
      <TracingBeamDemo />
    </>
  )
}
