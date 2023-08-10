import React from 'react'
import './App.css'
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Home } from '../components/Home/Home';
import { About } from '../components/About/About';
import { Menu } from '../components/Menu/Menu';
import { Projects } from '../components/Projects/Projects';


export default function App () {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

//remove react router for one page accessibility
  //route to scroll down to component
//add contacts on the footer
// make backend
  // wishlist
    //artwork
    //projects