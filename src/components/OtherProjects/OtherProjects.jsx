import React from 'react'
import { FaRegFolder } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";
import './OtherProjects.css';
import ProjectCard from './ProjectCard';

const OtherProjects = () => {
  return (
    <div className='otherProjects'>
      <div className='otherProjectsHeader'>
        <h1 className='otherProjectsHeading'>
          Other Noteworthy Projects
        </h1>
        <p className='otherProjectsSubHeading'>
          View the archive
        </p>
      </div>

      <div className='otherProjectsContainer'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      <div className='OtherProjectsFooter'>
        <button className='OtherProjectsShowMore'>
          Show More
        </button>
      </div>

      

    </div>
  )
}

export default OtherProjects