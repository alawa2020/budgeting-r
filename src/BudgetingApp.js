import React from 'react';
import BudgetingContext from './context/BudgetingContext';
import AppRouter from './routers/AppRouter';

const BudgetingApp = () => {
  return (
    <div>
      <BudgetingContext.Provider value={{ name: 'james' }}>
        <AppRouter />
      </BudgetingContext.Provider>
    </div>
  );
};

export default BudgetingApp;
