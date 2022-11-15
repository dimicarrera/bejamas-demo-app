import React from "react";

type FeaturedItemHeaderProps = {
	name: string,
	price: number,
	currency: string
}

const FeaturedItemHeader = ({ name, price, currency }: FeaturedItemHeaderProps) => {
	return (
		<header className="flex justify-between">
			<h3>{name}</h3>
      <button>Add to cart</button>
		</header>
	);
};

export default FeaturedItemHeader;
