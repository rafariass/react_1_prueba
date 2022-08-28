import './Footer.scss';

export const Footer = () => {
  return (
    <footer>
      <p>
        Raúl Farias S. Frontend Developer&#174; 2022.
        <br />
        Created by
        <a href='https://www.linkedin.com/in/rafariass2/' target='_blank' rel='noreferrer'>
          <img src={process.env.PUBLIC_URL + '/img/rafariass-32x32.png'} alt='rafariass icon' draggable='false' />
          <i className='fas fa-terminal'></i>
          <span>RaFariasS&#174;</span>.
        </a>
      </p>
    </footer>
  );
};
