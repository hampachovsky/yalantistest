import { EmployeesAction, EmployeesActionEnum, InitialState } from './types';

const initialState: InitialState = {
  employees: null,
  active: null,
};

export const employeesReducer = (state = initialState, action: EmployeesAction): InitialState => {
  switch (action.type) {
    case EmployeesActionEnum.SET_EMPLOYEES: {
      return { ...state, employees: action.payload };
    }
    default:
      return state;
  }
};
