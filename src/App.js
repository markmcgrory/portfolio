import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import ProjectList from './components/ProjectList';
import About from "./components/About";
import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;