import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiver from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { motion } from 'framer-motion'
const Works = () => {
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome"></div>
        <span >
            Our Students Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
          Our team has successfully completed numerous projects spanning various industries, including technology, healthcare, finance, and more. We've had the privilege of working with clients ranging from startups to Fortune companies, each with unique challenges and goals.
            <br />
            <br />
            From custom software development to innovative digital solutions, our expertise and dedication have consistently delivered results from our clients.
            <br />
          </spane>
            <button className="button s-button">Projects</button>
            <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
          </div>
          {/* right side */}
          <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiver} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
      
      </div>
    </div>
  )
}

export default Works;