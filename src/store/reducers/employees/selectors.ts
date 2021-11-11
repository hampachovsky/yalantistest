import { RootState } from 'store';

export const getActiveEmployee = (state: RootState) => {
  return new Set(state.employeesReducer.active);
};
