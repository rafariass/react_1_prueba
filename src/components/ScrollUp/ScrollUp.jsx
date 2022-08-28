import { useState } from 'react';
import './ScrollUp.scss';

export const ScrollUp = () => {
  const [visible, setVisible] = useState(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  window.addEventListener('scroll', () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 100 ? setVisible(true) : setVisible(false);
  });

  return <div className={visible ? 'scrollUp active' : 'scrollUp'} onClick={() => scrollToTop()}></div>;
};
