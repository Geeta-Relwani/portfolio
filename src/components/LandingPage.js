import React from 'react'
import {Grid,Cell} from 'react-mdl'
import images from './images.png';


class LandingPage extends React.Component{
    render(){
        return(
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col='12'>
                <img
              
              alt="avatar"
              src={require("./images.png")}
              className="avatar-img"
              />

              <div className="banner-text">
                  <h1>Front-End Web Developer</h1>
                  <hr/>
                  <p>HTML | CSS| JavaScript/JQuery | React </p>
                  {/* <div className="icons">
                        <span ><i className="fab fa-html5"></i></span>
                        <span><i className="fab fa-css3-alt"></i></span>
                        <span><i className="fab fa-js-square"></i></span>
                        <span><i className="fab fa-react"></i></span>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-html5"></i>
                  </div> */}
              </div>
                    
                </Cell>
            </Grid>

        </div>);
    }
}

export default LandingPage;