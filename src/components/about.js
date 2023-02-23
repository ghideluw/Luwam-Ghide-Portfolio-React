import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Full Stack Developer</p>
      <hr />
      <img className="profilepic" src={process.env.PUBLIC_URL + './assets/img/female_side_profile_computer.png'} alt="Luwam Ghide photo"/>
      <p className="content is-italic mt-4">
      Hello, My name is Luwam Ghide. I am a full stack Web developer. I am currently studying at the University of Toronto School of 
      Continuing Education in the Coding Bootcamp Certificate Program.
      </p>
      <p className="aboutContent">
      I have previously completed a Bachelors of Science from the University of Toronto. My previous work experience has a broad range of 
      customer service experience in the hospitality, retail, and health care industry. My goal is to seek career development as a full 
      stack web developer, to transition into the technology industry and further develop and apply my training and experience in this 
      industry to meet the growing needs of today's businesses. I believe technology is becoming more of a prevalent requirement in the 
      way many industries are structured and operated. 
      </p>
    </div>
  );
}

export default About;