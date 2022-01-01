import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import BudgetingScreen from '../components/budgeting/BudgetingScreen';
import HomeScreen from '../components/home/HomeScreen';
import NavBar from '../components/ui/NavBar';

const DashboardRouter = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/home" component={HomeScreen} />
          <Route exact path="/budgeting" component={BudgetingScreen} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRouter;
