import { useAppSelector } from 'hooks/useAppSelector';
import moment from 'moment';
import React from 'react';
import { checkFilled } from 'utils/checkFilled';
import { formateDate } from 'utils/formateDate';
import { sortByName } from 'utils/sortByName';
import style from './EmployeesBrithday.module.css';

export const EmployeesBrithday = () => {
  const months = [
    'November',
    'December',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
  ];
  const activeEmployee = useAppSelector((state) => state.employeesReducer.active);
  const activeEmployeeCopy = activeEmployee.slice();
  sortByName(activeEmployeeCopy, 'lastName');

  const filledMonth: string[] = checkFilled(months, activeEmployee, 'checkMonth');

  return (
    <div className={style.employeesBirthday}>
      <h1>Employees birthday</h1>
      <hr />
      {!activeEmployee.length ? (
        <h3>Employees List is empty</h3>
      ) : (
        months.map((month) => {
          return (
            <div key={month} className={style.monthWrapper}>
              <h3 className={style.monthHead}>{month}</h3>
              {filledMonth.includes(month) ? (
                activeEmployeeCopy.map((it) => {
                  return formateDate(it.dob, 'toMonth') === month ? (
                    <li key={it.id} className={style.employee}>
                      <strong>
                        {it.firstName} {it.lastName} - {formateDate(it.dob, 'toFull')} year
                      </strong>
                    </li>
                  ) : null;
                })
              ) : (
                <h3>No Employees</h3>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};
