import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import BudgetingContext from '../../context/BudgetingContext';
import useForm from '../../hooks/useForm';
import types from '../../types/types';

const LoginScreen = () => {
  const { dispatchAuth } = useContext(BudgetingContext);

  const [{ nick }, handleValues] = useForm({ nick: '' });

  const history = useHistory();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (nick.trim().length > 2) {
      dispatchAuth({
        type: types.login,
        payload: {
          nick,
        },
      });
      history.replace('/home');
      return;
    }
    alert('error! login is not possible!');
  };

  return (
    <div>
      <h1>Login</h1>
      <div className="container">
        <form onSubmit={handleSubmitLogin}>
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Input a nick"
            autoComplete="off"
            name="nick"
            value={nick}
            onChange={handleValues}
          />
          <div className="d-grid gap-2">
            <input
              className="btn btn-outline-primary"
              type="submit"
              value="Login"
              disabled={nick.trim().length <= 2}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
