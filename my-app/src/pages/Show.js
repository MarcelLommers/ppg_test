import React from 'react';
import ReactHtmlParser from 'react-html-parser'

import '../layout/Show.scss';

import EpisodeDetails from "../components/EpisodeDetails";

export default class Show extends React.Component {

	state = {
		showId: 6771,
		loading: true,
		showData: null,
		episodes: [
			{
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
		]
	}

	constructor(props) {
		super(props);

		this.state = {
			showId: props.showId
		};

		this.goToEpisode = this.goToEpisode.bind(this);

		this.setSeasonHandler = props.setSeasonHandler
		this.setEpisodeHandler = props.setEpisodeHandler
	}

	async componentDidMount() {
		this.fetchShowData()
		this.fetchEpisodes()
	}

	async fetchShowData () {
		const url = "http://api.tvmaze.com/shows/" + this.state.showId;
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ showData: data });
		console.log(data);
	}

	async fetchEpisodes () {
		const url = "http://api.tvmaze.com/shows/" + this.state.showId + '/episodes';
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ episodes: data, loading: false });
		console.log(data);
	}

	goToEpisode (episode) {
		this.setSeasonHandler(episode.season)
		this.setEpisodeHandler(episode.number)
	}

	render (props) {

		if (this.loading) {
			return <span>Loading...</span>
		}

		if (!this.state.showData) {
			return <span>no data for showId found</span>
		}

		return (
			<div className='show'>
				<h1>{ this.state.showData?.name }</h1>

				<div className='show-details'>
					<img src={this.state.showData?.image.medium} />

					<div className='description'>
						{ ReactHtmlParser(this.state.showData?.summary) }
					</div>
				</div>

				<div className='url-list'>
					{
						this.state.showData?.url?.length > 0 &&
						<a href={ this.state.showData.url }>
							Check this show on tvMaze!
						</a>
					}
					{
						this.state.showData?.officialSite?.length > 0 &&
						<a href={ this.state.showData.officialSite }>
							Check this show's official site!
						</a>
					}
				</div>

				<div className='episode-list'>
					{
						this.state.episodes?.map(episode => (
							<EpisodeDetails
								key={ episode.id }
								episode={ episode }
								goToEpisode={ this.goToEpisode }
							>
							</EpisodeDetails>
						))
					}
				</div>

			</div>
		)
	}
}
