import { Employee } from './../store/reducers/employees/types';
export const checkFilledLetter = (letterArr: string[], employees: Employee[]): string[] => {
  const copyOfArray = letterArr.slice();
  const filledLetters: string[] = [];
  for (let i = 0; i < copyOfArray.length; i++) {
    for (const employe of employees) {
      if (employe.firstName[0].toUpperCase() === copyOfArray[i]) {
        filledLetters.push(copyOfArray[i]);
        copyOfArray.splice(i, 1);
      }
    }
  }
  return filledLetters;
};
