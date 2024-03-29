import React from 'react';
import profile from "./images/pic1.png";
import "./About.css";
import resume from "./resume.pdf"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
function About(){
  return(
    <div id='about'>
          <h2>About me</h2>
      <div className='homestarting'>
      <div className='text-container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3>I started learning web development on my own through online courses and tutorials, and soon I was building websites for fun .I am not only a coder, but also a designer, a learner, and a music lover.I enjoy working with other developers and sharing ideas and feedback.Thank you for visiting my portfolio website. If you are interested in working with me, hiring me, or just saying hi, please feel free to contact me anytime.</h3>
        <a href={resume} download="Kuruva_Pavani's resume.pdf">
          <button type="button" className="btn btn-dark">Download Resume  <FontAwesomeIcon icon={faDownload} style={{color:"white"}}/></button>
        </a>
      </div>

      <div className='image-container'>
        <img src={profile} alt='profile' className="profile-image" />
      </div>
      </div>
      <hr id='skills'></hr>
    </div>
  )
}

export default About;