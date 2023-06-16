import moment from 'moment';
import React from 'react';
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
  LineChart,
} from 'recharts';
import styles from './humiditychart.module.scss';

function HumidityChart({ forecastWeather }) {
  const data = forecastWeather?.list.map((elem) => {
    const dataTimeTemp = {
      time: moment.unix(elem.dt).format('DD.MM HH:mm'),
      humidity: elem.main.humidity,
      date: moment.unix(elem.dt).format('DD.MM.YY'),
      hours: moment.unix(elem.dt).format('HH:mm'),
    };
    return dataTimeTemp;
  });
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.customTooltip}>
          <p
            className={styles.label}
          >{`Влажность: ${payload[0]?.payload.humidity}%`}</p>
          <p
            className={styles.label}
          >{`Время: ${payload[0]?.payload.hours}`}</p>
          <p className={styles.label}>{`Дата: ${payload[0]?.payload.date}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      style={{ height: '300px' }}
      className="shadow-sm p-3 mb-4 bg-white rounded"
    >
      <h5 style={{ textAlign: 'end' }}>Влажность</h5>
      <ResponsiveContainer width={'100%'} height={250}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 15,
            right: 25,
            bottom: 20,
            left: 0,
          }}
        >
          <XAxis
            interval="preserveStart"
            dataKey="time"
            tickMargin={7}
            style={{ fontSize: '10px' }}
          />
          <YAxis
            unit={'%'}
            style={{ fontSize: '12px' }}
            axisLine={false}
            interval="preserveStart"
          />
          <Tooltip content={data ? CustomTooltip : null} />
          <Line
            type="monotone"
            dataKey="humidity"
            stroke="#ff7300"
            strokeWidth={1}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HumidityChart;
