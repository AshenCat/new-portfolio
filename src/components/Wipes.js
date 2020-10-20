import { createMuiTheme, Grid, Paper, ThemeProvider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Timeline, Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic'
import './wipes.css'
import prgimage from '../assets/projects.jpg'
import Project1 from './Projects/Project1';
import Project2 from './Projects/Project2';

const useStyle = makeStyles( theme => ({
    intro: {
        height:"100%",
        backgroundImage: `url(${prgimage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
    },
    introTxt: {
        color: "#000",
        padding: "1rem",
        boxShadow: "0px 1px 10px 0px rgba(0,0,0,0.12)"
    }
}));

const overrideTheme = createMuiTheme({
    overrides: {
        MuiPaper:{
            root:{
                backgroundColor: "#ffffffAA"
            }
        }
    }
})

function Wipes() {
    const classes = useStyle();
    return (
        <div className="whole">
            <Controller>
                <Scene
                    triggerHook="onLeave"
                    duration="300%"
                    pin>
                    <Timeline wrapper={<div id="pinContainer" />}>
                        <div className="panel">
                            <Grid container className={classes.intro} direction="column" alignItems="center" justify="center">
                                <Grid item>
                                    <ThemeProvider theme={overrideTheme}>
                                        <Paper>
                                            <Typography variant="h3" className={classes.introTxt}>
                                                Projects
                                            </Typography>
                                        </Paper>
                                    </ThemeProvider>
                                </Grid>
                            </Grid>
                        </div>
                        <Tween
                            from={{x:'-100%'}}
                            to={{x:'0%'}}>
                            <div className="panel panel1">
                                <Project1 />
                            </div>
                        </Tween>
                        <Tween
                            from={{x:'100%'}}
                            to={{x:'0%'}}>
                            <div className="panel panel2">
                                <Project2 />
                            </div>
                        </Tween>
                        <Tween
                            from={{y:'-100%'}}
                            to={{y:'0%'}}>
                            <div className="panel panel3">
                                <Project1 />
                            </div>
                        </Tween>
                    </Timeline>
                </Scene>
            </Controller>
        </div>
    )
}

export default Wipes
