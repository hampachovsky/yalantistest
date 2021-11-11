import { Employee } from 'store/reducers/employees/types';

export const sortByName = (array: Employee[]): Employee[] => {
  return array.sort((first: any, second: any) => {
    let name1 = first.firstName;
    let name2 = second.firstName;
    if (name1 < name2) return -1;
    if (name1 > name2) return 1;
    return 0;
  });
};
