import React, { Component } from 'react';
import selfie from '../static/images/selfie.png';

class Image extends Component {
  render() {
    return (
      <portrait src={selfie} alt="Bryan Rojas - Software Engineer" />
    );
  }
}

export default Image;
