import React, {Component} from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search-bar.js';
import VideoList from './components/video-list.js';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            videos: [1,2,3,4,5]
        };
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