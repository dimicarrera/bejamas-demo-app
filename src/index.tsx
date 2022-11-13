import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { DataState } from "./context/DataContext";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<DataState>
			<App />
		</DataState>
	</React.StrictMode>
);
