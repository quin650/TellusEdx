import React, { createContext, useRef } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.querySelector(".root"));
export const RefContext = createContext(null);

const RefProvider = ({ children }) => {
	const buttonRef_ctx = useRef(null);

	return <RefContext.Provider value={{ buttonRef_ctx }}>{children}</RefContext.Provider>;
};

root.render(
	<HelmetProvider>
		<Provider store={store}>
			<RefProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</RefProvider>
		</Provider>
	</HelmetProvider>,
);
