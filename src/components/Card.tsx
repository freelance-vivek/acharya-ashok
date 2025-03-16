"use client"
import React, { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const t = [
  {
    name: "Maria Kate",
    role: "Photographer",
    image: "/path/to/maria.jpg", // Add your image path
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error.",
    rating: 4,
  },
  {
    name: "John Doe",
    role: "Web Developer",
    image: "/path/to/john.jpg", // Add your image path
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis.",
    rating: 4,
  },
  {
    name: "Anna Deynah",
    role: "UX Designer",
    image: "/path/to/anna.jpg", // Add your image path
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur.",
    rating: 4,
  },
]

const testimonials = [
  {
    quote:
      "Acharya Ji recently performed a beautiful Puja at our home with great devotion and care. The setup was stunning, with colorful decorations and well-arranged rituals. He explained everything clearly, making the experience meaningful. His presence brought peace and positivity, and we are truly grateful for his blessings.",
    name: "Sumit",
    rating: 4,
    // title: ' Student',
  },
  {
    quote:
      "We invited Acharya Ji for a Satyanarayan Katha in our nashik house , and it was a divine experience. His way of narrating the Katha and explaining its significance made us feel truly blessed. He also guided us on daily spiritual practices. Grateful for his wisdom",
    name: "VISHAL",
    rating: 4,
    // title: 'Piano Student',
  },
  {
    quote:
      "I attended a special event where Panditji performed the Mahamrityunjaya Jap. As soon as the recitation began, the entire atmosphere was filled with divinity and peace. Panditji's profound faith and the power of the mantras generated an extraordinary spiritual energy. The resonating sound of the mantras brought tranquility to my mind and evoked a unique sense of positivity. This experience was truly soul-soothing, filling me with spiritual awareness.🙏🙏😊",
    name: "Atharv Jharbade",
    rating: 4,
    // title: 'Vocal Student',
  },
  {
    quote:
      "I had a truly divine experience here! The puja and rituals were conducted with great dedication and precision. The pandit ji explained everything beautifully, making the whole process very spiritual and meaningful. The atmosphere was peaceful and sacred, creating the perfect setting for prayers. Highly recommended for anyone looking for an authentic and fulfilling spiritual experience..",
    name: "Deshbandhu Badhauliya",
    rating: 4,
    // title: 'Violin Student',
  },
  {
    quote:
      "Pandit Ji’s perspective on life has given me a true understanding of my own path. His wisdom and inspiration have transformed my way of thinking. The way he explained the significance of rituals and the deeper aspects of life has helped me realize the true essence of living—with simplicity, devotion, and sincerity.",
    name: "Mannuraj Shrivastava",
    rating: 4,
    // title: 'Music Production Student',
  },
]

export default function TestimonialCard() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <div className="TestimonialCard ">
      <div className="u-center-text u-margin-bottom-big mt-8">
        <h2 className="heading-secondary"> voice of success </h2>
      </div>
      <div className="relative max-w-5xl mx-auto px-4 py-16 ">
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-black lg:w-[55rem] max-h-[25rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-12 max-w-[60rem]"
            >
              <div className="flex flex-col items-center text-center">
                <blockquote className="max-w-2xl mx-auto mb-8">
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </blockquote>

                <div className="mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`inline-block mx-1 ${
                        i < testimonials[currentIndex].rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  {/* <p className="text-gray-500 dark:text-gray-400">
                    {testimonials[currentIndex]?.role}
                  </p> */}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
          >
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
          >
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
