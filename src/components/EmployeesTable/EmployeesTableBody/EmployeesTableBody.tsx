import { sortEmployees } from './EmployeesTableBody.utils';

import type { Column, SortBy } from '../EmployeesTable.types';

import type { Employee } from '@/lib/employees';

type EmployeesTableBodyProps = Readonly<{
	columns: Column[];
	employees: Employee[];
	sortBy: SortBy;
}>;

export const EmployeesTableBody = ({
	columns,
	employees,
	sortBy,
}: EmployeesTableBodyProps) => {
	const sortedEmployees = sortBy ? sortEmployees(employees, sortBy) : employees;

	return (
		<tbody>
			{sortedEmployees.length ? (
				sortedEmployees.map(employee => (
					<tr
						key={employee.id}
						className="odd:bg-gray-100 even:bg-white hover:bg-blue-100"
					>
						{columns.map(({ accessor }) => (
							<td key={accessor} className="px-6 py-4">
								{employee[accessor]}
							</td>
						))}
					</tr>
				))
			) : (
				<tr>
					<td colSpan={columns.length} className="bg-gray-100 p-2 text-center">
						No matching records found
					</td>
				</tr>
			)}
		</tbody>
	);
};
