import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Footer } from './Footer/Footer';
import { Dashboard } from './Dashboard/Dashboard';
import { Filter } from './Filter/Filter';
import { ScrollUp } from './ScrollUp/ScrollUp';

function App() {
  const [types, setTypes] = useState([
    { name: 'All first generation pokemons', url: 'https://pokeapi.co/api/v2/pokemon?limit=151' }
  ]);

  const [optionSelected, setOptionSelected] = useState(types[0].url);
  const [pokemons, setPokemons] = useState([]);
  const [order, setOrder] = useState('Lowest Number (Frst)');

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

    if (order === 'Lowest Number (Frst)') infoPokemons.sort((a, b) => a.id - b.id);
    else if (order === 'Highest Number (First)') infoPokemons.sort((a, b) => b.id - a.id);
    else if (order === 'A-Z') infoPokemons.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1));
    else if (order === 'Z-A') infoPokemons.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? -1 : 1));

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
        <Filter
          optionSelected={optionSelected}
          setOptionSelected={setOptionSelected}
          types={types}
          setTypes={setTypes}
          order={order}
          setOrder={setOrder}
        />
      </div>

      <Dashboard pokemons={pokemons} />
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
