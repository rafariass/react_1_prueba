import './App.scss';
import { useState } from 'react';
import { MiApi } from './ MiApi/ MiApi';

function App() {
  const [types, setTypes] = useState([]);

  return (
    <div className='container-fluid'>
      <div className='container'>
        <img src={process.env.PUBLIC_URL + '/img/pokeapi.png'} alt='Logo Poke API' />
        <div className='menu'>
          <div className='input-wraper'>
            <label htmlFor='pokeOption'>Seleccione una opcion:</label>
            <select name='pokeOption' id='pokeOption'>
              <option
                value='https://pokeapi.co/api/v2/pokemon?limit=151'
                key={'https://pokeapi.co/api/v2/pokemon?limit=151'}>
                All first generation pokemons
              </option>
              <MiApi types={types} setTypes={setTypes} />
            </select>
          </div>
        </div>
      </div>

      <div className='pokemons-wraper'></div>

      <footer>
        <p>
          Raúl Farias S. Frontend Developer&#174; 2022.
          <br />
          Created by
          <a href='https://www.linkedin.com/in/rafariass2/' target='_blank' rel='noreferrer'>
            <img src={process.env.PUBLIC_URL + '/img/rafariass-32x32.png'} alt='rafariass icon' />
            <i className='fas fa-terminal'></i>
            <span>RaFariasS&#174;</span>.
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
