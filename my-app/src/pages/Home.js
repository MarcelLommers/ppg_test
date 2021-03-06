import React from 'react';

import '../layout/Home.scss';

export default class Home extends React.Component {

	state = {
		showId: null,
		season: null,
		episode: null
	}

	constructor (props) {
		super(props);

		this.state = {
			showId: props.showId,
			season: props.season,
			episode: props.episode
		};
		this.setShowIdHandler = props.setShowIdHandler
		this.setSeasonHandler = props.setSeasonHandler
		this.setEpisodeHandler = props.setEpisodeHandler

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange (event) {
		this.setState({
			[event.target.name]: event.target.value
		})
		console.log(event.target.name + ':' + event.target.value);
	}

	render (props) {
		return (
			<div className='home'>
				<h1>Home page</h1>

				<div class='input-block'>
					<label>
						ShowId:
					</label>

					<input type="text"
								 name="showId"
								 value={this.state.showId}
								 onChange={this.handleChange}
					/>
					<button onClick={() => this.setShowIdHandler(this.state.showId)}>
						Submit
					</button>
				</div>

				<div className='input-block'>
					<label>
						Season:
					</label>

					<input type="text"
								 name="season"
								 value={this.state.season}
								 onChange={this.handleChange}
					/>
					<button onClick={() => this.setSeasonHandler(this.state.season)}>
						Submit
					</button>
				</div>

				<div className='input-block'>
					<label>
						Episode:
					</label>

					<input type="text"
								 name="episode"
								 value={this.state.episode}
								 onChange={this.handleChange}
					/>
					<button onClick={() => this.setEpisodeHandler(this.state.episode)}>
						Submit
					</button>
				</div>

			</div>
		)
	}
}
