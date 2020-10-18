import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css'
import Body from './components/Body';
import Nav from './components/Nav'

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
      <Nav />
      <BrowserRouter>
        <Route exact path="/" component={Body} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
