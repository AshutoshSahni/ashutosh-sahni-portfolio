import React, { useContext, useState } from 'react'
import { FaRegFolder } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";
import './OtherProjects.css';
import ProjectCard from './ProjectCard';
import {DataContext} from "../../DataContext";

const OtherProjects = () => {

  const otherProjects = useContext(DataContext).otherProjects;

  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    if(visibleCount < otherProjects.length)
      setVisibleCount(otherProjects.length);
    else
      setVisibleCount(4);
  }

  return (
    <div className='otherProjects'>
      <div className='otherProjectsHeader'>
        <h1 className='otherProjectsHeading'>
          Other Noteworthy Projects
        </h1>
        <a href='https://github.com/AshutoshSahni?tab=repositories' target='_blank' className='otherProjectsSubHeading'>
          Github Repositories
        </a>
      </div>

      <div className='otherProjectsContainer'>
        {
          otherProjects.slice(0, visibleCount).map((project, index) => (
            <ProjectCard 
              key={index}
              projectName={project.projectName}
              isOpenSource={project.isOpenSource}
              description={project.description}
              technologyUsed={project.technologyUsed}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))
        }
      </div>

      
      <div className='OtherProjectsFooter'>
        <button 
          className='OtherProjectsShowMore'
          onClick={handleShowMore}
        >
          {visibleCount < otherProjects.length ? "Show More" : "Show Less"}
        </button>
      </div>

      

    </div>
  )
}

export default OtherProjects