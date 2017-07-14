import React from 'react';
import { Link } from 'react-router';

const RoutExample =() => {
  return(
  <div>
    <h1>App</h1>
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/message">Inbox</Link></li>
    </ul>
  </div>
  )
}

export default RoutExample;
