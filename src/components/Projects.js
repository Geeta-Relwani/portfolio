import React from 'react'
import './projects.css'
import clac3 from './clac3.png'
import {IconButton, Card, Grid, Cell,Button,CardText,CardTitle,CardActions,CardMenu} from 'react-mdl';

class Projects extends React.Component{
    render(){
        return(
        <div>
            <section className="projects-grid">
                <Grid className="projects-grid">
                    <Cell col = {4}>
                    <Card className="card" shadow={5}>
                            <CardTitle
                             style={{
                                backgroundImage: `url(${clac3})`,
                                height: '250px', width: '350px' }} ></CardTitle>
                            <CardText>Loreum Ipsum</CardText>
                            <CardActions border={1}>
                                <Button>Github</Button>
                                <Button>Live Demo</Button>
                            </CardActions>
                            <CardMenu>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                    <Card className="card" shadow={5}>
                            <CardTitle
                             style={{
                                backgroundImage: `url(${clac3})`,
                                height: '250px', width: '350px' }} ></CardTitle>
                            <CardText>Loreum Ipsum</CardText>
                            <CardActions border={1}>
                                <Button>Github</Button>
                                <Button>Live Demo</Button>
                            </CardActions>
                            <CardMenu>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                    <Card className="card" shadow={5}>
                            <CardTitle
                             style={{
                                backgroundImage: `url(${clac3})`,
                                height: '250px', width: '350px' }} ></CardTitle>
                            <CardText>Loreum Ipsum</CardText>
                            <CardActions border={1}>
                                <Button>Github</Button>
                                <Button>Live Demo</Button>
                            </CardActions>
                            <CardMenu>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                    <Card className="card" shadow={5}>
                            <CardTitle
                             style={{
                                backgroundImage: `url(${clac3})`,
                                height: '250px', width: '350px' }} ></CardTitle>
                            <CardText>Loreum Ipsum</CardText>
                            <CardActions border={1}>
                                <Button>Github</Button>
                                <Button>Live Demo</Button>
                            </CardActions>
                            <CardMenu>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </Cell>
                    
                </Grid>
            </section>

        

        </div>);
    }
}

export default Projects;