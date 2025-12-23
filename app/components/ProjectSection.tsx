import React from 'react'
import ProjectCarousel from './ProjectCarousel'

const ProjectSection = () => {
  return (
    <>
        <div className='project container max-w-[880px] '>
            <div className='project-header content-style flex justify-between items-end'>
              <div className='project-header-left flex flex-col'>
                <p className='text-xs text-[#00000059] font-semibold'>PROJECTS</p>
                <h2>Latest Projects</h2>
              </div>
              <div className='project-header-right'>
                <a href="" className='bg-blue-600 py-3 px-4 text-white rounded-4xl block'> View all </a>
              </div>
            </div>
            <div className='mt-10'>
              <ProjectCarousel/>
            </div>
        </div>
    </>
  )
}

export default ProjectSection