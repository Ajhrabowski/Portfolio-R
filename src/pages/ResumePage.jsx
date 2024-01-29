import React from "react";
function Resume() {
  return (
    <div className="resume-page">
      <p>
        <a href="/Anthony-Hrabowski-Resume.pdf" download="Anthony Hrabowski Resume">
          Download my resume
        </a>
      </p>
      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>HTML</li> 
        <li>CSS</li> 
        <li>Bootstrap</li>
        <li>Responsive design</li> 
        <li>JavaScript</li> 
        <li>jQuery</li>
        <li>React</li>
        <li>GraphQL</li> 
      </ul>
      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>Node</li> 
        <li>Express</li> 
        <li>MongoDB, Mongoose</li> 
        <li>MySQL, Sequelize</li>
        <li>GraphQL</li>
        <li>APIs</li> 
        <li>REST</li> 
      </ul>
    </div>
  );
}
export default Resume;
