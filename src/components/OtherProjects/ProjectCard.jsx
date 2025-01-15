import React from 'react'
import { FaRegFolder } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from 'react-icons/fa'

const ProjectCard = () => {
  return (
        <div className='otherProjectCard'>
          <div className='otherProjectsCardHeader'>
            <div className='folderIcon'>
              <FaRegFolder />
            </div>
            <div className='otherProjectsCardLinkIcons'>
              <FaGithub />
              <GoLinkExternal />
            </div>
          </div>
          
          <div className='otherProjectCardBody'>
            <div className='otherProjectName'>Integrating Algolia Search with WordPress Multisite</div>
            <p className='otherProjectDesc'>
              Building a custom multisite compatible WordPress plugin to build global search with Algolia
            </p>
          </div>

          <div className='otherProjectCardFooter'>
            <ul className='otherProjectCardTechStack'>
              <li>Algolia</li>
              <li>WordPress</li>
              <li>PHP</li>
            </ul>
          </div>
        </div>
  )
}

export default ProjectCard