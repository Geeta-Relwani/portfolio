import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'

import LandingPage from './LandingPage';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

class Main extends React.Component{
    render(){
        return(
            <div>
    
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route  path="/projects" component={Projects}/>
                <Route  path="/resume" component={Resume}/>
                <Route  path="/contact" component={Contact}/>
            </Switch>
            
        </div>
        
        );
    }
   
}


export default Main;