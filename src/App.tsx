import React, { useContext } from "react";

import Layout from "./components/Layout/Layout";
import Header from "./components/Layout/Header";

import { DataContext } from "./context/DataContext";

function App() {
	// const { items } = useContext(DataContext);

  return (
		<Layout>
			<Header />
      {/* todo: display a featured product */}
      {/* Featured */}
      {/* todo: display a list component with sorting, filtering and pagination dependant on state */}
			{/* MainList */}
		</Layout>
	);
}

export default App;
