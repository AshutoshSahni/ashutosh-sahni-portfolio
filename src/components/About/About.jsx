import React, { useContext } from 'react'
import './About.css'
import { DataContext } from '../../DataContext'

const About = () => {

  const about = useContext(DataContext).about;
  const currentIdx = -1;

  return (
    <div className='about' id='about'>
      <div className='aboutHeader'>
        <div className='aboutHeading'>
          <span className='headingNumber'>01.&nbsp;</span>
          <span className='headingText'>About Me</span>
        </div>

        <div className='headingLine'></div>
      </div>

      <div className='aboutDesc'>
        <div className='aboutDescText'>
          {about[0].description.map((para, index) => {
            return (<p key={index}>{para}</p>)
          })}

          <ul className='skillsList'>
            {
              about[0].technologies.map((item, index) => {
                return(<li key={index}>{item} </li>) 
              })
            }
          </ul>
        </div>

        <div className='aboutImage'>
          <div className='imageBorder'>
            <div className='image'></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About