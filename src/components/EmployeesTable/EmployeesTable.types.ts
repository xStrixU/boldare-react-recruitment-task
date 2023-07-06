import type { Employee } from '@/lib/employees';

export type Accessor = keyof Employee;

export type Order = 'asc' | 'desc';

export type SortBy = {
	accessor: Accessor;
	order: Order;
} | null;

export interface Column {
	label: string;
	accessor: Accessor;
	filterType: 'text' | 'number' | 'date';
}
