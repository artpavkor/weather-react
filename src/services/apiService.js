
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const apiUrl = 'https://api.openweathermap.org/data/2.5';

export const defaultParams = {
    lat: 49.98081,
    lon: 36.25272,
    mode: "json",
    units: "metric",
    lang: "ru"
};

export const generateFetchUrl = (params, endPoint = 'weather') => {
    const searchParams = new URLSearchParams({
        appid: apiKey,
        ...defaultParams,
        ...params,
    });
    return `${apiUrl}/${endPoint}?${searchParams}`;
}


export const getCurrentWeather = async (params) => {
    try {
        const url = generateFetchUrl(params)
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log('Error', error);
    }
};

export const getForecastWeather = async (params) => {
    const url = generateFetchUrl(params, 'forecast')
    const response = await fetch(url);
    return await response.json();
}


export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
const GEO_KEY = process.env.REACT_APP_GEO_API_KEY;
export const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': GEO_KEY,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

console.log(geoApiOptions);




