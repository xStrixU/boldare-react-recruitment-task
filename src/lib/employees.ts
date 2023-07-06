import { z } from 'zod';

import type { QueryParam } from '@/types';

export interface Employee {
	id: number;
	firstName: string;
	lastName: string;
	dateOfBirth: string;
	function: string;
	experience: number;
}

export type EmployeeFilters = z.infer<typeof employeeFiltersSchema>;

const employeeFiltersSchema = z.object({
	id: z.string().optional(),
	firstName: z.string().optional(),
	lastName: z.string().optional(),
	dateOfBirth: z.string().optional(),
	function: z.string().optional(),
	experience: z.string().optional(),
});

export const parseEmployeeFiltersQuery = (query: QueryParam) => {
	if (typeof query !== 'string') {
		return null;
	}

	try {
		return employeeFiltersSchema.parse(JSON.parse(query));
	} catch {
		return null;
	}
};

interface FilterEmployeesOptions {
	employees: Employee[];
	filters: EmployeeFilters;
}

export const filterEmployees = ({
	employees,
	filters,
}: FilterEmployeesOptions) =>
	employees.filter(employee => {
		for (const entries of Object.entries(filters) as [
			keyof EmployeeFilters,
			string
		][]) {
			const [accessor] = entries;
			const value =
				accessor !== 'dateOfBirth'
					? entries[1]
					: entries[1].split('-').reverse().join('.');

			return employee[accessor]
				.toString()
				.toUpperCase()
				.includes(value.toUpperCase());
		}
	});

interface PaginateEmployeesOptions {
	employees: Employee[];
	limit: number;
	offset?: number;
}

export const paginateEmployees = ({
	employees,
	limit,
	offset = 0,
}: PaginateEmployeesOptions) => employees.slice(offset, offset + limit);

export const transformDateToISO = (date: string) => {
	const [fullDate, fullHour] = date.split(' ');
	const [day, month, year] = fullDate.split('.');
	const [hours, minutes] = fullHour.split(':');

	return `${year}-${month}-${day}T${hours}:${minutes}:00`;
};
