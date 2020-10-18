import { createMuiTheme, Grid, makeStyles, ThemeProvider, Typography, Container, Hidden } from '@material-ui/core'
import React from 'react'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import resto2 from '../../assets/resto.png'
import resto1 from '../../assets/2.jpg'
import { GitHub, ComputerOutlined } from '@material-ui/icons';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const breakpoints = createBreakpoints({})

const useStyles = makeStyles(theme => ({
    grid1: {
        backgroundColor: "#fff"
    },
    grid2: {
        backgroundColor: "#CCC"
    },
    grid3: {
        backgroundColor: "#999"
    },
    grid4: {
        backgroundColor: "#666"
    },
    mt5px: {
        marginTop: "5px",
    },
    imgcontainer: {
        // height: "300px",
        [theme.breakpoints.up('md')]: {
            // width: "20vw",
            // height: "20vw",
            borderRadius: "8px"
        },
        overflow: "hidden",
    },
    img: {
        [theme.breakpoints.up('sm')]: {
            height: "20vw"
        },
        [theme.breakpoints.down('sm')]:{
            maxWidth: "100vw"
        },
        display: "inline"
    },
    flex: {
        [theme.breakpoints.up('xs')] : {
        marginTop: 28,
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: 64,
            // marginBottom: "1rem"
        },
        width: "100vw",
        height: "100vh"
    },
    outlineButton: {
        border: "1px solid #aaa",
        borderRadius: "5px",
        paddingTop: "5px",
        backgroundColor: "#dceeff",
        "&:hover": {
            backgroundColor: "#666"
        }
    },
    break: {
        [theme.breakpoints.up('sm')] : {
            marginBottom: "2rem",
        },
    }
}))

const overrideTheme = createMuiTheme({
    overrides: {
        // MuiPaper:{
        //     rounded:{
        //         // [theme.breakpoints.down('md')]:{
        //             borderRadius: 0,
        //         // }
        //     }
        // },
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
                    // lineHeight: 1.5
                },
            },
            subtitle1: {
                [breakpoints.down('sm')]: {
                    fontSize: ".9rem",
                    lineHeight: 1.3
                },
                [breakpoints.up('md')]: {
                    fontSize: "1.1rem"
                },
                [breakpoints.up('lg')]: {
                    fontSize: "1.25rem"
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
        <Grid container justify="center" className={classes.break}><Typography variant="h5">Restaurant Menu App</Typography></Grid>
        <Grid container justify="center" className={classes.break}>
            <Grid item xs={12} md={5}
                container
                justify="center"
                className={classes.imgcontainer}>
                <div className={classes.imgcontainer}>
                    <img src={resto1} alt="restaurant" draggable="false" className={classes.img}/> 
                </div>
            </Grid>
            <Grid item container direction="column" justify="space-evenly" xs={12} md={4}>
                <Grid item>
                    <Container>
                        <Typography variant="subtitle1">
                            FREELANCE - The goal of the project is to help restaurant owners reduce employee-customer contact within business grounds by upgrading from an old physical menu, to an online menu where customers just have to scan a QR code to access the menu.
                        </Typography>
                    </Container>
                </Grid>
                <Grid item container justify="space-evenly">
                    <Grid item container xs={12} justify="center">
                        <Typography variant="overline">Links:</Typography>
                    </Grid>
                    <Grid item container xs={4} justify="center" direction="column" alignItems="center" className={classes.outlineButton}>
                        <Grid><GitHub /></Grid>
                        <Grid><Typography>Github</Typography></Grid>
                    </Grid>
                    <Grid item container xs={4} justify="center" direction="column" alignItems="center" className={classes.outlineButton}>
                        <Grid><ComputerOutlined /></Grid>
                        <Grid><Typography>Demo</Typography></Grid></Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container justify="center" className={classes.break}>
            <Grid container item xs={12} md={4}>
                <Grid container item xs={12} justify="center">
                    <Typography variant="overline">Contributors:</Typography>
                </Grid>
                <Grid container item xs={6}>
                    <Grid container item xs={12} justify="center">
                        <Typography variant="subtitle1">Francis Victa</Typography>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                        <Typography variant="subtitle2"><small>Project Lead</small></Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={6} className={classes.mt5px}>
                    <Grid item container xs={12} justify="center">
                        <Typography variant="subtitle1">Lilian Yang</Typography>
                    </Grid>
                    <Grid item container xs={12} justify="center">
                        <Typography variant="subtitle2"><small>Developer</small></Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={6} className={classes.mt5px}>
                    <Grid item container xs={12} justify="center">
                        <Typography variant="subtitle1">Klifford Agujar</Typography>
                    </Grid>
                    <Grid item container xs={12} justify="center">
                        <Typography variant="subtitle2"><small>Developer</small></Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={6} className={classes.mt5px}>
                    <Grid item container xs={12} justify="center">
                        <Typography variant="subtitle1">Sir Angel Naguit</Typography>
                    </Grid>
                    <Grid item container xs={12} justify="center">
                        <Typography variant="subtitle2"><small>Part Time</small></Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </ThemeProvider>
        </Grid>
    )
}

export default Project1
