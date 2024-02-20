// Skills.jsx

import React from "react";
import "./Skills.css";
function Skills(){
  return(
    <div>
        <h2>Skills</h2> 
      <div className="container">
      
        <div className="block">
        <h3>Frontend</h3>
         {/* Skills heading centered here */}
          <ul>
            <li>
              <div className="skill-wrapper">
                <span>HTML</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "80%"}}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-wrapper">
                <span>CSS</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "60%"}}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-wrapper">
                <span>JavaScript</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "70%"}}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-wrapper">
                <span>Reactjs</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "70%"}}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-wrapper">
                <span>jQuery</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "50%"}}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-wrapper">
                <span>Bootstrap</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "70%"}}></div>
                </div>
              </div>
            </li>
            {/* Add other frontend skills similarly */}
          </ul>
        </div>

        {/* Backend Skills Block */}
        <div className="block">
          <h3>Backend</h3>
          <ul>
            <li>
              <div className="skill-wrapper">
                <span>Node.js</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "70%"}}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-wrapper">
                <span>MongoDB</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "70%"}}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-wrapper">
                <span>Expressjs</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "70%"}}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-wrapper">
                <span>Rest API</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "60%"}}></div>
                </div>
              </div>
            </li>
            {/* Add other backend skills similarly */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills;
