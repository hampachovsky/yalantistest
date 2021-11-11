import clsx from 'clsx';
import { useAppSelector } from 'hooks/useAppSelector';
//import { useAppSelector } from 'hooks/useAppSelector';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleActiveEmployee } from 'store/reducers/employees/employeesActionCreators';
import { Employee as EmployeeType } from 'store/reducers/employees/types';
import style from './Employee.module.css';

interface PropsType extends EmployeeType {
  activeEmployee: EmployeeType[];
}

export const Employee: React.FC<PropsType> = ({ firstName, lastName, id, dob, activeEmployee }) => {
  const [active, setActive] = useState<boolean>(false);
  const [notActive, setNotActive] = useState<boolean>(true);
  const dispatch = useDispatch();

  useMemo(
    () =>
      activeEmployee.forEach((it) => {
        if (it.id === id) setActive(true);
      }),
    [activeEmployee, id],
  );
  useEffect(() => {
    console.log(activeEmployee);
    // if (activeEmployee.includes({ firstName, lastName, id, dob }))
  }, [activeEmployee]);

  useEffect(() => {
    dispatch(toggleActiveEmployee({ id, firstName, lastName, dob, isActive: active }));
  }, [active, dispatch, dob, firstName, id, lastName]);

  const toggleActive = (e: any) => {
    console.log(e.target.value);
    setActive(!active);
    setNotActive(!notActive);
  };
  return (
    <div>
      <h2
        className={clsx(active ? style.active : style.notActive)}
      >{`${firstName} ${lastName}`}</h2>
      <form>
        <input
          type='radio'
          name='active'
          checked={active}
          value={'active'}
          onChange={toggleActive}
        />
        <label htmlFor='active'>Active</label>

        <input
          type='radio'
          name='notActive'
          value={'notActive'}
          checked={!active}
          onChange={toggleActive}
        />
        <label htmlFor='notActive'>Not Active</label>
      </form>
    </div>
  );
};
