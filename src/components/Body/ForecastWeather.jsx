import moment from 'moment/moment';
import 'moment/locale/ru';
import Accordion from 'react-bootstrap/Accordion';

function ForecastWeather({ forecastWeather }) {
  console.log(forecastWeather);

  const weekDaysData = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ];

  const dayInAWeek = new Date().getDay();
  const forecastDayInAWeek = weekDaysData
    .slice(dayInAWeek, weekDaysData.length)
    .concat(weekDaysData.slice(0, dayInAWeek));

  function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr?.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const sliceArray = sliceIntoChunks(forecastWeather?.list, 8);
  console.log(sliceArray[0]);
  return (
    <div
      style={{ minHeight: '400px' }}
      className="shadow-sm p-3 mb-4 bg-white rounded"
    >
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{forecastDayInAWeek[0]}</Accordion.Header>
          <div className="d-flex flex-row">
            {sliceArray[0]?.map((elem, idx) => {
              console.log(elem);
              return (
                <Accordion.Body>
                  <p>
                    <span>
                      {' '}
                      {capitalizeFirstLetter(elem?.weather[0].description)}
                    </span>
                  </p>
                  <p>{moment.unix(elem.dt).format('HH:mm')}</p>
                </Accordion.Body>
              );
            })}
          </div>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>{forecastDayInAWeek[1]}</Accordion.Header>
          {sliceArray[1]?.map((elem, idx) => {
            return (
              <Accordion.Body>
                {moment.unix(elem.dt).format('DD.MM HH:mm')}
              </Accordion.Body>
            );
          })}
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>{forecastDayInAWeek[2]}</Accordion.Header>
          {sliceArray[2]?.map((elem, idx) => {
            return (
              <Accordion.Body>
                {moment.unix(elem.dt).format('DD.MM HH:mm')}
              </Accordion.Body>
            );
          })}
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default ForecastWeather;

// {forecastWeather?.list.slice(0, 7).map((elem, index) => {
//     return (
//       <Accordion defaultActiveKey={[0]} alwaysOpen key={index}>
//         <Accordion.Item eventKey={index}>
//           <Accordion.Header>
//             {forecastDayInAWeek[index]}
//             {/* {moment.unix(elem.dt).format('DD.MM HH:mm')} */}
//           </Accordion.Header>
//           {sliceArray.map((elem, index) => {
//             console.log(index);
//             return (
//               <Accordion.Body key={index}>
//                 {moment.unix(elem[index]?.dt).format('DD.MM HH.mm')}
//               </Accordion.Body>
//             );
//           })}
//         </Accordion.Item>
//       </Accordion>
//     );
//   })}
