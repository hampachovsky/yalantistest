import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleActiveEmployee } from 'store/reducers/employees/employeesActionCreators';
import { Employee as EmployeeType } from 'store/reducers/employees/types';
import { Set } from 'typescript';
import style from './Employee.module.css';

interface PropsType extends EmployeeType {
  activeEmployee: Set<string>;
}

export const Employee: React.FC<PropsType> = ({ firstName, lastName, id, dob, activeEmployee }) => {
  const [active, setActive] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    activeEmployee.has(id) && setActive(true);
  }, [activeEmployee, id]);

  useEffect(() => {
    dispatch(toggleActiveEmployee({ id, isActive: active }));
  }, [active, dispatch, dob, firstName, id, lastName]);

  const toggleActive = () => {
    setActive(!active);
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
