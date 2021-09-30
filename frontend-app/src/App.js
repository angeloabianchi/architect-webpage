import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Press from './Pages/Press/Press';
import Contact from './Pages/Contact/Contact';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';



const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <header >
            <NavBar />
          </header>
        </div>
        
        <div className="Content">
          <main>
            <Switch>
              <Route path="/" exact><Home /></Route>
              <Route path="/projects" exact><Projects /></Route>
              <Route path="/about" exact><About /></Route>
              <Route path="/press" exact><Press /></Route>
              <Route path="/contact" exact><Contact /></Route>

              <Redirect to="/" />
            </Switch>
          </main>
        </div>
        
      </div>
    </Router>

  );
}

export default App;
