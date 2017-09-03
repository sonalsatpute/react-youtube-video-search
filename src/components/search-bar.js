import React, {Component} from 'react';

class SearchBar extends Component{

    render(){
        return (
            <div className="search-box">
                <input placeholder="Search" 
                    onChange={event => console.log (event.target.value)}/>
            </div>
        );
    }
}

export default SearchBar;