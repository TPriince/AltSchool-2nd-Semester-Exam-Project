import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navigation() {
  return(
    <div className="links">
      <NavLink className="link"  style={({isActive}) => isActive ? {color: "red"} : {color: "black"}} to="/" end>Repositories Page</NavLink> |

      <NavLink to="/test-error-boundary" className="link"  style={({isActive}) => isActive ? {color: "red"} : {color: "black"}} end> Test Error Boundary</NavLink>
    </div>
  )
}