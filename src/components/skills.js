import React from 'react';

function Skills({ skills }) {
  return (
    <section className="block">
      <h4 className="title"><i>Key Skills</i></h4>
      <div className="skills">
        {skills.map((skills, index) => (
          <div className="skills-container" key={index}>
            <div>{skills.skill1}</div>
            <div>{skills.skill2}</div>
            <div>{skills.skill3}</div>
          </div>
        ))}
      </div>
      <div className="skills">
        {skills.map((skills, index) => (
          <div className="skills-container" key={index}>
            <div>{skills.skill1}</div>
            <div>{skills.skill2}</div>
            <div>{skills.skill3}</div>
          </div>
        ))}
      </div>
      <div className="skills">
        {skills.map((skills, index) => (
          <div className="skills-container" key={index}>
            <div>{skills.skill1}</div>
            <div>{skills.skill2}</div>
            <div>{skills.skill3}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
