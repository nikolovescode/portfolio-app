import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                       <img
                       src="data:image/png;base64,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"
                       alt="avatar"
                       className="avatar-image"
                       />
                <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <p>HTML/CSS | JavaScript | React | NodeJS | Xamarin | SQL | Java | C#/.NET | Azure</p>

                        <div className="social-links">

{/* LinkedIn */}
<a href="http://google.com" rel="noopener noreferrer" target="_blank">
    <i className="fa fa-linkedin-square" aria-hidden="true" />
</a>
{/* Github */}
<a href="http://google.com" rel="noopener noreferrer" target="_blank">
    <i className="fa fa-github-square" aria-hidden="true" />
</a>
 {/* Youtube */}
 <a href="http://google.com" rel="noopener noreferrer" target="_blank">
    <i className="fa fa-youtube-square" aria-hidden="true" />
</a>                                                       
</div>
                       </div>

                      
                    </Cell>

                </Grid>

            </div>
            ) 
    }
}

export default Landing;