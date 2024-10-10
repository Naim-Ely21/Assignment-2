import React from 'react';
import '../App.css';

function Education({ education }) {
  return (
    <section className="block">
      <h4 className="title"><i>Education</i></h4>
      <div className="subordinate">
        {education.map((ed, index) => (
          <div key={index}>
            <h4>{ed.school}</h4>
            <p>{ed.degree}</p>
            <p>{ed.years}</p>
            <p>GPA: {ed.gpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
