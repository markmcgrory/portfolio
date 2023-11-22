import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Projects from './components/Projects'
import Experience from "./components/Experience";

function App() {
  return (
    
    <Router>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
