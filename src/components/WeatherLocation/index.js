import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'
import {CLOUDY, WINDY} from '../../constants/weathers';

const data = {
    temperature: 6,
    weatherState: CLOUDY,
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    temperature: 15,
    weatherState: WINDY,
    humidity: 13,
    wind: '14 m/s',
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Quito',
            data: data,
        };
    }

    handleUpdateClick = () => {
        console.log("actualizado");

        this.setState({
            city: 'Quito!',
            data: data2,
        });
    }
    render() {
        const { city, data } = this.state;

        return (
            <div className="weahterLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;