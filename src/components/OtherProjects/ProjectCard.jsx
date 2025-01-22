import React from 'react'
import { FaRegFolder } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from 'react-icons/fa'

const ProjectCard = (props) => {
  return (
        <div className='otherProjectCard'>
          <div className='otherProjectsCardHeader'>
            <div className='folderIcon'>
              <FaRegFolder />
            </div>
            <div className='otherProjectsCardLinkIcons'>
              {props.githubLink !== "" && <a href={props.githubLink} target='_blank'><FaGithub /></a>}
              {props.liveLink !== "" && <a href={props.liveLink} target='_blank'><GoLinkExternal /></a>}
            </div>
          </div>
          
          <div className='otherProjectCardBody'>
            <div className='otherProjectName'>
              {props.projectName}
            </div>
            <p className='otherProjectDesc'>
              {props.description}
            </p>
          </div>

          <div className='otherProjectCardFooter'>
            <ul className='otherProjectCardTechStack'>
              {
              (props.technologyUsed).map((technology, index) => (
                <li key={index}>{technology}</li>
              ))
            }
            </ul>
          </div>
        </div>
  )
}

export default ProjectCard