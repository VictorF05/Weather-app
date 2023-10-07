const KEY = 'b654d4c022bd4447986101341230710';

const fetchData = async (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  const fecthResponse = await fetch(url);

  const data = await fecthResponse.json();

  return data;
};

export default fetchData;
