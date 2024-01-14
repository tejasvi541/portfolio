import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { ScatterBoxLoader } from "react-awesome-loaders";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Home from "./pages";

function App() {
	const [loading, setloading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setloading(false);
		}, 5200);
	}, []);
	return (
		<div className="App">
			{loading ? (
				<div className="loaderWrapper">
					<span className="loaderText">
						<Typewriter
							words={["Compiling..."]}
							loop
							typeSpeed={70}
							deleteSpeed={50}
							delaySpeed={1000}
						/>
					</span>
				</div>
			) : (
				<Router>
					<Switch>
						<Route path="/" component={Home} exact />
					</Switch>
				</Router>
			)}
		</div>
	);
}

export default App;
