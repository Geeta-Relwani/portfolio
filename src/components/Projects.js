import React from 'react'
import './projects.css'
import clac3 from './clac3.png'
import recipe from './recipe.png'
import tic from './tic.png'
import weather from './weather.png'
import todo from './todo.png'
import metronome from './metronome.png'


import {IconButton, Card, Grid, Cell,Button,CardText,CardTitle,CardActions,CardMenu} from 'react-mdl';
import { jsxAttribute } from '@babel/types';

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
                                backgroundImage: `url(${clac3})` ,
                                height: '250px', width: '350px' }} ></CardTitle>
                            <CardText style={{background:'#FFFFFF'}}>Calulator</CardText>
                            <CardActions style={{background:'#FFFFFF'}} border >
                                <Button  ><a href="https://github.com/Geeta-Relwani/react-calc" target="_blank">Github</a></Button>
                                <Button><a href="https://calc-geeta-relwani.netlify.com" target="_blank">Live Demo</a></Button>
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
                                backgroundImage: `url(${recipe}) `,
                                height: '250px', width: '350px' }} ></CardTitle>
                            <CardText>Recipe Search</CardText>
                            <CardActions border={1}>
                                <Button  ><a href="https://github.com/Geeta-Relwani/recipe-search" target="_blank">Github</a></Button>
                                <Button><a href="https://recipe-search-geeta-relwani.netlify.com" target="_blank">Live Demo</a></Button>
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
                                backgroundImage: `url(${todo})`,
                                height: '250px', width: '350px' }} ></CardTitle>
                            <CardText>To-Do List</CardText>
                            <CardActions border={1}>
                                <Button  ><a href="https://github.com/Geeta-Relwani/to-do-list-Jquery" target="_blank">Github</a></Button>
                                <Button><a href="https://todo-list-js-geeta-relwani.netlify.com"target="_blank" >Live Demo</a></Button>
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
                                backgroundImage: `url(${weather})`,
                                height: '250px', width: '350px' }} ></CardTitle>
                            <CardText>Weather Finder</CardText>
                            <CardActions border={1}>
                                <Button  ><a href="https://github.com/Geeta-Relwani/weather" target="_blank">Github</a></Button>
                                <Button><a href="https://weather-finder-geeta-relwani.netlify.com" target="_blank" >Live Demo</a></Button>
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
                                backgroundImage: `url(${tic})`,
                                height: '250px', width: '350px' }} ></CardTitle>
                            <CardText>Tic Tac Toe</CardText>
                            <CardActions border={1}>
                                <Button  ><a href="https://github.com/Geeta-Relwani/tic-tac-toe" target="_blank">Github</a></Button>
                                <Button><a href="https://tic-tac-toe-geeta-relwani.netlify.com" target="_blank">Live Demo</a></Button>
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
                                backgroundImage: `url(${metronome})`,
                                height: '250px', width: '350px' }} ></CardTitle>
                            <CardText>Metronome</CardText>
                            <CardActions border={1}>
                                <Button  ><a href="https://github.com/Geeta-Relwani/metronome" target="_blank">Github</a></Button>
                                <Button><a href="https://metronome-geeta-relwani.netlify.com" target="_blank">Live Demo</a></Button>
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