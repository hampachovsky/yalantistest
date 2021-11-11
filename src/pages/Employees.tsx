import { EmployeesBrithday } from 'components/EmployeesBrithday';
import { EmployeesList } from 'components/EmployeesList';
import React from 'react';

export const Employees: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <EmployeesList />
      <EmployeesBrithday />
    </div>
  );
};
