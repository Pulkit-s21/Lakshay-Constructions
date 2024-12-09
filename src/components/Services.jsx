import { motion } from "framer-motion"
import animation from "../animation"
import { Link } from "react-router-dom"
import { FiArrowUpRight } from "react-icons/fi"

const Services = () => {
  const servicePageData = [
    {
      service: "Architectural Design and Planning",
      mobileDetail:
        "We create innovative and functional architectural designs tailored to your vision, ensuring aesthetics and efficiency in every project. Our expert planning services guide your project from concept to completion, optimizing space, sustainability, and compliance with local regulations.",
      order: "lg:order-last",
    },
    {
      service: "Building Permits and Approvals",
      mobileDetail:
        "We assist in obtaining all necessary permits and approvals for your construction projects, ensuring compliance with local regulations. Our streamlined process saves you time and ensures hassle-free authorization for your building plans.",
      order: "lg:order-first",
    },
    {
      service: "Site Preparation and Excavation",
      mobileDetail:
        "We ensure your project starts on solid ground with expert site clearing, grading, and leveling for optimal construction readiness. Our precision excavation services handle everything from foundation digging to trenching, tailored to meet your construction needs efficiently.",
      order: "lg:order-last",
    },
    {
      service: "Foundation and Framing",
      mobileDetail:
        "Our expert team ensures robust and durable foundations, providing the essential support for long-lasting structures. We specialize in precise and efficient framing solutions, creating the perfect framework for your construction project.",
      order: "lg:order-first",
    },
    {
      service: "Plumbing and Electrical Work",
      mobileDetail:
        "Expert solutions for all your plumbing needs, including installations, repairs, and maintenance, ensuring seamless water flow and drainage systems. Reliable and efficient electrical installations, repairs, and upgrades, prioritizing safety and quality for homes and businesses.",
      order: "lg:order-last",
    },
    {
      service: "Flooring and Painting",
      mobileDetail:
        "Transform your spaces with durable and stylish flooring solutions, tailored to meet your aesthetic and functional needs. Revitalize your walls with premium painting services, offering vibrant finishes and long-lasting protection.",
      order: "lg:order-first",
    },
    {
      service: "Roofing and Siding",
      mobileDetail:
        "We offer durable and expertly installed roofing solutions, ensuring protection and style for your property. Our premium siding services enhance your building's appearance while providing long-lasting weather resistance.",
      order: "lg:order-last",
    },
    {
      service: "Landscaping and Fencing",
      mobileDetail:
        "ransform outdoor spaces into lush, aesthetically pleasing environments with our expert design and maintenance services. Ensure privacy and security with durable, custom-designed fencing solutions tailored to your needs.",
      order: "lg:order-first",
    },
  ]

  return (
    <div
      className="grid grid-cols-1 gap-2 lg:gap-10 place-items-center"
      style={{ paddingTop: "75px" }}
    >
      <p className="font-Vietnam text-2xl lg:text-4xl font-semibold text-primary-purple">
        Our Services
      </p>
      {servicePageData.map((data, idx) => {
        return (
            //TODO: Add service images
          <ServicePageDiv
            key={idx}
            service={data.service}
            mobileDetail={data.mobileDetail}
            src={data.src}
            order={data.order}
          />
        )
      })}
    </div>
  )
}

const ServicePageDiv = ({ src, service, mobileDetail, order }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-44 p-4">
      <img
        loading="lazy"
        className="rounded-2xl md:max-w-xl self-center"
        src={src}
        alt="Service Image"
      />
      <div
        className={`flex flex-col gap-4 justify-start items-center text-center lg:text-start lg:items-start font-Vietnam ${order}`}
      >
        <p className="font-Vietnam font-semibold uppercase text-xl lg:text-2xl">
          {service}
        </p>
        <p className="text-sm md:text-base max-w-[50ch] xl:max-w-[45ch] text-neutral-500">
          {mobileDetail}
        </p>
        <button className="rounded bg-highlight px-4 py-1 text-md text-white transition-colors hover:bg-blue-500 w-fit">
          <Link href="/contact">
            Learn more <FiArrowUpRight className="inline" />
          </Link>
        </button>
      </div>
    </div>
  )
}

export default animation(Services)
