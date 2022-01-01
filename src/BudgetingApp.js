import React, { useEffect, useReducer } from 'react';
import BudgetingContext from './context/BudgetingContext';
import AuthReducer from './reducers/AuthReducer';
import AppRouter from './routers/AppRouter';

const BudgetingApp = () => {
  const initAuth = () => {
    return (
      JSON.parse(localStorage.getItem('budgeting-auth')) || { logged: false }
    );
  };

  const [stateAuth, dispatchAuth] = useReducer(AuthReducer, {}, initAuth);

  useEffect(() => {
    localStorage.setItem('budgeting-auth', JSON.stringify(stateAuth));
  }, [stateAuth]);

  return (
    <div>
      <BudgetingContext.Provider value={{ stateAuth, dispatchAuth }}>
        <AppRouter />
      </BudgetingContext.Provider>
    </div>
  );
};

export default BudgetingApp;
