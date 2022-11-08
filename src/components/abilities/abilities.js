import './abilities.css';

const Abilities = () => (
  <div className="container_projects">
    <h1 className="text-3xl font-semibold text-center my-5">Tech Skills</h1>
    <div className="flex flex-wrap w-[80%] align-middle">
      <div className="tech_container">
        <h2>Markup Languages</h2>
        <div className="icon_container">
          <div className="flex flex-col">
            <img src="img/abilities/html.png" alt="html" className="icon" />
            <p className="text-center">HTML</p>
          </div>
          <div className="flex flex-col">
            <img src="img/abilities/css.png" alt="css" className="icon" />
            <p className="text-center">CSS</p>
          </div>
          <div className="flex flex-col">
            <img src="img/abilities/sass.png" alt="sass" className="icon" />
            <p className="text-center">SASS</p>
          </div>
        </div>
      </div>

      <div className="tech_container">
        <h2>Programming Languages</h2>
        <div className="icon_container">
          <div className="flex flex-col items-center">
            <img src="img/abilities/javascript.png" alt="javascript" className="icon" />
            <p className="text-center">JavaScript</p>
          </div>
          <div className="flex flex-col">
            <img src="img/abilities/ruby.png" alt="ruby" className="icon" />
            <p className="text-center">Ruby</p>
          </div>
          <div className="flex flex-col">
            <img src="img/abilities/python.png" alt="python" className="icon" />
            <p className="text-center">Python</p>
          </div>
        </div>
      </div>

      <div className="tech_container">
        <h2>Frameworks</h2>
        <div className="icon_container">
          <div className="flex flex-col items-center">
            <img src="img/abilities/react.png" alt="react" className="icon" />
            <p className="text-center">React</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="img/abilities/redux.png" alt="redux" className="icon" />
            <p className="text-center">Redux</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="img/abilities/rails.png" alt="rails" className="icon" />
            <p className="text-center">Rails</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="img/abilities/bootstrap.png" alt="bootstrap" className="icon" />
            <p className="text-center">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="img/abilities/tailwind.png" alt="tailwind" className="icon" />
            <p className="text-center">Tailwind</p>
          </div>
        </div>
      </div>

      <div className="tech_container">
        <h2>Testing</h2>
        <div className="icon_container">
          <div className="flex flex-col items-center">
            <img src="img/abilities/jest.png" alt="jest" className="icon" />
            <p className="text-center">Jest</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="img/abilities/rspec.png" alt="rspec" className="icon" />
            <p className="text-center">Rspec</p>
          </div>
        </div>
      </div>

      <div className="tech_container">
        <h2>Databases</h2>
        <div className="icon_container">
          <div className="flex flex-col items-center">
            <img src="img/abilities/postgres.png" alt="postgres" className="icon" />
            <p className="text-center">PostgreSQL</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="img/abilities/mysql.png" alt="mysql" className="icon" />
            <p className="text-center">MySQL</p>
          </div>
        </div>
      </div>

      <div className="tech_container">
        <h2>Others Technologies</h2>
        <div className="icon_container">
          <div className="flex flex-col items-center">
            <img src="img/abilities/docker.png" alt="docker" className="icon" />
            <p className="text-center">Docker</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="img/abilities/git.png" alt="git" className="icon" />
            <p className="text-center">Git</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="img/abilities/github.png" alt="github" className="icon" />
            <p className="text-center">Github</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="img/abilities/heroku.png" alt="heroku" className="icon" />
            <p className="text-center">Heroku</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="img/abilities/netifly.png" alt="netifly" className="icon" />
            <p className="text-center">Netifly</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Abilities;
