import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Arthur Parody</h1>
        <p>Email: <a href="mailto:aparody27@gmail.com">aparody27@gmail.com</a> | Phone: (831) 521-3227</p>
        <p>Location: Omaha, NE (Relocating to Seattle, WA)</p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/arthurparody/">linkedin.com/in/arthurparody</a><br />
          GitHub: <a href="https://github.com/aparody">github.com/aparody</a>
        </p>
      </header>

      <hr />

      <Education />
      <hr />

      <Experience />
      <hr />

      <Projects />
      <hr />

      <Skills />
    </div>
  );
}

function Education() {
  return (
    <section id="education">
      <h2>EDUCATION</h2>
      <ul>
        <li>
          <span className="left">University of Nebraska Omaha</span>
          <span className="right">Expected May 2024</span>
        </li>
        <li>
          <span className="left">Bachelor of Science in Computer Science</span>
          <span className="right">Omaha NE</span>
        </li>
      </ul>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <h2>EXPERIENCE</h2>
      <ul>
        <li>
          <strong>United States Air Force</strong><br />
          Airborne Cryptologic Language Analyst<br />
          Apr 2015 – Apr 2021<br />
          Offutt Air Force Base, NE<br />
          <ul>
            <li>Disseminated signal intelligence information to customers in high pressure environments, safeguarding assets worth over one billion dollars during live missions</li>
            <li>Produced more than 100 intelligence reports utilized by the NSA to bolster US national security</li>
            <li>Led a team of 20 Airmen as a Staff Sergeant, managing training programs and ensuring unit readiness</li>
            <li>Optimized office certification process, reducing time requirement for training certification by 25%</li>
            <li>Held Top Secret security clearance for 4 years, demonstrating trustworthiness and ability to handle sensitive info</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <h2>PROJECTS</h2>
      <ul>
        <li>
          <strong>Next.js Ecommerce Website</strong>
          <ul>
            <li>Developed a full-stack ecommerce website powered by Next.js for both frontend and backend development, leveraging its capabilities for seamless user interactions</li>
            <li>Implemented efficient data management with MongoDB and Prisma ORM, enabling seamless connectivity and real-time updates of product information and inventory</li>
            <li>Integrated NextAuth for secure user authentication, allowing seamless login while optimizing performance with server-side data loading</li>
            <li>Maintained the website using Vercel, gaining experience with reliable hosting and continuous deployment</li>
          </ul>
        </li>
        <li>
          <strong>Interactive Game Programming Learning Environment</strong>
          <ul>
            <li>Collaborated within a four-member team to develop a game used as an educational tool for a professor's game programming class, impacting hundreds of students</li>
            <li>Designed and implemented a "lens" system in Javascript with 5 different lenses, enabling real-time visualization of game mechanics and leading to a 35% increase in student understanding</li>
            <li>Orchestrated engaging design discussions, code reviews, and feature planning sessions, fostering team cohesion, finished project 17% faster than expected</li>
          </ul>
        </li>
        <li>
          <strong>Full Stack Note-Taking Application</strong>
          <ul>
            <li>Engineered a full-stack web app for taking notes using the MERN (MongoDB, Express.js, React, Node.js) stack</li>
            <li>Crafted the application's user interface using React, achieving a responsive and intuitive user experience</li>
            <li>Devised user authentication and authorization system following best practices like password hashing, HTTPS, and secure data storage, ensuring user data privacy and security</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <h2>TECHNICAL SKILLS</h2>
      <ul>
        <li>Languages: Java, Python, C, C#, C++, SQL, JavaScript, TypeScript, HTML/CSS, Kotlin</li>
        <li>Technologies: Amazon AWS, Next.js, Node.js, Express.js, Junit, React, Bootstrap, .NET, REST API, Microsoft Azure, Cloud Computing</li>
      </ul>
    </section>
  );
}

export default App;
