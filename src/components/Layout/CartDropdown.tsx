import React from "react";
import { v4 as uuidv4 } from "uuid";

import { ReactComponent as Close } from "../../images/close.svg";

import { ICartItem } from "../../models";

type CartDropdownProps = {
	cartItems: ICartItem[];
	clearCart: () => void;
	closeDropdown: () => void;
};

const CartDropdown = ({
	cartItems,
	clearCart,
	closeDropdown,
}: CartDropdownProps) => {
	console.log(cartItems, "citems");
	return (
		<div>
			<div>
				<Close
					className="cursor-pointer"
					onClick={closeDropdown}
				/>
			</div>
			{cartItems.map((item) => (
				<div key={uuidv4()}>
					<div>
						<p>{item.name}</p>
						<p>
							{item.currency} {item.price}
						</p>
					</div>
					<div>
						<img
							src={item.image.src}
							alt={item.image.alt}
						/>
					</div>
				</div>
			))}
			<button onClick={() => clearCart()}>Clear</button>
		</div>
	);
};

export default CartDropdown;
