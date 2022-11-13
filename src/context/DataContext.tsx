import { createContext, useState, useEffect } from "react";

// todo: create a type for item and replace "any" here
interface IDataContext {
	items: any;
}

export const DataContext = createContext<IDataContext>({
	items: [],
});

export const DataState = ({ children }: { children: React.ReactNode }) => {
	const [items, setItems] = useState();

	 const getData = async () => {
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

	return (
		<DataContext.Provider value={{ items }}>{children}</DataContext.Provider>
	);
};
