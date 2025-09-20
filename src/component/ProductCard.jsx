import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item?.id}`);
  };
  return (
    <div className="card" onClick={showDetail}>
      <img className="product-image" src={item?.img} />
      <div className="new">{item?.new == true ? "New" : ""}</div>
      <h5>{item?.title}</h5>
      <h6>${item?.price}.00</h6>
    </div>
  );
};

export default ProductCard;
