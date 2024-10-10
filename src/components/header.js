import React from 'react';

function Header({ name, title, contact }) {
  return (
    <section className="titleblock">
      <div className="titlename">
        <h1>{name}</h1>
        <p>{title}</p>
      </div>
      <div className="info">
        <div className="info-item">Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></div>
        <div className="info-item">Web: <a href={contact.website} target="_blank" rel="noopener noreferrer">{contact.website}</a></div>
        <div className="info-item">Mobile: {contact.mobile}</div>
      </div>
    </section>
  );
}

export default Header;
