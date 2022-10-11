import './abilities.css';

const Abilities = () => (
  <div className="container_projects">
    <h1 className="text-3xl font-semibold text-center my-5">Tech Skills</h1>
    <div className="flex flex-wrap w-[80%] align-middle">
      <div className="tech_container">
        <h2>Markup Languages</h2>
        <div className="icon_container">
          <img src="img/abilities/html.png" alt="html" className="icon" />
          <img src="img/abilities/css.png" alt="css" className="icon" />
          <img src="img/abilities/sass.png" alt="rails" className="icon" />
        </div>
      </div>

      <div className="tech_container">
        <h2>Programming Languages</h2>
        <div className="icon_container">
          <img src="img/abilities/javascript.png" alt="javascript" className="icon" />
          <img src="img/abilities/ruby.png" alt="ruby" className="icon" />
          <img src="img/abilities/python.png" alt="python" className="icon" />
        </div>
      </div>

      <div className="tech_container">
        <h2>Frameworks</h2>
        <div className="icon_container">
          <img src="img/abilities/react.png" alt="react" className="icon" />
          <img src="img/abilities/redux.png" alt="redux" className="icon" />
          <img src="img/abilities/rails.png" alt="rails" className="icon" />
          <img src="img/abilities/bootstrap.png" alt="bootstrap" className="icon" />
          <img src="img/abilities/tailwind.png" alt="tailwind" className="icon" />
        </div>
      </div>

      <div className="tech_container">
        <h2>Testing</h2>
        <div className="icon_container">
          <img src="img/abilities/jest.png" alt="jest" className="icon" />
          <img src="img/abilities/rspec.png" alt="rspec" className="icon" />
        </div>
      </div>

      <div className="tech_container">
        <h2>Databases</h2>
        <div className="icon_container">
          <img src="img/abilities/postgres.png" alt="postgres" className="icon" />
          <img src="img/abilities/mysql.png" alt="mysql" className="icon" />
        </div>
      </div>

      <div className="tech_container">
        <h2>Others Technologies</h2>
        <div className="icon_container">
          <img src="img/abilities/docker.png" alt="docker" className="icon" />
          <img src="img/abilities/git.png" alt="git" className="icon" />
          <img src="img/abilities/github.png" alt="github" className="icon" />
          <img src="img/abilities/heroku.png" alt="heroku" className="icon" />
          <img src="img/abilities/netifly.png" alt="netifly" className="icon" />
        </div>
      </div>
    </div>
  </div>
);

export default Abilities;
