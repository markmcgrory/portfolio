import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'
import Experience from "./components/Experience";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/experience" element={<Experience />} />

      </Routes>
    </Router>
  );
}

export default App;
