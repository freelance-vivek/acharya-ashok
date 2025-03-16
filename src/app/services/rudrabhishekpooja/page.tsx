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
    title: "What is the meaning of Rudrabhishek pooja ?",
    description: (
      <div className="text-2xl">
        <p>
          Rudrabhishek is a sacred ritual of worshiping Lord Shiva. In this
          ritual, the Shivling is bathed with water, milk, curd, honey, ghee,
          Panchamrit, sandalwood, sesame, rice, turmeric, vermilion, belpatra,
          flowers of Ankada, lotus flowers, and leaves of Shami, among other
          things. Additionally, chanting of mantras is also performed. It is
          believed that performing Rudrabhishek pleases Lord Shiva and he
          bestows his blessings upon the devotees.
        </p>
      </div>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Rudrabhishekam Procedure:",
    description: (
      <>
        <p>
          {" "}
          Rudrabhishekam is an important Hindu ritual, in which Lord Shiva is
          worshiped and abhishekam is performed. Here is the procedure for
          Rudrabhishekam:
        </p>

        <ul className="list-disc list-inside">
          <li>
            Clean the puja place and keep the Shivalinga in the north direction.
          </li>
          <li>
            Install the idols of Lord Ganesha and Lord Nandi and worship them.
          </li>
          <li>
            Fill a kalash with sacred water and draw a swastika and mangal
            kalash on it.
          </li>
          <li>
            Put supari, coconut, panchratna, coins, akshat, roli, chandan, and
            red thread in the kalash.
          </li>
          <li>Perform abhishekam on the Shivalinga with Ganga water.</li>
          <li>
            Then, perform abhishekam on the Shivalinga with milk, curd, ghee,
            honey, Ganga water, panchamrit, and chandan.
          </li>
          <li>
            After abhishekam, offer flowers, bilva leaves, and dhoop to the
            Shivalinga.
          </li>
          <li>Finally, perform aarti and distribute prasad.</li>
        </ul>
      </>
    ),
    badge: "",
    image: "",
  },
]

function RudrabhishekPooja() {
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
          Rudrabhishek Pooja
        </motion.h1>
      </LampContainer>
      <TracingBeamDemo />
    </>
  )
}

export default RudrabhishekPooja
