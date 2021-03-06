import React from 'react';

// pure function
// destructuring properties
const Card = ({ id, name, email }) => {
	return(
		<div className="tc bg-light-green dib bd3 pa3 ma2 grow bw2 shadow-5">
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;