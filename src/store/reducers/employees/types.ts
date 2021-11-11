export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
}

export interface InitialState {
  employees: Employee[];
  active: string[];
  isFetching: boolean;
}

export enum EmployeesActionEnum {
  SET_EMPLOYEES = 'employees/SET_EMPLOYEES',
  TOGGLE_ACTIVE_EMPLOYEE = 'employees/TOGGLE_ACTIVE_EMPLOYEE',
  SET_FETCHING = 'employees/SET_FETCHING',
}

export interface toggleActiveEmployeePayload {
  isActive: boolean;
  id: string;
}

export interface ToggleActiveEmployeeAction {
  type: EmployeesActionEnum.TOGGLE_ACTIVE_EMPLOYEE;
  payload: toggleActiveEmployeePayload;
}

export interface SetEmployeesAction {
  type: EmployeesActionEnum.SET_EMPLOYEES;
  payload: Employee[];
}
export interface SetFetchingAction {
  type: EmployeesActionEnum.SET_FETCHING;
  payload: boolean;
}

export type EmployeesAction = SetEmployeesAction | ToggleActiveEmployeeAction | SetFetchingAction;
