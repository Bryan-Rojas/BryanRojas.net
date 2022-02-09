import React, {Component} from 'react';

class Buttons extends Component {
    render() {
        return(
            <>
                <div className="row">
                    <button type="button" class="btn btn-primary"><a href="https://res.cloudinary.com/dzwtspghi/image/upload/v1644435651/Bryan_Rojas_-_Resume_-_2022_wdieln.pdf" target = "_blank" style={{color: 'white'}}>Resume</a></button>
                    &nbsp;
                    <button type="button" class="btn btn-primary"><a href="https://www.linkedin.com/in/~bryan/" style={{color: 'white'}}>LinkedIn</a></button>
                    &nbsp;
                    <button type="button" class="btn btn-primary"><a href="https://github.com/bryan-rojas" style={{color: 'white'}}>GitHub</a></button>
                </div>
            </>
        )
    }
}
  
export default Buttons