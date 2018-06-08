import React from 'react';

const Scroll = (props) => {
	return(
		// show child components in scrollable section
		<div style={{ overflowY: 'scroll', border: '1px solid black', height: '500px' }}>
			{props.children}
		</div>
	);
}

export default Scroll;