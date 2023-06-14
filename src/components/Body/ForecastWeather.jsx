import moment from 'moment/moment';
import 'moment/locale/ru';
import Accordion from 'react-bootstrap/Accordion';
import styles from './forecastweather.module.scss';
import { Col, Container, Row } from 'react-bootstrap';

function ForecastWeather({ forecastWeather }) {
  const forecastTime = forecastWeather?.list.map((elem) => {
    const day = moment.unix(elem.dt).format('dddd');
    return { day, elem };
  });
  const monday = [];
  const tuesday = [];
  const wednesday = [];
  const thursday = [];
  const friday = [];
  const saturday = [];
  const sunday = [];
  // console.log(friday, 'friday');

  for (let i = 0; i < forecastTime?.length; i++) {
    if (forecastTime[i].day === 'понедельник') {
      monday.push(forecastTime[i]);
    }
    if (forecastTime[i].day === 'вторник') {
      tuesday.push(forecastTime[i]);
    }
    if (forecastTime[i].day === 'среда') {
      wednesday.push(forecastTime[i]);
    }
    if (forecastTime[i].day === 'четверг') {
      thursday.push(forecastTime[i]);
    }
    if (forecastTime[i].day === 'пятница') {
      friday.push(forecastTime[i]);
    }
    if (forecastTime[i].day === 'суббота') {
      saturday.push(forecastTime[i]);
    }
    if (forecastTime[i].day === 'воскресенье') {
      sunday.push(forecastTime[i]);
    }
  }

  const weekDaysData = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ];

  let testObj = [
    ['Понедельник', monday],
    ['Вторник', tuesday],
    ['Среда', wednesday],
    ['Четверг', thursday],
    ['Пятница', friday],
    ['Суббота', saturday],
    ['Воскресенье', sunday],
  ];

  // console.log(testObj[0]);

  // const capitalizeFirstLetter = (string) => {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // };
  const dayInAWeek = new Date().getDay();
  const forecastDayInAWeek = testObj
    .slice(dayInAWeek, testObj.length)
    .concat(testObj.slice(0, dayInAWeek - 2));
  // console.log(monday);
  // console.log(forecastDayInAWeek, 'forecastDayInAWeek');
  // console.log(moment.unix(1686776400).format());
  return (
    <div
      style={{ minHeight: '400px' }}
      className="shadow-sm p-3 mb-4 bg-white rounded"
    >
      <Accordion defaultActiveKey={[0]} alwaysOpen>
        {forecastDayInAWeek.map((data, idx) => {
          const weather = data[1];
          return (
            <Accordion.Item eventKey={idx} key={idx}>
              <Accordion.Header>{data[0]}</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <Row>
                    <Col>Часы</Col>
                    <Col>Температура</Col>
                    <Col className="text-center">Ветер</Col>
                    <Col className="text-center">Давление</Col>
                    <Col className="text-center">Влажность</Col>
                  </Row>
                  {weather?.map((data, idx) => {
                    return (
                      <Row className={`${styles.rowForecast} mt-4`} key={idx}>
                        {/* <Col>{moment.unix(data.elem.dt).format('HH:mm')}</Col> */}
                        <Col>
                          {moment.unix(data.elem.dt).format('DD.MM HH:mm')}
                        </Col>
                        <Col className={styles.rowTemp}>
                          <img
                            width={28}
                            src={`icons/${
                              data ? data.elem.weather[0].icon : '01d'
                            }.png`}
                            alt=""
                          />
                          <p>{parseInt(data.elem.main.temp)}°</p>
                        </Col>
                        <Col className="text-center">
                          {parseInt(data.elem.wind.speed)} м/с
                        </Col>
                        <Col className="text-center">
                          {String(data.elem.main.pressure / 1333).slice(2, 5)}{' '}
                          мм
                        </Col>
                        <Col className="text-center">
                          {data.elem.main.humidity}%
                        </Col>
                      </Row>
                    );
                  })}
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}

export default ForecastWeather;

{
  /* <div> */
}
{
  /* <img
  src={`icons/${elem ? elem.weather[0].icon : '01d'}.png`}
  alt="icon-weather"
/> */
}
{
  /* </div>
<div className={styles.row}>
<div>
  <p>
    <span>
      {' '}
      {capitalizeFirstLetter(
        elem.elem.weather[0].description
      )}
    </span>
  </p>
</div>
<div className={styles.time}>
  <p>{moment.unix(elem.elem.dt).format('HH:mm')}</p>
</div>
</div> */
}
