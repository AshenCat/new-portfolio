// import CS0 from "../../../assets/CS0.jpg";
// import CS1 from "../../../assets/CS1.png";
// import CS2 from "../../../assets/CS2.png";
// import CS3 from "../../../assets/CS3.png";
// import CS4 from "../../../assets/CS4.png";
// import CS5 from "../../../assets/CS5.png";
// import ML from "../../../assets/ML.png";
// import ML1 from "../../../assets/ML1.png";
// // import ML2 from "../../../assets/ML2.webm";
// import ML3 from "../../../assets/ML3.png";
// import ML4 from "../../../assets/ML4.png";
// import r1 from "../../../assets/r1.png";
// import r2 from "../../../assets/r2.png";
// import r3 from "../../../assets/r3.png";
// import r4 from "../../../assets/r4.png";
// import r5 from "../../../assets/r5.png";
// import tpc1 from "../../../assets/tpc1.png";
// import tpc2 from "../../../assets/tpc2.png";
// import tpc3 from "../../../assets/tpc3.png";
// import tpc4 from "../../../assets/tpc4.png";
// import TPCFigma from "../../../assets/TPCFigma.png";

export function ProjectListItems () {
    
    const CS0 = "https://i.imgur.com/lcRZm8O.jpg";
    const CS1 = "https://i.imgur.com/MT2Vv4L.png";
    const CS2 = "https://i.imgur.com/hk3Id5K.png";
    const CS3 = "https://i.imgur.com/SJQSgpo.png";
    const CS4 = "https://i.imgur.com/Xj7itJa.png";
    const CS5 = "https://i.imgur.com/Jjj5FA8.png";
    const ML = "https://i.imgur.com/v1ZlRDA.png";
    const ML1 = "https://i.imgur.com/4zhWQeb.png";
    const ML2 = `https://i.imgur.com/F3J0saH.mp4`
    const ML3 = "https://i.imgur.com/c1D2LCX.png";
    const ML4 = "https://i.imgur.com/QGSG1HT.png";
    const r1 = "https://i.imgur.com/96nq7Aj.png";
    const r2 = "https://i.imgur.com/y9IOei7.png";
    const r3 = "https://i.imgur.com/K9grRpi.png";
    const r4 = "https://i.imgur.com/QuLJQy8.png";
    const r5 = "https://i.imgur.com/B1VENAB.png";
    const tpc1 = "https://i.imgur.com/bpoQY6L.png";
    const tpc2 = "https://i.imgur.com/j1lrk6j.png";
    const tpc3 = "https://i.imgur.com/wH8ApDm.png";
    const tpc4 = "https://i.imgur.com/e78iqIX.png";
    const TPCFigma = "https://i.imgur.com/45Yu9Bp.png";

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
