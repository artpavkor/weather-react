import moment from 'moment/moment';
import 'moment/locale/ru';
import styles from './dayweather.module.scss';

function DayWeather({ currentWeather, selectedCity }) {
  let time = '';
  if (currentWeather) {
    time = moment
      .unix(currentWeather.dt)
      .locale('ru')
      .format('dddd, MMMM Do YYYY, h:mm:ss');
  }

  const timeCorrect = time.split(' ');
  const day = timeCorrect[0];

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const dayCorrected = capitalizeFirstLetter(day);
  const dayNumber = timeCorrect[2]?.slice(0, -3);
  const mounth = `${timeCorrect[1]?.slice(0, -1)}`;

  const temp = parseInt(currentWeather?.main?.temp);

  return (
    <div
      style={{ height: '400px' }}
      className={`${styles.containerWeather} shadow-sm p-3 mb-4 bg-white rounded`}
    >
      <p>{`${dayCorrected} ${dayNumber} ${
        mounth === 'август' && 'март' ? mounth + 'а' : mounth + 'я'
      }`}</p>
      <div className={styles.cityName}>
        <p>{selectedCity ? selectedCity[2] : `${currentWeather?.name} UA`}</p>
      </div>
      <div className={styles.cityWeather}>
        <img
          src={`icons/${
            currentWeather ? currentWeather.weather[0].icon : '01d'
          }.png`}
          alt="icon-weather"
        />
        <span>
          {`Сегодня ${
            currentWeather ? currentWeather.weather[0].description : ''
          }`}
        </span>
        <p>{temp}°</p>
      </div>
    </div>
  );
}

export default DayWeather;
