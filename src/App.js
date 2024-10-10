import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import PersonalProfile from './components/personalprofile';
import WorkExperience from './components/workexperience';
import Skills from './components/skills';
import Education from './components/education';

function App() {
  const [resumeData] = useState({
    name: 'Zh Rimel',
    title: 'Data Scientist',
    contact: {
      email: 'abc@gmail.com',
      website: 'https://abc.github.io/abc',
      mobile: '01234567890',
    },
    personalProfile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    workExperience: [
      {
        jobTitle: 'Job Title at Company',
        duration: 'August 2022 - December 2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        jobTitle: 'Job Title 2 at Company 2',
        duration: 'August 2020 - December 2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
    skills: [
      {
        skill1: 'A Key Skill',
        skill2: 'A Key Skill',
        skill3: 'A Key Skill'
      }
    ],
    education: [
      {
        school: 'New Jersey Institute of Technology',
        degree: 'BS in Computer Science',
        years: '2018 - 2022',
        gpa: '3.9',
      },
      {
        school: 'New Jersey Institute of Technology',
        degree: 'MS in Data Science',
        years: '2022 - 2023',
        gpa: '4.0',
      },
    ],
  });

  return (
    <div className="container">
      <Header name={resumeData.name} title={resumeData.title} contact={resumeData.contact} />
      <hr className="yellow" />
      <PersonalProfile profile={resumeData.personalProfile} />
      <hr />
      <WorkExperience experience={resumeData.workExperience} />
      <hr />
      <Skills skills={resumeData.skills} />
      <hr />
      <Education education={resumeData.education} />
    </div>
  );
}

export default App;
