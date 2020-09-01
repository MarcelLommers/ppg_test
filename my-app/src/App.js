import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.scss';

import { Nav } from './layout'

import { Home, Show, Episode } from './pages'

export default class App extends React.Component {

  state = {
    showId: 6771,
    season: 1,
    episode: 1
  }

  constructor(props) {
    super(props);

    this.state = {
      showId: 6771,
      season: 1,
      episode: 1
    };

    this.setShowId = this.setShowId.bind(this);
    this.setSeason = this.setSeason.bind(this);
    this.setEpisode = this.setEpisode.bind(this);
  }

  setShowId(newShowId) {
    this.setState({
      showId: newShowId,
      season: 1,
      episode: 1
    });
    console.log(newShowId);
    alert('ShowId was set to: ' + newShowId);
  }

  setSeason(newSeason) {
    this.setState({
      season: newSeason
    });
    console.log(newSeason);
  }

  setEpisode(newEpisode) {
    this.setState({
      episode: newEpisode
    });
    console.log(newEpisode);
  }

  render () {
    return (
      <Router>
        <div className='app'>

          <Nav className='nav'/>

          <div className='content'>
            <Switch>
              <Route path="/Show">
                <Show
                  showId={ this.state.showId }
                  setEpisodeHandler={ this.setEpisode }
                />
              </Route>
              <Route path="/Episode">
                <Episode
                  showId={ this.state.showId }
                  season={ this.state.season}
                  episode={ this.state.episode}
                />
              </Route>
              <Route path="/">
                <Home
                  showId={ this.state.showId }
                  season={ this.state.season}
                  episode={ this.state.episode}
                  setShowIdHandler={ this.setShowId }
                  setSeasonHandler={ this.setSeason }
                  setEpisodeHandler={ this.setEpisode }
                />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
