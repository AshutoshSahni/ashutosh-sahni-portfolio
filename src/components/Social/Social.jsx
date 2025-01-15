import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import './Social.css'

const Social = () => {
  return (
    <div className='social'>
      <div className="socialIcon">
        <FaGithub />
      </div>

      <div className="socialIcon">
      <FaLinkedin />
      </div>

      <div className="socialIcon">
      <FaInstagram />
      </div>

      <div className="socialIcon">
      <SiLeetcode />
      </div>

      <div className="socialIcon">
      <FaTwitter />
      </div>

      <div className="socialLine"></div>

    </div>
  )
}

export default Social