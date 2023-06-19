import moment from 'moment';
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

  let testObj = [
    ['Понедельник', monday],
    ['Вторник', tuesday],
    ['Среда', wednesday],
    ['Четверг', thursday],
    ['Пятница', friday],
    ['Суббота', saturday],
    ['Воскресенье', sunday],
  ];

  const dayInAWeek = new Date().getDay();
  testObj = [...testObj.slice(dayInAWeek), ...testObj.slice(0, dayInAWeek)];
  const forecastDayInAWeek = testObj.slice(0, 5);

  return (
    <div
      style={{ minHeight: '400px' }}
      className="shadow-sm p-3 mb-4 bg-white rounded"
    >
      <p style={{ fontSize: '20px', fontWeight: 600 }}>Прогноз на 5 дней</p>
      <Accordion defaultActiveKey={[0]} alwaysOpen>
        {forecastDayInAWeek.map((data, idx) => {
          const weather = data[1];
          return (
            <Accordion.Item eventKey={idx} key={idx}>
              <Accordion.Header>{data[0]}</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <Row className={styles.header}>
                    <Col className={styles.textHeader}>
                      <p>Часы</p>
                    </Col>
                    <Col className={styles.textHeader}>
                      <p>Температура</p>
                    </Col>
                    <Col className={styles.textHeaderAlign}>
                      <p>Ветер</p>
                    </Col>
                    <Col className={styles.textHeaderAlign}>
                      <p>Давление</p>
                    </Col>
                    <Col className={styles.textHeaderAlign}>
                      <p>Влажность</p>
                    </Col>
                  </Row>
                  {weather?.map((data, idx) => {
                    return (
                      <Row className={`${styles.rowForecast} mt-4`} key={idx}>
                        <Col className={styles.colForecast}>
                          <span>
                            <span>
                              {moment.unix(data.elem.dt).format('DD.MM HH:mm')}
                            </span>
                          </span>
                        </Col>
                        <Col className={styles.rowTemp}>
                          <img
                            src={`icons/${
                              data ? data.elem.weather[0].icon : '01d'
                            }.png`}
                            alt=""
                          />
                          <p>{parseInt(data.elem.main.temp)}°</p>
                        </Col>
                        <Col className={styles.colForecastAlign}>
                          <span>{parseInt(data.elem.wind.speed)} м/с</span>
                        </Col>
                        <Col className={styles.colForecastAlign}>
                          <span>
                            {String(data.elem.main.pressure / 1333).slice(2, 5)}{' '}
                            мм
                          </span>
                        </Col>
                        <Col className={styles.colForecastAlign}>
                          <span className={styles.humidity}>
                            {data.elem.main.humidity}%
                          </span>
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
