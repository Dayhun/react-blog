import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PostView from "./pages/PostView";


function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Homepage} />
					<Route path="/postview" component={PostView} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
