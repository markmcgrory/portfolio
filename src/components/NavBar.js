import {Link} from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <div className='name'>
                Mark McGrory
            </div>
        <ul className="nav-links">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
};
 
export default NavBar;