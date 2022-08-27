import axios from 'axios';
import { useEffect } from 'react';

export const MiApi = ({ types, setTypes }) => {
  const getTypePokemons = async () => {
    const { data } = await axios.get('https://pokeapi.co/api/v2/type');
    setTypes(data.results);
  };

  useEffect(() => {
    console.log('1');
    getTypePokemons();
  }, []);

  const options = () => {
    return types.map((t) => (
      <option value={t.url} key={t.name}>
        {t.name}
      </option>
    ));
  };

  return options();
};
