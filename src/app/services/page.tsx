"use client"
import React from "react"
import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"
import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import Link from "next/link"

import menu_service from "@/data/menu_service.json"

export default function Service() {
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
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl heading-primary--main "
        >
          SERVICE
        </motion.h1>
      </LampContainer>
      <div className="m-8 grid grid-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ">
        {menu_service.menu_service.map((item) => (
          <ThreeDCardDemo
            key={item.id}
            title={item.title}
            href={item.href}
            src={item.src}
            description={item.description}
          />
        ))}
      </div>
    </>
  )
}
interface ThreeDCardProps {
  title: string
  description: string
  src: string
  href: string
}
function ThreeDCardDemo({ title, description, src, href }: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var text-4xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-auto p-6 border ">
        <CardItem
          translateZ="50"
          className="text-3xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-lg max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={src}
            height="500"
            width="500"
            className="h-80 lg:w-full contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <Link href="#">
            {false ? (
              <CardItem
                translateZ={20}
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                vivek
              </CardItem>
            ) : null}
          </Link>
          <Link href={href}>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-lg font-normal dark:text-white"
            >
              view details →
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  )
}
