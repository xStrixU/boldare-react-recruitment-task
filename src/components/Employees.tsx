import { EmployeesTable } from './EmployeesTable/EmployeesTable';
import { Pagination } from './Pagination/Pagination';

import type { Employee, EmployeeFilters } from '@/lib/employees';

type EmployeesProps = Readonly<{
	employees: Employee[];
	total: number;
	page: number;
	filters: EmployeeFilters | null;
}>;

export const Employees = ({
	employees,
	total,
	page,
	filters,
}: EmployeesProps) => (
	<div className="flex w-full max-w-4xl flex-col gap-2 rounded bg-white p-8 shadow">
		<EmployeesTable employees={employees} filters={filters} />
		<Pagination total={total} page={page} />
	</div>
);
