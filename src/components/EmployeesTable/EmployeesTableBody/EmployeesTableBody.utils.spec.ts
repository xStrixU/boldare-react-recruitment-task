import { describe, expect, it } from 'vitest';

import { sortEmployees } from './EmployeesTableBody.utils';

import type { Employee } from '@/lib/employees';

const employees: Employee[] = [
	{
		id: 1,
		firstName: 'Dobromir',
		lastName: 'Sprytny',
		dateOfBirth: '01.07.1990 11:35',
		function: 'kamerdyner',
		experience: 4,
	},
	{
		id: 2,
		firstName: 'Helga',
		lastName: 'Uczynna',
		dateOfBirth: '04.02.1976 14:37',
		function: 'pokojówka',
		experience: 12,
	},
	{
		id: 3,
		firstName: 'Marianna',
		lastName: 'Prostota',
		dateOfBirth: '28.10.1976 02:15',
		function: 'pokojówka',
		experience: 12,
	},
];

describe('EmployeesTableBody utils', () => {
	it('should sort employees by id', () => {
		const sortedEmployeesAsc = sortEmployees(employees, {
			accessor: 'id',
			order: 'asc',
		});
		const sortedEmployeesDesc = sortEmployees(employees, {
			accessor: 'id',
			order: 'desc',
		});

		expect(sortedEmployeesAsc[0].id).toBe(1);
		expect(sortedEmployeesAsc[1].id).toBe(2);
		expect(sortedEmployeesAsc[2].id).toBe(3);

		expect(sortedEmployeesDesc[0].id).toBe(3);
		expect(sortedEmployeesDesc[1].id).toBe(2);
		expect(sortedEmployeesDesc[2].id).toBe(1);
	});

	it('should sort employees by firstName', () => {
		const sortedEmployeesAsc = sortEmployees(employees, {
			accessor: 'firstName',
			order: 'asc',
		});
		const sortedEmployeesDesc = sortEmployees(employees, {
			accessor: 'firstName',
			order: 'desc',
		});

		expect(sortedEmployeesAsc[0].firstName).toBe('Dobromir');
		expect(sortedEmployeesAsc[1].firstName).toBe('Helga');
		expect(sortedEmployeesAsc[2].firstName).toBe('Marianna');

		expect(sortedEmployeesDesc[0].firstName).toBe('Marianna');
		expect(sortedEmployeesDesc[1].firstName).toBe('Helga');
		expect(sortedEmployeesDesc[2].firstName).toBe('Dobromir');
	});

	it('should sort employees by dateOfBirth', () => {
		const sortedEmployeesAsc = sortEmployees(employees, {
			accessor: 'dateOfBirth',
			order: 'asc',
		});
		const sortedEmployeesDesc = sortEmployees(employees, {
			accessor: 'dateOfBirth',
			order: 'desc',
		});

		expect(sortedEmployeesAsc[0].id).toBe(2);
		expect(sortedEmployeesAsc[1].id).toBe(3);
		expect(sortedEmployeesAsc[2].id).toBe(1);

		expect(sortedEmployeesDesc[0].id).toBe(1);
		expect(sortedEmployeesDesc[1].id).toBe(3);
		expect(sortedEmployeesDesc[2].id).toBe(2);
	});

	it('should sort employees by experience', () => {
		const sortedEmployeesAsc = sortEmployees(employees, {
			accessor: 'experience',
			order: 'asc',
		});
		const sortedEmployeesDesc = sortEmployees(employees, {
			accessor: 'experience',
			order: 'desc',
		});

		expect(sortedEmployeesAsc[0].id).toBe(1);
		expect(sortedEmployeesAsc[1].id).toBe(2);
		expect(sortedEmployeesAsc[2].id).toBe(3);

		expect(sortedEmployeesDesc[0].id).toBe(2);
		expect(sortedEmployeesDesc[1].id).toBe(3);
		expect(sortedEmployeesDesc[2].id).toBe(1);
	});
});
