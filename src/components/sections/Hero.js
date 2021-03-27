import React from 'react'
import { overrideTheme } from '../useStyles';
import { Grid, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

function Hero(props) {
    const { classes } = props;
    return (
        <>
            <nav className={classes.nav}>
                <Typography variant="h4" className={classes.navItem}>@KA</Typography>   
            </nav>
            <Grid container direction="column" justify="center" alignItems="center" className={classes.container}>
                <Grid item className={classes.headNameContainer}>
                    <ThemeProvider theme={overrideTheme}>
                        <Typography align="center" variant="h1" className={classes.name}>Klifford Agujar</Typography>
                    </ThemeProvider>
                </Grid>
                <Grid item>
                    <Typography align="center" variant="h4" className={classes.title}>
                        Full Stack Developer
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Hero
