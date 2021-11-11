import { EmployeesAction, EmployeesActionEnum, InitialState } from './types';

const initialState: InitialState = {
  employees: [],
  active: JSON.parse(window.localStorage.getItem('active') || '[]') ?? [],
  isFetching: false,
};
export const employeesReducer = (state = initialState, action: EmployeesAction): InitialState => {
  switch (action.type) {
    case EmployeesActionEnum.SET_EMPLOYEES: {
      return { ...state, employees: action.payload };
    }
    case EmployeesActionEnum.SET_FETCHING: {
      return { ...state, isFetching: action.payload };
    }
    case EmployeesActionEnum.TOGGLE_ACTIVE_EMPLOYEE: {
      return {
        ...state,
        active: action.payload.isActive
          ? [...state.active, action.payload.id]
          : state.active.filter((it) => it !== action.payload.id),
      };
    }

    default:
      return state;
  }
};
