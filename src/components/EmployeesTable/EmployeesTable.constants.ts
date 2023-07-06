import type { Column } from './EmployeesTable.types';

export const columns: Column[] = [
	{
		label: 'Id',
		accessor: 'id',
		filterType: 'number',
	},
	{
		label: 'First Name',
		accessor: 'firstName',
		filterType: 'text',
	},
	{
		label: 'Last Name',
		accessor: 'lastName',
		filterType: 'text',
	},
	{
		label: 'Date of birth',
		accessor: 'dateOfBirth',
		filterType: 'date',
	},
	{
		label: 'Function',
		accessor: 'function',
		filterType: 'text',
	},
	{
		label: 'Experience',
		accessor: 'experience',
		filterType: 'number',
	},
];
