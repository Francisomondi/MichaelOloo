import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Container =(delay) => ({
  hidden: {y: -100, opacity: 0},
  visible: {
    y:0,
    opacity: 1,
    transition: {duration: 1.5, delay: delay}
  }
})

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <motion.p 
          variants={Container(0)}
          initial = 'hidden'
          animate= 'visible'
          className='text-white'>Michael Oloo Omondi</motion.p>
      </div>

      <motion.div 
         variants={Container(0)}
         initial = 'hidden'
         animate= 'visible'
        className='m-8 flex items-center justify-center gap-4 text-2xl'>
        
        <a href="https://www.linkedin.com/in/michael-omondi-6658b0221?trk=products_details_guest_profile_link" target="_blank" rel="noopener noreferrer">
          <FaLinkedin/>
        </a>  
        
      </motion.div>
    </nav>
  )
}

export default Navbar
