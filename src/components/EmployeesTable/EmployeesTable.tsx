'use client';

import { useState } from 'react';

import { columns } from './EmployeesTable.constants';
import { EmployeesTableBody } from './EmployeesTableBody/EmployeesTableBody';
import { EmployeesTableHead } from './EmployeesTableHead/EmployeesTableHead';

import type { Accessor, SortBy } from './EmployeesTable.types';

import type { Employee, EmployeeFilters } from '@/lib/employees';

type EmployeesTableProps = Readonly<{
	employees: Employee[];
	filters: EmployeeFilters | null;
}>;

export const EmployeesTable = ({ employees, filters }: EmployeesTableProps) => {
	const [sortBy, setSortBy] = useState<SortBy>(null);

	const handleSortingChange = (accessor: Accessor) => {
		if (sortBy?.accessor === accessor && sortBy.order === 'desc') {
			setSortBy(null);
		} else {
			const order = !sortBy || sortBy.accessor !== accessor ? 'asc' : 'desc';

			setSortBy({ accessor, order });
		}
	};

	return (
		<table className="border-b border-gray-300">
			<EmployeesTableHead
				columns={columns}
				sortBy={sortBy}
				filters={filters}
				onSortingChange={handleSortingChange}
			/>
			<EmployeesTableBody
				columns={columns}
				employees={employees}
				sortBy={sortBy}
			/>
		</table>
	);
};
