import React from 'react';
import propTypes from 'prop-types';

function Card({ data }) {
  const { location, current } = data;

  return (

    <div className="bg-white p-6 mt-10 rounded-lg shadow-md text-center min-w-[220px]">
      <div>
        <span className="block text-xl font-bold text-slate-700">{location.name}</span>
        <span className="text-sm font-medium text-slate-400">
          {`${location.region}, ${location.country}`}
        </span>
      </div>

      <div className="font-bold text-slate-700 flex mt-4 mb-2 justify-center">
        <span className="text-8xl">{current.temp_c}</span>
        <span className="text-2xl mt-2">°C</span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <img src={current.condition.icon} alt="weather-icon" />
        <span className="font-medium text-slate-700">{current.condition.text}</span>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  data: propTypes.object,
}.isRequired;
