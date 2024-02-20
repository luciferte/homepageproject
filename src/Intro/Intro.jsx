import React from 'react'
import './Intro.css'
import Ours from '../img/image.jpeg'

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>SkillSprint</span>
                <span> Structured coding courses that get you there faster with confidence.
 </span>
                <span>we're here to make your vision into reality</span>
            </div>

            <button className=" button s-button">join us</button>
        </div>
        <div className="i-right">
        <img src={Ours} alt=""/>
        </div>
    </div>
  )
}

export default Intro