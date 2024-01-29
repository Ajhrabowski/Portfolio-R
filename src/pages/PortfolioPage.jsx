import React from 'react'
import Project from '../components/Project'
const projects = [
  {
    name:"Showcase",
    img:"/showcase.png",
    live:"https://benrodriguezmoran.github.io/country-curency-converter/",
    github:"https://github.com/benrodriguezmoran/country-curency-converter"
  },
  {
    name:"Showcase",
    img:"/showcase.png",
    live:"https://benrodriguezmoran.github.io/country-curency-converter/",
    github:"https://github.com/benrodriguezmoran/country-curency-converter"
  }
]
function PortfolioPage() {
  return (
    <div className='portfolio-page'>
      <h1>Portfolio</h1>
      <div className="projects-container">
       {
        projects.map((proj,i)=><Project key={i} project={proj} />)
       }
      </div>
    </div>
  )
}

export default PortfolioPage