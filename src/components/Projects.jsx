import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBuilding,
  faShop,
  faBuildingColumns,
  faWarehouse,
  faHospital,
  faHouseChimney,
  faStore,
  faTents,
} from "@fortawesome/free-solid-svg-icons"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { motion } from "framer-motion"

export const Projects = () => {
  return (
    <motion.div
      style={{ paddingTop: "75px" }}
      className="px-2"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      //   exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <VerticalTimeline lineColor="#71B706">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2004-2017"
          iconStyle={{ background: "#ffffff" }}
          icon={<FontAwesomeIcon icon={faBuilding} />}
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Project 1
          </h3>
          <p className="">Lorem ipsum dolor sit amet.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017-2019"
          iconStyle={{ background: "#ffffff", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faShop} />}
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Project 2
          </h3>
          <p className="text-lg vertical-timeline-element-subtitle">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="">Lorem ipsum dolor sit amet.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2022"
          iconStyle={{ background: "#ffffff", color: "red" }}
          icon={<FontAwesomeIcon icon={faBuildingColumns} />}
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Project 3
          </h3>
          <p className="text-lg vertical-timeline-element-subtitle">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="">Lorem ipsum dolor sit amet.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019"
          iconStyle={{ background: "#ffffff" }}
          icon={<FontAwesomeIcon icon={faWarehouse} />}
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Project 4
          </h3>
          <p className="text-lg vertical-timeline-element-subtitle">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="">College</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020"
          iconStyle={{ background: "#ffffff" }}
          icon={<FontAwesomeIcon icon={faHospital} />}
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Project 5
          </h3>
          <p className="text-lg vertical-timeline-element-subtitle">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="">College</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "#ffffff" }}
          icon={<FontAwesomeIcon icon={faHouseChimney} />}
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Project 6
          </h3>
          <p className="text-lg vertical-timeline-element-subtitle">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="">Lorem ipsum dolor sit amet.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "#ffffff" }}
          icon={<FontAwesomeIcon icon={faStore} />}
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Project 7
          </h3>
          <p className="text-lg vertical-timeline-element-subtitle">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="">Lorem ipsum dolor sit amet.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-2024"
          iconStyle={{ background: "#ffffff", color: "red" }}
          icon={<FontAwesomeIcon icon={faTents} />}
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Project 8
          </h3>
          <p className="text-lg vertical-timeline-element-subtitle">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="">Lorem ipsum dolor sit amet.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </motion.div>
  )
}
