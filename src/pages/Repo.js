import React from 'react';
import {Outlet} from 'react-router-dom';

export default function Repo() {
  return (
    <div className="repo">
      <h2>My GitHub repository:</h2>

      <Outlet />
    </div>
  )
}