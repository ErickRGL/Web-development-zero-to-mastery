import React from 'react';

const Card = ({topicKey, topicURL, cardClick}) => {
	const getURL = (event) => {
		if(topicURL.includes("https://swapi.co/api/")) {
			cardClick(topicURL);
		}
	};
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' onClick={getURL}>
			<div>
				<h2>{topicKey}</h2>
				<p>{topicURL}</p>
			</div>
		</div>
	);
}

export default Card;