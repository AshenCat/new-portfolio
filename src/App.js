import { createMuiTheme, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css'
import Body from './components/Body';
// import Nav from './components/Nav'
import Footer from './components/Footer';
import { ArrowUpward } from '@material-ui/icons';
import { Link } from "react-scroll";

const theme = createMuiTheme({
  ...this,
  palette: {
    primary: {
      main: "#dceeff"
    }
  },
})



console.log(theme)
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
        className="floatBtn">
          <ArrowUpward style={{fontSize: '3em', display: 'block', margin: '0 auto'}}/>
        <Typography variant="h5" style={{ margin: '0 auto'}}>Top</Typography>
      </Link>
      <BrowserRouter>
        <Route exact path="/" component={Body} />
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
