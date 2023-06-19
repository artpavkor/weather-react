
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
    const url = generateFetchUrl(params)
    const response = await fetch(url);
    if (!response.ok) {
        const errorMessage = `Current Weather Error ${response.status} : ${response.statusText}`;
        throw errorMessage;
    }
    return await response.json();
};

export const getForecastWeather = async (params) => {
    const url = generateFetchUrl(params, 'forecast')
    const response = await fetch(url);
    if (!response.ok) {
        const errorMessage = `Forecast Weather Error ${response.status} : ${response.statusText}`;
        throw errorMessage;
    }
    return await response.json();
}

const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
const GEO_KEY = process.env.REACT_APP_GEO_API_KEY;
const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': GEO_KEY,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

export const loadOptions = async (inputValue) => {
    try {
        const response = await fetch(
            `${GEO_API_URL}/cities?languageCode=ru&countryIds=UA,EE,LV,LT,BY,PL&sort=name&offset=0&limit=5&minPopulation=1000&namePrefix=${inputValue}`,
            geoApiOptions
        );
        const data = await response.json();
        if (response.status === 404 || response.status === 401) {
            alert(`Извините, возникла ошибка API: ${response.status}. Мы работаем над исправлением, вы можете попробовать воспользоваться расширенным поиском.`)
        }
        return {
            options: data.data.map((city) => ({
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name} ${city.countryCode}`,
            })),
        };
    } catch (err) {
        // console.error(err);
        return { options: [] };
    }
};





