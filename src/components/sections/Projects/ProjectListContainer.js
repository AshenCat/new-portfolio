import React from 'react'
import ProjectTemplate from './ProjectTemplate'
import {ProjectListItems} from './ProjectListItems'
import CardSizing from './CardSizing';

function ProjectListContainer(props) {
    const {classes} = props;
    const {imageStyle} = CardSizing(props.size)
    // console.log(classes)

    const Projects = () => {
        const list = ProjectListItems(props.size)
        return list.map((project,num) => 
            <ProjectTemplate 
                key={num}
                imageStyle={imageStyle}
                classes={classes}
                title={project.title}
                id={project.id}
                img={project.img}
                description={project.description}
                links={project.links} 
                cardHeight={project.cardHeight}/>)
    };
    
    return (
        <>
            <Projects />
        </>
    )
}

export default ProjectListContainer

// eslint-disable-next-line no-lone-blocks
{/* <div className="projectItemCard" style={cardHeight2}>

<div className="projectItemBox">
<div className="projectItem">
    <h1>02</h1>
    <Typography variant="h4" component="h2" className={classes.prjTitle}>
        Restaurant Menu App
    </Typography>
    <hr className="rule" />
    <div>
        <Typography>
                <img src={resto2} alt="Restaurant App" style={imageStyle} />
            Freelance - Created a simple frontend application that serves as a restaurant menu. 
            I have worked on Modals to open the food details, toast for notifications, chips for filtering the menu item, and the slider banner for promotions.
        </Typography>
        <Grid container justify="space-evenly" style={{position: 'absolute', bottom: '15px', right: 0, left: 0}}>
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
<div className="projectItemCard" style={cardHeight3}>
<div className="projectItemBox">
<div className="projectItem">
    <h1>03</h1>
    <Typography variant="h4" component="h2" className={classes.prjTitle}>
        Python Object Detection
    </Typography>
    <hr className="rule" />
    <div>
        <Typography>
            <img src={ML} alt="ML" style={imageStyle} />
            
            COLLEGE - Whilst python isn't my most comfortable language, I've had a good time doing this project. 
            Using the <a href="https://cocodataset.org/" style={{color: 'black'}} target="_blank" rel="noopener noreferrer" >Common Objects in Context (COCO)</a> dataset, 
            I was able to detect objects in my screen in real time. Instead of inputting single image feeds, I modified it to take video feed instead and label all the objects it detects.

        </Typography>
        <div style={{clear: 'both'}}></div>
    </div>
</div>
</div>
</div>
<div className="projectItemCard" style={cardHeight4}>
<div className="projectItemBox">
<div className="projectItem">
    <h1>04</h1>
    <Typography variant="h4" component="h2" className={classes.prjTitle}>
        Tender Plant and Care
    </Typography>
    <hr className="rule" />
    <div>
        <Typography>
            <img src={TPCFigma} alt="TPCFigma" style={imageStyle} />
            </Typography>
        <div style={{clear: 'both'}}></div>
    </div>
</div>
</div>
</div> */}
