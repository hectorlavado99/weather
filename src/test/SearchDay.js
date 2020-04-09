import axios from 'axios';

function searchDay(id, text) {
    const params = { q: text };
    if (id) {
        params.chatId = id;
    }

    return new Promise((resolve, reject) => {

      var cityKey="307297";
      var apiKey=localStorage.getItem('apiKey');

      axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}&language=es-es&metric=true`)
      .then((response) => {
        resolve(response.data);
      })
  })
}

export default {
    searchDay
};