// import r1 from '../../../assets/r1.png';
// import r2 from '../../../assets/r2.png';
// import r3 from '../../../assets/r3.png';
// import r4 from '../../../assets/r4.png';
// import r5 from '../../../assets/r5.png';
// import ML from '../../../assets/ML.png';
// import ML1 from '../../../assets/ML2.gif';
// import ML2 from '../../../assets/ML1.png';
// import ML3 from '../../../assets/ML3.png';
// import ML4 from '../../../assets/ML4.png';
// import TPCFigma from '../../../assets/TPCFigma.png';
// import tpc1 from '../../../assets/tpc1.png';
// import tpc2 from '../../../assets/tpc2.png';
// import tpc3 from '../../../assets/tpc3.png';
// import tpc4 from '../../../assets/tpc4.png';
import CardSizing from './CardSizing';

export function ProjectListItems (props) {
    // console.log(props)
    const {cardHeight} = CardSizing(props)
    
    return [{
        title: "Inventory Management",
        id: "01",
        img: [{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/CS0.jpg`,
            alt: "IMS project"
        },{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/CS1.png`,
            alt: "IMS project"
        },{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/CS2.png`,
            alt: "IMS project"
        },{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/CS3.png`,
            alt: "IMS project"
        },{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/CS4.png`,
            alt: "IMS project"
        },{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/CS5.PNG`,
            alt: "IMS project"
        }],
        description:    `Capstone - This college project is a collaborative work of three students as a team. 
                        Starting from scratch, we have designed this project by brainstorming ideas of how and IMS system would be. 
                        Tasks were assigned to each member to have a goal for every sprint. `,
        links: [{
            type: "Github",
            href: "https://github.com/AshenCat/capstone-abc-store"
        }],
        cardHeight: cardHeight[0]
    },
    {
        title: "Restaurant Menu App",
        id: "02",
        img: [{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/r1.png`,
            alt: "Restaurant Menu"
        },{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/r2.png`,
            alt: "Restaurant Menu"
        },{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/r3.png`,
            alt: "Restaurant Menu"
        },{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/r4.png`,
            alt: "Restaurant Menu"
        },{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/r5.png`,
            alt: "Restaurant Menu"
        }],
        description: `Freelance - Created a simple frontend application that serves as a restaurant menu. 
        I have worked on Modals to open the food details, toast for notifications, chips for filtering the menu item, and the slider banner for promotions.`,
        links: [{
            type: "Demo",
            href: "https://www.futuredining.ca"
        }],
        cardHeight: cardHeight[1]
    },
    {
        title: "Python Object Detection",
        id: "03",
        img: [{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/ML.png`,
            alt: "Machine Learning Python"
        },{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/ML1.png`,
            alt: "Machine Learning Python in GIF"
        },{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/ML2.gif`,
            alt: "Machine Learning Python"
        },{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/ML3.png`,
            alt: "Machine Learning Python"
        },{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/ML4.png`,
            alt: "Machine Learning Python"
        }],
        description: `COLLEGE - Whilst python isn't my most comfortable language, I've had a good time doing this project. 
        Using the Common Objects in Context (COCO) dataset, 
        I was able to detect objects in my screen in real time. Instead of inputting single image feeds, I modified it to take video feed instead and label all the objects it detects.
`,
        links: [{
            type: "Github",
            href: "https://github.com/AshenCat/PythonObjectDetection"
        }],
        cardHeight: cardHeight[2]
    },{
        title: "Tender Plant and Care",
        id: "04",
        img: [{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/TPCFigma.png`,
            alt: "Figma schematic of the project"
        },{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/tpc1.png`,
            alt: "TPC project"
        },{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/tpc2.png`,
            alt: "TPC project"
        },{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/tpc3.png`,
            alt: "TPC project"
        },{
            src: `https://hostedsitebucket.s3.amazonaws.com/GDRIVE/tpc4.png`,
            alt: "TPC project"
        }],
        description: `FREELANCE - A collaborative work to create an app to manage a flowerpot shop.
        I worked on several views making sure that it matches the Figma specifications and including the DB queries ensuring that the response is lightweight and only pulling necessary data. In addition to that, I also am the one who set-up the AWS EC2 server to host the project`,
        links: [],
        cardHeight: cardHeight[3]
    },
]
};
