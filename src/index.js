import React, {Component} from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search-bar.js';

class App extends Component{

    render(){
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));