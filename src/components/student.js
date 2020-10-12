import React from 'react';
import { Link } from 'react-router-dom';

const getGithubUrl = (username) => `https://github.com/${username}`;

const Student = ({ location, name, githubUsername, id, view }) => {
  const linkToShow = () => {
    let link;
    switch (view) {
      case 'list':
        link = (
          <Link to={`/students/${id}`} className="show">
            show
          </Link>
        );
        break;
      case 'show':
        link = (
          <Link to={`/students/${id}/edit`} className="edit">
            edit
          </Link>
        );
        break;

      default:
        link = <></>;
        break;
    }
    return link;
  };

  return (
    <article className="student">
      <h3>{name}</h3>
      {linkToShow()}
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
