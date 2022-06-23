import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PostView from "./pages/PostView";


function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/postview" exact component={PostView} />
				<Route path="/" exact component={Homepage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
