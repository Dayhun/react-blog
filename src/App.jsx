import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepages from "./pages/Homepage";
import PostView from "./pages/PostView";


function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Homepages} />
					<Route path="/postview" component={PostView} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
