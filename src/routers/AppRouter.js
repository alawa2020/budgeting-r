import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import LoginScreen from '../components/login/LoginScreen';
import BudgetingContext from '../context/BudgetingContext';
import DashboardRouter from './DashboardRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const { stateAuth } = useContext(BudgetingContext);

  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={LoginScreen}
          isAuthenticated={stateAuth.logged}
        />
        <PrivateRoute
          path="/"
          component={DashboardRouter}
          isAuthenticated={stateAuth.logged}
        />
      </Switch>
    </Router>
  );
};

export default AppRouter;
