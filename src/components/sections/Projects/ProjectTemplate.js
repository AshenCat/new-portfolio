import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { GitHub, Computer } from '@material-ui/icons';
import { useModal } from '../../context/ModalContext';

function ProjectTemplate(props) {
    const { classes } = props;
    const { title, id, img, description, links} = props;

    const {setOpen, setImages, setTitle} = useModal();

    const ImageHandler = () => {
        return img.length !== 0 ?
            img.length !== 0? 
                img[0].type === "image" ?  
                <img 
                    src={img[0].src} 
                    alt={img[0].alt} 
                    draggable="false"
                    className="cardMedia"
                    onClick={onImageClick}
                    />
                    :
                    <video autoPlay loop muted playsInline className="cardMedia" onClick={onImageClick}>
                        <source src={img[0].src} type="video/webm"></source>
                        Your browser doesn't support HTML5 video. Here is a <a href={img[0].src}>link to the video</a> instead.
                    </video>
                : null
            :null;
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
    // console.log(img)

    const onImageClick = () => {
        setTitle(title)
        setImages(img)
        setOpen(true)
    }

    return (
        <div className="projectItemCard"
        // style={cardHeight}
        >

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
                            <Grid container justify="space-evenly">
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
