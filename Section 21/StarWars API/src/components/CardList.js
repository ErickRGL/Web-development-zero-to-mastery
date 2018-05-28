import React from 'react';
import Card from './Card';

const CardList = ({topicKeys, topicURLs, cardClick}) => {
	return (
				<div>
				{
					topicKeys.map((user,i) => {
						return (<Card
						key={i}
						topicKey={topicKeys[i]}
						topicURL={topicURLs[i]}
						cardClick={cardClick}
						/>);
					})
				}
				</div>
	);
}

export default CardList;