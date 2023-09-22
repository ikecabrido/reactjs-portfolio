import { Container, Row, Col } from "react-bootstrap";
import "boxicons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <h3>Quick Links</h3>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
          </Col>
          <Col>
            <h3>Social Media</h3>
            <a href="">Facebook</a>
            <a href="">Twitter/X</a>
            <a href="">Discord</a>
          </Col>
          <Col>
            <h3>Contact Info</h3>
            <p>Address: Minuyan 5, San Jose del Monte, Bulacan</p>
            <p>09272726908</p>
            <p>russcabz28@gmail.com</p>
          </Col>
        </Row>
      </Container>
      <p className="copyright">&copy; 2023. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
