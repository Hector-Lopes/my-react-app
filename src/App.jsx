import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home";
const App = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Home />}></Route>
		</Routes>
	);
};

export default App;
