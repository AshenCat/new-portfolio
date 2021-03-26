import { Button, Container, createMuiTheme, Grid, Hidden, makeStyles, Snackbar, TextField, ThemeProvider, Typography } from '@material-ui/core'
import React from 'react'
import emailjs from 'emailjs-com';
import MuiAlert from '@material-ui/lab/Alert';

const useStyle = makeStyles( theme => ({
    head: {
        textAlign: "center",
        width: "100%",
        margin: "1.5rem auto",
    },
    footer: {
        paddingBottom: "2rem",
        borderTop: "1px solid lightgray",
        backgroundColor: "#dceeff",
    },
    email: {
        width: "100%"
    },
    txt: {
        lineHeight: 1,
        fontSize: ".75rem"
    },
    form: {
        // backgroundColor: '#fff'
        backgroundColor: '#aaa',   
    },
    anchor: {
        color:'blue',
        '&:visited': {
            color: 'blue',
        },
        textDecoration: "none"
    }
}))

const overrideTheme = createMuiTheme({
    overrides: {
        palette: {
            primary: "#3f51b5"
        },
        MuiOutlinedInput: {
            root: {
                backgroundColor: '#fff',
            }
        },
        
    }
})

function Footer() {
    const classes = useStyle();

    const [open, setOpen] = React.useState(false)

    const onclick = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2t4plzk', 'template_bf3p0f2', e.target, 'user_HRwVJ34l6Nrlcns0adWoq')
        .then((result) => {
            console.log("res:", result.text);
        }, (error) => {
            console.log("err: ", error.text);
        });
        setOpen(true)
    }
    return (
        <footer className={classes.footer}>
            <ThemeProvider theme={overrideTheme}>
            <Container>
                <Typography variant="h4" className={classes.head}>Contact </Typography>
                <form onSubmit={onclick} id="form">
                <Grid container direction="row" justify="space-evenly">
                    <Grid container item direction="column" xs={12} md={7}>
                        <Grid item xs={12}>
                            <TextField value="you" type="hidden"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" label="Name" name="from_name" margin="dense"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" type="Email" label="Your Email" name="reply_to" margin="dense" className={`${classes.email}`} />
                            </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant="outlined" 
                                label="Message" 
                                margin="dense"
                                name="message"
                                multiline
                                rows="4"/>
                        </Grid>
                        <Grid item>
                            <Button color="primary" type="submit" variant="contained" style={{marginTop:"1rem"}}>Send Message</Button>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} md={3} direction="column" justify="space-between">
                        <Hidden smUp>
                            <div style={{marginTop: "5vh"}} />
                        </Hidden>
                        <Typography variant="subtitle1">Email: forddagujar95@gmail.com</Typography>
                            <Typography variant="subtitle1" className={classes.txt}>
                                I'll try to respond as soon as I can. Don't forget to add your email if you expect a reply.
                            </Typography>
                        <Grid item>
                            <hr />
                            <Typography variant="h6">
                                Media credits:<br />
                            </Typography>
                                <Typography><a href="https://pexels.com" target="_blank" rel="noopener noreferrer" className={classes.anchor}>Pexels</a><br /></Typography>
                                <Typography><a href="https://www.svgbackgrounds.com/" target="_blank" rel="noopener noreferrer" className={classes.anchor}>SVGBackgrounds</a><br />
                            </Typography>
                        </Grid>
                        <Typography variant="overline">	&#169; All rights reserved</Typography>
                    </Grid>
                </Grid>
                </form>
            </Container>
            </ThemeProvider>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={()=>setOpen(false)}>
                    <MuiAlert
                        onClose={()=>setOpen(false)}
                        severity="success">
                            Message Sent!
                    </MuiAlert>
            </Snackbar>
        </footer>
    )
}

export default Footer
