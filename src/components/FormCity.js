import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import axios from "axios";
import { useState } from 'react';
import redux from "../redux"



var options = [];


const FormCity = (props) => {

  const [message, setMessage] = useState("");

return (
  
<Typeahead
      onInputChange={(e) => searchCity(e,setMessage)}
      onChange={props.saveCity}    
      id="search-city"
      labelKey="name"
      options={options}
      placeholder="Escribe la ciudad"
    />
);

}


function searchCity(city,setMessage){
  const apiKey = redux.getState()[0];
  if (city) {
    console.log(apiKey);
    axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${city}&language=es-es`)
    .then((response) => {
      var ressult = response.data;
       options = ressult.map(ressult =>  `${ressult.LocalizedName}-${ressult.Country.LocalizedName}`);
       setMessage(options);
       console.log(ressult);
    })
  } else return;

}



export default FormCity;


