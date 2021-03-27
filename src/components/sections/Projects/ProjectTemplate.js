import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { GitHub, Computer } from '@material-ui/icons';

function ProjectTemplate(props) {
    const { cardHeight, imageStyle, classes } = props;
    const { title, id, img, description, links} = props;

    const ImageHandler = () => {
        return img.length !== 0 ?
            // eslint-disable-next-line jsx-a11y/alt-text
            <img src={img[0].src} alt={img[0]?.alt} style={imageStyle} /> : null
    }

    const LinksHandler = () => {
        return links?.map((link, num) => 
             <Grid item container xs={4} key={num}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="prjLink">
                    <div style={{textAlign: "center"}}>
                        {link.type === "Demo" ? <Computer /> : null}
                        {link.type === "Github" ? <GitHub /> : null}
                    </div>
                    <Typography>
                        {link.type === "Demo" ? 'Demo' : null}
                        {link.type === "Github" ? 'Github' : null}
                    </Typography>
                </a>
            </Grid>)
    }

    return (
        <div className="projectItemCard" style={cardHeight}>
            <div className="projectItemBox">
                <div className="projectItem">
                    <h1>{id}</h1>
                    <Typography variant="h4" component="h2" className={classes.prjTitle}>
                        {title}
                    </Typography>
                    <hr className="rule" />
                        <div>
                            <Typography>
                                <ImageHandler />
                                {description}
                            </Typography>
                            <Grid container justify="space-evenly" style={{position: 'absolute', bottom: '15px', right: 0, left: 0}}>
                                <LinksHandler />
                            </Grid>
                        <div style={{clear: 'both'}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectTemplate
