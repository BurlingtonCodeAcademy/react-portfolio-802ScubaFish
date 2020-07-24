import React from 'react';
import '../CSS/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Gallery from './Gallery'


// This is where the main application will be rendered from
class App extends React.Component {

  render() {

    return (
      <div id='screenSize'>
        <NavBar />

        {/* Setting up the paths to each of the components */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects'component={Projects} />
          <Route path='/experience'component={Experience} />
          <Route path='/gallery' component={Gallery} />
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