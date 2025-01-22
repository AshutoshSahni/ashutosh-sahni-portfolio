import React, { useContext } from 'react'
import './Contact.css';
import {DataContext} from '../../DataContext';

const Contact = () => {

  const contact = useContext(DataContext).contact[0];

  return (
    <div className='contact' id='contact'>
        <div className='contactSubHeading'>
          04. What's Next?
        </div>
        <div className='contactMainHeading'>
          Get In Touch
        </div>

        <div className='contactBody'>
          {contact.description}
        </div>

        <div className='contactButton'>
          <button className='btnSayHello'>
            <a href={contact.mailId}>Say Hello</a>
          </button>
        </div>      
    </div>
  )
}

export default Contact