import React, { Component } from 'react';
import { IconFileText, IconBrandLinkedin, IconBrandGithub } from './icons/TablerIcons';

class Buttons extends Component {
  render() {
    return (
      <div className="contact-links">
        <a href="https://res.cloudinary.com/dzwtspghi/image/upload/v1644435651/Bryan_Rojas_-_Resume_-_2022_wdieln.pdf" target="_blank" rel="noopener noreferrer" className="contact-link">
          <IconFileText size={18} className="contact-icon" />
          Resume
        </a>
        <a href="https://www.linkedin.com/in/~bryan/" target="_blank" rel="noopener noreferrer" className="contact-link">
          <IconBrandLinkedin size={18} className="contact-icon" />
          LinkedIn
        </a>
        <a href="https://github.com/Bryan-Rojas" target="_blank" rel="noopener noreferrer" className="contact-link">
          <IconBrandGithub size={18} className="contact-icon" />
          GitHub
        </a>
      </div>
    );
  }
}

export default Buttons;
