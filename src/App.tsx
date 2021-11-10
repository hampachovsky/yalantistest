import { useAppSelector } from 'hooks/useAppSelector';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { fetchEmployees } from 'store/reducers/employees/employeesActionCreators';
import './App.css';
import { Employees } from './pages/Employees';

function App() {
  const dispatch = useDispatch();
  const employees = useAppSelector((state) => state.employeesReducer.employees);
  console.log(employees);
  useEffect(() => {
    //dispatch(fetchEmployees());
  }, []);
  return (
    <div className='App'>
      <Switch>
        <Route path='/employees'>
          <Employees />
        </Route>
        <Redirect to='/employees' />
      </Switch>
    </div>
  );
}

export default App;
