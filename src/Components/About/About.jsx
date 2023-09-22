import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import Img1 from "../pics/mylife.png";
import Img2 from "../pics/work.png";
import Img3 from "../pics/hobbies.png";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <h1>About Me</h1>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Img1} />
              <Card.Body>
                <Card.Title>My Life</Card.Title>
                <Card.Text>
                  My name is Russell Ike Cabrido ang I am 20 yrs. old. Right now
                  I live in Minuyan V, San Jose del Monte, Bulacan. I am a
                  college undergraduate and I stopped college because of some
                  financial problems. Currently I am attending a bootcamp of
                  KodeGo about web development. I want to learn as much as I can
                  in this bootcamp so that I can become part of the IT industry
                  in the near future.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Img2} />
              <Card.Body>
                <Card.Title>Work Experience</Card.Title>
                <Card.Text>
                  I don't have any experience yet in working for a company or a
                  business establishment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Img3} />
              <Card.Body>
                <Card.Title>Hobbies</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Games</li>
                    <li>Movies</li>
                    <li>Sports</li>
                    <li>Reading comics/mangas/manhwa/manhua</li>
                    <li>Reading novels</li>
                    <li>Listening to music</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
