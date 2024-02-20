import React from 'react'
import './Services.css'
import HeartEmoji from '../img/heartemoji.png'
import Humble from '../img/humble.png'
import Glasses from '../img/glasses.png'
import Card from '../Components/Card/Card'

import { motion } from 'framer-motion'

const Services = () => {
    // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="services" id="services">
        <div className="awesome">
            <span>Learn Anything </span>
            <span>Top Catagories</span>
            <span className="enroll">
            Enroll today & Upskill yourself!
                <br/>
                Customized Courses to meet Client Requirements
            </span>
                <button className="button s-button">Exoplore Courses</button>
                <div className="blur s-blurl" style={{background:"#ABF1FF94"}}>

                </div>
        </div>
        {/*right side*/}
        <div className="cards">
        <motion.div
          initial={{ left: "18rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}><Card
                emoji ={HeartEmoji}
                heading={'Designer'}
                detail={"Figma,Sketch,Photoshop,Adobe"}
                />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "18rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Designing digital journeys with style, simplicity, and seamless functionality"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <motion.div
          initial={{ left: "-8rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
    </div>

    </div>
  )
}

export default Services