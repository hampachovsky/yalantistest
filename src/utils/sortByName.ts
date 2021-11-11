import { Employee } from 'store/reducers/employees/types';

export const sortByName = (array: Employee[], type: string): Employee[] => {
  return array.sort((first: Employee, second: Employee) => {
    let name1: string;
    let name2: string;
    if (type === 'lastName') {
      name1 = first.lastName;
      name2 = second.lastName;
    } else {
      name1 = first.firstName;
      name2 = second.firstName;
    }

    if (name1 < name2) return -1;
    if (name1 > name2) return 1;
    return 0;
  });
};
