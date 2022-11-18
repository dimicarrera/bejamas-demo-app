import React from "react";

import { ReactComponent as ArrowLeft } from "../../../images/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../../images/arrowRight.svg";

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
						: "text-gray-400 cursor-pointer"
				} text-2xl px-2`}
			>
				{page}
			</li>
		);
	});

	console.log(currentPage, pagesCount, "c p");

	return (
		<nav className="my-8 self-center">
			<ul className="flex items-center">
				<li className="px-2 cursor-pointer text-black">
					{currentPage !== 1 && (
						<button onClick={() => handlePrevClick()}>
							<ArrowLeft />
						</button>
					)}
				</li>
				{pageNumbers}
				<li className="px-2 cursor-pointer text-black">
					{pagesCount > 1 && currentPage !== pagesCount && (
						<button onClick={() => handleNextClick()}>
							<ArrowRight />
						</button>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default MainListPagination;
