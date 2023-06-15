import sunset from '../../img/sunset.png';
import sunrice from '../../img/sunrise.png';
import styles from './infoweather.module.scss';
import moment from 'moment';

function InfoWeather({ currentWeather, selectedCity }) {
  const pressure = currentWeather?.main?.pressure / 1333;
  const pressureCorrect = String(pressure).slice(2, 5);
  const visibility = String(currentWeather?.visibility / 100).split('');
  const wind = currentWeather?.wind?.speed;
  const sunriseDay = moment.unix(currentWeather?.sys?.sunrise).format('k:kk');
  const sunsetDay = moment.unix(currentWeather?.sys?.sunset).format('k:kk');

  const dayLenght = () => {
    const minuteLenght =
      Number(sunsetDay.slice(-2)) - Number(sunriseDay.slice(-2));
    const hourLenght = parseFloat(sunsetDay) - parseFloat(sunriseDay);
    return [hourLenght, minuteLenght];
  };
  const arrayLenghtDay = dayLenght();
  return (
    <div
      style={{ height: '400px' }}
      className="shadow-sm p-3 mb-4 bg-white rounded"
    >
      <div className={styles.info}>
        <p>
          Ощущается как
          <span> +{parseInt(currentWeather?.main?.feels_like)}°</span>
        </p>
        <p>
          Влажность:
          <span> {currentWeather?.main?.humidity}%</span>
        </p>
        <p>
          Давление:
          <span> {pressureCorrect} мм</span>
        </p>
        <p>
          Видимость:
          <span>
            {' '}
            {visibility[0]}
            {visibility[1]}.{visibility[2]} km
          </span>
        </p>
        <p>
          Ветер:
          <span> {wind} м/с</span>
        </p>
        <p>
          Мак. температура:
          <span> {currentWeather?.main?.temp_max}°</span>
        </p>
        <p>
          Мин. температура:
          <span> {currentWeather?.main?.temp_min}°</span>
        </p>
      </div>
      <div className={styles.day}>
        <p className={styles.col}>
          <img width={42} src={sunrice} alt="sunset" />
          {sunriseDay}
        </p>
        <p className={styles.duration}>
          Световой день
          <br />
          {arrayLenghtDay[0]} ч {arrayLenghtDay[1]} мин
        </p>
        <p className={styles.col}>
          <img width={42} src={sunset} alt="sunset" />
          {sunsetDay}
        </p>
      </div>
    </div>
  );
}

export default InfoWeather;
