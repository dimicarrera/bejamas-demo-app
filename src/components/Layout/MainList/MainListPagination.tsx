import React from "react";

type MainListPaginationProps = {
	pagesCount: number;
	currentPage: number;
	handlePrevClick: () => void;
	handleNextClick: () => void;
	handlePageClick: (pageNum: number) => void;
};

const MainListPagination = (props: MainListPaginationProps) => {
	const {
		pagesCount,
		currentPage,
		handlePrevClick,
		handleNextClick,
		handlePageClick,
	} = props;

	const pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	const pageNumbers = pages.map((page) => {
		return (
			<li
				key={page}
				onClick={() => handlePageClick(page)}
				className={`${
					currentPage === page
						? "active cursor-default"
						: "text-slate-500 cursor-pointer"
				}  px-2`}
			>
				{page}
			</li>
		);
	});

	return (
		<nav className="my-8 self-center">
			<ul className="flex">
				<li className="px-2 cursor-pointer text-black">
					<button onClick={() => handlePrevClick()}>L</button>
				</li>
				{pageNumbers}
				<li className="px-2 cursor-pointer text-black">
					<button onClick={() => handleNextClick()}>R</button>
				</li>
			</ul>
		</nav>
	);
};

export default MainListPagination;
