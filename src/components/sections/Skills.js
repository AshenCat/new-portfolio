import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faBootstrap, faCss3, faHtml5, faJsSquare, faMdb, faNodeJs, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { Typography } from '@material-ui/core'

function Skills() {
    return (
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
    )
}

export default Skills
