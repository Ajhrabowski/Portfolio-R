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
    name:"Album Review",
    img:"/Album-Review-Site.png",
    live:"https://album-review-site-715f772b98d0.herokuapp.com",
    github:"https://github.com/JohnPaulZigterman/review-site"
  },
  {
    name:"Note-Taker",
    img:"/Note-Taker-Screenshot.png",
    live:"https://ntdeployment-ed4c72c4a811.herokuapp.com",
    github:"https://github.com/Ajhrabowski/Tomador-De-Notas"
 },
 {
  name:"Weather Dasboard",
  img:"/Weather-Dasboard.jpg",
  live:"https://ajhrabowski.github.io/atmospheric-panel/",
  github:"https://github.com/Ajhrabowski/atmospheric-panel"
},
{
  name:"Itinerate",
  img:"/Screenshot (100).png",
  live:"https://itinerate.onrender.com",
  github:"https://github.com/JohnPaulZigterman/itinerary-site"
},
{
  name:"At-AGlance",
  img:"/05-third-party-apis-homework-demo.gif",
  live:"https://ajhrabowski.github.io/At-AGlance/",
  github:"https://github.com/Ajhrabowski/At-AGlance"
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