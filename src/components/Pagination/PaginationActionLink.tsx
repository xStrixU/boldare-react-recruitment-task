'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import type { ReactNode } from 'react';

type PaginationActionLinkProps = Readonly<{
	href: string;
	'aria-label': string;
	children: ReactNode;
}>;

export const PaginationActionLink = ({
	href,
	...props
}: PaginationActionLinkProps) => {
	const searchParams = useSearchParams();

	return (
		<Link
			href={{
				pathname: href,
				query: searchParams.toString(),
			}}
			className="flex h-8 w-8 items-center justify-center border border-gray-200"
			{...props}
		/>
	);
};
