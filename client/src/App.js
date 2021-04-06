import React from 'react';
import './CSS/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Gallery from './Components/Gallery'
import Beeswax from './Components/Beeswax';
import HubSpot from './Components/HubSpot';
import Teknologize from './Components/Teknologize';
import Erema from './Components/Erema';
import ScrollToTop from './Components/ScrollToTop';


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

