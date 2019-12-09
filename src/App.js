import React, { Fragment } from 'react';
import { Nav, Footer } from './components'
import { Home, Contact, Portfolio, About, Single } from "./containers"
import { Switch, Route } from "react-router-dom"

import './App.css';

function App() {
	return (
		<Fragment>
			<Nav />

			<Switch>
				<Route path="/contact" component={Contact} />
				<Route path="/portfolio/:profile_id" render={(props) => <Single props={props} /> } />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/about" component={About} />
				<Route path="/" component={Home} />
			</Switch>

			<Footer />

		</Fragment>
	);
}

export default App;
