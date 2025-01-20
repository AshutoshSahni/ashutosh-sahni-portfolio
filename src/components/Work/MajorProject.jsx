import React, { useContext } from 'react'
import { FaGithub } from 'react-icons/fa'
import { GoLinkExternal } from "react-icons/go";
import './MajorProject.css'

const MajorProject = (props) => {

  console.log(props);

  return (
    <div className='majorProjectContainer'>
      <div className='majorProjectImage'>
        
      </div>

      <div className='majorProjectDetails'>
        <div className='headingFeatured'>
          Featured Project
        </div>

        <div className='majorProjectName'>
          {props.projectName}
        </div>

        <div className='majorProjectDesc'>
          {props.description}
        </div>

        <div className='majorProjectTechStack'>
          {
            (props.technologyUsed).map((item) => <div>{item}</div>)
          }
        </div>

        <div className='majorProjectLink'>
          <div className='majorProjectIcon'>
            { 
              (props.githubLink !== "") 
              && 
              <a target="_blank" href={props.githubLink}><FaGithub /></a> 
            }
          </div>

          <div className='majorProjectIcon'>
            {
              (props.liveLink !== "")
              && 
              <a target="_blank" href={props.liveLink}><GoLinkExternal /></a>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MajorProject