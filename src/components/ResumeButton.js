import React, {Component} from 'react';
import resume from '../static/resume/Bryan Rojas - Resume - April 2020.pdf'

class Buttons extends Component {
    render() {
        return(
            <>
                <div className="row">
                    <button type="button" class="btn btn-primary"><a href={resume} style={{color: 'white'}}>Resume</a></button>
                    &nbsp;
                    <button type="button" class="btn btn-primary"><a href="https://www.linkedin.com/in/bryrojas/" style={{color: 'white'}}>LinkedIn</a></button>
                    &nbsp;
                    <button type="button" class="btn btn-primary"><a href="https://github.com/bryan-rojas" style={{color: 'white'}}>GitHub</a></button>
                </div>
            </>
        )
    }
}
  
export default Buttons