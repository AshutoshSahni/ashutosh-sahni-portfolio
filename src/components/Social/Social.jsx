import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import './Social.css'

const Social = () => {
  return (
    <div className='social'>
      <div className="socialIcon">
        <a href='https://github.com/AshutoshSahni' target='_blank'><FaGithub /></a>
      </div>

      <div className="socialIcon">
      <a href='https://www.linkedin.com/in/ashutosh-sahni-a941aa192/' target='_blank'><FaLinkedin /></a>
      </div>

      <div className="socialIcon">
      <a href='https://www.instagram.com/ashutoshsahni.as/' target='_blank'><FaInstagram /></a>
      </div>

      <div className="socialIcon">
      <a href='https://leetcode.com/ashutoshsahni/' target='_blank'><SiLeetcode /></a>
      </div>

      <div className="socialIcon">
      <a href='https://twitter.com/iashutoshsahni' target='_blank'><FaTwitter /></a>
      </div>

      <div className="socialLine"></div>

    </div>
  )
}

export default Social