import React from "react";

const Studio = ({ studio }) => {
  const { name, img } = studio;
  return (
    <div
      className="card col-sm-12 col-md-3 col-lg-4 rounded-4 border-4 border-primary"
      style={{ width: "23rem" }}
    >
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default Studio;
