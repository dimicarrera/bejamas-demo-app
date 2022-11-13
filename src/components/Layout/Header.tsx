import React from "react";

import Cart from "../UI/Cart";

import logo from "../../images/logo.png";

const Header = () => {
	return (
		<>
			<header className="flex justify-between border-b-gray-300 border-b-4 py-4">
				<img
					src={logo}
					alt="Bejamas Website Logo"
					className="w-40 object-contain"
				/>
				<Cart />
			</header>
		</>
	);
};

export default Header;
