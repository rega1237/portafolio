import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeftNav from './components/nav/leftNav';
import Home from './components/home/home';
import About from './components/about/about';
import Abilities from './components/abilities/abilities';
import Contact from './components/contact/contact';
import Projects from './components/projects/projects';

function App() {
  return (
    <div className="App">
      <Router>
        <LeftNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Abilities />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
