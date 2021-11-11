import { Preloader } from 'components/common/Preloader';
import { useAppSelector } from 'hooks/useAppSelector';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { fetchEmployees } from 'store/reducers/employees/employeesActionCreators';
import './App.css';
import { Employees } from './pages/Employees';

function App() {
  const dispatch = useDispatch();
  const isFetching = useAppSelector((state) => state.employeesReducer.isFetching);
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);
  return (
    <div className='App'>
      {isFetching && <Preloader />}
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
