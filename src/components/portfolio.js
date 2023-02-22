import React from 'react';
import Project from '../components/project';

function Portfolio() {
	const projects = [
		{
			name: 'Professional README.md Generator',
			description:
				'This repository contains a folder with files containing the code for a command line application that creates a professional README.md file using node inquirer. ',
			image: 'readmegen.png',
			technologies: [
				'JavaScript',
				'Node.js',
				'inquirer',
				
			],
			github: 'https://github.com/ghideluw/Professional-README.md-Generator',
			deployed: 'https://ghideluw.github.io/Professional-README.md-Generator/',
		},
		{
			name: 'Random Password Generator',
			description:
				'The purpose of this application is to create a password generator. The password will be randomized combination of letters (both upper and lowercase), numbers, and symbols.',
			image: 'randompass.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
			],
			github: 'https://github.com/ghideluw/Random-Password-Generator',
			deployed: 'https://ghideluw.github.io/Random-Password-Generator/',
		},
		{
			name: 'Coding Quiz',
			description:
				'This project aims to create a quiz application that will run on a browser. The quiz will be built using javascript code for fucntionality and implement CSS and HTML code to be able to provide a user interface that is interactive and dynamic.',
			image: 'codingquiz.png',
			technologies: ['HTML/CSS', 'JavaScript', ],
			github: 'https://github.com/ghideluw/Coding-Quiz-Game',
			deployed: ' https://ghideluw.github.io/Coding-Quiz-Game-/',
		},
		{
			name: 'Notes Organizer',
			description:
				'This project aims to create an application called Notes Organizer that will allow the user to create notes and save them to help organize tasks so that schedules, reminders and events can be displayed in note form to help organize tasks.',
			image: 'notesorganizer.png',
			technologies: [
				'JavaScript',
				'Express.js',
				'UUID V4',
			],
			github: 'https://github.com/ghideluw/Notes-Organizer',
			deployed: 'https://notes-organizer.herokuapp.com/',
		},
		{
			name: 'Text Editor',
			description:
				'This project aims to build an application that functions as a single-page application that utilizes PWA framework.',
			image: 'text-editor.png',
			technologies: [
				'IndexedDB database in conjunction with a package called idb',
				'Heroku',
			],
			github: 'https://github.com/ghideluw/Text-Editor-Challenge-19',
			deployed: 'https://edit-text-app.herokuapp.com/',
		},
		{
			name: 'Book Search Engine',
			description:
				'The goal of this project was to take a Google Books API search engine that use a Restful API, and refractor it to be a GraphQL API that uses an Apollo Server.',
			image: 'Book Search Engine.png',
			technologies: [
				'GraphQL',
				'Express.js',
				'React',
				'Node.js',
				'Mongoose',
				'MongoAtlas',
			],
			github: 'https://github.com/ghideluw/Book-Search-Engine-Challenge-21',
			deployed: 'https://searchbooks.herokuapp.com/',
			
		},
		
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					 <li className="padding">
						<Project projects={projects[5]}></Project>
					</li> 
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;