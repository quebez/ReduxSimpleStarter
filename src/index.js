import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyANoFiZdkhlG2V-vCIH7NaB7Bgvtn8ewZc';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'random'}, (videos) => {
      this.setState({ videos }); //this.setState({ videos: videos }) same variable name
    });
  }

  render() {
    return (
      <div>
          <SearchBar />
          <VideoList videos={this.state.videos} /> 
      </div> //pass data from parent App to child VideoList
    )
  };
}

ReactDOM.render(<App />, document.querySelector('.container'));