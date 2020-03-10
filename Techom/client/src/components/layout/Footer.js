import React from 'react';

export default () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center text-white p-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="m-0">Copyright &copy; {year}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
