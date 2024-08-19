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
            I am currently pursuing my B.tech in artifitail inteleigence and machine learning from NMAMIT, Nitte.
            <br/>
            <br/>
            <p>
            My studies focus on exploring cutting-edge technologies in AI and machine learning.
             Alongside my coursework, I am also enhancing my skills in programming languages like <span className="purple">Python and Java </span>,
              and working on projects involving <span className="purple">Deep Learning, Neural Networks, and Web DEV</span>.
               I am passionate about applying AI concepts to solve real-world problems, and
                I aim to specialize in areas like <span className="purple">natural language processing, Web Dev, computer vision</span>, or AI-driven automation in the future.
            </p>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Instrments
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Gyming
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life is a journey of growth, not perfection. Every step forward is progress, no matter how small!"{" "}
          </p>
          <footer className="blockquote-footer">Hithesh </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
