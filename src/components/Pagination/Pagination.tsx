import { PaginationActionLink } from './PaginationActionLink';

import { PAGE_SIZE } from '@/lib/constants';

type PaginationProps = Readonly<{
	total: number;
	page: number;
}>;

export const Pagination = ({ total, page }: PaginationProps) => {
	const lastPage = Math.ceil(total / PAGE_SIZE);
	const currentPage = Math.min(page, lastPage);
	const previousPage = Math.max(1, page - 1);
	const nextPage = Math.min(lastPage, page + 1);
	const entryTo = Math.min(page * PAGE_SIZE, total);
	const entryFrom = Math.min((page - 1) * PAGE_SIZE + 1, entryTo);

	return (
		<div className="flex items-center gap-2">
			<PaginationActionLink href="/1" aria-label="First page">
				{'<<'}
			</PaginationActionLink>
			<PaginationActionLink
				href={`/${previousPage}`}
				aria-label="Previous page"
			>
				{'<'}
			</PaginationActionLink>
			<PaginationActionLink href={`/${nextPage}`} aria-label="Next page">
				{'>'}
			</PaginationActionLink>
			<PaginationActionLink href={`/${lastPage}`} aria-label="Last page">
				{'>>'}
			</PaginationActionLink>
			<span>
				Page{' '}
				<span className="font-bold">
					{currentPage} of {lastPage}
				</span>
			</span>
			<span className="ml-auto">
				Showing {entryFrom} to {entryTo} of {total} entries
			</span>
		</div>
	);
};
