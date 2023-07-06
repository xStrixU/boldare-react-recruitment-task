import { describe, expect, it } from 'vitest';

import {
	type Employee,
	filterEmployees,
	paginateEmployees,
	transformDateToISO,
} from './employees';

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
	{
		id: 4,
		firstName: 'Walerian',
		lastName: 'Szybki',
		dateOfBirth: '03.01.1986 23:10',
		function: 'kamerdyner',
		experience: 10,
	},
	{
		id: 5,
		firstName: 'Krzysztof',
		lastName: 'Klucznik',
		dateOfBirth: '10.10.1986 18:00',
		function: 'lokaj',
		experience: 3,
	},
];

describe('employees', () => {
	describe('filterEmployees', () => {
		it('should filter employees by firstName and lastName', () => {
			const filteredEmployees = filterEmployees({
				employees,
				filters: { firstName: 'm', lastName: 'a' },
			});

			expect(filteredEmployees.length).toBe(2);
		});

		it('should filter employees by function', () => {
			const filteredEmployees = filterEmployees({
				employees,
				filters: { function: 'lokaj' },
			});

			expect(filteredEmployees.length).toBe(1);
		});

		it('should filter employees by experience', () => {
			const filteredEmployees = filterEmployees({
				employees,
				filters: { experience: '12' },
			});

			expect(filteredEmployees.length).toBe(2);
		});
	});

	describe('paginateEmployees', () => {
		it('should paginate employees', () => {
			const pageSize = 3;

			const firstPage = paginateEmployees({ employees, limit: pageSize });
			const secondPage = paginateEmployees({
				employees,
				limit: pageSize,
				offset: pageSize,
			});

			expect(firstPage.length).toBe(pageSize);
			expect(secondPage.length).toBe(employees.length - pageSize);
		});
	});

	describe('transformDateToISO', () => {
		it(`should transform employee date to ISO format`, () => {
			const employeeDate = '01.07.1990 11:35';
			const isoDate = '1990-07-01T11:35:00';

			console.log(`|${transformDateToISO(employeeDate)}|`);

			expect(transformDateToISO(employeeDate)).toBe(isoDate);
		});
	});
});
