import axios from 'axios';

export const employeesAPI = {
  getEmployees() {
    return axios
      .get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      .then((response) => response.data);
  },
};
