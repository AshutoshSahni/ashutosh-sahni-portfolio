import React, { useContext, useState } from 'react'
import './Experience.css'
import { DataContext } from '../../DataContext'

const Experience = () => {

  const [selectedCompany, setSelectedCompany] = useState('Upstatement');

  const workDetails = useContext(DataContext).workExperience;

  console.log(workDetails);

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
            Object.keys(workDetails).map((company, index) => (
              <div
                key={index}
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