import React from 'react';
import { Typography } from '@material-ui/core';
import Aos from 'aos';
import "aos/dist/aos.css";

function Skills() {

    React.useEffect(()=>{
        Aos.init({duration: 2000});
    }, [])

    return (
        <ul>
            <li data-aos="fade-up">
                <span>
                    <i className="slide fab fa-react"></i>
                    <Typography variant="subtitle2">React</Typography>
                </span>
            </li>
            <li data-aos="fade-up">
                <span>
                    <i className="slide fab fa-vuejs"></i>
                    <Typography variant="subtitle2">Vue</Typography>
                </span>
            </li>
            <li data-aos="fade-up">
                <span>
                    <i className="slide fab fa-node"></i>
                    <Typography variant="subtitle2">Nodejs</Typography>
                </span>
            </li>
            <li data-aos="fade-up">
                <span>
                    <i className="slide fab fa-html5"></i>
                    <Typography variant="subtitle2">HTML5</Typography>
                </span>
            </li>
            <li data-aos="fade-up">
                <span>
                    <i className="slide fab fa-css3-alt"></i>
                    <Typography variant="subtitle2">CSS3</Typography>
                </span>
            </li>
            <li data-aos="fade-up">
                <span>
                    <i className="slide fab fa-js-square"></i>
                    <Typography variant="subtitle2">Javascript</Typography>
                </span>
            </li>
            <li data-aos="fade-up">
                <span>
                    <i className="slide fas fa-database"></i>
                    <Typography variant="subtitle2">MySQL</Typography>
                </span>
            </li>
            <li data-aos="fade-up">
                <span>
                    <i className="slide fas fa-database"></i>
                    <Typography variant="subtitle2">MongoDB</Typography>
                </span>
            </li>
            <li data-aos="fade-up">
                <span>
                    <i className="slide fab fa-bootstrap"></i>
                    <Typography variant="subtitle2">Bootstrap</Typography>
                </span>
            </li>
            <li data-aos="fade-up">
                <span>
                    <i className="slide fab fa-mdb"></i>
                    <Typography variant="subtitle2">Material Design</Typography>
                </span>
            </li>
            <li data-aos="fade-up">
                <span>
                    <i className="slide fab fa-angular"></i>
                    <Typography variant="subtitle2">Angular</Typography>
                </span>
            </li>
        </ul>
    )
}

export default Skills
