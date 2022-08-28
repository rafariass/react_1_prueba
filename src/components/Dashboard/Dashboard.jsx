import './Dashboard.scss';

export const Dashboard = ({ pokemons }) => {
  return (
    <div className='pokemons-wraper'>
      {pokemons.map((p) => {
        return (
          <div className='card' key={p.id}>
            <img
              src={
                p.sprites.other['official-artwork'].front_default !== null
                  ? p.sprites.other['official-artwork'].front_default
                  : process.env.PUBLIC_URL + '/img/404-poke-alta.webp'
              }
              alt={p.name}
              draggable='false'
            />
            <div className='card-body'>
              <div className='card-body__text'>
                <span>Number: {p.id}</span>
                <p>{p.name.replaceAll('-', ' ')}</p>
              </div>
              <div className='card-body__types'>
                {p.types.map((t) => {
                  return <span key={t.type.name}>{t.type.name}</span>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
