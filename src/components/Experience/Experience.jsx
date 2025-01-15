import React, { useState } from 'react'
import './Experience.css'

const Experience = () => {

  const [selectedCompany, setSelectedCompany] = useState('Upstatement');

  const workDetails = {
    Upstatement: {
      jobTitle: "Lead Engineer @ Upstatement",
      duration: "May 2018 - Present",
      description: [
        "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.",
        "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements."
      ]
    },
    Apple: {
      jobTitle: "UI Engineer Co-op @ Apple",
      duration: "July - December 2017",
      description: [
        "Developed and styled interactive web applications for Apple Music using Ember and SCSS.",
        "Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations."
      ]
    }
  };

  return (
    <div className='experience' id='experience'>
      <div className='aboutHeader'>
        <div className='aboutHeading'>
          <span className='headingNumber'>02.&nbsp;</span>
          <span className='headingText'>Where I've Worked</span>
        </div>

        <div className='headingLine'></div>
      </div>

      <div className='workContainer'>
        <div className='companyNav'>
          {
            Object.keys(workDetails).map((company) => (
              <div
                key={company}
                className={`companyNavItem ${selectedCompany === company ? "active" : ""}`}
                onClick={() => setSelectedCompany(company)}
              >
                {company}
              </div>
            ))
          }
        </div>

        <div className='workDetails'>
          {workDetails[selectedCompany] && (
            <div className="workContent">
              <h3>{workDetails[selectedCompany].jobTitle}</h3>
              <p className='workDuration'>{workDetails[selectedCompany].duration}</p>
              <ul className='workDescription'>
                {workDetails[selectedCompany].description.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Experience