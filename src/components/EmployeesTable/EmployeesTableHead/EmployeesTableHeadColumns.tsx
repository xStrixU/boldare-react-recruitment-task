import type { Accessor, Column, SortBy } from '../EmployeesTable.types';

type EmployeesTableHeadColumnsProps = Readonly<{
	columns: Column[];
	sortBy: SortBy;
	onSortingChange: (accessor: Accessor) => void;
}>;

export const EmployeesTableHeadColumns = ({
	columns,
	sortBy,
	onSortingChange,
}: EmployeesTableHeadColumnsProps) => (
	<tr>
		{columns.map(({ accessor, label }) => (
			<th
				key={accessor}
				onClick={() => onSortingChange(accessor)}
				className="cursor-pointer select-none border-b border-black px-2 py-4"
			>
				<span>
					{label}
					{sortBy?.accessor === accessor &&
						(sortBy.order === 'asc' ? ' 🔼' : ' 🔽')}
				</span>
			</th>
		))}
	</tr>
);
