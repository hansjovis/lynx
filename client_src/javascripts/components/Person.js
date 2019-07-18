import React from 'react';

function Person( person ) {
  return (
    <div>
      <h1>{person.name}</h1>
      <dl>
        <dt>Job title</dt>
        <dd>{person.jobTitle}</dd>
        <dt>Email</dt>
        <dd><a href={person.email}>{person.email.replace( /^mailto:/, "" )}</a></dd>
      </dl>
    </div>
  );
}

export default Person;