import './Filter.scss';
import { MiApi } from '../MiApi/MiApi.jsx';

export const Filter = ({ optionSelected, setOptionSelected, types, setTypes, order, setOrder }) => {
  return (
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
          <option value='Lowest Number (Frst)'>Lowest Number (Frst)</option>
          <option value='Highest Number (First)'>Highest Number (First)</option>
          <option value='A-Z'>A-Z</option>
          <option value='Z-A'>Z-A</option>
        </select>
      </div>
    </div>
  );
};
