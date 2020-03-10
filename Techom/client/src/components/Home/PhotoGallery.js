import React, { Component } from 'react';
// import image1 from 'https://www.source.unsplash.com/random/560x560';
// import image2 from 'https://www.source.unsplash.com/random/560x560';
// import image3 from 'https://www.source.unsplash.com/random/560x560';
// import image4 from 'https://www.source.unsplash.com/random/560x560';
// import image5 from 'https://www.source.unsplash.com/random/560x560';
// import image6 from 'https://www.source.unsplash.com/random/560x560';

class PhotoGallery extends Component {
  render() {
    return (
      <section id="photo-gallery py-5">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1>Photo Gallery</h1>
              <p className="lead">Check out our photos</p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <a
                href="https://source.unsplash.com/random/560x560"
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="560"
                data-width="560"
              >
                <img
                  src="https://source.unsplash.com/random/560x560"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://source.unsplash.com/random/561x561"
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="561"
                data-width="561"
              >
                <img
                  src="https://source.unsplash.com/random/561x561"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://source.unsplash.com/random/562x562"
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="562"
                data-width="562"
              >
                <img
                  src="https://source.unsplash.com/random/562x562"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <a
                href="https://source.unsplash.com/random/563x563"
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="563"
                data-width="563"
              >
                <img
                  src="https://source.unsplash.com/random/563x563"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://source.unsplash.com/random/564x564"
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="564"
                data-width="564"
              >
                <img
                  src="https://source.unsplash.com/random/564x564"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://source.unsplash.com/random/565x565"
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="565"
                data-width="565"
              >
                <img
                  src="https://source.unsplash.com/random/565x565"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PhotoGallery;
