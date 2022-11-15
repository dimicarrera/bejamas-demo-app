import { useState, useEffect } from "react";
import { IProduct } from "../models";

const useProducts = () => {
	const [items, setItems] = useState<IProduct[]>([]);

	const getData = async () => {
		// todo: add loader
		await fetch("./MockData.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				setItems(data.products);
			});
	};

	useEffect(() => {
		getData();
	}, []);

	return { items };
};

export default useProducts;
