import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'

// smart function as it has state
class App extends Component {
	constructor(){
		super();
		this.state = {
			robots : [],
			searchfield: ''
		}
	}

	// component lifecycle (document ready)
	componentDidMount(){
		// make api call using fetch method on window object
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

	// bind event
	onSearchChange = (event) => {
		// set state
		this.setState( { searchfield: event.target.value } );
	}

	render(){
		// deconstruct state to make it cleaner
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return (!robots.length) ? <h1 className='tc f1'>Loading</h1> : 
		(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={ this.onSearchChange }/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={ filteredRobots } />
					</ErrorBoundary>
				</Scroll>
			</div>
		)
	}
}

export default App;