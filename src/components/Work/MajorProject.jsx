import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { GoLinkExternal } from "react-icons/go";
import './MajorProject.css'

const MajorProject = () => {
  return (
    <div className='majorProjectContainer'>
      <div className='majorProjectImage'>
        
      </div>

      <div className='majorProjectDetails'>
        <div className='headingFeatured'>
          Featured Project
        </div>

        <div className='majorProjectName'>
          Halcyon Theme
        </div>

        <div className='majorProjectDesc'>
        A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
        </div>

        <div className='majorProjectTechStack'>
          <div>VS Code</div>
          <div>Sublime Text</div>
          <div>Atom</div>
          <div>iTerm2</div>
          <div>Hyper</div>
        </div>

        <div className='majorProjectLink'>
          <div className='majorProjectIcon'>
            <FaGithub />
          </div>

          <div className='majorProjectIcon'>
            <GoLinkExternal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MajorProject