import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../component/Navbar";
import { useSearchParams } from "react-router";

const ProductAll = () => {
  const [products, setProducts] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const getProducts = async () => {
    let keyword = searchParams.get("q");
    let category = searchParams.get("category");
    let url = `https://my-json-server.typicode.com/mmm2t/shop_test`;

    let response = await fetch(url);
    let data = await response.json();

    if (keyword) {
      data = data.filter((item) =>
        item.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    if (category && category !== "All") {
      data = data.filter((item) => item.category === category);
    }

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <div className="page-with-navbar">
      <Container>
        <Row>
          {products.map((item) => (
            <Col lg={3} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
