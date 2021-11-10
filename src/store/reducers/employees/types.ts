export interface Employees {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  dob: string | null;
}

export interface InitialState {
  employees: Employees[] | null;
  active: number[] | null;
}

export enum EmployeesActionEnum {
  SET_EMPLOYEES = 'employees/SET_EMPLOYEES',
}

export interface SetEmployeesAction {
  type: EmployeesActionEnum.SET_EMPLOYEES;
  payload: Employees[];
}

export type EmployeesAction = SetEmployeesAction;
