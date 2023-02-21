import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Resume</p>
        <hr />

        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + "/Luwam_Ghide_Resume.pdf"}
          target="_blank" rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>View My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />
        <div>
				<h5>Front-End Proficiencies</h5>
				<ol>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>React</li>
					<li>version control/Git</li> 
					<li>responsive design</li>
				</ol>
				<br></br>
				<h5>Back-End Proficiencies</h5>
				<ol>
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>Model View Controller (MVC)</li>
					<li>REST</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
				<br></br>
				<h5>Dev Tool Proficiencies</h5>
				<ol>
					<li>Git</li>
					<li>npm</li>
					<li>Jest</li>
					<li>Webpack</li>
				</ol>
				<br></br>
				<h5>Database Proficiencies</h5>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>GraphQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
			</div>
      </div>
    </div>
  );
}

export default Resume;