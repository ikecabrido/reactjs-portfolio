import { Button, Container, Row, Col, Card } from "react-bootstrap";
import Img1 from "../pics/mp1pro.jpg";
import Img2 from "../pics/sassact.jpg";
import Img3 from "../pics/hobbies.png";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <h1>My Projects</h1>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Img1} />
              <Card.Body>
                <Card.Title>Travel Guide</Card.Title>
                <Card.Text>
                  A web guide for travelers or tourist to know about the most
                  vistied spots in the Philippines.
                </Card.Text>
                <Button href="https://ikecabrido.github.io/web-for-MP1/">
                  Visit Page
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Img2} />
              <Card.Body>
                <Card.Title>Gaming Hub</Card.Title>
                <Card.Text>
                  Download the most popular games played by many players today.
                  You might find your favorite games here.
                </Card.Text>
                <Button href="https://ikecabrido.github.io/activity-for-sass/">
                  Visit Page
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
