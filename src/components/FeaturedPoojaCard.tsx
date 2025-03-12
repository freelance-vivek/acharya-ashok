"use client"
import React from "react"
import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"
import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import Link from "next/link"

import menu_service from "@/data/menu_service.json"
import { Button } from "./ui/moving-border"

function FeaturedPoojaCard() {
  return (
    <>
      <div className="u-center-text u-margin-bottom-big mt-8">
        <h2 className="heading-secondary">Services</h2>
      </div>

      <div className="min-h-[80vh] py-8 px-4 md:m-8 justify-center bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {menu_service.menu_service.slice(0, 3).map((item) => (
            <ThreeDCardDemo
              key={item.id}
              title={item.title}
              href={item.href}
              src={item.src}
              description={item.description}
            />
          ))}
        </div>
        <div className="flex justify-center items-center mt-10">
          <Link href={"/services"}>
            <Button
              borderRadius="1.75rem"
              className="btn-header bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Services
            </Button>
          </Link>
        </div>
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

export function ThreeDCardDemo({
  title,
  description,
  src,
  href,
}: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var text-4xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-auto rounded-xl p-6 border ">
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
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          {/* <Link
            href="https://twitter.com/mannupaaji"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardItem
              translateZ={20}
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            ></CardItem>
          </Link> */}
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

export default FeaturedPoojaCard
