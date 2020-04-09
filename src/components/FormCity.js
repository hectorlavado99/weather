import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import axios from "axios";
import { useState } from 'react';
import redux from "../redux"


const apiKey = redux.getState()[0];
var options = [];


const FormCity = (props) => {

  const [message, setMessage] = useState("");

return (
  
<Typeahead
      onInputChange={(e) => searchCity(e,setMessage)}
      onChange={props.saveCity}    
      id="menu-align-example"
      labelKey="name"
      options={options}
      placeholder="Escribe la ciudad"
    />
);

}


function searchCity(city,setMessage){

  if (city) {
    axios.get(`http://localhost:8080/weather/city/${city}`)
    .then((response) => {
      var ressult = response.data;
       options = ressult.map(ressult =>  `${ressult.LocalizedName}-${ressult.Country.LocalizedName}`);
       setMessage(options);
       console.log(ressult);
    })
  } else return;

}



export default FormCity;


