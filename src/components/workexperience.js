import React from 'react';

function WorkExperience({ experience }) {
  return (
    <section className="block">
      <h4 className="title"><i>Work Experience</i></h4>
      <div className="subordinate">
        {experience.map((job, index) => (
          <div key={index}>
            <h4>{job.jobTitle} ({job.duration})</h4>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
