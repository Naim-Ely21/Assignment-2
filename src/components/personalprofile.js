import React from 'react';

function PersonalProfile({ profile }) {
  return (
    <section className="block">
      <h4 className="title"><i>Personal Profile</i></h4>
      <div className="subordinate">
        <p>{profile}</p>
      </div>
    </section>
  );
}

export default PersonalProfile;
