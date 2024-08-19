import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dice from "../../Assets/Projects/dice_game.jpg";
import facemask from "../../Assets/Projects/face_mask.jpg";
import stock from "../../Assets/Projects/stocks.jpg";
import pet_squad from "../../Assets/Projects/pet_squad.jpg";
import iphone from "../../Assets/Projects/iphone.jpg";
import tulucentre from "../../Assets/Projects/tulucentre.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pet_squad}
              isBlog={false}
              title="Pet Adoption Management System"
              description="This project is a web application designed to streamline the process of pet adoption. Built using Node.js for the backend and MySQL for database management, the system allows users to browse available pets. enhancing efficiency in managing pet data and improving user experience."
              ghLink="https://github.com/HitheshPoojary187/Pet-Adoption-Management"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tulucentre}
              isBlog={false}
              title="Tulucenter"
              description="TuluCenter is a dictionary focused on preserving and promoting the Regional languages. Built using Svelte-Kit for the frontend and Firebase for the database, the project provides users to search for  words and their meanings. The application aims to bridge the gap for people interested in learning or translating the other language."
              ghLink="https://github.com/HitheshPoojary187/tulucentre"
              demoLink="https://tulucentre.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stocks prediction"
              description="This project is a machine learning application designed to predict stock prices. Built using Python, it leverages historical data and financial indicators to forecast stock trends. The user interface is developed using Streamlit, offering a clean and interactive platform for users to visualize predictions, analyze charts, and make informed decisions. The project is focused on delivering accurate and real-time insights for investors and market enthusiasts."
              
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dice}
              isBlog={false}
              title="Dice Game"
              description="This is an interactive web-based dice game developed with React and JavaScript. The game challenges players to avoid selecting the same number as the dice roll, making strategic decisions to maximize their score. The gameplay involves dynamic scoring based on the numbers chosen by the player, with a focus on quick thinking and luck. The project showcases engaging UI design and smooth game mechanics, making it fun and intuitive for users."
              ghLink="https://github.com/HitheshPoojary187/Dice-Game"
              demoLink="https://resilient-truffle-f4b982.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iphone}
              isBlog={false}
              title="Apple Clone"
              description="This project is a frontend clone of the Apple website, replicating the sleek and minimalist design of Apple's official site."
              ghLink="https://github.com/HitheshPoojary187/Apple-Clone"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facemask}
              isBlog={false}
              title="Face Mask Detection"
              description="This project is a computer vision application developed in Python to detect whether a person is wearing a face mask. Using machine learning models and image processing techniques, the system can accurately classify people as either wearing or not wearing a mask. The project can be integrated into surveillance systems or standalone applications for public safety, ensuring compliance with mask-wearing protocols."
              
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
