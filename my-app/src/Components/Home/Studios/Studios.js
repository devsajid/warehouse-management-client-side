import React from "react";
import Studio from "../Studio/Studio";
import studio1 from "../../../images/1.jpg";
import studio2 from "../../../images/3.jpg";
import studio3 from "../../../images/2.jpg";
import studio4 from "../../../images/01.jpg";
import studio5 from "../../../images/02.jpg";
import studio6 from "../../../images/03.jpg";
import studio7 from "../../../images/04.jpg";
import studio8 from "../../../images/5.jpg";
import studio9 from "../../../images/6.jpg";
const studios = [
  { id: 1, name: "Production area", img: studio1 },
  { id: 2, name: "Workshop area", img: studio2 },
  { id: 3, name: "Ground floor area", img: studio3 },
  { id: 4, name: "client and edit suit area", img: studio4 },
  { id: 5, name: "Small photography set area", img: studio5 },
  { id: 6, name: "Editor desk area", img: studio6 },
  { id: 7, name: "Basement phoyoshoot area", img: studio7 },
  { id: 8, name: "Ground phoyoshoot area", img: studio8 },
  { id: 9, name: "Special Production area", img: studio9 },
];
const Studios = () => {
  return (
    <div className="container">
      <h1 className="text-black text-center p-4">Our studios</h1>
      <div className="row">
        {studios.map((studio) => (
          <Studio key={studio.id} studio={studio}></Studio>
        ))}
      </div>
    </div>
  );
};

export default Studios;
