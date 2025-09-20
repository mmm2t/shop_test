import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  const getProductDetail = async () => {
    let url = `http://localhost:4000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductDetail(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="page-with-navbar">
      <Container className="product-detail-container">
        <Row>
          <Col className="product-detail-image" lg={6}>
            <div className="product-card-overlay">
              <img src={productDetail?.img} className="img-fluid" alt={productDetail?.title} />
            </div>
          </Col>
          <Col className="product-detail-info" lg={6}>
            <div className="product-card-overlay">
              <h5 className="text-dark">{productDetail?.title}</h5>
              <h6 className="text-dark">${productDetail?.price}.00</h6>
              <Dropdown className="product-detail-size mb-3">
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                  Size
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">L</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button className="add-to-cart-button" variant="outline-dark">
                Add to Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
