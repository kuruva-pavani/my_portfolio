import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Carousel } from "react-bootstrap"; // Import Bootstrap Carousel component
import drumKit from "./images/drumKit.png";
import diceGame from "./images/diceGame.png";
import Keep from "./images/Keep.png";
import toDoList from "./images/toDoList.png";
import rockPaperScissors from "./images/rockPaperScissors.png";
import "./Projects.css"
// https://kuruvapavani-blog-site.onrender.com/
const MyCarousel = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="carouselcontainer">
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={drumKit}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Virtual DrumKit</h3>
              <p>JavaScript,HTML,CSS</p>
              <div className="buttons">
              <button className="btnLink"><a href="https://kuruvapavani.github.io/Drum_Kit/" target="_blank">Demo</a></button>
              <button className="btnLink"><a href="https://github.com/kuruvapavani/Drum_Kit" target="_blank">Source code</a></button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={diceGame}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>DiceGame</h3>
              <p>HTML,CSS,JavaScript</p>
              <div className="buttons">
                <button className="btnLink"><a href="https://kuruvapavani.github.io/Dice_Game/" target="_blank">Demo</a></button>
                <button className="btnLink"><a href="https://github.com/kuruvapavani/Dice_Game" target="_blank">Source code</a></button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={rockPaperScissors}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Rock Paper Scissors</h3>
              <p>HTML,CSS,JavaScript</p>
              <div className="buttons">
              <button className="btnLink"><a href="https://kuruvapavani.github.io/Rock_Paper_Scissors_Game/" target="_blank">Demo</a></button>
              <button className="btnLink"><a href="https://github.com/kuruvapavani/Rock_Paper_Scissors_Game" target="_blank">Source code</a></button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={toDoList}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>To-Do-List</h3>
              <p>Node.js,MongoDB,Express.js,HTML,CSS,JavaScript</p>
              <div className="buttons">
              <button className="btnLink"><a href="https://kuruvapavani-to-do-list.onrender.com/" target="_blank">Demo</a></button>
              <button className="btnLink"><a href="https://github.com/kuruvapavani/to-do-list" target="_blank">Source code</a></button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={Keep}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Keep App</h3>
              <p>React.js,Node.js,HTML,CSS</p>
              <div className="buttons">
              <button className="btnLink"><a href="https://x7lvlt.csb.app/" target="_blank">Demo</a></button>
              <button className="btnLink"><a href="#home" target="_blank">Source code</a></button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <hr id="contact"></hr>
    </div>
  );
};

export default MyCarousel;
