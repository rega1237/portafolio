import { NavLink } from 'react-router-dom';
import './home.css';

const Home = () => (
  <div className="container_build">
    <img src="img/logo.png" alt="logo" className="avatar absolute top-[20%]" />
    <div className="content">
      <div className="content__container">
        <p className="content__container__text">
          Hello
        </p>

        <ul className="content__container__list">
          <li className="content__container__list__item">world !</li>
          <li className="content__container__list__item">people !</li>
          <li className="content__container__list__item">welcome !</li>
          <li className="content__container__list__item">everyone !</li>
        </ul>
      </div>
    </div>
    <div className="absolute top-[60%] text-2xl">
      <h1 className="presentation text-center">
        I&apos;m Rafael a web developer on what cool project are we going to work on today?
      </h1>
    </div>
    <div className="absolute top-[75%] flex gap-[2rem]">
      <NavLink to="/about" className="home_link"> Resume </NavLink>
      <NavLink to="/contact" className="home_link"> Contact </NavLink>
    </div>
  </div>
);

export default Home;
