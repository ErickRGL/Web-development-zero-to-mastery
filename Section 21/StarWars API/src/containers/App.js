import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component {
	constructor() {
		super();
		this.state = {
			topics: {},
			searchField: '',
			url: 'https://swapi.co/api/'
		}
	}

	componentDidMount() {
		fetch(this.state.url)
		.then(response => response.json())
		.then(topics => {
			this.setState({topics: topics});
		});
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
	}

	onCardClick = (url) => {
		console.log(url);
		this.setState({url: url})
		fetch(url)
			.then(response => response.json())
			.then(topics => {
				try {
					if(typeof topics === 'object'){
						this.setState({topics: topics.results[0]});
					}
				} catch(err) {
					console.log("ERRORRRRRRRRRRRRRRRRRR");
				}
			});
	}

	render() {
		console.log("asdadasd")
		const { topics, searchField } =  this.state;
		const topicKeys = Object.keys(topics);
		const topicURLs = Object.values(topics);
		return !topicKeys.length ?
			<h1>Loading</h1> :
		(
			<div className='tc'>
				<h1 className ='f1'>StarWars</h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<Scroll>
				<CardList topicKeys = {topicKeys}
						  topicURLs = {topicURLs}
						  cardClick = {this.onCardClick}
						  />
				</Scroll>
			</div>
		)
	}
}

export default App;