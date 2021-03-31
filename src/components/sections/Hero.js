import React from 'react'
import { overrideTheme } from '../useStyles';
import { Grid, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Aos from 'aos';
import "aos/dist/aos.css";

function Hero(props) {
    const { classes } = props;

    React.useEffect(()=>{
        Aos.init({duration: 2000});
    }, [])

    return (
        <>
            <nav className={classes.nav}>
                <Typography variant="h4" className={classes.navItem}>@KA</Typography>   
            </nav>
            <Grid container direction="column" justify="center" alignItems="center" className={classes.container}>
                <Grid item className={classes.headNameContainer}>
                    <ThemeProvider theme={overrideTheme}>
                        <Typography align="center" variant="h1" className={classes.name}><span data-aos="fade-up">Klifford Agujar</span></Typography>
                    </ThemeProvider>
                </Grid>
                <Grid item>
                    <Typography align="center" variant="h4" className={classes.title}>
                        <span data-aos="fade-up" data-aos-delay="400">Full Stack Developer</span>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Hero
