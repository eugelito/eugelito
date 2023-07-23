import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faMicrosoft,
  faJs,
  faAngular,
  faReact,
  faWordpress,
  faGithub,
  faGoogle,
  faMarkdown,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <div className="content--about">
      <h1 id="about">About</h1>
      <p className="content--about__paragraph">
        I'm passionate about creating beautiful web applications with intuitive
        user experiences. My main interests include Front and Back End
        Development, User Experience, and User Interface Design.
      </p>
      <p>Some technologies I've worked with:</p>
      <ul className="content-technologies fa-ul">
        <li>
          <FontAwesomeIcon icon={faHtml5} />
          HTML5
        </li>
        <li>
          <FontAwesomeIcon icon={faCss3} />
          CSS3
        </li>
        <li>
          <FontAwesomeIcon icon={faMarkdown} />
          Markdown
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} />
          Tailwind CSS
        </li>
        <li>
          <FontAwesomeIcon icon={faMicrosoft} />
          C# .NET
        </li>
        <li>
          <FontAwesomeIcon icon={faJs} />
          JavaScript
        </li>
        <li>
          <FontAwesomeIcon icon={faAngular} />
          Angular
        </li>
        <li>
          <FontAwesomeIcon icon={faReact} />
          React
        </li>
        <li>
          <FontAwesomeIcon icon={faWordpress} />
          WordPress
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          GitHub
        </li>
        <li>
          <FontAwesomeIcon icon={faGoogle} />
          Firebase
        </li>
      </ul>

      <a
        className="downloadCV--button"
        href="https://drive.google.com/file/d/19V09LkihrjjTuZfg7pGTbb7U-iRGIQW0/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV
      </a>
    </div>
  );
};

export default About;
