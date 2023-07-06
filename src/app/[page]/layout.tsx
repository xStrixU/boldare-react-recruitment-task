import type { ReactNode } from 'react';

const EmployeesLayout = ({ children }: { readonly children: ReactNode }) => (
	<main className="flex h-full flex-col items-center justify-center bg-gray-100">
		{children}
	</main>
);

export default EmployeesLayout;
