import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return (
      <div className="btn-row">
        <a
          href="https://res.cloudinary.com/dzwtspghi/image/upload/v1644435651/Bryan_Rojas_-_Resume_-_2022_wdieln.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/~bryan/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/bryan-rojas"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          GitHub
        </a>
      </div>
    );
  }
}

export default Buttons;
