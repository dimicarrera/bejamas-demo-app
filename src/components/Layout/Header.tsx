import React from "react";

import CartDropdown from "./CartDropdown";
import Cart from "../UI/Cart";
import logo from "../../images/logo.png";

import { ICartItem } from "../../models";

type HeaderProps = {
	cartItems: ICartItem[];
	displayCart: boolean;
	clearCart: () => void;
	openDropdown: () => void;
	closeDropdown: () => void;
};

const Header = ({ cartItems, openDropdown, displayCart, clearCart, closeDropdown }: HeaderProps) => {
	const cartItemsCount = cartItems.length;
	return (
		<>
			<header className="flex justify-between border-b-gray-200 border-b-4 py-10 relative">
				<img
					src={logo}
					alt="Bejamas Website Logo"
					className="w-40 object-contain"
				/>
				<Cart
					cartItemsCount={cartItemsCount}
					openDropdown={openDropdown}
				/>
				{displayCart && (
					<CartDropdown
						clearCart={clearCart}
						cartItems={cartItems}
						closeDropdown={closeDropdown}
					/>
				)}
			</header>
		</>
	);
};

export default Header;
