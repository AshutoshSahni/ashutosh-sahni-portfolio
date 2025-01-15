import React from 'react'
import './Work.css'
import MajorProject from './MajorProject'

const Work = () => {
  return (
    <div className='work' id='work'>
      <div className='aboutHeader'>
        <div className='aboutHeading'>
          <span className='headingNumber'>03.&nbsp;</span>
          <span className='headingText'>Some Things I've Built</span>
        </div>

        <div className='headingLine'></div>
      </div>

      <div className='majorProject'>
        <MajorProject />
        <MajorProject />
        <MajorProject />
        
      </div>
    </div>
  )
}

export default Work