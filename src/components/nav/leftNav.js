import './leftNav.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faAngellist } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
const LeftNav = () => {
  const handleNavClick = () => {
    const nav = document.querySelector('.nav');
    const navMobile = document.querySelector('.nav_mobile');
    const x = document.querySelector('.nav_x');
    nav.classList.toggle('nav_active');
    navMobile.classList.toggle('hidden');
    x.classList.toggle('hidden');
  };

  const closeMenu = () => {
    const nav = document.querySelector('.nav');
    const x = document.querySelector('.nav_x');
    const navMobile = document.querySelector('.nav_mobile');
    if (nav.classList.contains('nav_active')) {
      nav.classList.remove('nav_active');
      navMobile.classList.toggle('hidden');
      x.classList.toggle('hidden');
    }
  };

  return (
    <nav>
      <div className="nav_mobile">
        <FontAwesomeIcon icon={faBars} size="lg" onClick={handleNavClick} />
      </div>
      <div className="nav_x hidden z-30 absolute top-4 left-4">
        <FontAwesomeIcon icon={faXmark} size="lg" onClick={handleNavClick} />
      </div>
      <div className="nav">
        <div>
          <NavLink to="/">
            <img src="img/logo.png" alt="my logo" className="avatar" onClick={closeMenu} />
          </NavLink>
        </div>
        <ul>
          <li
            className="nav_element"
            onClick={closeMenu}
          >
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'bg-[#4A87CE] font-bold text-white p-2' : 'font-[400]')}
              end
            >
              Home
            </NavLink>
          </li>

          <li className="nav_element" onClick={closeMenu}>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'bg-[#4A87CE] font-bold text-white p-2' : 'font-[400]')}> About Me </NavLink>
          </li>
          <li className="nav_element" onClick={closeMenu}>
            <NavLink to="/skills" className={({ isActive }) => (isActive ? 'bg-[#4A87CE] font-bold text-white p-2' : 'font-[400]')}> Skills </NavLink>
          </li>
          <li className="nav_element" onClick={closeMenu}>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'bg-[#4A87CE] font-bold text-white p-2' : 'font-[400]')}> Projects </NavLink>
          </li>
          <li className="nav_element" onClick={closeMenu}>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'bg-[#4A87CE] font-bold text-white p-2' : 'font-[400]')}> Contact Me </NavLink>
          </li>
        </ul>

        <div className="social">
          <a href="https://github.com/rega1237/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/rafael-eduardo-guzman/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://angel.co/u/rafael-guzman-arias" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faAngellist} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default LeftNav;
