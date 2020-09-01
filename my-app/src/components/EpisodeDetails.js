import React from 'react';
import ReactHtmlParser from 'react-html-parser'
import {NavLink} from "react-router-dom";

import '../layout/EpisodeDetails.scss';


export default class EpisodeDetails extends React.Component {

	state = {
		loading: true,
		episode: {
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
			episode: props.episode
		};
	}

	render (props) {
		if (!this.state.episode) {
			return <span>no data for episode found.</span>
		}

		return (
			<div className='episode-details'>
				<span>{ (this.state.episode.name || 'episode title missing.') } </span>

				<NavLink
					to={'/episode'}
				>
					<img src={this.state.episode.image?.medium}
							 alt="episode image missing."/>
				</NavLink>

				<div className='description'>
					{ ReactHtmlParser(this.state.episode.summary || 'episode summary missing.')  }
				</div>
			</div>
		)
	}
}
