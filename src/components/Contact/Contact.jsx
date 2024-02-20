import React from "react";
import "./Contact.css";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div>
      <h2>Contact me</h2>
      <div className="container">
        <div className="cards-container">
          <div className="card">
            <Card style={{ width: '18rem', border: "none" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}><FontAwesomeIcon icon={faEnvelope} /></Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: "center" }}>Email</Card.Subtitle>
                <Card.Text className="mb-2 text-muted" style={{ textAlign: "center"}}>
                pavanikuruva2109@gmail.com
                </Card.Text>
                <a href="mailto:pavanikuruva2109@gmail.com" className="contactLink" target="_blank">Write <FontAwesomeIcon icon={faArrowRight} /></a>
              </Card.Body>
            </Card>
          </div>
          <div className="card">
            <Card style={{ width: '18rem', border: "none" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}><FontAwesomeIcon icon={faLinkedin} /></Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: "center"}}>Linkedin</Card.Subtitle>
                <Card.Text style={{ textAlign: "center" }}>
                  kuruva-pavani-10388b27b
                </Card.Text>
                <a href="https://www.linkedin.com/in/kuruva-pavani-10388b27b/" className="contactLink" target="_black">Connect me <FontAwesomeIcon icon={faArrowRight} /></a>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
