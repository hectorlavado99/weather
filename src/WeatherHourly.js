import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/weather.css';
import FormCity from './components/FormCity';
import ApiKey from './components/ApiKey';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Moment from 'react-moment';
import 'moment-timezone';
import redux from "./redux"

class WeatherHourly extends Component {
  constructor(props){
    super(props)

    this.state = {
        post: []
    }
    
}


  saveCity = (e) => {
    const apiKey = redux.getState()[0];
    var cityKey="";
    try {
    var city = e[0].split("-");
      axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${city[0]}&language=es-es`)
      .then((response) => {
        cityKey=response.data[0].Key;
    axios.get(`https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${cityKey}?apikey=${apiKey}&language=es-es&metric=true`)
      .then((response) => {
        var obj = JSON.parse(response.request.responseText);
        this.setState({ post: obj});
      })
    })
  } catch (error) { 
  }
  }

  render() {
    const {post} = this.state
    return (
      <div className="App" id="contenedor">
        <ApiKey />
<FormCity saveCity={this.saveCity} />

<Table striped bordered hover>
<thead>
<tr>
  <th>Hora</th>
  <th>Temperatura</th>
  <th>Estado</th>
  <th>Probabilidad Lluvia</th>
</tr>
</thead>
<tbody>
{
post.length ?
post.map(post => 
<tr>
<td>{<Moment format='HH:mm'>{post.DateTime}</Moment>}</td>
<td>{post.Temperature.Value+"°"+post.Temperature.Unit} </td>
<td width="40%"><td>{post.IconPhrase}</td><td width="60%"><img alt="foto_tiempo" src={`https://www.accuweather.com/images/weathericons/${post.WeatherIcon}.svg`} width="30%" height="30%" ></img></td> </td>
<td>{post.PrecipitationProbability+"%"} </td>
</tr>
) : null
}
</tbody>
</Table>
      </div>
    );
  }
};


export default WeatherHourly;
