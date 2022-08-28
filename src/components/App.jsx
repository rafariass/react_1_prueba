import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { MiApi } from './MiApi/MiApi';
import { Footer } from './Footer/Footer';
import { Dashboard } from './Dashboard/Dashboard';

function App() {
  const [types, setTypes] = useState([
    { name: 'All first generation pokemons', url: 'https://pokeapi.co/api/v2/pokemon?limit=151' }
  ]);

  const [optionSelected, setOptionSelected] = useState(types[0].url);
  const [pokemons, setPokemons] = useState([]);
  const [order, setOrder] = useState('false');

  const getData = async (url) => {
    const { data } = await axios.get(url);
    return data;
  };

  const getDataPokemons = async () => {
    const data = await getData(optionSelected);

    const infoPokemons = await Promise.all(
      data?.results
        ? data.results.map(({ url }) => getData(url))
        : data.pokemon.map(({ pokemon: { url } }) => getData(url))
    );

    order === 'true'
      ? infoPokemons.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1))
      : infoPokemons.sort((a, b) => a.id - b.id);

    setPokemons(infoPokemons);
  };

  useEffect(() => {
    getDataPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionSelected, order]);

  return (
    <div className='container-fluid'>
      <div className='container'>
        <img src={process.env.PUBLIC_URL + '/img/pokeapi.png'} alt='Logo Poke API' />
        <div className='menu'>
          <div className='input-wraper'>
            <label htmlFor='pokeOption'>Select an option:</label>
            <select
              name='pokeOption'
              id='pokeOption'
              onChange={(event) => setOptionSelected(event.target.value)}
              value={optionSelected}>
              <MiApi types={types} setTypes={setTypes} />
            </select>
          </div>
          <div className='input-wraper'>
            <label htmlFor='pokeOrder'>Sort by:</label>
            <select name='pokeOrder' id='pokeOrder' onChange={(event) => setOrder(event.target.value)} value={order}>
              <option value='false'>In number order</option>
              <option value='true'>In alphabetical order</option>

{/* Lowest Number (Frst)
Highest Number (First)
A-Z
Z-A */}


            </select>
          </div>
        </div>
      </div>

      <Dashboard pokemons={pokemons} />
      <Footer />
    </div>
  );
}

export default App;
