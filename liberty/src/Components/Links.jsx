import React from "react";
import { motion } from "framer-motion";
import { IoLogoInstagram } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

// Animation Variants
const iconVariants = {
  hover: { scale: 1.1, transition: { duration: 0.2 } }
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { y: -5, transition: { duration: 0.2 } }
};

const textReveal = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.2 } }
};

// Data for Social Media
const socialLinks = [
  {
    icon: <IoLogoInstagram size={30} className="hover:text-orange-700 lg:hover:text-black" />,
    name: "@_adie.00",
    description: "Official Instagram",
    href: "https://www.instagram.com/_adie.00/"
  },
  {
    icon: <SiGithub size={30} />,
    name: "@AdieDev0",
    description: "Official Github",
    href: "https://github.com/AdieDev0"
  },
  {
    icon: <FaFacebookSquare size={30} className="hover:text-blue-600 lg:hover:text-black" />,
    name: "Adrey Barrios",
    description: "Official Facebook",
    href: "https://www.facebook.com/adrey.barrios"
  },
  {
    icon: <AiFillTikTok size={35} />,
    name: "Secret",
    description: "Official Tiktok",
    href: "#"
  }
];

// Data for Cards
const cards = [
  {
    img: "https://th.bing.com/th/id/R.765975add93aa62a63c5dc6a0fca3d44?rik=6rNTMNQyZyRIMw&riu=http%3a%2f%2fdailytuning.com%2fwp-content%2fuploads%2f2018%2f11%2fLiberty-Walk-Nissan-GT-R-by-RACE-10.jpg&ehk=Vl3AEFtH3kp8Q%2f3urIsT72df03egtBk4dunlrVQ6An4%3d&risl=&pid=ImgRaw&r=0",
    title: "Liberty",
    subtitle: "Walk",
    tag: "video",
    highlight: "What Does It Take?",
    button: "WATCH NOW",
    href: "https://www.youtube.com/watch?v=Xaa1jb5uvEg"
  },
  {
    img: "https://i.etsystatic.com/23055944/r/il/567f67/2453497843/il_fullxfull.2453497843_7ee4.jpg",
    title: "Liberty",
    subtitle: "Walk",
    tag: "video",
    highlight: "Official Shop",
    button: "SHOP NOW",
    href: "#"
  },
  {
    img: "https://i.pinimg.com/736x/2e/c6/6d/2ec66d24ebf7ddb9f257d63077101b56--gtr-nissan-gtr-r.jpg",
    title: "Liberty",
    subtitle: "Walk",
    tag: "Drift Race Video",
    highlight: "What Does It Take?",
    button: "WATCH NOW",
    href: "https://www.youtube.com/watch?v=yv0NcuJzE1g"
  }
];

const Links = () => {
  return (
    <motion.div
      className="w-full h-auto px-4 md:px-8 lg:px-[150px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Social Media Links */}
      <motion.div
        className="flex flex-wrap gap-10 md:gap-28 text-center items-center justify-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {socialLinks.map((link, index) => (
          <motion.div key={index} className="flex text-xl font-semibold font-Oswald gap-2">
            <motion.a href={link.href} target="_blank" whileHover="hover" variants={iconVariants}>
              {link.icon}
            </motion.a>
            <motion.div
              className="hidden lg:block"
              variants={textReveal}
              initial="initial"
              animate="animate"
            >
              <a href={link.href} target="_blank">
                <span>{link.name}</span>
              </a>
              <p className="text-sm text-red-500">{link.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Divider */}
      <motion.hr
        className="border-b border-black my-4"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />

      {/* Title */}
      <motion.div
        className="text-center mt-4 mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="font-Oswald text-xl md:text-2xl font-semibold">
          SHOP OFFICIAL <span className="font-bold">LIBERTY WALKS</span> BODY KITS - MADE TO ORDER / USA SHIPPING ONLY
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="flex flex-col md:flex-row gap-6 md:gap-7 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="border font-Oswald w-full md:w-96 h-60 relative overflow-hidden cursor-pointer"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <img src={card.img} alt={card.title} className="absolute w-full h-full object-cover" />
            <div className="relative text-white p-4 bg-black/70 h-full flex flex-col justify-end">
              <p className="font-Oswald text-xl md:text-2xl">{card.title}</p>
              <span className="font-Oswald font-semibold text-xl md:text-2xl">{card.subtitle}</span>
              <p className="mb-2 text-xl md:text-2xl">{card.tag}</p>
              <p className="text-red-700 mt-2 text-lg md:text-xl font-bold">{card.highlight}</p>
              <motion.a
                href={card.href}
                target="blank"
                className="border-2 text-center border-white text-white bg-black mt-2 text-lg md:text-xl px-2 py-1 hover:border-red-700 hover:text-red-700 duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <button>{card.button}</button>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Links;
