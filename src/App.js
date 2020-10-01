import React from 'react';
import './App.css';

import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useUserState } from './provider/utils/user.util';

// Pages
import Login from './pages/login/login.page';
import Home from './pages/home/home.page';
import Game from './pages/game/game.page';
import LeaderBoard from './pages/leaderboard/leaderboard.page';
import Record from './pages/record/record.page';

// Components
import Spinner from './components/spinner/spinner.component';
import Header from './components/header/header.component';

import history from './utilities/history';

function App() {
	const { state: { currentUser } } = useUserState();

	return (
		<Router history={history}>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/leaderboard" component={LeaderBoard} />
					<Route exact path="/login" render={() => (currentUser ? <Redirect to="/" /> : <Login />)} />
					<Route exact path="/record" component={Record} />
					<Route exact path="/game" component={Game} />
				</Switch>
				<Spinner />
			</div>
		</Router>
	);
}

export default App;
