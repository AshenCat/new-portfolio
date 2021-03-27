import { Container, Grid, Hidden, Typography } from '@material-ui/core'
import React from 'react'
import { GitHub, LinkedIn, AlternateEmail, Computer } from '@material-ui/icons';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faBootstrap, faCss3, faHtml5, faJsSquare, faMdb, faNodeJs, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import {overrideTheme, useStyle} from './useStyles';
import { LocationOn } from '@material-ui/icons';
import { ThemeProvider } from '@material-ui/core/styles'
import ims from '../assets/ReactIMS0.jpg';
import ML from '../assets/ML.png';
import resto2 from '../assets/resto.png';
import TPCFigma from '../assets/TPCFigma.png';

function Body() {
    const classes = useStyle()
    return (
        <>
            <section className={classes.bio} id="s2t">
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
                                        <div>
                                            <Typography>
                                                <Hidden xsDown>
                                                    <img src={ims} alt="IMS" style={{width: "300px", float: 'left', marginRight: '10px', borderRadius: '5px'}} />
                                                </Hidden>
                                                Capstone - This college project is a collaborative work of three students as a team. 
                                                Starting from scratch, we have designed this project by brainstorming ideas of how and IMS system would be. 
                                                Tasks were assigned to each member to have a goal for every sprint. 
                                            </Typography>
                                                <Grid item container xs={12}>
                                                    <a href="https://github.com/AshenCat/capstone-abc-store" target="_blank" rel="noopener noreferrer" className="prjLink">
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
                                    <div>
                                        <Typography>
                                            <Hidden xsDown>
                                                <img src={resto2} alt="Restaurant App" style={{width: "300px", float: 'left', marginRight: '10px', borderRadius: '5px'}} />
                                            </Hidden>
                                            Freelance - Created a simple frontend application that serves as a restaurant menu. 
                                            I have worked on Modals to open the food details, toast for notifications, chips for filtering the menu item, and the slider banner for promotions.
                                        </Typography>
                                        <Grid container justify="space-evenly" style={{marginTop: '5px'}}>
                                            <Grid item container xs={4}>
                                                <a href="https://www.futuredining.ca" target="_blank" rel="noopener noreferrer" className="prjLink">
                                                    <div style={{textAlign: "center"}}><Computer /></div>
                                                    <Typography>Demo</Typography>
                                                </a>
                                            </Grid>
                                            <Grid item container xs={4} direction="row">
                                                <a href="https://github.com/AshenCat/rm_client" target="_blank" rel="noopener noreferrer" className="prjLink">
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
                                    <h1>03</h1>
                                    <Typography variant="h4" component="h2" className={classes.prjTitle}>
                                        <Hidden xsDown>Python </Hidden> Object Detection
                                    </Typography>
                                    <hr className="rule" />
                                    <div>
                                        <Typography>
                                            <Hidden xsDown>
                                                <img src={ML} alt="ML" style={{width: "300px", float: 'left', marginRight: '10px', borderRadius: '5px'}} />
                                            </Hidden>
                                            COLLEGE - Whilst python isn't my most comfortable language, I've had a good time doing this project. 
                                            Using the <a href="https://cocodataset.org/" style={{color: 'black'}} target="_blank" rel="noopener noreferrer" >Common Objects in Context (COCO)</a> dataset, 
                                            I was able to detect objects in my screen in real time. Instead of inputting single image feeds, I modified it to take video feed instead and label all the objects it detects.

                                        </Typography>
                                        <div style={{clear: 'both'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Project 4 */}
                        <div className="projectItemCard" style={{minHeight: "450px"}}>
                            <div className="projectItemBox">
                                <div className="projectItem">
                                    <h1>04</h1>
                                    <Typography variant="h4" component="h2" className={classes.prjTitle}>
                                        Tender Plant and Care
                                    </Typography>
                                    <hr className="rule" />
                                    <div>
                                        <Typography>
                                            <Hidden xsDown>
                                                <img src={TPCFigma} alt="TPCFigma" style={{width: "300px", float: 'left', marginRight: '10px', borderRadius: '5px'}} />
                                            </Hidden>
                                            FREELANCE - A collaborative work to create an app to manage a flowerpot shop. I have worked starting from designing up to the finished product.
                                            I worked on several views making sure that it matches the Figma specifications. I also worked on the DB queries ensuring that the response is lightweight and only pulling necessary data.
                                        </Typography>
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
            <section className={classes.tech} style={{paddingTop: '60px', paddingBottom: '60px', width: '100%'}}>
                <ul>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faReact} className="slide"/>
                            <Typography>React</Typography>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faVuejs} className="slide"/>
                            <Typography>Vue</Typography>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faNodeJs} className="slide"/>
                            <Typography>Nodejs</Typography>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faHtml5} className="slide"/>
                            <Typography>HTML5</Typography>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faCss3} className="slide"/>
                            <Typography>CSS3</Typography>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faJsSquare} className="slide"/>
                            <Typography>Javascript</Typography>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faDatabase} className="slide"/>
                            <Typography>MySQL</Typography>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faDatabase} className="slide"/>
                            <Typography>MongoDB</Typography>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faBootstrap} className="slide"/>
                            <Typography>Bootstrap</Typography>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faMdb} className="slide"/>
                            <Typography>Material Design</Typography>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faAngular} className="slide"/>
                            <Typography>Angular</Typography>
                        </span>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Body
