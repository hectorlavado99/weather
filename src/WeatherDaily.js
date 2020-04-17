
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/weather.css';
import FormCity from './components/FormCity';
import axios from "axios";
import redux from "./redux";
import ApiKey from './components/ApiKey';


class WeatherDaily extends Component {
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
          axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${apiKey}&language=es-es&metric=true`)
          .then((response) => {
            var obj = JSON.parse(response.request.responseText);
            this.setState({ post: obj.Headline});
            console.log(obj.Headline);
          })
      })
    } catch (error) {
        
    }
    }

  render() {
    const {post} = this.state
        return(
          <div className="App" id="contenedor">
            <ApiKey />
          <FormCity saveCity={this.saveCity} />
          <div id="web">
          <iframe title="weather" src={post.Link}></iframe>  
          </div>
            </div>
        );
      }
  
};

export default WeatherDaily;
