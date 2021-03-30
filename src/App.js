import { createMuiTheme, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css'
import Body from './components/Body';
// import Nav from './components/Nav'
import Footer from './components/Footer';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { Link } from "react-scroll";
import { ModalProvider } from './components/context/ModalContext';

const theme = createMuiTheme({
  ...this,
  palette: {
    primary: {
      main: "#dceeff"
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Nav /> */}
      <Link   
        to="s2t" 
        spy={true} 
        smooth={true}
        offset={-70}
        duration={800}
        className="floatBtn btnTR">
        <ArrowUpward style={{fontSize: '3em', display: 'block', margin: '0 auto'}}/>
        <Typography variant="h5" align="center" style={{ margin: '0 auto'}}>Top</Typography>
      </Link>
      <ModalProvider>
        <BrowserRouter>
          <Route exact path="/" component={()=><Body />} />
        </BrowserRouter>
      </ModalProvider>
      <Link   
        to="form" 
        spy={true} 
        smooth={true}
        offset={-70}
        duration={800}
        className="floatBtn btnBR">
          <Typography variant="h6" align="center" style={{ margin: '0 auto'}}>Bottom</Typography>
          <ArrowDownward style={{fontSize: '3em', display: 'block', margin: '0 auto'}}/>      
      </Link>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
