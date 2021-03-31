import { Grid, Typography } from '@material-ui/core'
import { LocationOn } from '@material-ui/icons';
import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

function Intro(props) {
    const { classes } = props;

    React.useEffect(()=>{
        Aos.init({duration: 2000});
    }, [])

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
                            <div data-aos="fade-left" data-aos-delay="250">
                                <Typography variant="h2" className={classes.meName}>
                                    <span>Hi, I'm Klifford.</span>
                                </Typography>
                            </div>
                            <div data-aos="fade-left" data-aos-delay="250">
                                <Grid container item alignItems="center" className={classes.loc}>
                                    <LocationOn style={{fontSize: "inherit"}} />
                                    <Typography style={{fontSize: "inherit"}}><span>Toronto, Ontario</span></Typography>
                                </Grid>
                            </div>
                        </Grid>
                        <Typography variant="h4" className={classes.meInfo}>
                            <span data-aos="fade-right">I am a passionate web developer with a curious mindset. The internet has always piqued my interest which led me to pursue a career in web development. </span> 
                            <span data-aos="fade-right">On my free time, I do my personal projects which involves coding and some electronics. Here's some of my projects from freelancing and school.</span>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
    )
}

export default Intro
