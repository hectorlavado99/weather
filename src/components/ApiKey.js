import React from 'react';
import axios from "axios";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import redux from "../redux"


const apiKey = redux.getState()[0];
var options = [];


const ApyKey = (props) => {

  const [message, setMessage] = useState("");

  //const {register,handleSubmit} = useForm();

  //const onSubmit = data => console.log(data);

return (
  
<Form onChange={(e,event) => searchCity(e,setMessage,event)}>
  <Form.Group controlId="formBasicEmail">
    <Form.Control  type="text" placeholder="Write ApiKey" />
  </Form.Group>
</Form>
);

function searchCity(city,setMessage,event){

  console.log(city.target.value);
  redux.getState()[0]=city.target.value;

}

}




export default ApyKey;


