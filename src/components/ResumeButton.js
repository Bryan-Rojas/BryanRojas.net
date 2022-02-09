import React, {Component} from 'react';
import Resume from '../static/resume/resume_bryan_rojas.pdf'

class Buttons extends Component {
    render() {
        return(
            <>
                <div className="row">
                    <button type="button" class="btn btn-primary"><a href={Resume} target = "_blank" style={{color: 'white'}}>Resume</a></button>
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