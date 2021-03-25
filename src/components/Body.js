import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
// import imghr from '../assets/imghr0.jpg'
import { GitHub, LinkedIn, AlternateEmail } from '@material-ui/icons';
import { Link } from "react-scroll";
// import Wipes from './Wipes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faHtml5, faJsSquare, faMdb, faNodeJs, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import {useStyle} from './useStyles'
// import { library } from '@fortawesome/fontawesome-svg-core';

// library.add(faGoogle)

function Body() {
    const classes = useStyle()
    return (
        <>
            <section className={classes.bio}>
                <nav className={classes.nav}>
                    <Typography variant="h4" className={classes.navItem}>@KA</Typography>   
                </nav>
                <Grid container direction="column" justify="center" alignItems="center" className={classes.container}>
                    <Grid item className={classes.headNameContainer}>
                        <Typography align="center" variant="h1" className={classes.name}>Klifford Agujar</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align="center" variant="h4" className={classes.title}>
                            Full Stack Developer
                        </Typography>
                    </Grid>
                </Grid>
            </section>
            <section className={classes.divider} id="firstDivider">
                <Typography variant="h4" className={classes.textCenter}>
                    Public Links
                </Typography>
                <Container style={{"marginTop": "1rem"}}>
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
                                smooth={true}
                                offset={-70}
                                duration={1500} 
                                className={classes.visited}>
                                    <AlternateEmail style={{ fontSize: 60 }}/>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className="projectList">
                <div className="projectContainer">
                    {/* <Wipes /> */}
                    {/* <div className="projectList"> */}
                        <div className="projectItemCard">
                            <div className="projectItemBox">
                                <div className="projectItem">
                                    <h1>01</h1>
                                    <div className="content">
                                    <Typography variant="h3" component="h2" gutterBottom>
                                            Restaurant Menu App
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </section>
            <section className={classes.divider}>
                <Typography variant="h4" className={classes.textCenter}>
                    Techs
                </Typography>
            </section>
            <section className={classes.tech}>
                <Grid container justify="center" alignContent="center" className={classes.techCardHolder}>
                    <Grid item container xs={12} sm={4} md={3} direction="column" alignContent="center" alignItems="center" justify="center" className={classes.card}>
                        <FontAwesomeIcon icon={faReact} size="6x" />
                        <Typography>React</Typography>
                    </Grid>
                    <Grid item container xs={12} sm={4} md={3} direction="column" alignContent="center" alignItems="center" justify="center" className={classes.card}>
                        <FontAwesomeIcon icon={faVuejs} size="6x" />
                        <Typography>Vue</Typography>
                    </Grid>
                    <Grid item container xs={12} sm={4} md={3} direction="column" alignContent="center" alignItems="center" justify="center" className={classes.card}>
                        <FontAwesomeIcon icon={faNodeJs} size="6x" />
                        <Typography>Nodejs</Typography>
                    </Grid>
                    <Grid item container xs={12} sm={4} md={3} direction="column" alignContent="center" alignItems="center" justify="center" className={classes.card}>
                        <FontAwesomeIcon icon={faHtml5} size="6x" />
                        <Typography>HTML5</Typography>
                    </Grid>
                    <Grid item container xs={12} sm={4} md={3} direction="column" alignContent="center" alignItems="center" justify="center" className={classes.card}>
                        <FontAwesomeIcon icon={faCss3} size="6x" />
                        <Typography>CSS3</Typography>
                    </Grid>
                    <Grid item container xs={12} sm={4} md={3} direction="column" alignContent="center" alignItems="center" justify="center" className={classes.card}>
                        <FontAwesomeIcon icon={faJsSquare} size="6x" />
                        <Typography>Javascript</Typography>
                    </Grid>
                    <Grid item container xs={12} sm={4} md={3} direction="column" alignContent="center" alignItems="center" justify="center" className={classes.card}>
                        <FontAwesomeIcon icon={faDatabase} size="6x" />
                        <Typography>MongoDB</Typography>
                    </Grid>
                    <Grid item container xs={12} sm={4} md={3} direction="column" alignContent="center" alignItems="center" justify="center" className={classes.card}>
                        <FontAwesomeIcon icon={faDatabase} size="6x" />
                        <Typography>MySQL</Typography>
                    </Grid>
                    <Grid item container xs={12} sm={4} md={3} direction="column" alignContent="center" alignItems="center" justify="center" className={classes.card}>
                        <FontAwesomeIcon icon={faBootstrap} size="6x" />
                        <Typography>Bootstrap</Typography>
                    </Grid>
                    <Grid item container xs={12} sm={4} md={3} direction="column" alignContent="center" alignItems="center" justify="center" className={classes.card}>
                        <FontAwesomeIcon icon={faMdb} size="6x" />
                        <Typography>Material Design</Typography>
                    </Grid>
                </Grid>
            </section>
        </>
    )
}

export default Body
