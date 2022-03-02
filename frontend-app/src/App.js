import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Press from './Pages/Press/Press';
import Contact from './Pages/Contact/Contact';
import ProjectPage from './Pages/Projects/ProjectOne/ProjectPage';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


const App = () => {

  return(
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
              
              <Route path="/" exact ><Home /><Projects /><About /><Press /><Contact /></Route>
              <Route path="/project/:id" render={props => <ProjectPage {...props}/>}/>
              <Redirect to="/" />
              
            </Switch>
          </main>
        </div>

        <div className="footer">
            
        </div>

      </div>
        
    </Router>
  );
}

export default App;
