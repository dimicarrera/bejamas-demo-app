import React from "react";

import Cart from "../UI/Cart";
import logo from "../../images/logo.png";

import { ICartItem } from "../../models";

type HeaderProps = {
	cartItems: ICartItem[];
	openDropdown: () => void;
};

const Header = ({ cartItems, openDropdown }: HeaderProps) => {
	const cartItemsCount = cartItems.length;
	return (
		<>
			<header className="flex justify-between border-b-gray-300 border-b-4 py-4">
				<img
					src={logo}
					alt="Bejamas Website Logo"
					className="w-40 object-contain"
				/>
				<Cart cartItemsCount={cartItemsCount} openDropdown={openDropdown} />
			</header>
		</>
	);
};

export default Header;
