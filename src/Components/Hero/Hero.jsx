import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>
              <h1>Hi! I'm Russell Ike Cabrido</h1>
            </Card.Title>
            <Card.Text>
              <h3>
                Currently studying about web development because I aspire to be
                a web developer in the near future.
              </h3>
            </Card.Text>
            <Button id="btn">Learn More</Button>
            <Button>Message me</Button>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Hero;
