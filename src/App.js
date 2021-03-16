import React from 'react';
import AboutMe from './pages/AboutMe.js';
import MyWork from './pages/MyWork.js';
import Contact from './pages/Contact.js';
import Nav from './components/Nav';
import {Switch, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import SecondWork from './components/SecondWork.js';
import FirstWork from './components/FirstWork.js';
import ThirdWork from './components/ThirdWork.js';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
              <Route path="/" exact>
                <AboutMe />
              </Route>
              <Route path="/work" exact>
                <MyWork />
              </Route>
              <Route path="/contact" exact>
                <Contact />
              </Route>
              <Route path="/FirstWork" exact>
                <FirstWork />
              </Route>
              <Route path="/SecondWork" exact>
                <SecondWork />
              </Route>
              <Route path="/ThirdWork" exact>
                <ThirdWork />
              </Route>
          </Switch>
      </AnimatePresence>
    </div>
  );
}


export default App;
