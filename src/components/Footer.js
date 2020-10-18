import { Button, Container, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles( theme => ({
    head: {
        textAlign: "center",
        width: "100%",
        margin: "1.5rem auto",
    },
    footer: {
        marginBottom: "2rem",
        borderTop: "1px solid lightgray"
    },
    email: {
        width: "100%"
    }
}))

const onclick = () => {

}

function Footer() {
    const classes = useStyle();
    return (
        <footer className={classes.footer}>
            <Container>
                <Typography variant="h5" className={classes.head}>Contact </Typography>
                <Grid container direction="row" justify="space-evenly">
                    <Grid container item direction="column" xs={12} md={6}>
                        <Grid item xs={12} sm={6}><TextField variant="outlined" label="Name" margin="dense"/></Grid>
                        <Grid item xs={12} sm={6}><TextField variant="outlined" label="Your Email" margin="dense" className={classes.email}/></Grid>
                        <Grid item xs={12}>
                            <TextField 
                                fullWidth
                                variant="outlined" 
                                label="Message" 
                                margin="dense"
                                multiline
                                rows="4"/>
                        </Grid>
                        <Grid item>
                            <Button onClick={onclick} variant="contained">Send Message</Button>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} md={4} direction="column" justify="space-between">
                        <Typography variant="subtitle1">Email: forddagujar95@gmail.com</Typography>
                        <Typography variant="subtitle1">I am usually busy, but I'll try to respond as soon as I can. Don't forget to add your email if you expect a reply.</Typography>
                        <Grid item>
                            <Typography variant="h6">
                                Credits:<br />
                            </Typography>
                                <a href="https://pexels.com">Pexels</a><br />
                                <a href="https://www.svgbackgrounds.com/">SVGBackgrounds</a><br />
                        </Grid>
                        <Typography variant="overline">	&#169; All rights reserved</Typography>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer
