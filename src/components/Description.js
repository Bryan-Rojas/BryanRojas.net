import React, { Component } from 'react';
import TypingEffect from './TypingEffect';

class Description extends Component {
  render() {
    return (
      <div>
        <h1 className="hero-name">Bryan Rojas</h1>
        <p className="hero-tagline">Senior Software Engineer @ Oracle | AI &amp; DevSecOps</p>
        <TypingEffect />
      </div>
    );
  }
}

export default Description;
