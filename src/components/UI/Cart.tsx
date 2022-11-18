import React from "react";

import cart from "../../images/shopping-cart.png";

type CartProps = {
	openDropdown: () => void;
	cartItemsCount: number;
};

const Cart = ({ cartItemsCount, openDropdown }: CartProps) => {
	return (
		<div
			className="relative cursor-pointer"
			onClick={() => openDropdown()}
		>
			<img
				src={cart}
				alt="Cart Icon"
				className="w-12"
			/>
			<div className="bg-black text-white text-center p-0 w-5 absolute left-9 top-11">
				<p style={{margin: 0, fontWeight: 700, lineHeight: 1.3}}>{cartItemsCount}</p>
			</div>
		</div>
	);
};

export default Cart;
