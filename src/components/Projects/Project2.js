import { createMuiTheme, Grid, makeStyles, ThemeProvider, Typography, Container } from '@material-ui/core'
import React from 'react'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import inv from '../../assets/inventory.jpg'
import ims from '../../assets/ReactIMS0.jpg'
import { GitHub } from '@material-ui/icons';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const breakpoints = createBreakpoints({})

const useStyles = makeStyles(theme => ({
    grid1: {
        backgroundColor: "#fff"
    },
    title: {
        width: "80vw",
        borderBottom: "1px solid black",
        textAlign: "center",
    },
    contrib: {
        width: "80vw",
        borderTop: "1px solid black",
        textAlign: "center",
        marginTop: ".75rem"
    },
    mt5px: {
        marginTop: "5px",
    },
    imgcontainer: {
        width: "100%",
        [theme.breakpoints.up('lg')]: {
            borderRadius: "8px",
            boxShadow: "0px 10px 31px 1px rgba(0,0,0,0.75)",
        },
        overflow: "hidden",
        
    },
    img: {
        margin: "0 auto",
        textAlign: "center",
        [theme.breakpoints.up('sm')]: {
            height: "30vw"
        },
        [theme.breakpoints.up('md')]: {
            height: "25vw"
        },
        [theme.breakpoints.up('lg')]: {
            height: "28vw"
        },
        [theme.breakpoints.down('sm')]:{
            maxWidth: "100vw"
        },
        '@media (max-height:600px)': {
            height: "30vw"
        },
        '@media (max-height:650px)': {
            height: "28vw"
        },
        '@media (max-height:768px)': {
            height: "35vw"
        },
        display: "block",
    },
    flex: {
        [theme.breakpoints.up('xs')] : {
        paddingTop: 28,
        },
        [theme.breakpoints.up('sm')]: {
            paddingTop: 64,
        },
        width: "100vw",
        height: "100vh"
    },
    outlineButton: {
        margin: "0 auto",
        paddingTop: "5px",
        border: "1px solid #aaa",
        borderRadius: "5px",
        width: "60%",
        textDecoration: "none",
        color: "inherit",
        textAlign: "center",
        transition: "all .3s ease",
        backgroundColor: "#ffffffaa",
        boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
        "&:hover": {
            transition: "all .3s ease",
            backgroundColor: "#dceeff"
        }
    },
    break: {
        [theme.breakpoints.up('xs')] : {
            marginBottom: ".75rem",
        },
        [theme.breakpoints.up('sm')] : {
            marginBottom: "2rem",
        },
    },
    break1: {
        [theme.breakpoints.up('sm')] : {
            marginBottom: "1rem",
        },
    },
    mdgap: {
        [theme.breakpoints.up('xs')]: {
            marginTop: ".5rem"
        },
        [theme.breakpoints.up('md')]: {
            marginTop: 0
        },
    },
    anchor: {
        listStyle: "none",
        color: "inherit",
        textDecoration: "none",
        padding: "5px",
        margin: "5px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "3px 7px 12px -4px rgba(0,0,0,0.75)",
        [theme.breakpoints.up('xs')]: {
            width: "100%",
        },
        [theme.breakpoints.up('sm')]: {
            width: "80%"
        },
        transition: "all .3s ease",
        backgroundColor: "#ffffffaa",
        "&:hover": {
            transition: "all .3s ease",
            backgroundColor: "#dceeff"
        }
    }
}))

const overrideTheme = createMuiTheme({
    overrides: {
        MuiTypography:{
            subtitle2: {
                [breakpoints.down('sm')]: {
                    lineHeight: .75
                }
            },
            overline: {
                [breakpoints.down('sm')]: {
                    fontSize: "1rem",
                    lineHeight: 1.5
                },
                [breakpoints.up('sm')]: {
                    fontSize: "1.1rem",
                },
            },
            subtitle1: {
                [breakpoints.down('sm')]: {
                    fontSize: ".9rem",
                    lineHeight: 1.3
                },
                [breakpoints.up('sm')]: {
                    fontSize: "1.1rem"
                },
                [breakpoints.up('md')]: {
                    fontSize: "1.15rem"
                },
            },
            h5: {
                [breakpoints.up('md')]: {
                    fontSize: "2.5rem"
                }
            }
        }
    }
})

function Project1() {
    const classes = useStyles();
    return (
        <Grid container direction="column" justify="center" className={classes.flex} >
        <ThemeProvider theme={overrideTheme}>
        <Grid container justify="center" className={classes.break}>
            <Typography variant="h5" className={classes.title}>Inventory Management</Typography>
        </Grid>


        <Grid container justify="center" className={classes.break1}>
            <Grid item xs={12} md={5}
                container
                justify="center"
                className={classes.imgcontainer}>
                <AutoPlaySwipeableViews slideStyle={{"overflow":"hidden"}}>
                    <img src={inv} alt="restaurant" draggable="false" className={classes.img}/> 
                    <img src={ims} alt="restaurant" draggable="false" className={classes.img}/> 
                </AutoPlaySwipeableViews>
            </Grid>
            <Grid item container direction="column" justify="space-evenly" xs={12} md={4}>
                <Grid item className={classes.mdgap}>
                    <Container>
                        <Typography variant="subtitle1">
                            Capstone - This project is a collaborative work of 3 students as a team. 
                            Starting from scratch, we have designed this project by brainstorming ideas of how and IMS system would be. 
                            Tasks were assigned to each member to have a goal for every sprint.
                        </Typography>
                    </Container>
                </Grid>
                <Grid item container justify="space-evenly">
                    <Grid item container xs={12} justify="center">
                        <Typography variant="overline">Links:</Typography>
                    </Grid>
                    <Grid item container>
                        <a href="#https://github.com/AshenCat/capstone-abc-store" className={classes.outlineButton}>
                            <div style={{textAlign: "center"}}><GitHub /></div>
                            <Typography>Github</Typography>
                        </a>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>


        <Grid container justify="center">
            <Grid container item xs={12} justify="center">
                <Typography variant="overline" className={classes.contrib}>Contributors:</Typography>
            </Grid>
            <Grid container item xs={12} justify="center">
                <Grid container item xs={6} md={2} justify="center">
                <a href="https://github.com/kevin-hy" className={classes.anchor} style={{textAlign: "center"}}>
                    <Typography variant="subtitle1">Kevin Hy</Typography>
                    <Typography variant="subtitle2"><small>Project Manager</small></Typography>
                </a>
                </Grid>
                <Grid container item xs={6} md={2} justify="center">
                    <a href="https://github.com/itbel" className={classes.anchor} style={{textAlign: "center"}}>
                        <Typography variant="subtitle1">Igor T Belem</Typography>
                        <Typography variant="subtitle2"><small>Developer</small></Typography>
                    </a>
                </Grid>
                <Grid container item xs={6} md={2} justify="center">
                    <a href="https://github.com/ashencat" className={classes.anchor} style={{textAlign: "center"}}>
                        <Typography variant="subtitle1">Klifford Agujar</Typography>
                        <Typography variant="subtitle2"><small>Lead Developer</small></Typography>
                    </a>
                </Grid>
            </Grid>
        </Grid>
        </ThemeProvider>
        </Grid>
    )
}

export default Project1
