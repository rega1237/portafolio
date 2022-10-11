import './about.css';

const About = () => (
  <div className="container_about">
    <img src="img/personal_photo.png" alt="myself" className="picture" />
    <h1 className="text-3xl font-bold underline">
      About Me!
    </h1>
    <div className="text-sm w-[75%] mt-4">
      <p>
        Hello everybody! My name is Rafael, I&apos;m from Venezuela, and I have a
        university degree as an electronic engineer but now I&apos;m living this new
        adventure as a Full-Stack Web Developer.
      </p>
      <br />
      <p>
        In my learning journey, I had the opportunity to pair programming with
        people from all continents, do team projects and learn new technologies
        with excellent colleagues who have made this experience incredible.
      </p>
      <br />
      <p>
        Thanks to my previous work experience as an engineer I can work in a team,
        communication skills, research, innovation, and perform tasks in time constraints
        plus all the experience of +1300 hours of coding and working remotely gives me a
        broader view of the importance of working in a team to achieve a goal.
      </p>
      <br />
      <p>
        I consider myself a curious, self-taught person, always looking for new
        challenges to overcome.
      </p>
      <br />
      <p>
        My hobbies include play video games, medieval fantasy books, playing soccer, and
        play guitar.
      </p>
    </div>
  </div>
);

export default About;
