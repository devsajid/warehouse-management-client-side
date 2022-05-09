import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div className="service">
      <img src={img} alt="Our service" />
      <h3>{name}</h3>
      <p>Price:${price}</p>
      <p>
        <small>{description}</small>
      </p>
      <Link to="/Checkout" class="btn btn-primary">Checkout Now</Link>
    </div>
  );
};

export default Service;
