import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <Fragment>
    <div>Home Page</div>
    <Link to="/authors">Authors</Link>
    <Link to="/login">Login</Link>
  </Fragment>
);
