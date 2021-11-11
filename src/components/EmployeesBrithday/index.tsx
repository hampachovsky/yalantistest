import { useAppSelector } from 'hooks/useAppSelector';
import React from 'react';
import style from './EmployeesBrithday.module.css';

export const EmployeesBrithday = () => {
  const activeEmployee = useAppSelector((state) => state.employeesReducer.active);
  return (
    <div className={style.employeesBirthday}>
      <h1>Employees birthday</h1>
      <hr />
      {activeEmployee.map((it) => {
        return <h4>{it.lastName}</h4>;
      })}
    </div>
  );
};
