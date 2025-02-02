import animation from "../animation"
import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"
import { FiArrowRight } from "react-icons/fi"
import buildForUs from "../assets/buildForUs.jpg"
import neverCompro from "../assets/neverCompro.jpg"
import dressForBest from "../assets/dressForBest.jpg"

const AboutUs = () => {
  return (
    <div className="bg-white" style={{ paddingTop: "75px" }}>
      <TextParallaxContent
        imgUrl={buildForUs}
        subheading="Collaborate"
        heading="Built for all of us."
      >
        <ExampleContent
          heading="Who are we"
          subHeading1="With over 30 years of excellence in the construction industry, we take pride in being a trusted name for industrial, residential, and commercial projects. At S.R. Constructions, we offer comprehensive services that cover every stage of your project, from design to completion."
          subHeading2="Our unwavering commitment to superior craftsmanship, customer satisfaction, and the highest safety standards sets us apart in the field."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={neverCompro}
        subheading="Quality"
        heading="Never compromise."
      >
        <ExampleContent
          heading="Our Team"
          subHeading1="Our team of highly skilled and experienced professionals is equipped to handle projects of any scale or complexity"
          subHeading2="We pride ourselves on delivering exceptional results on time and within budget, ensuring that every client’s vision is brought to life."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={dressForBest}
        subheading="Modern"
        heading="Dress for the best."
      >
        <ExampleContent
          heading="Our principals"
          subHeading1="Whether you are building a new industrial facility, a dream home, a commercial space, or require renovations, extensions, or repairs, we are your ideal partner."
          subHeading2="Our approach combines innovation, precision, and deep understanding of our clients needs to create spaces that inspire and endure."
        />
      </TextParallaxContent>

      <button
        className="fixed bottom-6 right-6 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center z-30 transform hover:scale-110 hover:bg-highlight hover:text-white hover:shadow-2xl transition-all"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }}
      >
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      </button>
    </div>
  )
}

const IMG_PADDING = 12

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[110vh] lg:h-[130vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  )
}

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  )
}

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [250, -250])
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center"
    >
      <p className="text-white mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-white text-center text-4xl font-bold md:text-7xl">
        {heading}
      </p>
    </motion.div>
  )
}

const ExampleContent = (props) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      {props.heading} <FiArrowRight className="inline animate-pulse" />
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-lg text-neutral-600 md:text-xl">
        {props.subHeading1}
      </p>
      <p className="mb-4 text-lg text-neutral-600 md:text-xl">
        {props.subHeading2}
      </p>
      <button className="w-fit rounded bg-highlight hover:text-highlight hover:bg-white hover:border-highlight border-2 border-transparent px-4 py-1 text-md text-white transition-colors">
        <a href="/contact">
          Learn more <FiArrowUpRight className="inline" />
        </a>
      </button>
    </div>
  </div>
)

export default animation(AboutUs)
