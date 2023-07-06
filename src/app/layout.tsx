import { Inter } from 'next/font/google';

import type { ReactNode } from 'react';

import '@/assets/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Boldare Recruitment Task',
	description: 'Recruitment task for the React Developer at Boldare company',
};

const RootLayout = ({ children }: { readonly children: ReactNode }) => (
	<html lang="en">
		<body className={inter.className}>{children}</body>
	</html>
);

export default RootLayout;
