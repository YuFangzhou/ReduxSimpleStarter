import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

const API_KEY = '114fbbaf9f89914aed52034d4ee0912b';
export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar/>
                <WeatherList/>
            </div>
        );
    }
}
