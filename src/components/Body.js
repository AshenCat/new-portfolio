import { Container, Grid, Hidden, Typography } from '@material-ui/core'
import React from 'react'
import { GitHub, LinkedIn, AlternateEmail, Computer } from '@material-ui/icons';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faHtml5, faJsSquare, faMdb, faNodeJs, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import {overrideTheme, useStyle} from './useStyles';
import { LocationOn } from '@material-ui/icons';
import { ThemeProvider } from '@material-ui/core/styles'
import ims from '../assets/ReactIMS0.jpg';
import resto2 from '../assets/resto.png';

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
            <section>
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
                        <div className="projectItemCard" style={{minHeight: "460px"}}>
                            <div className="projectItemBox">
                                <div className="projectItem">
                                    <h1>01</h1>
                                    <Typography variant="h4" component="h2" className={classes.prjTitle}>
                                        Inventory Management
                                    </Typography>
                                    <hr className="rule" />
                                        <div style={{overflowX: 'hidden', overflowY: 'auto', height: '260px'}}>
                                            <Typography>
                                                <Hidden xsDown>
                                                    <img src={ims} alt="IMS" style={{width: "300px", float: 'left', marginRight: '10px', borderRadius: '5px'}} />
                                                </Hidden>
                                                Capstone - This college project is a collaborative work of three students as a team. 
                                                Starting from scratch, we have designed this project by brainstorming ideas of how and IMS system would be. 
                                                Tasks were assigned to each member to have a goal for every sprint. 
                                            </Typography>
                                            <Grid item container xs={4}>
                                                <a href="https://www.futuredining.ca" target="_blank" rel="noopener noreferrer" className="prjLink">
                                                    <div style={{textAlign: "center"}}><GitHub /></div>
                                                    <Typography>Github</Typography>
                                                </a>
                                            </Grid>
                                        <div style={{clear: 'both'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* Project 2 */}
                        <div className="projectItemCard" style={{minHeight: "450px"}}>
                            <div className="projectItemBox">
                                <div className="projectItem">
                                    <h1>02</h1>
                                    <Typography variant="h4" component="h2" className={classes.prjTitle}>
                                        Restaurant Menu App
                                    </Typography>
                                    <hr className="rule" />
                                    <div style={{overflowX: 'hidden', overflowY: 'auto', height: '255px'}}>
                                        <Typography>
                                            <Hidden xsDown>
                                                <img src={resto2} alt="IMS" style={{width: "300px", float: 'left', marginRight: '10px', borderRadius: '5px'}} />
                                            </Hidden>
                                            Freelance - Created a simple frontend application that serves as a restaurant menu. 
                                            I have worked on Modals to open the food details, toast for notifications, chips for filtering the menu item, and the slider banner for promotions.
                                        </Typography>
                                        <Grid container spacing={2} justify="space-evenly">
                                            <Grid item container xs={12} sm={3}>
                                                <a href="https://www.futuredining.ca" target="_blank" rel="noopener noreferrer" className="prjLink">
                                                    <div style={{textAlign: "center"}}><Computer /></div>
                                                    <Typography>Demo</Typography>
                                                </a>
                                            </Grid>
                                            <Grid item container xs={12} sm={3}>
                                                <a href="https://github.com/AshenCat/capstone-abc-store" target="_blank" rel="noopener noreferrer" className="prjLink">
                                                    <div style={{textAlign: "center"}}><GitHub /></div>
                                                    <Typography>Github</Typography>
                                                </a>
                                            </Grid>
                                        </Grid>
                                        <div style={{clear: 'both'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Project 3 */}
                        <div className="projectItemCard" style={{minHeight: "450px"}}>
                            <div className="projectItemBox">
                                <div className="projectItem">
                                    <h1>02</h1>
                                    <Typography variant="h4" component="h2" className={classes.prjTitle}>
                                        Restaurant Menu App
                                    </Typography>
                                    <hr className="rule" />
                                    <div style={{overflowX: 'hidden', overflowY: 'auto', height: '255px'}}>
                                        <Typography>
                                            <Hidden xsDown>
                                                <img src={resto2} alt="IMS" style={{width: "300px", float: 'left', marginRight: '10px', borderRadius: '5px'}} />
                                            </Hidden>
                                            Freelance - Created a simple frontend application that serves as a restaurant menu. 
                                            I have worked on Modals to open the food details, toast for notifications, chips for filtering the menu item, and the slider banner for promotions.
                                        </Typography>
                                        <Grid container spacing={2} justify="space-evenly">
                                            <Grid item container xs={12} sm={3}>
                                                <a href="https://www.futuredining.ca" target="_blank" rel="noopener noreferrer" className="prjLink">
                                                    <div style={{textAlign: "center"}}><Computer /></div>
                                                    <Typography>Demo</Typography>
                                                </a>
                                            </Grid>
                                            <Grid item container xs={12} sm={3}>
                                                <a href="https://github.com/AshenCat/capstone-abc-store" target="_blank" rel="noopener noreferrer" className="prjLink">
                                                    <div style={{textAlign: "center"}}><GitHub /></div>
                                                    <Typography>Github</Typography>
                                                </a>
                                            </Grid>
                                        </Grid>
                                        <div style={{clear: 'both'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ThemeProvider>
            </section>
            <section className={classes.divider}>
                <Typography variant="h4" className={classes.textCenter}>
                    Skills
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
