function DayWeather({ text }) {
  return (
    <div
      style={{ height: '400px' }}
      className="shadow-sm p-3 mb-4 bg-white rounded"
    >
      <h3 style={{ textAlign: 'center' }}>{text}</h3>
    </div>
  );
}

export default DayWeather;
