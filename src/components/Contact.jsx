import { CONTACT } from "../constants";
import { motion } from "framer-motion";

// Motion Variants
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay } },
});

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Section Title */}
      <motion.h2
        variants={fadeIn(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="my-10 text-center text-4xl font-semibold"
      >
        Get in <span className="text-neutral-500">Touch</span>
      </motion.h2>

      {/* Contact Info */}
      <div className="text-center text-lg tracking-tight">
        <motion.p
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="my-4"
        >
          📍 {CONTACT.address}
        </motion.p>

        <motion.p
          variants={fadeIn(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="my-4"
        >
          📞{" "}
          <a
            href={`tel:${CONTACT.phoneNo.replace(/\s/g, "")}`}
            className="hover:text-blue-400 transition duration-300"
          >
            {CONTACT.phoneNo}
          </a>
        </motion.p>

        <motion.p
          variants={fadeIn(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="my-4"
        >
          ✉️{" "}
          <a
            href={`mailto:${CONTACT.email}`}
            className="border-b border-neutral-600 hover:text-blue-400 transition duration-300"
          >
            {CONTACT.email}
          </a>
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
