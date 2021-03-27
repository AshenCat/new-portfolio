import { Grid, Typography } from '@material-ui/core'
import { LocationOn } from '@material-ui/icons';
import React from 'react'

function Intro(props) {
    const { classes } = props;
    return (
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
    )
}

export default Intro
