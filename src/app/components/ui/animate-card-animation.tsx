"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

interface Card {
  id: number
  contentType: 1 | 2 | 3 | 4 | 5 | 6
}

const cardData = {
  1: {
    title: "New York City",
    description: "450+ Universities • Cultural Hub",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    universities: "450+",
    avgCost: "$40,000/year"
  },
  2: {
    title: "London",
    description: "160+ Universities • Historic Excellence",
    image: "https://images.unsplash.com/photo-1605472075495-53461153f4e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    universities: "160+",
    avgCost: "£25,000/year"
  },
  3: {
    title: "Boston",
    description: "60+ Universities • Academic Center",
    image: "https://images.unsplash.com/photo-1693608231045-6c475e75a31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    universities: "60+",
    avgCost: "$42,000/year"
  },
  4: {
    title: "Toronto",
    description: "80+ Universities • Diverse Community",
    image: "https://images.unsplash.com/photo-1699363059417-aeda250390eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    universities: "80+",
    avgCost: "CAD 30,000/year"
  },
  5: {
    title: "Melbourne",
    description: "40+ Universities • Student-Friendly",
    image: "https://images.unsplash.com/photo-1602559227639-3bba8ce496df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    universities: "40+",
    avgCost: "AUD 35,000/year"
  },
  6: {
    title: "Sydney",
    description: "30+ Universities • Coastal Living",
    image: "https://images.unsplash.com/photo-1657622884558-cc7525f93638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    universities: "30+",
    avgCost: "AUD 38,000/year"
  },
}

const initialCards: Card[] = [
  { id: 1, contentType: 1 },
  { id: 2, contentType: 2 },
  { id: 3, contentType: 3 },
]

const positionStyles = [
  { scale: 1, y: 12 },
  { scale: 0.95, y: -16 },
  { scale: 0.9, y: -44 },
]

const exitAnimation = {
  y: 340,
  scale: 1,
  zIndex: 10,
}

const enterAnimation = {
  y: -16,
  scale: 0.9,
}

function CardContent({ contentType }: { contentType: 1 | 2 | 3 | 4 | 5 | 6 }) {
  const data = cardData[contentType]

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="flex h-[200px] w-full items-center justify-center overflow-hidden rounded-xl" style={{
        outline: "1px solid rgba(0, 0, 0, 0.1)",
        outlineOffset: "-1px"
      }}>
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full select-none object-cover"
        />
      </div>
      <div className="flex w-full items-center justify-between gap-2 px-3 pb-6">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-semibold text-[#1E293B]">{data.title}</span>
          <span className="text-sm text-[#64748B]">{data.description}</span>
        </div>
        <button className="flex h-10 shrink-0 cursor-pointer select-none items-center gap-0.5 rounded-full bg-[#4B6E48] pl-4 pr-3 text-sm font-medium text-white transition-all hover:bg-[#3d5a3a]">
          Explore
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
          >
            <path d="M9.5 18L15.5 12L9.5 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function AnimatedCard({
  card,
  index,
  isAnimating,
}: {
  card: Card
  index: number
  isAnimating: boolean
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2]
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index

  const exitAnim = index === 0 ? exitAnimation : undefined
  const initialAnim = index === 2 ? enterAnimation : undefined

  return (
    <motion.div
      key={card.id}
      initial={initialAnim}
      animate={{ y, scale }}
      exit={exitAnim}
      transition={{
        type: "spring",
        duration: 1,
        bounce: 0,
      }}
      style={{
        zIndex,
        left: "50%",
        x: "-50%",
        bottom: 0,
      }}
      className="absolute flex h-[280px] w-[380px] items-center justify-center overflow-hidden rounded-t-xl border-x border-t border-[#E2E8F0] bg-white p-1 shadow-lg will-change-transform sm:w-[640px]"
    >
      <CardContent contentType={card.contentType} />
    </motion.div>
  )
}

export default function AnimatedCardStack() {
  const [cards, setCards] = useState(initialCards)
  const [isAnimating, setIsAnimating] = useState(false)
  const [nextId, setNextId] = useState(4)

  const handleAnimate = () => {
    setIsAnimating(true)

    const nextContentType = ((cards[2].contentType % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6

    setCards([...cards.slice(1), { id: nextId, contentType: nextContentType }])
    setNextId((prev) => prev + 1)
    setIsAnimating(false)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center pt-2">
      <div className="relative h-[380px] w-full overflow-hidden sm:w-[780px]">
        <AnimatePresence initial={false}>
          {cards.slice(0, 3).map((card, index) => (
            <AnimatedCard key={card.id} card={card} index={index} isAnimating={isAnimating} />
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-10 -mt-px flex w-full items-center justify-center border-t border-[#E2E8F0] py-4">
        <button
          onClick={handleAnimate}
          className="flex h-9 cursor-pointer select-none items-center justify-center gap-1 overflow-hidden rounded-lg border border-[#E2E8F0] bg-white px-3 font-medium text-[#64748B] transition-all hover:bg-[#F8FAFC] active:scale-[0.98]"
        >
          Next City
        </button>
      </div>
    </div>
  )
}