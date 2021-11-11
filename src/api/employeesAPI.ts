import { Employee } from './../store/reducers/employees/types';
import axios from 'axios';

export const employeesAPI = {
  getEmployees() {
    return axios
      .get<Employee[]>('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      .then((response) => response.data);
  },
};
