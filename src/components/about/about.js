import './about.css';

const About = () => (
  <div className="container_about">
    <img src="img/personal_photo.png" alt="myself" className="picture" />
    <h1 className="text-3xl font-bold underline">
      About Me!
    </h1>
    <div className="text-sm w-[75%] mt-4">
      <p>
        Hello everybody! My name is Rafael a motivated junior software engineer and former
        electronic engineer looking to pursue a successful career in software development as
        full-stack developer, where I can help deliver state-of-the-art
        software solutions.
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
      <br />
      <h3 className="text-xl font-semibold">Experience</h3>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between pt-3">
            <h4 className="font-semibold">Web Developer</h4>
            <p className="text-s">Remote</p>
          </div>
          <div className="flex justify-between">
            <h5 className="font-semibold">Freelance</h5>
            <p className="text-s">Jan, 2019 – Present</p>
          </div>
          <ul>
            <li className="pt-1">
              <a href="https://euroacerossa.com/" className="text-[#4a87ce] font-bold">Euro Aceros</a>
              {' '}
              – Rebuild and maintain the EuroAcero’s  company
              website and optimize it for SEO, which led to a traffic increase
              from less than 50 clicks per month to more than 500 clicks per
              month.
            </li>
            <li className="pt-2">
              <a href="https://clinicafalcon.cl/" className="text-[#4a87ce] font-bold">Clinica Falcon</a>
              {' '}
              – Build and maintain the Clínica Falcon (medical
              clinic in Chile) website, achieving improved customer engagement,
              which increased income and consultations through the website
              by 30% after 4 months.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between pt-3">
            <h4 className="font-semibold">Mentor (Volunteer)</h4>
            <p className="text-s">Remote</p>
          </div>
          <div className="flex justify-between">
            <h5 className="font-semibold">Microverse</h5>
            <p className="text-s">May 2022 – Aug, 2022</p>
          </div>
          <ul>
            <li className="pt-1">
              Mentored 4 junior web developers, providing technical support
              through code reviews (HTML/CSS, React-Redux, JavaScript, and Ruby
              on Rails), professional development, feedback, and professional
              ethics obtaining 100% satisfaction from students and instructors.
            </li>
            <li className="pt-2">
              Proposed improvements to code organization to  promote code quality
              and overall performance, reducing more than 20% time invested in
              fixing bugs.
            </li>
            <li className="pt-2">
              Provided tips and suggestions on how to sustain motivation to help
              mentees maintain longevity in the program, reducing impostor
              syndrome and program dropout.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between pt-3">
            <h4 className="font-semibold">Electronic Engineer </h4>
            <p className="text-s">Coro, Venezuela</p>
          </div>
          <div className="flex justify-between">
            <h5 className="font-semibold">Complejo Alfarero Jirajara (Industrial Pottery Complex)</h5>
            <p className="text-s">Nov, 2014 – Aug, 2017</p>
          </div>
          <ul>
            <li className="pt-1">
              Configured the Proportional, Integrative and Derivative (PID) system
              in the control loops of industrial pottery ovens, achieving an 8%
              improvement of final products by the end of the baking process.
            </li>
            <li className="pt-2">
              Designed Ladder Diagram logic systems in the pottery molding area,
              reducing the use of proximity sensors from 20 to 15, thereby
              bringing production costs down by 25%.
            </li>
            <li className="pt-2">
              Promoted to chief technology office after 2 years in the role
              based on top performance, commitment and values aligned to those
              of the company.
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
);

export default About;
