import React, { Component } from 'react';

class Newsletter extends Component {
  render() {
    return (
      <section id="newsletter" className="text-center p-5 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Sign Up For Our Newsletter</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis aspernatur odit expedita est placeat soluta atque
                exercitationem animi ad cumque.
              </p>
              <form className="form-inline justify-content-center">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control mb-2 mr-2"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control mb-2 mr-2"
                />
                <input
                  type="submit"
                  value="submit"
                  className="btn btn-primary mb-2 form-control"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Newsletter;
