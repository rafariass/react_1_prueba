import axios from 'axios';
import { useEffect } from 'react';

export const MiApi = ({ types, setTypes }) => {
  const getTypePokemons = async () => {
    const { data } = await axios.get('https://pokeapi.co/api/v2/type');
    setTypes([...types, ...data.results.slice(0, -2)]);
  };

  useEffect(() => {
    getTypePokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
