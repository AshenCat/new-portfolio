import { createMuiTheme, makeStyles } from '@material-ui/core'
import prgimage from '../assets/projects1.jpg'

export const useStyle =  makeStyles( theme => ({
    textCenter : {
        textAlign: "center",
        margin: "0 auto",
        paddingTop: "1rem"
    },
    smolTypography: {
        [theme.breakpoints.down("sm")] : {
            marginTop: "1.25rem",
            width: "92vw",
            padding: ".5rem",
            textAlign: "center",
        }
    },
    mt2: {
        marginTop: "2rem",
        marginBottom: "2rem",
    },
    myImg : {
        background: "#f3f9ff",
        borderRadius: "0 25px 0 2px",
        boxShadow: "10px 10px 5px grey",
        border: "1px solid lightgray",
        display: "block",
        padding: "8px",
        width: "250px",
        height: "330px",
    },
    divider: {
        background: "#f3f9ff",
        paddingTop: "2rem",
        paddingBottom: "2.75rem",
        border: "1px solid #e2e8f0",
    },
    bio: {
        height:"100vh",
        backgroundImage: `url(${prgimage})`,
        // backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
        color: "#fff"
    },
    tech: {
        backgroundColor: "#CBDDFE",
        // height: "500px"
    },
    visited: {
        cursor: 'pointer',
        color: 'rgb(1,0,238)',
        '&:visited': {
            color: 'rgb(1,0,238)'
        }
    },
    container: {
        height: "inherit",
    },
    headNameContainer: {
        borderBottom: "6px solid #0171B5", 
        [theme.breakpoints.up("sm")]:{
            borderBottom: "8px solid #0171B5", 
            width: "70%",
        },
        
        [theme.breakpoints.up("lg")]:{
            width: "40%",
        },
    },
    name: {
        color: "inherit",
        [theme.breakpoints.up("lg")]: {
            fontSize: "5rem"
        }
    },
    title: {
        color: "inherit",
        [theme.breakpoints.up("lg")]: {
            fontSize: "3rem"
        }
    },
    nav: {
        borderLeft: "5px solid #0171B5",
        position: "absolute",
        top: "15px",
        paddingLeft: "1rem"
        // backgroundColor: '#fff',
    },
    navItem: {
        zIndex: "5",
        fontFamily: '"Courier New", Courier, monospace',
    },
    intro: {
        height: "100%",
        backgroundColor: "#ffffff",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23e6e6e6' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23cccccc'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
        border: "0px solid #e2e8f0",
        borderBottomWidth: "1px",
        // backgroundAttachment: "fixed",
    },
    introTxt: {
        color: "#000",
        padding: "1rem",
        boxShadow: "0px 1px 10px 0px rgba(0,0,0,0.12)"
    },
    meNameContainer: {
        position: "absolute",
        top: "30px",
        left: "0px",
        padding: "1.5rem",
        width: "100%",
        borderLeft: "8px solid blue"
    },
    meInfo: {
        position: "absolute",
        width: "80%",
        right: 0,
        bottom: "10%",
        padding: "1rem",
        paddingRight: "50px",
        borderRight: "8px solid blue",
        color: "#000000aa",
        [theme.breakpoints.down("sm")]: {
            // width: "90%",
            fontSize: "1.15rem",
            bottom: "30px",
        },
        [theme.breakpoints.up("lg")]: {
            width: "80%",
            fontSize: "2.2rem"
        }
    },
    loc: {
        color: "#000000AA",
        [theme.breakpoints.up("sm")]: {
            fontSize: "2rem"
        }
    }
}))

export const overrideTheme = createMuiTheme({
    overrides: {
        MuiTypography: {
            root: {
                '@media (max-width:421px)': {
                    fontSize: '.8rem !important',
                },
            },
            h4: {
                '@media (max-width:421px)': {
                    fontSize: '1.5rem !important',
                }
            },
            h1: {
                '@media (max-width:421px)': {
                    fontSize: '5rem !important',
                }
            }
        }
    }
})