import React from "react";

import FeaturedItemHeader from "./FeaturedItemHeader";
import FeaturedItemBody from "./FeaturedItemBody";

import { IProduct, ICartItem } from "../../../models";

export type FeaturedItemProps = {
	featured: IProduct[];
	addToCart: (item: ICartItem) => void;
};

const FeaturedItem = ({ featured, addToCart }: FeaturedItemProps) => {
	if (featured.length === 1) {
		const { name, category, price, currency, dimensions, image, details } =
			featured[0];

		return (
			<section>
				<FeaturedItemHeader
					name={name}
					price={price}
					currency={currency}
					image={image}
					addToCart={addToCart}
				/>
				<img
					src={image.src}
					alt={image.alt}
				/>
				<FeaturedItemBody
					name={name}
					category={category}
					details={details}
					dimensions={dimensions}
				/>
			</section>
		);
	} else {
		return null;
	}
};

export default FeaturedItem;
