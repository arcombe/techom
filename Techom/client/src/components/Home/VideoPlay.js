import React from 'react';

export default () => {
  return (
    <div>
      <section id="video-play">
        <div className="dark-overlay">
          <div className="container p-5">
            <div className="row">
              <div className="col">
                <a
                  href=""
                  className="video"
                  data-video="https://www.youtube.com/embed/"
                  data-toggle="modal"
                  data-target="#videoModal"
                >
                  <i className="fas fa-play fa-3x"></i>
                </a>
                <h1>See What We Do</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
