import "./About.scss";

function About() {
  return (
    <div className="content--about">
      <h1 id="about">About</h1>
      <p className="content--about__paragraph">
        I love building beautiful websites with an intuitive user experience. My
        main interests is in Front End Development, Back End Development, User Experience
        and User Interface Design.
      </p>
      <p>Some technologies I've worked with:</p>
        <ul className="content-technologies">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>C# .NET</li>
          <li>JavaScript ES6</li>
          <li>Angular TypeScript</li>
          <li>React</li>
          <li>WordPress</li>
        </ul>
      <a
        className="downloadCV--button"
        href="https://drive.google.com/file/d/1S1ymTQ5zH-O8VG-7Ah4aOQJqNRkmNpnC/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV
      </a>
    </div>
  );
}

export default About;
