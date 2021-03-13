import React from 'react';
import AboutMe from './pages/AboutMe.js';
import MyWork from './pages/MyWork.js';
import Contact from './pages/Contact.js';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
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
    </div>
  );
}

export default App;
