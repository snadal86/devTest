import React, { useEffect } from "react";
import setAuthToken from "./utils/setAuthToken"

import './App.css';
import Navigation from './components/layout/Navigation.js';
import 'bootstrap/dist/css/bootstrap.min.css';

//redux
import { Provider } from "react-redux";
import store from "./store";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}
const App = () => {
	useEffect(() => {
		// store.dispatch(loadUser());
		// console.log(process.env)
	}, []);

	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
};

export default App;
