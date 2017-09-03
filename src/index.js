import React, {Component} from 'react';
import ReactDOM from 'react-dom'

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar.js';
import VideoList from './components/video-list.js';

const API_KEY = 'AIzaSyDFyle4LoFxCUeVK_PwCuepLhJ8shNhVIk';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            videos: []
        };

        this.videoSearch('reactjs');
    }

    videoSearch(term){
        YTSearch({ key: API_KEY, term: term}, videos => {
            this.setState( { videos: videos });
        });
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />

            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));