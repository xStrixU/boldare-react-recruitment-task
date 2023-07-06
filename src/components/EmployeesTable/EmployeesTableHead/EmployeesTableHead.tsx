import { EmployeesTableHeadColumns } from './EmployeesTableHeadColumns';
import { EmployeesTableHeadFilters } from './EmployeesTableHeadFilters';

import type { Accessor, Column, SortBy } from '../EmployeesTable.types';

import type { EmployeeFilters } from '@/lib/employees';

type EmployeesTableHeadProps = Readonly<{
	columns: Column[];
	sortBy: SortBy;
	filters: EmployeeFilters | null;
	onSortingChange: (accessor: Accessor) => void;
}>;

export const EmployeesTableHead = ({
	columns,
	sortBy,
	filters,
	onSortingChange,
}: EmployeesTableHeadProps) => (
	<thead>
		<EmployeesTableHeadColumns
			columns={columns}
			sortBy={sortBy}
			onSortingChange={onSortingChange}
		/>
		<EmployeesTableHeadFilters columns={columns} filters={filters} />
	</thead>
);
