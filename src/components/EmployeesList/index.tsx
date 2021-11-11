import { Employee } from 'components/Employee';
import { useAppSelector } from 'hooks/useAppSelector';
import React from 'react';
import { checkFilledLetter } from 'utils/checkFilledLetter';
import { sortByName } from 'utils/sortByName';
import style from './Employees.module.css';

export const EmployeesList: React.FC = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  const employees = useAppSelector((state) => state.employeesReducer.employees);
  const employeesCopy = employees.slice();
  const filledLetters = checkFilledLetter(alphabet, employees);
  sortByName(employeesCopy);

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
                />
              ),
          )
        ) : (
          <h3>NO EMPLOYEES</h3>
        )}
      </div>
    );
  });
  return <div className={style.list}>{alpabetList}</div>;
};
