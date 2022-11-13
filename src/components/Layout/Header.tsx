import React from "react";

import Cart from "../UI/Cart";

import logo from "../../images/logo.png";

const Header = () => {
	return (
		<>
			<header className="flex justify-between">
				<img
					src={logo}
					alt="Bejamas Website Logo"
					className="w-40 object-contain"
				/>
				<Cart />
			</header>
			<hr
				style={{
					width: 4,
					color: "#e4e4e4",
				}}
			/>
		</>
	);
};

export default Header;
