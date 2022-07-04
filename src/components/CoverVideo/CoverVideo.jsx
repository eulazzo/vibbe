import mainVideo from "../../assets/video/WalkingGirl.mp4";
import { motion } from "framer-motion";

import { VideoContainer, DarkOverlay, Title } from "./styles";
import { container, item } from "./config";

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variants={container} initial={"hidden"} animate={"show"}>
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            V
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4"
          >
            i
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.06"
            data-scroll-speed="4"
          >
            b
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4"
          >
            e
          </motion.h1>
        </div>
        <motion.h2
          variants={item}
          data-scroll
          data-scroll-delay="0.13"
          data-scroll-speed="2"
        >
          Valuable. Inspire. Blessed. Emerge
        </motion.h2>
      </Title>
      <video src={mainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
