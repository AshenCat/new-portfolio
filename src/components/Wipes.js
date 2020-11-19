import { 
    // createMuiTheme,  
    // Paper, 
    // ThemeProvider,
    Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Timeline, Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic'
import './wipes.css'
import Project1 from './Projects/Project1';
import Project2 from './Projects/Project2';
import Project3 from './Projects/Project3';
import { LocationOn } from '@material-ui/icons';

const useStyle = makeStyles( theme => ({
    intro: {
        height: "100%",
        backgroundColor: "#ffffff",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23e6e6e6' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23cccccc'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
        border: "0px solid #e2e8f0",
        borderBottomWidth: "1px",
        // backgroundAttachment: "fixed",
    },
    introTxt: {
        color: "#000",
        padding: "1rem",
        boxShadow: "0px 1px 10px 0px rgba(0,0,0,0.12)"
    },
    meNameContainer: {
        position: "absolute",
        top: "30px",
        left: "0px",
        padding: "1.5rem",
        width: "100%",
        borderLeft: "8px solid blue"
    },
    meInfo: {
        position: "absolute",
        width: "80%",
        right: 0,
        bottom: "10%",
        padding: "1rem",
        borderRight: "8px solid blue",
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            fontSize: "1.3rem",
            bottom: "30px",
        },
        [theme.breakpoints.up("lg")]: {
            width: "80%",
            fontSize: "2.2rem"
        }
    },
    loc: {
        color: "#000000AA",
        [theme.breakpoints.up("sm")]: {
            fontSize: "2rem"
        }
    }
}));

// const overrideTheme = createMuiTheme({
//     overrides: {
//         MuiPaper:{
//             root:{
//                 backgroundColor: "#ffffffAA"
//             }
//         }
//     }
// })

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
                            <Grid container className={classes.intro}>
                                <Grid item>
                                    {/* <ThemeProvider theme={overrideTheme}>
                                        <Paper>
                                            <Typography variant="h3" className={classes.introTxt}>
                                                Projects
                                            </Typography>
                                        </Paper>
                                    </ThemeProvider> */}
                                    
                                    <Grid container direction="column" className={classes.meNameContainer}>
                                        <Typography variant="h2" className={classes.meName}>
                                            Hi, I'm Klifford.
                                        </Typography>
                                        <Grid container item alignItems="center" className={classes.loc}>
                                            <LocationOn style={{fontSize: "inherit"}} />
                                            <Typography style={{fontSize: "inherit"}}>Toronto, Ontario</Typography>
                                        </Grid>
                                    </Grid>
                                    <Typography variant="h4" className={classes.meInfo}>
                                        I am a passionate web developer with a curious mindset. The internet has always piqued my interest which led me to pursue a career in web development. On my free time, I do my personal projects which involves coding and some electronics. Here's some of my projects from freelancing and school.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                        <Tween
                            from={{x:'-100%'}}
                            to={{x:'0%'}}>
                            <div className="panel panel3">
                                <Project1 />
                            </div>
                        </Tween>
                        <Tween
                            from={{x:'100%'}}
                            to={{x:'0%'}}>
                            <div className="panel panel3">
                                <Project2 />
                            </div>
                        </Tween>
                        <Tween
                            from={{y:'-100%'}}
                            to={{y:'0%'}}>
                            <div className="panel panel3">
                                <Grid container direction="column" justify="center" style={{height: "100%"}}>
                                    <Grid item container justify="center">
                                        <Project3 />
                                    </Grid>
                                </Grid>
                            </div>
                        </Tween>
                    </Timeline>
                </Scene>
            </Controller>
        </div>
    )
}

export default Wipes
