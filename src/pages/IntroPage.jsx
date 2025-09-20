import React from "react";
import { useNavigate } from "react-router";
import { Container, Row, Col, Button } from "react-bootstrap";

const IntroPage = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('/products');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="intro-page">
      <Container className="text-center">
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col lg={8}>
            <div className="intro-content">
              <h1 className="display-4 mb-4">Save the Ocean with Us!</h1>
              <p className="lead mb-5 intro-text">
                We are a team of passionate ocean lovers who are dedicated to saving the ocean. We believe that every little bit helps and that together we can make a difference.<br /><br />
                All of our products are made from ocean-friendly materials and are designed to help protect the ocean.<br /><br />
                Part of the proceeds from our sales go to ocean conservation organizations.
              </p>
              <div className="intro-buttons">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="me-3"
                  onClick={goToProducts}
                >
                  Shop Now
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg"
                  onClick={goToLogin}
                >
                  Login
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IntroPage;
