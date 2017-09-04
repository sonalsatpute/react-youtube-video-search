import React, {Component} from 'react';
import ReactDOM from 'react-dom'

import YTSearch from 'youtube-api-search';

import SearchBar    from './components/search-bar.js';
import VideoList    from './components/video-list.js';
import VideoDetail  from './components/video-detail';

const API_KEY = 'AIzaSyDFyle4LoFxCUeVK_PwCuepLhJ8shNhVIk';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo : null
        };

        this.videoSearch('reactjs');
        this.videoSearch = this.videoSearch.bind(this);
    }

    videoSearch(term){
        YTSearch({ key: API_KEY, term: term}, videos => {
            this.setState( 
                { 
                    videos : videos,
                    selectedVideo : videos[0]
                 });
        });
    }

    render(){
        return (
            <div>
                <SearchBar onSearchTermChange={this.videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));