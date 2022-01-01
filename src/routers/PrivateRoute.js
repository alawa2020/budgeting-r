import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

import PropTypes from 'prop-types';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  localStorage.setItem('lastpath-budgeting', rest.location.pathname);

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
