import React from "react";
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";


function App() {
	return (
		<div>
			<GlobalStyles />
			<Header />
			<Banner />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
