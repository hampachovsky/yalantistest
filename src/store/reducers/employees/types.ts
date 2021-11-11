export interface Employee {
  id: string;
  firstName: string;
  lastName: string | null;
  dob?: string | null;
}

export interface InitialState {
  employees: Employee[];
  active: Employee[];
}

export enum EmployeesActionEnum {
  SET_EMPLOYEES = 'employees/SET_EMPLOYEES',
  TOGGLE_ACTIVE_EMPLOYEE = 'employees/TOGGLE_ACTIVE_EMPLOYEE',
}

export interface toggleActiveEmployeePayload extends Employee {
  isActive: boolean;
}

export interface ToggleActiveEmployeeAction {
  type: EmployeesActionEnum.TOGGLE_ACTIVE_EMPLOYEE;
  payload: toggleActiveEmployeePayload;
}

export interface SetEmployeesAction {
  type: EmployeesActionEnum.SET_EMPLOYEES;
  payload: Employee[];
}

export type EmployeesAction = SetEmployeesAction | ToggleActiveEmployeeAction;
