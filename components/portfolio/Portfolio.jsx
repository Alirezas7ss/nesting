import React, { useEffect, useState } from "react";
import "./portfolio.css";
import IMG1 from "../../public/Slicwee 1.png";
import IMG2 from "../../public/Dribbble shot - 1.png";
import IMG3 from "../../public/Ca55pture.JPG";
import IMG4 from "../../public/Dribbble shot HD - 1.png";
import IMG5 from "../../public/Slic12e 2.png";
import IMG6 from "../../public/Dribbbale shot HD - 2.png";
import IMG7 from "../../public/Dribbbleasasas shot HD - 4.png";
import IMG8 from "../../public/Dribbble shot HD bridge- 3.png";
import IMG9 from "../../public/Dribbble shot HD - 5.png";
import IMG10 from "../../public/Dribbble shot HD - 6.png";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
const random = [
  {
    id: 1,
    image: IMG1,
    name: "frontend",
    title: "Tools : React , Javascript , Axios , React-router-dom , Swiper  ",
    github: "https://github.com/Alirezas7ss/Responsive_Store-",
    demo: "https://responsive-store.vercel.app/home",
  },

  {
    id: 2,
    image: IMG2,
    name: "frontend",
    title: "Tools : Javascript , React , AOS , Swiper , CSS , HTML ",
    github: "https://github.com/Alirezas7ss/PORTFOLIO",
    demo: "https://www.alirezasoltanian.ir",
  },
  {
    id: 3,
    image: IMG3,
    name: "solidity",
    title:
      "Tools : Solidity , React , Javascript , Etherjs , Truffle , Tailwind , Css , Html",
    github: "https://github.com/Alirezas7ss/ProjectNftWith-Dapp",
    demo: "https://silly-panda-815189.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    name: "figma",
    title: "Tool : figma",
    github:
      "https://www.figma.com/file/jQ8ZwlFSv5qumlriZQhXL8/ProjectFigma?node-id=0%3A1",
    demo: "https://www.figma.com/file/jQ8ZwlFSv5qumlriZQhXL8/ProjectFigma?node-id=0%3A1",
  },
  {
    id: 5,
    image: IMG5,
    name: "frontend",
    title: "Tools : Bootstrap , Html , Css  ",
    github: "https://github.com/Alirezas7ss/bootstrap-project",
    demo: "https://bootstrap-project-eta.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    name: "frontend",
    title: "Tools : React , MaterialUI , GraphQL , HyGraph , ReactRouterDom ",
    github: "https://github.com/Alirezas7ss/Blogram",
    demo: "https://blogram.vercel.app/",
  },
  {
    id: 7,
    image: IMG7,
    name: "solidity",
    title:
      "Tools : Nextjs , MaterialUI , Tailwind , Solidity , Moralis , ethers ",
    github: "https://github.com/Alirezas7ss",
    demo: "https://market-dapp.vercel.app/",
  },
  {
    id: 8,
    image: IMG8,
    name: "solidity",
    title:
      "Tools : Nextjs , MaterialUI , Tailwind , Solidity , Moralis , ethers  ",
    github: "https://github.com/Alirezas7ss",
    demo: "https://stickygum.vercel.app/",
  },
  {
    id: 9,
    image: IMG9,
    name: "solidity",
    title:
      "Tools : Nextjs , MaterialUI , Tailwind , 0x Protocol , Alchemy SDK , Solidity , ethers   ",
    github: "https://github.com/Alirezas7ss",
    demo: "https://swap-stickygum.vercel.app/",
  },
  {
    id: 10,
    image: IMG10,
    name: "frontend",
    title: "Tools : Nextjs , Typescript , Tailwind    ",
    github: "https://github.com/Alirezas7ss/Netflix",
    demo: "https://netflix-chi-five.vercel.app/",
  },
];

const Portfolio = () => {
  const [popular, setPopular] = React.useState([]);
  const [filtered, setFiltered] = React.useState([]);
  const [activeGenre, setActiveGenre] = React.useState();
  const filterHandler = (e) => {
    setActiveGenre(e.target.value);
    setFiltered(
      random.filter((product) =>
        product.name.toLowerCase().includes(e.target.value)
      )
    );
  };
  useEffect(() => {
    setFiltered(random);
  }, []);

  return (
    <section className="portfolio">
      <h5>My React Work</h5>
      <h2>Portfolio</h2>
      <div className="button-choose">
        <button
          style={{ borderRadius: "10px 0px 0px 10px" }}
          className={!activeGenre ? "btn btn-primary" : "btn"}
          onClick={filterHandler}
        >
          all
        </button>
        <button
          style={{ borderRadius: "0px 0px 0px 0px" }}
          className={activeGenre === "frontend" ? "btn btn-primary" : "btn"}
          value="frontend"
          onClick={filterHandler}
        >
          FrontEnd
        </button>
        <button
          style={{ borderRadius: "0px 0px 0px 0px" }}
          className={activeGenre === "solidity" ? "btn btn-primary" : "btn"}
          value="solidity"
          onClick={filterHandler}
        >
          Solidity
        </button>
        <button
          style={{ borderRadius: "0px 10px 10px 0px" }}
          className={activeGenre === "figma" ? "btn btn-primary" : "btn"} 
          
          value="figma"
          onClick={filterHandler}
        >
          UI/UX
        </button>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="900"
        className="container portfolio__container"
      >
        <AnimatePresence exitBeforeEnter>
          {filtered.map(({ id, image, title, github, demo, name }, i) => {
            console.log(i);
            return (
              <motion.artifact
                variants={{
                  hidden: (i) => ({
                    opacity: 0,
                    scale: 0.1 + i / 10,
                    // scale: 0.5,
                  }),
                  visible: (i) => ({
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: i * 0.1,
                    },
                  }),
                  removed: {
                    opacity: 0,
                    scale: 0,
                  },
                }}
                initial="hidden"
                animate="visible"
                exit="removed"
                custom={i}
                key={id}
                className="portfolio__item"
              >
                <div className="portfolio__item-image">
                  <Image
                    width="100%"
                    height="100%"
                    layout="responsive"
                    src={image}
                    alt=""
                  />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    rel="noreferrer"
                    className="btn"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Live Demo
                  </a>
                </div>
              </motion.artifact>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
