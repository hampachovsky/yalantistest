import { useAppSelector } from 'hooks/useAppSelector';
import React from 'react';
import { getActiveEmployee } from 'store/reducers/employees/selectors';
import { Employee } from 'store/reducers/employees/types';
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
  const activeEmployee = Array.from(useAppSelector(getActiveEmployee));
  const activeEmployeeCopy = activeEmployee.slice();
  const employee = useAppSelector((state) => state.employeesReducer.employees);
  const founded: Employee[] = [];
  for (let i = 0; i < activeEmployeeCopy.length; i++) {
    founded.push(...employee.filter((it: any) => it.id === activeEmployeeCopy[i]));
  }

  sortByName(founded, 'lastName');

  const filledMonth: string[] = checkFilled(months, founded, 'checkMonth');

  return (
    <div className={style.employeesBirthday}>
      <h1>Employees birthday</h1>
      <hr />
      {!founded.length ? (
        <h3>Employees List is empty</h3>
      ) : (
        months.map((month) => {
          return (
            <div key={month} className={style.monthWrapper}>
              <h3 className={style.monthHead}>{month}</h3>
              {filledMonth.includes(month) ? (
                founded.map((it: any) => {
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
