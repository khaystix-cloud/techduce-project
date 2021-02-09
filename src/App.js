import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Navbar from './components/Navbar';
import Home from './components/Home';
import PageB from './components/PageB';
//import themeFile from './utility/theme';
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
//import createMuiTheme from '@material-ui/core/styles/createMuiTheme';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/pageb' component={PageB} />
      </Switch>    
    </Router>
    
  )
}

export default App;
