import { Container, Row, Col } from "react-bootstrap";
import "boxicons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="link">
            <h3>Quick Links</h3>
          </Col>
          <Col className="socmed">
            <h3>Social Media</h3>
          </Col>
          <Col className="contact">
            <h3>Contact Info</h3>
          </Col>
        </Row>
      </Container>
      <p>&copy; 2023. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
