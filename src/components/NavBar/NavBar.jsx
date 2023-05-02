import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <img className="nav-logo" src="DP-logo.png" alt="" />
      <div className="section">
        <Link className="links" to="/">Home</Link>
        &nbsp;  &nbsp; &nbsp;
        <Link className="links" to="/about">About Me</Link>
        &nbsp;  &nbsp; &nbsp;
        <Link className="links" to="/projects">Projects</Link>
        &nbsp;  &nbsp; &nbsp;
        <Link className="links" to="/Contact">Contact Me</Link>
        &nbsp; &nbsp; &nbsp;
        <Link className="links" to="/Resume">Resume</Link>
        &nbsp; &nbsp; &nbsp; &nbsp; 
      </div>
    </nav>
  );
}