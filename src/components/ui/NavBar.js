import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import BudgetingContext from '../../context/BudgetingContext';
import types from '../../types/types';

const NavBar = () => {
  const { stateAuth, dispatchAuth } = useContext(BudgetingContext);

  const history = useHistory();

  const handleLogout = () => {
    dispatchAuth({
      type: types.logout,
    });
    history.replace('/login');
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/home">
        APP
      </Link>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/budgeting"
            >
              Budgeting
            </NavLink>
          </li>
        </ul>
      </div>
      <span className="navbar-text text-info">{stateAuth.nick}</span>
      <button
        onClick={handleLogout}
        type="button"
        className="btn text-secondary"
      >
        Logout
      </button>
    </nav>
  );
};

export default NavBar;
