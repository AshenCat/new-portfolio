import CS from '../../../assets/CS0.jpg';
import CS1 from '../../../assets/CS1.png';
import CS2 from '../../../assets/CS2.png';
import CS3 from '../../../assets/CS3.png';
import CS4 from '../../../assets/CS4.png';
import CS5 from '../../../assets/CS5.PNG';
import r1 from '../../../assets/r1.png';
import r2 from '../../../assets/r2.png';
import r3 from '../../../assets/r3.png';
import r4 from '../../../assets/r4.png';
import r5 from '../../../assets/r5.png';
import ML from '../../../assets/ML.png';
import ML1 from '../../../assets/ML2.gif';
import ML2 from '../../../assets/ML1.png';
import ML3 from '../../../assets/ML3.png';
import ML4 from '../../../assets/ML4.png';
import TPCFigma from '../../../assets/TPCFigma.png';
import tpc1 from '../../../assets/tpc1.png';
import tpc2 from '../../../assets/tpc2.png';
import tpc3 from '../../../assets/tpc3.png';
import tpc4 from '../../../assets/tpc4.png';
import CardSizing from './CardSizing';

export function ProjectListItems (props) {
    // console.log(props)
    const {cardHeight} = CardSizing(props)
    
    return [{
        title: "Inventory Management",
        id: "01",
        img: [{
            src: CS,
            alt: "IMS project"
        },{
            src: CS1,
            alt: "IMS project"
        },{
            src: CS2,
            alt: "IMS project"
        },{
            src: CS3,
            alt: "IMS project"
        },{
            src: CS4,
            alt: "IMS project"
        },{
            src: CS5,
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
    },{
        title: "Restaurant Menu App",
        id: "02",
        img: [{
            src: r1,
            alt: "Restaurant Menu"
        },{
            src: r2,
            alt: "Restaurant Menu"
        },{
            src: r3,
            alt: "Restaurant Menu"
        },{
            src: r4,
            alt: "Restaurant Menu"
        },{
            src: r5,
            alt: "Restaurant Menu"
        }],
        description: `Freelance - Created a simple frontend application that serves as a restaurant menu. 
        I have worked on Modals to open the food details, toast for notifications, chips for filtering the menu item, and the slider banner for promotions.`,
        links: [{
            type: "Demo",
            href: "https://www.futuredining.ca"
        }],
        cardHeight: cardHeight[1]
    },{
        title: "Python Object Detection",
        id: "03",
        img: [{
            src: ML,
            alt: "Machine Learning Python"
        },{
            src: ML1,
            alt: "Machine Learning Python in GIF"
        },{
            src: ML2,
            alt: "Machine Learning Python"
        },{
            src: ML3,
            alt: "Machine Learning Python"
        },{
            src: ML4,
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
            src: TPCFigma,
            alt: "Figma schematic of the project"
        },{
            src: tpc1,
            alt: "TPC project"
        },{
            src: tpc2,
            alt: "TPC project"
        },{
            src: tpc3,
            alt: "TPC project"
        },{
            src: tpc4,
            alt: "TPC project"
        }],
        description: `FREELANCE - A collaborative work to create an app to manage a flowerpot shop.
        I worked on several views making sure that it matches the Figma specifications and including the DB queries ensuring that the response is lightweight and only pulling necessary data. In addition to that, I also am the one who set-up the AWS EC2 server to host the project`,
        links: [],
        cardHeight: cardHeight[3]
    },
]
};
