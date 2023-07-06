import { usePathname, useRouter } from 'next/navigation';

import type { Accessor, Column } from '../EmployeesTable.types';

import type { EmployeeFilters } from '@/lib/employees';

type EmployeesTableHeadFiltersProps = Readonly<{
	columns: Column[];
	filters: EmployeeFilters | null;
}>;

export const EmployeesTableHeadFilters = ({
	columns,
	filters,
}: EmployeesTableHeadFiltersProps) => {
	const pathname = usePathname();
	const router = useRouter();

	const handleFilterChange = (accessor: Accessor, value: string) => {
		const newFilters = { ...filters };

		if (value) {
			newFilters[accessor] = value;
		} else {
			delete newFilters[accessor];
		}

		const areFiltersEmpty = Object.keys(newFilters).length === 0;

		router.push(
			`${pathname}${
				areFiltersEmpty ? '' : `?filters=${JSON.stringify(newFilters)}`
			}`
		);
	};

	return (
		<tr>
			{columns.map(({ accessor, filterType }) => (
				<td key={accessor} className="py-2 text-center">
					<input
						type={filterType}
						defaultValue={filters?.[accessor]}
						placeholder="Search"
						onChange={({ target }) =>
							handleFilterChange(accessor, target.value)
						}
						className="mx-auto w-20 border border-gray-200 bg-gray-50 px-2 text-center text-sm outline-none focus:bg-gray-100"
					/>
				</td>
			))}
		</tr>
	);
};
