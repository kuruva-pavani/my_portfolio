import React from "react";
import "./Service.css"
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faHtml5,faJs,faNode,faBootstrap, faCss3, faReact} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowRight,faDatabase} from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <div>
      <h2 id="services">Services I offer</h2>
      <div className="container">
        <div className="cards-container">
          <div className="card">
            <Card style={{ width: '18rem', border: "none" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Frontend Developer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: "center" }}>
                <FontAwesomeIcon icon={faHtml5} />
                <FontAwesomeIcon icon={faCss3} />
                <FontAwesomeIcon icon={faJs} />
                <FontAwesomeIcon icon={faBootstrap} />
                <FontAwesomeIcon icon={faReact} />

                </Card.Subtitle>
                <a href="mailto:pavanikuruva2109@gmail.com" className="contactLink" target="_blank">Hire Me <FontAwesomeIcon icon={faArrowRight} /></a>
              </Card.Body>
            </Card>
          </div>
          <div className="card">
            <Card style={{ width: '18rem', border: "none" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Backend Developer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: "center"}}>
                  <FontAwesomeIcon icon={faDatabase} />
                  <FontAwesomeIcon icon={faNode} />
                </Card.Subtitle>
                <Card.Text style={{ textAlign: "center" }}>
                </Card.Text>
                <a href="mailto:pavanikuruva2109@gmail.com" className="contactLink" target="_blank">Hire Me <FontAwesomeIcon icon={faArrowRight} /></a>
              </Card.Body>
            </Card>
          </div>
          <div className="card">
            <Card style={{ width: '18rem', border: "none" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>MERN Stack Developer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: "center"}}>M E R N</Card.Subtitle>
                <a href="mailto:pavanikuruva2109@gmail.com" className="contactLink" target="_blank">Hire Me <FontAwesomeIcon icon={faArrowRight} /></a>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <hr id='projects'></hr>
    </div>
  );
}

export default Services;
