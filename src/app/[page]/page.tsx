import { Employees } from '@/components/Employees';

import employees from '@/assets/data/sluzba.json';
import { PAGE_SIZE } from '@/lib/constants';
import {
	filterEmployees,
	paginateEmployees,
	parseEmployeeFiltersQuery,
} from '@/lib/employees';

import type { Params, SearchParams } from '@/types';

type EmployeesPageProps = Readonly<{
	params: Params<'page'>;
	searchParams: SearchParams<'filters'>;
}>;

const EmployeesPage = ({ params, searchParams }: EmployeesPageProps) => {
	const page = Number(params.page);
	const filters = parseEmployeeFiltersQuery(searchParams.filters);

	const filteredEmployees = filters
		? filterEmployees({ employees, filters })
		: employees;
	const paginatedEmployees = paginateEmployees({
		employees: filteredEmployees,
		limit: PAGE_SIZE,
		offset: (page - 1) * PAGE_SIZE,
	});

	return (
		<>
			<h1 className="mb-6 text-4xl font-bold">Boldare Recruitment Task</h1>
			<Employees
				employees={paginatedEmployees}
				total={filteredEmployees.length}
				page={page}
				filters={filters}
			/>
		</>
	);
};

export default EmployeesPage;
