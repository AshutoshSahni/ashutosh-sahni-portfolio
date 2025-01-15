import React from 'react'
import './Intro.css'

const Intro = () => {
  return (
    <div className='intro'>
      <div className='introGreet'>
        Hi, my name is
      </div>

      <div className='introName'>
        Ashutosh Sahni.
      </div>

      <div className='introSubHeading'>
        I build things for the web.
      </div>

      <div className='introDesc'>
        I’m a software engineer specializing in building
        (and occasionally designing) exceptional digital experiences.
        Currently, I’m focused on building accessible,
        human-centered products at Upstatement.
      </div>

      <div className='introButton'>
        <button className='intro_btn'>Check out my course!</button>
      </div>

    </div>
  )
}

export default Intro