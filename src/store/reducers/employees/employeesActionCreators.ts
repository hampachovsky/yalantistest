import { employeesAPI } from 'api/employeesAPI';
import { AppDispatch } from 'store';
import {
  Employee,
  EmployeesActionEnum,
  ToggleActiveEmployeeAction,
  SetEmployeesAction,
  toggleActiveEmployeePayload,
} from './types';

export const setEmployees = (payload: Employee[]): SetEmployeesAction => ({
  type: EmployeesActionEnum.SET_EMPLOYEES,
  payload,
});

export const toggleActiveEmployee = (
  payload: toggleActiveEmployeePayload,
): ToggleActiveEmployeeAction => ({
  type: EmployeesActionEnum.TOGGLE_ACTIVE_EMPLOYEE,
  payload,
});

export const fetchEmployees = () => async (dispatch: AppDispatch) => {
  const response = await employeesAPI.getEmployees();
  dispatch(setEmployees(response));
};
