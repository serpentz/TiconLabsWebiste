import React, { Fragment } from 'react';
import { Nav, Footer } from './components'
import { Home, Contact, Portfolio } from "./containers"
import { Switch, Route } from "react-router-dom"
// import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<Fragment>
			<Nav />

			<Switch>
				<Route path="/contact" component={Contact} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/" component={Home} />
			</Switch>

			<Footer />

		</Fragment>
	);
}

export default App;
