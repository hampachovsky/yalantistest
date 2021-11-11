import { employeesAPI } from 'api/employeesAPI';
import { AppDispatch } from 'store';
import {
  Employee,
  EmployeesActionEnum,
  SetEmployeesAction,
  SetFetchingAction,
  ToggleActiveEmployeeAction,
  toggleActiveEmployeePayload,
} from './types';

export const setEmployees = (payload: Employee[]): SetEmployeesAction => ({
  type: EmployeesActionEnum.SET_EMPLOYEES,
  payload,
});
export const setFetching = (payload: boolean): SetFetchingAction => ({
  type: EmployeesActionEnum.SET_FETCHING,
  payload,
});

export const toggleActiveEmployee = (
  payload: toggleActiveEmployeePayload,
): ToggleActiveEmployeeAction => {
  return {
    type: EmployeesActionEnum.TOGGLE_ACTIVE_EMPLOYEE,
    payload,
  };
};

export const fetchEmployees = () => async (dispatch: AppDispatch) => {
  dispatch(setFetching(true));
  const response = await employeesAPI.getEmployees();
  await dispatch(setEmployees(response));
  dispatch(setFetching(false));
};
