import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { GitHub, AlternateEmail, LinkedIn } from '@material-ui/icons';
import {overrideTheme, useStyle} from './useStyles';
import { ThemeProvider } from '@material-ui/core/styles'
import Skills from './sections/Skills';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import ProjectListContainer from './sections/Projects/ProjectListContainer';
import { Link } from 'react-scroll';

function Body(props) {
    const classes = useStyle();

    // const modal = useModal();
    // console.log(modal)
    // const openModal = (bool, images, title) => {
        // setImages()
        // setTitle()
        // setOpen()
    // }

    return (
        <>
            <section className={classes.bio} id="s2t">
                <Hero classes={classes} />
            </section>
            <section className={classes.divider} id="firstDivider">
                <Typography variant="h4" className={classes.textCenter}>
                    Public Links
                </Typography>
                <Container style={{marginTop: "1rem"}}>
                    <Grid container justify="center" spacing={3}>
                        <Grid item>
                            <a href="https://github.com/ashencat" target="_blank" rel="noopener noreferrer" className={classes.visited}><GitHub style={{ fontSize: 60 }}/></a>
                        </Grid>
                        <Grid item>
                            <a href="https://www.linkedin.com/in/klifford-agujar-8714a41a9/" target="_blank" rel="noopener noreferrer" className={classes.visited}><LinkedIn style={{ fontSize: 60 }}/></a>
                        </Grid>
                        <Grid item>
                            <Link   
                                to="form" 
                                spy={true}
                                smooth="true"
                                offset={-70}
                                duration={1500} 
                                className={classes.visited}>
                                    <AlternateEmail style={{ fontSize: 60 }}/>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section>
                <Intro classes={classes} />
            </section>
            <section className={classes.divider}>
                <Typography variant="h4" className={classes.textCenter}>
                    Projects
                </Typography>
            </section>
            <section className="projectList">
                <ThemeProvider theme={overrideTheme}>
                    <div className="projectContainer">
                        {/* <Wipes /> */}
                        {/* <div className="projectList"> */}
                        
                        {/* Project 1 */}
                        <ProjectListContainer size={props.size} classes={classes}/>
                        {/* </div> */}
                        {/* Project 2 */}
                        
                    </div>
                </ThemeProvider>
            </section>
            <section className={classes.divider}>
                <Typography variant="h4" className={classes.textCenter}>
                    Skills
                </Typography>
            </section>
            <section className={classes.tech} style={{paddingTop: '60px', paddingBottom: '60px', width: '100%'}}>
                <Skills />
            </section>
        </>
    )
}

export default Body
