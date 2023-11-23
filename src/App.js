import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Projects from './components/Projects'
import About from "./components/About";
import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";

function App() {
  return (
    
    <Router>

      <NavBar/>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={ <ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
