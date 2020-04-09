import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import SearchCity from './SearchCity';
import SearchDay from './SearchDay';
import SearchHour from './SearchHour';

describe('FormCity request', () => {
    it('returns data when searchCity is called', done => {
        var mock = new MockAdapter(axios);
        const cities = [{ id: 0, name: "Barranquilla-Colombia" },{ id: 1, name: "Barcelona-España" },
        { id: 2, name: "Barquisimeto-Venezuela" },{ id: 3, name: "Bareilly-India" },
        { id: 4, name: "Bari-Italia" },{ id: 5, name: "Barnaúl-Rusia" },
        { id: 6, name: "Barcelona-Venezuela" },{ id: 7, name: "Barasat-India" },
        { id: 8, name: "Bardhaman-India" },{ id: 9, name: "Barisal-Bangladesh" }]
        var city ="bar";
        var apiKey =localStorage.getItem('apiKey');
        mock.onGet(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${city}&language=es-es`).reply(200,cities);
        SearchCity.searchCity(0, 'any').then(response => {
            expect(response).toEqual(cities);
            done();
        });

    });
});

describe('SearchDay request', () => {
    it('returns data when searchDay is called', done => {
        var mock = new MockAdapter(axios);

        const weatherDay = [{ id: 0, Date: "2020-04-01T07:00:00+02:00" , EpochDate: 1585717200,
        MaxTemperature:13, MinTemperature:9.8,Icon:12,IconPhrase:"Cubascos",HasPrecipitation:true,
        PrecipitationType:"Rain",PrecipitationIntensity:"Moderate",
        MobileLink:"https://m.accuweather.com/es/es/barcelona/307297/daily-weather-forecast/307297?day=1&unit=c",
        Link:"https://www.accuweather.com/es/es/barcelona/307297/daily-weather-forecast/307297?day=1&unit=c"},   

        { id: 1, Date: "2020-04-02T07:00:00+02:00" , EpochDate: 1585803600,
        MaxTemperature:17, MinTemperature:6.2,Icon:3,IconPhrase:"Mayormente nublado",HasPrecipitation:false,
        MobileLink:"https://m.accuweather.com/es/es/barcelona/307297/daily-weather-forecast/307297?day=2&unit=c",
        Link:"https://www.accuweather.com/es/es/barcelona/307297/daily-weather-forecast/307297?day=2&unit=c"},

        { id: 2, Date: "2020-04-03T07:00:00+02:00" , EpochDate: 1585890000,
        MaxTemperature:16.1, MinTemperature:8.1,Icon:12,IconPhrase:"Parcialmente soleado",HasPrecipitation:false,
        MobileLink:"https://m.accuweather.com/es/es/barcelona/307297/daily-weather-forecast/307297?day=3&unit=c",
        Link:"https://www.accuweather.com/es/es/barcelona/307297/daily-weather-forecast/307297?day=3&unit=c"},

        { id: 3, Date: "2020-04-04T07:00:00+02:00" , EpochDate: 1585976400,
        MaxTemperature:16.6, MinTemperature:6.7,Icon:3,IconPhrase:"Despejado",HasPrecipitation:false,
        MobileLink:"https://m.accuweather.com/es/es/barcelona/307297/daily-weather-forecast/307297?day=4&unit=c",
        Link:"https://www.accuweather.com/es/es/barcelona/307297/daily-weather-forecast/307297?day=4&unit=c"}
    ]

        var cityKey ="307297";
        var apiKey =localStorage.getItem('apiKey');
        mock.onGet(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}&language=es-es&metric=true`).reply(200, weatherDay);
        SearchDay.searchDay(0, 'any').then(response => {
            expect(response).toEqual(weatherDay);
            done();
        });

    });
});

describe('SearchHour request', () => {
    it('returns data when searchHour is called', done => {
        var mock = new MockAdapter(axios);

        const weatherHour = [{ id: 0, DateTime: "2020-04-01T14:00:00+02:00" , EpochDateTime: 1585742400,
        WeatherIcon: 12,IconPhrase: "Chubascos",HasPrecipitation: "true",PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate",IsDaylight: true,Temperature: 12.8,PrecipitationProbability: 64,
        MobileLink: "https://m.accuweather.com/es/es/barcelona/307297/hourly-weather-forecast/307297?day=1&hbhhour=14&unit=c",
        Link:"https://www.accuweather.com/es/es/barcelona/307297/hourly-weather-forecast/307297?day=1&hbhhour=14&unit=c"}   

        ,{ id: 1, DateTime: "2020-04-01T15:00:00+02:00" , EpochDateTime: 1585742400,
        WeatherIcon: 12,IconPhrase: "Chubascos",HasPrecipitation: "true",PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate",IsDaylight: true,Temperature: 12.4,PrecipitationProbability: 69,
        MobileLink: "https://m.accuweather.com/es/es/barcelona/307297/hourly-weather-forecast/307297?day=1&hbhhour=15&unit=c",
        Link:"https://www.accuweather.com/es/es/barcelona/307297/hourly-weather-forecast/307297?day=1&hbhhour=15&unit=c"}
    
        ,{ id: 2, DateTime: "2020-04-01T16:00:00+02:00" , EpochDateTime: 1585742400,
        WeatherIcon: 7,IconPhrase: "Nublado",HasPrecipitation: "false",IsDaylight: true,
        Temperature: 12.1,PrecipitationProbability: 49,
        MobileLink: "https://m.accuweather.com/es/es/barcelona/307297/hourly-weather-forecast/307297?day=1&hbhhour=16&unit=c",
        Link:"https://www.accuweather.com/es/es/barcelona/307297/hourly-weather-forecast/307297?day=1&hbhhour=16&unit=c"}
    
        ,{ id: 3, DateTime: "2020-04-01T17:00:00+02:00" , EpochDateTime: 1585742400,
        WeatherIcon: 7,IconPhrase: "Nublado",HasPrecipitation: "false",
        IsDaylight: true,Temperature: 11.9,PrecipitationProbability: 49,
        MobileLink: "https://m.accuweather.com/es/es/barcelona/307297/hourly-weather-forecast/307297?day=1&hbhhour=17&unit=c",
        Link:"https://www.accuweather.com/es/es/barcelona/307297/hourly-weather-forecast/307297?day=1&hbhhour=17&unit=c"}]

        var cityKey ="307297";
        var apiKey =localStorage.getItem('apiKey');
        mock.onGet(`https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${cityKey}?apikey=${apiKey}&language=es-es&metric=true`).reply(200, weatherHour);
        SearchHour.searchHour(0, 'any').then(response => {
            expect(response).toEqual(weatherHour);
            done();
        });

    });
});
