import { Employee } from 'components/Employee';
import { useAppSelector } from 'hooks/useAppSelector';
import React from 'react';
import { getActiveEmployee } from 'store/reducers/employees/selectors';
import { checkFilled } from 'utils/checkFilled';
import { sortByName } from 'utils/sortByName';
import style from './Employees.module.css';

export const EmployeesList: React.FC = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  const employees = useAppSelector((state) => state.employeesReducer.employees);
  const activeEmployee = useAppSelector(getActiveEmployee);
  const employeesCopy = employees.slice();
  sortByName(employeesCopy, 'firstName');
  const filledLetters = checkFilled(alphabet, employees, 'checkLetter');

  const alpabetList = alphabet.map((letter: string) => {
    return (
      <div key={letter} className={style.letterWrapper}>
        <h2>{letter}</h2>
        {filledLetters.includes(letter) ? (
          employeesCopy.map(
            (it) =>
              it.firstName[0].toUpperCase() === letter && (
                <Employee
                  key={it.id}
                  firstName={it.firstName}
                  lastName={it.lastName}
                  id={it.id}
                  dob={it.dob}
                  activeEmployee={activeEmployee}
                />
              ),
          )
        ) : (
          <h3>NO EMPLOYEES</h3>
        )}
      </div>
    );
  });
  return (
    <div className={style.employeesWrapper}>
      <div>
        <h1>Employees</h1>
      </div>
      <div className={style.list}>{alpabetList}</div>
    </div>
  );
};
