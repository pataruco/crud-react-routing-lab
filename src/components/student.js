import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const getGithubUrl = (username) => `https://github.com/${username}`;

const Student = ({ location, name, githubUsername, id }) => {
  return (
    <article key={id} className="student">
      <h3>{name}</h3>
      <Link to={`/students/${id}`} key={id} className="show">
        show
      </Link>
      <dl>
        <dt>Location:</dt>
        <dd>{location}</dd>
        <dt>GitHub:</dt>
        <dd>
          <a href={getGithubUrl(githubUsername)}>
            {getGithubUrl(githubUsername)}
          </a>
        </dd>
      </dl>
    </article>
  );
};

export default Student;