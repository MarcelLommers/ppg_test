import React from 'react';
import ReactHtmlParser from 'react-html-parser'

import '../layout/Show.scss';

export default class Episode extends React.Component {

	state = {
		showId: 6771,
		season: 1,
		episode: 1,
		loading: true,
		episodeData: {
			"id":657308,
			"url":"http://www.tvmaze.com/episodes/657308/the-powerpuff-girls-1x01-escape-from-monster-island",
			"name":"Escape from Monster Island",
			"season":1,
			"number":1,
			"airdate":"2016-04-04",
			"airtime":"18:00",
			"airstamp":"2016-04-04T22:00:00+00:00",
			"runtime":11,
			"image":{
				"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/53/132617.jpg",
				"original":"http://static.tvmaze.com/uploads/images/original_untouched/53/132617.jpg"
			},
			"summary":"<p>Bubbles wins two tickets to a concert and has to pick between Blossom and Buttercup to go with her. Meanwhile, the Mayor's plane goes down over Monster Island and it's up to the girls to rescue him.</p>",
			"_links":{
				"self":{
					"href":"http://api.tvmaze.com/episodes/657308"
				}
			}
		}
	}

	constructor(props) {
		super(props);

		this.state = {
			showId: props.showId,
			season: props.season,
			episode: props.episode
		};
	}

	async componentDidMount() {
		this.fetchEpisode()
	}

	async fetchEpisode () {
		console.log(this.state)
		const url = "http://api.tvmaze.com/shows/" + this.state.showId + '/episodebynumber?season=' + this.state.season + '&number=' + this.state.episode;
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ episodeData: data, loading: false });
		console.log(data);
	}

	render (props) {

		if (this.loading) {
			return <span>Loading...</span>
		}

		if (!this.state.episodeData) {
			return <span>no data found for episode</span>
		}

		return (
			<div className='episode'>
				<h1>{ (this.state.episodeData.name || 'episode title missing.') }</h1>

				<div className='show-details'>
					<img src={this.state.episodeData.image?.medium}
							 alt="episode image missing."/>

					<div className='description'>
						{ ReactHtmlParser(this.state.episodeData.summary || 'episode summary missing.')  }
					</div>
				</div>

			</div>
		)
	}
}
