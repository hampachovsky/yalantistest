import clsx from 'clsx';
//import { useAppSelector } from 'hooks/useAppSelector';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleActiveEmployee } from 'store/reducers/employees/employeesActionCreators';
import { Employee as EmployeeType } from 'store/reducers/employees/types';
import style from './Employee.module.css';

export const Employee: React.FC<EmployeeType> = ({ firstName, lastName, id, dob }) => {
  const [active, setActive] = useState<boolean>(false);
  //const activeEmployee = useAppSelector((state) => state.employeesReducer.active);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleActiveEmployee({ id, firstName, lastName, dob, isActive: active }));
  }, [active, dispatch, dob, firstName, id, lastName]);

  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <div>
      <h2
        className={clsx(active ? style.active : style.notActive)}
      >{`${firstName} ${lastName}`}</h2>
      <input
        type='radio'
        name='active'
        id={id as string}
        checked={active}
        onChange={toggleActive}
      />
      <label htmlFor='active'>Active</label>
      <input
        type='radio'
        id={id as string}
        name='notActive'
        checked={!active}
        onChange={toggleActive}
      />
      <label htmlFor='notActive'>Not Active</label>
    </div>
  );
};
