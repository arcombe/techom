import React from 'react';
import imgLaptop from '../../img/laptop.png';

export default function Info() {
  return (
    <section id="Info" className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <h3>Info</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              tempora adipisci in tenetur qui doloremque accusamus neque hic
              totam dicta?
            </p>
            <a href="/" className="btn btn-outline-danger btn-lg">
              Learn More
            </a>
          </div>
          <div className="col-md-6">
            <img src={imgLaptop} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}
