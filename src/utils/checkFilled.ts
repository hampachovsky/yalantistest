import { Employee } from '../store/reducers/employees/types';
import { formateDate } from './formateDate';
export const checkFilled = (arr: string[], employees: Employee[], type: string): string[] => {
  const copyOfArray = arr.slice();
  const filledArr: string[] = [];

  if (type === 'checkMonth') {
    for (let i = 0; i < copyOfArray.length; i++) {
      for (const employe of employees) {
        if (formateDate(employe.dob, 'toMonth') === copyOfArray[i]) {
          filledArr.push(copyOfArray[i]);
        }
      }
    }
  }

  if (type === 'checkLetter') {
    for (let i = 0; i < copyOfArray.length; i++) {
      for (const employe of employees) {
        if (employe.firstName[0].toUpperCase() === copyOfArray[i]) {
          filledArr.push(copyOfArray[i]);
          copyOfArray.splice(i, 1);
        }
      }
    }
  }
  return filledArr;
};
