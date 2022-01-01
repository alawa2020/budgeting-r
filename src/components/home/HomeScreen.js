import React from 'react';
import { useHistory } from 'react-router-dom';

const HomeScreen = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/budgeting');
  };
  return (
    <div>
      <h1>Welcome to the Budgeting App!</h1>
      <p>
        This is an app to calculate your budgeting according your income and
        expenses.
      </p>
      <button
        type="button"
        onClick={handleClick}
        className="btn btn-outline-info"
      >
        Go!
      </button>
    </div>
  );
};

export default HomeScreen;
