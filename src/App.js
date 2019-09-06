import React from 'react';
import './App.css';
import {Layout, Header,Navigation,Drawer,Content} from 'react-mdl'
import {Link} from 'react-router-dom'
import Main from './components/main'

class App extends React.Component{
  render(){
    return(
      <div>
        <div style={{height: '600px', position: 'relative'}}>
      `  <Layout fixedHeader>
            <Header className="header-color" title="Tiltle" scroll >
                <Navigation>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/">About me</Link>
                    
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/">About me</Link>

                </Navigation>
            </Drawer>
            <Main/>
            <Content />
        </Layout>`
       </div>
       

      </div>
    );
  }
}

export default App;
