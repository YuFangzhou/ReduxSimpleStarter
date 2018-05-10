import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';

const API_KEY = '114fbbaf9f89914aed52034d4ee0912b';
export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar/>
            </div>
        );
    }
}
