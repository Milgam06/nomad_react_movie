import React, { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState('');
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  function onChange(event) {
    setValue(event.target.value);
  }
  function onReset() {
    setValue('');
  }
  return (
    <div>
      <h1>The coin! {loading ? '' : coins.length}</h1>
      <input onChange={onChange} value={value} placeholder="bedgit" type={'number'}></input>
      <button onClick={onReset}>Reset</button>
      <br></br>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price}$
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
