import React from 'react'

function Project({project}) {
  return (
    <div className='project'>
      <img src={project.img} alt="showcase screenshot" />
      <div>
        <h4>{project.name}</h4>
        <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
        <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
      </div>
    </div>
  )
}

export default Project
