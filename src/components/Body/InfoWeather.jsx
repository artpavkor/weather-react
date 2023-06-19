import sunset from '../../img/sunset.png';
import sunrice from '../../img/sunrise.png';
import styles from './infoweather.module.scss';
import moment from 'moment';

function InfoWeather({ currentWeather }) {
  const pressure = currentWeather?.main?.pressure / 1333;
  const pressureCorrect = String(pressure).slice(2, 5);
  const visibility = String(currentWeather?.visibility / 100).split('');
  const wind = currentWeather?.wind?.speed;

  const sunriseday = moment.unix(currentWeather?.sys?.sunrise);
  const sunsetday = moment.unix(currentWeather?.sys?.sunset);

  const diff = moment.duration(sunsetday.diff(sunriseday));
  const hours = diff.hours();
  const minutes = diff.minutes();

  return (
    <div
      style={{ height: '400px' }}
      className="shadow-sm p-3 mb-4 bg-white rounded"
    >
      <div className={styles.info}>
        <p>
          Ощущается как
          <span> {currentWeather?.main?.feels_like.toFixed(1)}°</span>
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
          <span> {currentWeather?.main?.temp_max.toFixed(1)}°</span>
        </p>
        <p>
          Мин. температура:
          <span> {currentWeather?.main?.temp_min.toFixed(1)}°</span>
        </p>
      </div>
      <div className={styles.day}>
        <p className={styles.col}>
          <img width={42} src={sunrice} alt="sunset" />
          {sunriseday.format('HH:mm')}
        </p>
        <p className={styles.duration}>
          Световой день
          <br />
          {hours} ч {minutes} мин
        </p>
        <p className={styles.col}>
          <img width={42} src={sunset} alt="sunset" />
          {sunsetday.format('HH:mm')}
        </p>
      </div>
    </div>
  );
}

export default InfoWeather;
