import React from "react";

import { IProduct } from "../../../models";
import FeaturedItemHeader from "./FeaturedItemHeader";
import FeaturedItemBody from "./FeaturedItemBody";

export type FeaturedItemProps = {
	featured: IProduct[];
};

const FeaturedItem = ({ featured }: FeaturedItemProps) => {
	if (featured.length === 1) {
		const { name, category, price, currency, dimensions, image, details } =
			featured[0];

		return (
			<section>
				<FeaturedItemHeader name={name} price={price} currency={currency} />
				<img src={image.src} alt={image.alt} />
				<FeaturedItemBody name={name} category={category} details={details} dimensions={dimensions} />
			</section>
		);
	} else {
		return null;
	}
};

export default FeaturedItem;
