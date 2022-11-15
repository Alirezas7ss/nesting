import React from "react";
import "./nav.css";
import { IoIosHome } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, LayoutGroup } from "framer-motion";
import { type } from "os";
const parent = {
  hidden: { background: "transparent" },
  visible: {
    // opacity: [0,1],
    background: "var(--color-primary)",
    color: "var(--color-bg)",
    transition: {
      duration: 1,
      ease: "anticipate",
      // layout:{
      //   duration: 10,
      //   type: 'spring',
      // }
    },
    boxShadow: [
      "0px 0px 0px rgb(22,225,215)",
      "0px 0px 22px var(--color-primary)",
      "0px 0px 0px rgb(255,255,255)",
    ],

    // scale: [1,0,2]
  },
};
// const svgicon = {
//   hidden: { opacity: 1 },
//   visible: {
//     // opacity: [0,1],
//     transition: { duration: 1, ease: "anticipate" },
//     // pathLength: 1,
//     // background: 'red'
//     opacity: 0,
//     // scale: [1,0,2]
//   },
// };
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  // useEffect(() => {
  //   setActiveNav('#')
  // }, [])
  return (
    <>
      <nav>
        <motion.a
          
          href="#"
          onClick={() => setActiveNav("#")}
          style={{ position: "relative" }}
        >
          <div
            layout
            variants={parent}
            animate={activeNav === "#about" ? "visible" : "hidden"}
            style={{ position: "absolute" }}
          ></div>
          <IoIosHome style={{ position: "relative" }} />
        </motion.a>
        <motion.a
          href="#about"
          onClick={() => setActiveNav("#about")}
          style={{ position: "relative" }}
        >
          <div
            layout
            variants={parent}
            animate={activeNav === "#about" ? "visible" : "hidden"}
            style={{ position: "absolute" }}
          ></div>
          <AiOutlineUser style={{ position: "relative" }} />
        </motion.a>
        <motion.a
          
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          style={{ position: "relative" }}
        >
          <div
            animate={{background: "red",}}
            style={{ position: "absolute" }}
          ></div>
          <IoMdContacts style={{ position: "relative" }} />
        </motion.a>
        <motion.a
          
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          style={{ position: "relative" }}
        >
          <div
            layout
            variants={parent}
            animate={activeNav === "#about" ? "visible" : "hidden"}
            style={{ position: "absolute" }}
          ></div>
          <FaBook style={{ position: "relative" }} />
        </motion.a>
        <Link href="/fa">
          <MdLanguage style={{ position: "relative" }} />
        </Link>
      </nav>
    </>
  );
};

export default Nav;
