import React from 'react';
import { NavLink } from 'react-router-dom';

const Pagenation = () => (
  <div>
    <ul className="pagination questionPagenation">
      <li className="page-item disabled">
        <NavLink to="/auth" className="item page-link" href="#">
          Prev
        </NavLink>
      </li>
      <li className="page-item">
        <NavLink to="/auth" className="item page-link" href="#">
          Next
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Pagenation;
