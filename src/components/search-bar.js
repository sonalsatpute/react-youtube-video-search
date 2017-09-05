import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = { term: '' };
    }

    render(){
        return (
            <nav className="navbar navbar-default">
                <div className="navbar-form navbar-left" >
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            :: React YouTube Search App ::
                        </a>
                        <input type="text" className="form-control" placeholder="Search"
                            value={this.state.term} 
                            onChange={ event => this.onInputChange(event.target.value) }/>
                    </div>
                </div>
            </nav>
        );
    }

    onInputChange(term){
        this.setState({term: term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;