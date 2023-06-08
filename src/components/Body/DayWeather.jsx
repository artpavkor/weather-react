function DayWeather({ text, currentWeather }) {
  if (currentWeather) {
    console.log(currentWeather.weather[0].description, 'DayWeather');
  }

  return (
    <div
      style={{ height: '400px' }}
      className="shadow-sm p-3 mb-4 bg-white rounded"
    >
      <h3 style={{ textAlign: 'center' }}>{text}</h3>
      <h2 style={{ textAlign: 'center' }}>
        {currentWeather ? currentWeather.name : ''}
      </h2>
      <h3 style={{ textAlign: 'center' }}>
        {currentWeather ? currentWeather.weather[0].description : ''}
      </h3>
    </div>
  );
}

export default DayWeather;
