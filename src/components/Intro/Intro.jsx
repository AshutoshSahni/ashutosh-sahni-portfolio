import React, { useContext } from 'react'
import './Intro.css'
import { DataContext } from '../../DataContext'

const Intro = () => {
  const intro = useContext(DataContext).intro;

  return (
    <div className='intro'>
      <div className='introGreet'>
        {intro[0].greet}
      </div>

      <div className='introName'>
        {intro[0].userName}
      </div>

      <div className='introSubHeading'>
      {intro[0].subHeading}
      </div>

      <div className='introDesc'>
      {intro[0].description}
      </div>

      <div className='introButton'>
        <button className='intro_btn'>Checkout my digital card!</button>
      </div>

    </div>
  )
}

export default Intro