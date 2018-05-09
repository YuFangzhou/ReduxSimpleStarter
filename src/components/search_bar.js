import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.element = null;
        this.state = {
            term: ''
        }
    }

    render = () => {

        this.element = (
            <div className={"search-bar"}>
                <input value={this.state.term}
                       onChange={this.onInputChange}/>
            </div>
        );
        return this.element;
    }
    onInputChange = (event) => {

        this.setState({term: event.target.value});
        this.props.onSearchTermChange(this.state.term);
    }
}

export default SearchBar;