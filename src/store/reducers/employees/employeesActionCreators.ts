import { employeesAPI } from './../../../api/employeesAPI';
import { AppDispatch } from 'store';
import { Employees, EmployeesActionEnum, SetEmployeesAction } from './types';

export const setEmployees = (payload: Employees[]): SetEmployeesAction => ({
  type: EmployeesActionEnum.SET_EMPLOYEES,
  payload,
});
export const fetchEmployees = () => async (dispatch: AppDispatch) => {
  const response = await employeesAPI.getEmployees();
  dispatch(setEmployees(response));
};
