import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hithesh Poojary </span>
            from <span className="purple"> Mangalore, India.</span>
            <br />
            I am currently pursuing my B.tech in Artificial intelligence and Machine learning from NMAMIT, Nitte.
            <br/>
            <br/>
            <p>
            My studies focus on exploring cutting-edge technologies in AI and machine learning.
             Alongside my coursework, I am also enhancing my skills in programming languages like <span className="purple">Python and Java </span>,
              and working on projects involving <span className="purple">Deep Learning, Neural Networks, and Web DEV</span>.
               I am passionate about applying AI concepts to solve real-world problems, and
                I aim to specialize in areas like <span className="purple">Natural Language Processing, Web Dev, Computer Vision</span>, or AI-driven automation in the future.
            </p>
            <p style={{ color: "rgb(155 126 172)" }}>
            " I’m training myself alongside the models I build. learning never stops!😁."
          </p>
            <br />
             Languages I can speak:
            <ul>
            <li className="about-activity">
              <ImPointRight /> English
            </li>
            <li className="about-activity">
              <ImPointRight /> Hindi
            </li>
            <li className="about-activity">
              <ImPointRight /> Kannada
            </li>
            <li className="about-activity">
              <ImPointRight /> Japanese (Basic)
            </li>
            <li className="about-activity">
              <ImPointRight /> Tulu
            </li>
          </ul>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Instruments
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Gyming
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            " I’m training myself alongside the models I build. learning never stops!😁."
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
