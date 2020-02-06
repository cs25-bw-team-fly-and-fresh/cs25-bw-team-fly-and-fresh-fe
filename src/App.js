import React from 'react';
import { Route, Switch } from 'react-router-dom';
import World from './features/world';
import Register from './Register&Login/Register';
import Login from './Register&Login/Login';
function App() {
	return (
		<>
			<Switch>
				<Route exact path='/' />
				<Route path='/game' component={World} />
				<Route path='/register' component={Register} />
				<Route path='/login' component={Login} />
			</Switch>
		</>
	);
}

export default App;
