import React from 'react';
import AboutMe from './pages/AboutMe.js';
import MyWork from './pages/MyWork.js';
import Contact from './pages/Contact.js';
import Nav from './components/Nav';
import {Switch, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

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
          </Switch>
      </AnimatePresence>
    </div>
  );
}


export default App;
