import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/i.jpg";
import { motion } from "framer-motion";

// Motion Variants
const fadeInFromLeft = (delay = 0) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 lg:mb-35">
      <div className="flex flex-wrap items-center">
        {/* Left Section - Hero Text */}
        <div className="w-full lg:w-1/2 px-6 lg:px-10">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={fadeInFromLeft(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            >
              Michael Oloo Omondi
            </motion.h1>

            <motion.span
              variants={fadeInFromLeft(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                        bg-clip-text text-3xl font-medium tracking-tight text-transparent"
            >
              Chef
            </motion.span>

            <motion.p
              variants={fadeInFromLeft(1)}
              initial="hidden"
              animate="visible"
              className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:p-8">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="Profile Picture"
            className="rounded-full w-64 h-64 lg:w-80 lg:h-80 object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
