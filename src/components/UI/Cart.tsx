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
			<div className="bg-black text-white text-center p-0 w-6 absolute left-9 top-11">
				{cartItemsCount}
			</div>
		</div>
	);
};

export default Cart;
