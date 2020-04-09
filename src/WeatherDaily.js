
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/weather.css';
import FormCity from './components/FormCity';
import axios from "axios";
import redux from "./redux"


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
        axios.get(`http://localhost:8080/weather/city/${city[0]}`)
        .then((response) => {
          cityKey=response.data[0].Key;
          axios.get(`http://localhost:8080/weather/daily/${cityKey}`)
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
          <FormCity saveCity={this.saveCity} />
          <div id="web">
          <iframe title="weather" src={post.Link}></iframe>  
          </div>
            </div>
        );
      }
  
};

export default WeatherDaily;
