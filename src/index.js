import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyANoFiZdkhlG2V-vCIH7NaB7Bgvtn8ewZc';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null  
    };

      this.videoSearch('random');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      }); //this.setState({ videos: videos }) = ({ videos }) same variable name
    });
  }

  render() {
    const videoSearch =_.debounce((term) => { this.videoSearch(term) }, 300); //call the inner function max every 300 ms

    return (
      <div>
          <SearchBar onSearchTermChange={ videoSearch }/> 
          <VideoDetail video={ this.state.selectedVideo } />
          <VideoList 
            onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) } //define a function - updates AppState and pass the property to VideoList
            videos={ this.state.videos } 
          />
      </div> //pass data from parent App to child VideoList
    );
  };
}

ReactDOM.render(<App />, document.querySelector('.container'));