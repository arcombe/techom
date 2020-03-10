import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/Home/Home';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Route to="/" component={Home} />

      <Footer />
    </Router>
  );
}

export default App;
