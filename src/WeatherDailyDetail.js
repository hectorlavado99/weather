
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/weather.css';
import FormCity from './components/FormCity';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Moment from 'react-moment';
import 'moment-timezone';
import redux from "./redux"


class WeatherDailyDetail extends Component {
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
    axios.get(`http://localhost:8080/weather/city/${city[0]}`)
    .then((response) => {
      cityKey=response.data[0].Key;
      axios.get(`http://localhost:8080/weather/daily/${cityKey}`)
      .then((response) => {
        var obj = JSON.parse(response.request.responseText);
        this.setState({ post: obj.DailyForecasts});
        console.log(obj);
      })
  })
  } catch (error) {
    
  }

}

  render() {
    const {post} = this.state
        return (
          <div className="App" id="contenedor">
        <FormCity saveCity={this.saveCity} />
        <Table striped bordered hover>
        <thead>
        <tr>
          <th>Día</th>
          <th>Estado</th>
          <th>Temperatura Mínima</th>
          <th>Temperatura Máxima</th>
        </tr>
        </thead>
        <tbody>
        {
        post.length ?
        post.map(post => 
        <tr>
        <td>{<Moment format='MMM, DD'>{post.Date}</Moment>}</td>
        <td width="40%"><td>{post.Day.IconPhrase}</td><td width="60%"><img alt="foto_tiempo" src={`https://www.accuweather.com/images/weathericons/${post.Day.Icon}.svg`} width="30%" height="30%" ></img></td> </td>
        <td>{post.Temperature.Minimum.Value+"°"+post.Temperature.Minimum.Unit} </td>
        <td>{post.Temperature.Maximum.Value+"°"+post.Temperature.Maximum.Unit} </td>
        </tr>
        ) : null
        }
        </tbody>
        </Table>
          </div>
        );
      }

};

export default WeatherDailyDetail;
