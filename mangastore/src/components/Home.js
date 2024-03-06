import React from "react";
import Proptypes from "prop-types";

const Home = (props) => {
  return (
    <div className="container mt-5" style={{display: props.display, marginLeft: props.marginLeft, width: props.width}}>
      <div className="row">
        <div className="col-md-6">
          <div class="card mb-3" style={{width: "440px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="Pictures/9151765-107.jpg"
                  class="img-fluid rounded-start"
                  alt="Death Note Black Edition"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Death Note Black Edition, Vol. 1</h5>
                  <p class="card-text">By: Takeshi Obata, Tsugumi Ohba</p>
                  <p class="card-text">€769</p>
                  <button class="btn btn-primary">Add to cart</button>
                  <button class="btn btn-secondary">Add to Wishlist</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="card mb-3" style={{width: "440px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="Pictures/9289609-4327592883-97840.jpg"
                  class="img-fluid rounded-start"
                  alt="Jujutsu Kaisen 0"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Jujutsu Kaisen 0</h5>
                  <p class="card-text">By: Gege Akutami</p>
                  <p class="card-text">€485</p>
                  <button class="btn btn-primary">Add to cart</button>
                  <button class="btn btn-secondary">Add to Wishlist</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Home;
