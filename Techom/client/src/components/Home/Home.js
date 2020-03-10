import React, { Component } from 'react';
import Showcase from './Showcase';
import Icon from './Icon';
import Heading from './Heading';
import Info from './Info';
import VideoPlay from './VideoPlay';
import PhotoGallery from './PhotoGallery';
import Newsletter from './Newsletter';

class Home extends Component {
  render() {
    return (
      <div id="home">
        <Showcase />
        <Icon />
        <Heading />
        <Info />
        <VideoPlay />
        <PhotoGallery />
        <Newsletter />
      </div>
    );
  }
}

export default Home;
