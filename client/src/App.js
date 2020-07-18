import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch, } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import Experience from './Experience'

class App extends React.Component {

  render() {

    return (
      <div id='screenSize'>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects'component={Projects} />
          <Route path='/experience'component={Experience} />
        </Switch>

      </div>
    )
  }
}


export default function Router() {

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};