import moment from 'moment';
import React from 'react';
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Bar,
  ComposedChart,
} from 'recharts';

import styles from './temperaturachart.module.scss';

function TemperaturaChart({ forecastWeather }) {
  const data = forecastWeather?.list.map((elem) => {
    const dataTimeTemp = {
      time: moment.unix(elem.dt).format('DD.MM HH:mm'),
      temp: parseInt(elem.main.temp),
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
          >{`Температура: ${payload[0]?.payload.temp}°`}</p>
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
      style={{ height: '250px' }}
      className="shadow-sm p-3 mb-4 bg-white rounded"
    >
      <ResponsiveContainer width={'100%'} height={250}>
        <ComposedChart
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
            unit={'°'}
            style={{ fontSize: '12px' }}
            axisLine={false}
            interval="preserveStart"
          />
          <Tooltip content={data ? CustomTooltip : null} />
          <Bar dataKey="temp" barSize={5} fill="#5cadec" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TemperaturaChart;
