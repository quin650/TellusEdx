import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.querySelector(".root"));

if (process.env.local === "development" && module.hot) {
	module.hot.accept("./App", () => {
		const NextApp = require("./App").default;
		root.render(
			<Provider store={store}>
				<BrowserRouter>
					<NextApp />
				</BrowserRouter>
			</Provider>
		);
	});
} else {
	root.render(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	);
}
