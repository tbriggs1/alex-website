import React from 'react';
import AboutMe from './pages/AboutMe.js';
import MyWork from './pages/MyWork.js';
import Contact from './pages/Contact.js';
import {Switch, Route, BrowserRouter, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter>
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
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
