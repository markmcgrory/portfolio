import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <p className='name'>Mark McGrory</p>
      <p className='title'>Software Developer</p>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
