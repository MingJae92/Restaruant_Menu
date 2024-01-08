import React from 'react';
import { Container, Row, Col, Button, Card, Navbar, Breadcrumb } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landingpage from "../images/specials-3.png";

function Homepage() {
  const backgroundImageStyle = {
    backgroundImage: `url(${Landingpage})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Set a minimum height to cover the whole viewport
    paddingTop: '60px', // Adjust to match the Navbar height
  };

  return (
    <div style={backgroundImageStyle}>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          {/* Breadcrumbs */}
          

          {/* Navbar Brand */}
          <Navbar.Brand>Bak Chit Gaey && Lo Por Bengs!</Navbar.Brand>
          
          {/* Navbar Toggle and Collapse */}
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#about-us">About Us</a>
            </Navbar.Text>
            <Navbar.Text>
              <a href="#contact-us">Contact Us</a>
            </Navbar.Text>
            <Navbar.Text>
              <a href="#menu">Menu</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container fluid className="d-flex align-items-center">
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Card bg="primary" text="white" className="mb-2">
              <Card.Body>
                <Card.Title>Ah sifu and lo sae restaurant!</Card.Title>
                <Card.Text>
                  Explore our delicious menu and enjoy a delightful dining experience.
                </Card.Text>
                <Button variant="light">View Menu</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container>
          <Navbar.Text className="mr-auto">
            Opening Hours: Mon-Fri: 11:00 AM - 9:00 PM | Sat-Sun: 12:00 PM - 10:00 PM
          </Navbar.Text>
          <Navbar.Text>
            Contact Us: Address: 123 Main Street, Cityville | Phone: (123) 456-7890 | Email: info@example.com
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
}

export default Homepage;
