import CS0 from "../../../assets/CS0.webp";
import CS1 from "../../../assets/CS1.webp";
import CS2 from "../../../assets/CS2.webp";
import CS3 from "../../../assets/CS3.webp";
import CS4 from "../../../assets/CS4.webp";
import CS5 from "../../../assets/CS5.webp";
import ML from "../../../assets/ML.webp";
import ML1 from "../../../assets/ML1.webp";
import ML2 from "../../../assets/ML2.webm";
import ML3 from "../../../assets/ML3.webp";
import ML4 from "../../../assets/ML4.webp";
import r1 from "../../../assets/r1.webp";
import r2 from "../../../assets/r2.webp";
import r3 from "../../../assets/r3.webp";
import r4 from "../../../assets/r4.webp";
import r5 from "../../../assets/r5.webp";
import tpc1 from "../../../assets/tpc1.webp";
import tpc2 from "../../../assets/tpc2.webp";
import tpc3 from "../../../assets/tpc3.webp";
import tpc4 from "../../../assets/tpc4.webp";
import TPCFigma from "../../../assets/TPCFigma.webp";

export function ProjectListItems () {
    
    return [{
        title: "Inventory Management",
        id: "01",
        img: [{
            src: CS0,
            alt: "IMS project",
            type: "image"
        },{
            src: CS1,
            alt: "IMS project",
            type: "image"
        },{
            src: CS2,
            alt: "IMS project",
            type: "image"
        },{
            src: CS3,
            alt: "IMS project",
            type: "image"
        },{
            src: CS4,
            alt: "IMS project",
            type: "image"
        },{
            src: CS5,
            alt: "IMS project",
            type: "image"
        }],
        description:    `Capstone - This college project is a collaborative work of three students as a team. 
                        Starting from scratch, we have designed this project by brainstorming ideas of how and IMS system would be. 
                        Tasks were assigned to each member to have a goal for every sprint. `,
        links: [{
            type: "Github",
            href: "https://github.com/AshenCat/capstone-abc-store"
        }]
    },
    {
        title: "Restaurant Menu App",
        id: "02",
        img: [{
            src: r1,
            alt: "Restaurant Menu",
            type: "image"
        },{
            src: r2,
            alt: "Restaurant Menu",
            type: "image"
        },{
            src: r3,
            alt: "Restaurant Menu",
            type: "image"
        },{
            src: r4,
            alt: "Restaurant Menu",
            type: "image"
        },{
            src: r5,
            alt: "Restaurant Menu",
            type: "image"
        }],
        description: `Freelance - Created a simple frontend application that serves as a restaurant menu. 
        I have worked on Modals to open the food details, toast for notifications, chips for filtering the menu item, and the slider banner for promotions.`,
        links: [{
            type: "Demo",
            href: "https://www.futuredining.ca"
        }]
    },
    {
        title: "Python Object Detection",
        id: "03",
        img: [{
            src: ML2,
            alt: "Machine Learning Python",
            type: "video"
        },{
            src: ML1,
            alt: "Machine Learning Python in GIF",
            type: "image"
        },{
            src: ML,
            alt: "Machine Learning Python",
            type: "image"
        },{
            src: ML3,
            alt: "Machine Learning Python",
            type: "image"
        },{
            src: ML4,
            alt: "Machine Learning Python",
            type: "image"
        }],
        description: `COLLEGE - Whilst python isn't my most comfortable language, I've had a good time doing this project. 
        Using the Common Objects in Context (COCO) dataset, 
        I was able to detect objects in my screen in real time. Instead of inputting single image feeds, I modified it to take video feed instead and label all the objects it detects.`,
        links: [{
            type: "Github",
            href: "https://github.com/AshenCat/PythonObjectDetection"
        }]
    },{
        title: "Tender Plant and Care",
        id: "04",
        img: [{
            src: TPCFigma,
            alt: "Figma schematic of the project",
            type: "image"
        },{
            src: tpc1,
            alt: "TPC project",
            type: "image"
        },{
            src: tpc2,
            alt: "TPC project",
            type: "image"
        },{
            src: tpc3,
            alt: "TPC project",
            type: "image"
        },{
            src: tpc4,
            alt: "TPC project",
            type: "image"
        }],
        description: `FREELANCE - A collaborative work to create an app to manage a flowerpot shop.
        I worked on several views making sure that it matches the Figma specifications and including the DB queries ensuring that the response is lightweight and only pulling necessary data. In addition to that, I also am the one who set-up the AWS EC2 server to host the project`,
        links: []
    },
]
};
