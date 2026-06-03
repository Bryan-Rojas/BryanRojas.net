import React, { Component } from 'react';
import selfie from '../static/images/selfie.png';

class Image extends Component {
  render() {
    return (
      <img
        src={selfie}
        alt="Portrait of Bryan Rojas"
        className="hero-photo"
      />
    );
  }
}

export default Image;
