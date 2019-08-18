import React, {Fragment} from 'react';
import {Nav, Footer} from './components'
import {Home, Contact} from "./containers"
import {Switch, Route} from "react-router-dom"
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Fragment>
	{

		// 	<Fragment id="page-loader">
		// 	<i class="fa fa-cog fa-spin grad-text grad-2"></i>
		// </div>

	}
	
	<Nav />

		<Switch> 
			<Route path="/contact" component={Contact} /> 
			<Route path="/" component={Home} /> 
		</Switch> 

	<Footer />

</Fragment>
  );
}

export default App;
