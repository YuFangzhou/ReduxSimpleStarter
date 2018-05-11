import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
    render = () => {
        return (
            <table className={"table table-hover"}>
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

    renderWeather = (cityData) => {
        const name = cityData.city.name;
        const temps = _.map(cityData.list, weather => weather.main.temp);
        const pressures = _.map(cityData.list, weather => weather.main.pressure);
        const humidities = _.map(cityData.list, weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;


        return (
            <tr key={cityData.city.id}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color={"orange"} units={"K"}/></td>
                <td><Chart data={pressures} color={"green"} units={"hPa"}/></td>
                <td><Chart data={humidities} color={"blue"} units={"%"}/></td>
            </tr>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);