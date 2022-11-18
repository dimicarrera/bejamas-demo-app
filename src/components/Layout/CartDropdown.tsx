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
	return (
		<div className="border-gray-200 border-4 p-6 max-w-md w-full absolute bg-white right-0 top-32 z-10">
			<Close
				className="cursor-pointer ml-auto"
				onClick={closeDropdown}
			/>
			<div className="flex flex-col">
				{cartItems.map((item) => {
					const formattedCurrency = item.currency.replace("USD", "$");
					return (
						<div
							key={uuidv4()}
							className="py-4 flex"
						>
							<div>
								<p className="font-bold text-xl pb-2">{item.name}</p>
								<p className="text-gray-600 text-3xl">
									{formattedCurrency}
									{item.price}
								</p>
							</div>
							<div className="w-36 h-20 ml-auto">
								<img
									src={item.image.src}
									alt={item.image.alt}
									className="object-cover h-full w-full"
								/>
							</div>
						</div>
					);
				})}
			</div>
			{cartItems.length === 0 && (
				<p className="text-center font-bold text-2xl">No items to display</p>
			)}
			<hr className="border-gray-500 my-6" />
			<button
				className="w-full text-black font-medium uppercase py-3 outline outline-3 outline-black tracking-widest"
				onClick={() => clearCart()}
			>
				Clear
			</button>
		</div>
	);
};

export default CartDropdown;
