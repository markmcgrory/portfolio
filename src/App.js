import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import About from './components/About'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio/*" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
