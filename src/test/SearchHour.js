import axios from 'axios';

function searchHour(id, text) {
    const params = { q: text };
    if (id) {
        params.chatId = id;
    }

    return new Promise((resolve, reject) => {

      var cityKey="307297";
      var apiKey= localStorage.getItem('apiKey');

      axios.get(`https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${cityKey}?apikey=${apiKey}&language=es-es&metric=true`)
      .then((response) => {
        resolve(response.data);
      })
  })
}

export default {
    searchHour
};