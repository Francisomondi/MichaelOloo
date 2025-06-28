import React from "react";
import aboutImg from "../assets/b.jpg";
import { ABOUT_TEXT, ABOUT_TEXT2 } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>

      {/* About Content */}
      <div className="flex flex-wrap items-center">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 lg:p-8 flex justify-center"
        >
          <img
            className="rounded-2xl object-cover w-80 h-80 lg:w-[400px] lg:h-[400px] shadow-lg"
            src={aboutImg}
            alt="About Me"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 px-6 lg:px-10"
        >
          <p className="text-lg text-gray-300 leading-relaxed">{ABOUT_TEXT}</p>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            {ABOUT_TEXT2}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
