import React, { Component } from 'react';

class ErrorBoundary extends Component {

	constructor(props){
		super(props);
		this.state = {
			hasError: false
		}
	}

	// another lifecycle hook for catching errors
	componentDidCatch(error, info){
		this.setState({ hasError: true })
	}

	render(){
		if(this.state.hasError) {
			return <h1>Oooops, something went wrong!</h1>
		}
		// show child component
		return this.props.children;
	}
}

export default ErrorBoundary;