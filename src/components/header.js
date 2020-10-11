import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Restful students</h1>
      <nav>
        <ul>
          <li>
            <Link className="navbar-item" to="/students">
              All
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/students/new">
              New
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
