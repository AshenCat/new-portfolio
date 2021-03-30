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
        // backgroundColor: "#CBDDFE",
        // height: "500px"
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1034%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(203%2c 221%2c 254%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c513.528C95.683%2c510.765%2c135.976%2c387.066%2c208.911%2c325.071C269.753%2c273.355%2c346.483%2c244.382%2c392.998%2c179.476C446.39%2c104.973%2c505.914%2c19.862%2c492.634%2c-70.83C479.357%2c-161.499%2c385.288%2c-212.602%2c325.427%2c-281.984C265.413%2c-351.544%2c227.138%2c-447.997%2c140.604%2c-478.854C53.022%2c-510.085%2c-40.61%2c-468.215%2c-130.539%2c-444.574C-223.092%2c-420.243%2c-334.924%2c-416.388%2c-391.266%2c-339.034C-447.475%2c-261.862%2c-405.077%2c-154.403%2c-411.279%2c-59.133C-416.895%2c27.138%2c-464.071%2c116.927%2c-426.001%2c194.548C-388.054%2c271.919%2c-285.793%2c285.715%2c-216.812%2c337.367C-140.732%2c394.334%2c-95.004%2c516.272%2c0%2c513.528' fill='%23b5cefe'%3e%3c/path%3e%3cpath d='M1440 987.9549999999999C1518.655 997.395 1585.778 932.892 1648.78 884.867 1707.6390000000001 840 1753.136 783.876 1791.08 720.333 1833.104 649.956 1878.4270000000001 578.592 1880.594 496.652 1882.961 407.118 1874.541 299.635 1803.651 244.89499999999998 1731.6399999999999 189.289 1626.929 241.868 1536.597 231.022 1465.587 222.49599999999998 1400.137 170.562 1330.806 188.12 1260.804 205.848 1222.879 277.36 1168.0529999999999 324.356 1101.808 381.14 995.985 408.456 974.969 493.139 954.121 577.148 1012.0989999999999 663.55 1067.338 730.189 1115.5230000000001 788.317 1199.025 795.39 1261.121 838.341 1326.373 883.475 1361.225 978.501 1440 987.9549999999999' fill='%23e1ecfe'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1034'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
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