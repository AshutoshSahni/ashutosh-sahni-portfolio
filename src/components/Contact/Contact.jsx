import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className='contactSubHeading'>
          04. What's Next?
        </div>
        <div className='contactMainHeading'>
          Get In Touch
        </div>

        <div className='contactBody'>
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </div>

        <div className='contactButton'>
          <button className='btnSayHello'>
            Say Hello
          </button>
        </div>      
    </div>
  )
}

export default Contact