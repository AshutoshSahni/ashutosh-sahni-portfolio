import React, {useContext} from 'react'
import './Work.css'
import MajorProject from './MajorProject'
import { DataContext } from '../../DataContext'

const Work = () => {

  const majorProjects = useContext(DataContext).majorProjects;

  console.log(majorProjects);

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
        {
          majorProjects.map((project, index) => {
            return (
              <MajorProject 
                key={index}
                projectName={project.projectName}
                isOpenSource={project.isOpenSource}
                description={project.description}
                technologyUsed={project.technologyUsed}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Work