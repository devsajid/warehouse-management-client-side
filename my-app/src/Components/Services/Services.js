import React from 'react'
import { Link } from 'react-router-dom'
import photo from "../../img/0.jpg";

function Services(props) {
  const { name, ratting, feedback} = props;

  return (
    <div>
      <h3>Services</h3>
      
      <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Name : {name}</h5>
        <p class="card-text">price : {feedback}</p>
        <p class="card-text">feedback : {feedback}</p>
        <Link to="/Checkout" class="btn btn-primary">Checkout Now</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Name : {name}</h5>
        <p class="card-text">price : {feedback}</p>
        <p class="card-text">feedback : {feedback}</p>
        <Link to="/Checkout" class="btn btn-primary">Checkout Now</Link>
      </div>
    </div>
  </div>
  
</div>
</div>

  )
}

export default Services