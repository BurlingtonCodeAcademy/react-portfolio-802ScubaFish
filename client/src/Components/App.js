import React from 'react';
import '../CSS/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Gallery from './Gallery'
import Beeswax from './Beeswax';
import HubSpot from './HubSpot';
import Teknologize from './Teknologize';
import Erema from './Erema';
import ScrollToTop from './ScrollToTop';


// This is where the main application will be rendered from
class App extends React.Component {

  function 

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
          <Route path='/beeswax' component={Beeswax} />
          <Route path='/hubspot' component={HubSpot} />
          <Route path='/teknologize' component={Teknologize} />
          <Route path='/erema' component={Erema} />
        </Switch>

      </div>
    )
  }
}


export default function Router() {

  return (
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  );
};

