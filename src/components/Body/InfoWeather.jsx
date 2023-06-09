import sunset from '../../img/sunset.png';
import sunrice from '../../img/sunrise.png';
import styles from './infoweather.module.scss';
import moment from 'moment';

function InfoWeather({ currentWeather, selectedCity }) {
  //   console.log(currentWeather);

  const pressure = currentWeather?.main?.pressure / 1333;
  const pressureCorrect = String(pressure).slice(2, 5);
  const visibility = String(currentWeather?.visibility / 100).split('');
  const wind = currentWeather?.wind?.speed;
  const sunriseDay = moment.unix(currentWeather?.sys?.sunrise).format('k:kk');
  const sunsetDay = moment.unix(currentWeather?.sys?.sunset).format('k:kk');
  //  Hour ????
  const durationDay =
    currentWeather?.sys?.sunset - currentWeather?.sys?.sunrise;
  const durationDayCorrected = moment.unix(durationDay).format('k:kk');
  const test = moment(currentWeather?.sys?.sunset * 1000).diff(
    moment(currentWeather?.sys?.sunrise * 1000)
  );
  console.log(moment(test).format('k:kk'));
  return (
    <div
      style={{ height: '400px' }}
      className="shadow-sm p-3 mb-4 bg-white rounded"
    >
      <div>
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
          {/* Вычесть MomentJS */}
          {/* {durationDayCorrected.slice(0, -3)} ч {durationDayCorrected.slice(2)}{' '}  */}
          мин
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
