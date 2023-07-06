import { type Employee, transformDateToISO } from '@/lib/employees';

import type { SortBy } from '../EmployeesTable.types';

export const sortEmployees = (
	employees: Employee[],
	sortBy: NonNullable<SortBy>
) =>
	[...employees].sort((a: Employee, b: Employee) => {
		const aValue =
			sortBy.accessor !== 'dateOfBirth'
				? a[sortBy.accessor].toString()
				: transformDateToISO(a[sortBy.accessor].toString());
		const bValue =
			sortBy.accessor !== 'dateOfBirth'
				? b[sortBy.accessor].toString()
				: transformDateToISO(b[sortBy.accessor].toString());

		return (
			aValue.localeCompare(bValue, 'en', {
				numeric: true,
			}) * (sortBy.order === 'asc' ? 1 : -1)
		);
	});
