"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Acharya Ji recently performed a beautiful Puja at our home with great devotion and care. The setup was stunning, with colorful decorations and well-arranged rituals. He explained everything clearly, making the experience meaningful. His presence brought peace and positivity, and we are truly grateful for his blessings.",
    name: "Sumit",
    // title: ' Student',
  },
  {
    quote:
      "We invited Acharya Ji for a Satyanarayan Katha in our nashik house , and it was a divine experience. His way of narrating the Katha and explaining its significance made us feel truly blessed. He also guided us on daily spiritual practices. Grateful for his wisdom",
    name: "VISHAL",
    // title: 'Piano Student',
  },
  {
    quote:
      "I attended a special event where Panditji performed the Mahamrityunjaya Jap. As soon as the recitation began, the entire atmosphere was filled with divinity and peace. Panditji's profound faith and the power of the mantras generated an extraordinary spiritual energy. The resonating sound of the mantras brought tranquility to my mind and evoked a unique sense of positivity. This experience was truly soul-soothing, filling me with spiritual awareness.🙏🙏😊",
    name: "Atharv Jharbade",
    // title: 'Vocal Student',
  },
  {
    quote:
      "I had a truly divine experience here! The puja and rituals were conducted with great dedication and precision. The pandit ji explained everything beautifully, making the whole process very spiritual and meaningful. The atmosphere was peaceful and sacred, creating the perfect setting for prayers. Highly recommended for anyone looking for an authentic and fulfilling spiritual experience..",
    name: "Deshbandhu Badhauliya",
    // title: 'Violin Student',
  },
  {
    quote:
      "Pandit Ji’s perspective on life has given me a true understanding of my own path. His wisdom and inspiration have transformed my way of thinking. The way he explained the significance of rituals and the deeper aspects of life has helped me realize the true essence of living—with simplicity, devotion, and sincerity.",
    name: "Mannuraj Shrivastava",
    // title: 'Music Production Student',
  },
];

function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolTestimonials;
