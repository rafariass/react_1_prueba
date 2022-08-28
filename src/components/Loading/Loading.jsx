import './Loading.scss';

export const Loading = () => {
  return (
    <div className='modal'>
      <div className='modal-dialog'>
        <img src={process.env.PUBLIC_URL + '/img/loading.gif'} alt='Loader Pikachu walker' draggable='false' />
      </div>
    </div>
  );
};
