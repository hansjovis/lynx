import React from 'react';

function Person( person ) {

    const id = person["@id"];
    const context = person["@context"];
    const type = person["@type"];

    return (
        <div resource={id} vocab={context} typeof={type}>
            <h1 property="name">{person.name}</h1>
            <dl>
                <dt>Job title</dt>
                <dd property="jobTitle">{person.jobTitle}</dd>
                <dt>Email</dt>
                <dd><a property="email" href={person.email}>{person.email.replace(/^mailto:/,"")}</a></dd>
            </dl>
        </div>
    );
}

export default Person;