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
                            <Typography variant="subtitle2">React</Typography>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faVuejs} className="slide"/>
                            <Typography variant="subtitle2">Vue</Typography>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faNodeJs} className="slide"/>
                            <Typography variant="subtitle2">Nodejs</Typography>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faHtml5} className="slide"/>
                            <Typography variant="subtitle2">HTML5</Typography>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faCss3} className="slide"/>
                            <Typography variant="subtitle2">CSS3</Typography>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faJsSquare} className="slide"/>
                            <Typography variant="subtitle2">Javascript</Typography>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faDatabase} className="slide"/>
                            <Typography variant="subtitle2">MySQL</Typography>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faDatabase} className="slide"/>
                            <Typography variant="subtitle2">MongoDB</Typography>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faBootstrap} className="slide"/>
                            <Typography variant="subtitle2">Bootstrap</Typography>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faMdb} className="slide"/>
                            <Typography variant="subtitle2">Material Design</Typography>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faAngular} className="slide"/>
                            <Typography variant="subtitle2">Angular</Typography>
                        </span>
                    </li>
                </ul>
    )
}

export default Skills
