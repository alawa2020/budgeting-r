import React from 'react';

const BudgetingScreen = () => {
  return (
    <>
      <h1 className="mb-5">Budget App</h1>
      <div className="row">
        {/* part of budgets and expenses */}
        <div className="col-5">
          {/* part of budgets */}
          <div className="budget-component mb-5">
            <div className="budget-component-inside">
              <label htmlFor="budget-input" className="form-label">
                Please Enter Your Budget
              </label>
              <input
                id="budget-input"
                className="form-control mb-3"
                type="number"
              />
              <button className="btn btn-outline-success" type="button">
                Calculate
              </button>
            </div>
          </div>
          {/* end part of budgets */}

          {/* part of budgets */}
          <div className="expense-component mb-5">
            <div className="expense-component-inside">
              <label htmlFor="budget-input" className="form-label">
                Please Enter Your Expense
              </label>
              <input
                id="budget-input"
                className="form-control mb-3"
                type="text"
              />

              <label htmlFor="budget-input" className="form-label">
                Please Enter Expense Amount
              </label>
              <input
                id="budget-input"
                className="form-control mb-3"
                type="number"
              />

              <button className="btn btn-outline-danger" type="button">
                Add Expense
              </button>
            </div>
          </div>
          {/* end part of budgets */}
        </div>
        {/* end part of budgets and expenses */}

        {/* part of balance and list of expenses */}
        <div className="col-7">
          {/* part budget expense balance */}
          <div className="row">
            {/* part budget */}
            <div className="col-4 text-center">
              <p>BUDGET</p>
              <img src="./assets/budget.png" alt="" />
              <p className="mt-3 text-green">$7000</p>
            </div>
            {/* end part budget */}
            <div className="col-4 text-center">
              <p>EXPENSES</p>
              <img src="./assets/expense.png" alt="" />
              <p className="mt-3 text-red">$7000</p>
            </div>
            {/* end part budget */}
            <div className="col-4 text-center">
              <p>BALANCE</p>
              <img src="./assets/balance.png" alt="" />
              <p className="mt-3 text-green">$7000</p>
            </div>
            {/* end part budget */}
          </div>
          {/* end part budget expense balance */}
          {/* table of list of expenses */}
          <div className="row">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Expense Title</th>
                  <th scope="col">Expense Value</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>- FIX A CAR</th>
                  <td>1000</td>
                  <td>
                    <span className="me-2">
                      <i className="fas fa-edit" />
                    </span>
                    <span className="me-2">
                      <i className="fas fa-trash" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>- FOOD OF CAT</th>
                  <td>100</td>
                  <td>
                    <span className="me-2">
                      <i className="fas fa-edit" />
                    </span>
                    <span className="me-2">
                      <i className="fas fa-trash" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* end table of list of expenses */}
        </div>
        {/* end part of balance and list of expenses */}
      </div>
    </>
  );
};

export default BudgetingScreen;
