import React from 'react';
import {Nav, Hero, Footer} from './components'
import {Home} from "./containers"
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
	{

	// 	<div id="page-loader">
		// 	<i class="fa fa-cog fa-spin grad-text grad-2"></i>
		// </div>

	}
	<header> 
	<Nav />
	<Hero />

	</header>

	<main>
		<Home /> 
	</main>

	<Footer />

</div>
  );
}

export default App;
