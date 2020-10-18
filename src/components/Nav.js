import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles({
    headtxt: {
        fontWeight: 500
    }
})

function Nav() {
    const classes = useStyles();
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography className={classes.headtxt}>
                    Klifford Agujar
                </Typography>
            </Toolbar>
        </AppBar>       
    )
}

export default Nav
