import React from 'react';

function Card() {
  return (

    <div className="bg-white p-6 mt-10 rounded-lg shadow-md text-center">

      <div>
        <span className="block text-xl font-bold text-slate-700">Fortaleza</span>
        <span className="text-sm font-medium text-slate-400">Ceará, Brasil</span>
      </div>

      <div className="font-bold text-slate-700 flex mt-4 mb-2">
        <span className="text-8xl">27</span>
        <span className="text-2xl mt-2">°C</span>
      </div>

      <div>
        <span className="block">ícone</span>
        <span className="font-medium text-slate-700">nublado</span>
      </div>

    </div>

  );
}

export default Card;
