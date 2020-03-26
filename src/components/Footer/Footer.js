import React from 'react';
import { Link } from 'react-router-dom';
import css from './Footer.module.css';
// import Icon from '../Icon/Icon';

const Footer = () => (
  <footer className={css.footer}>
    <Link to="/" className={css.webStore}>
      WEB STORE
      {/* <Icon icon="Logo" className={css.icon} /> */}
    </Link>
    <span className={(css.text, css.borders)}>
      Владимир и Константин сделают это!{' '}
      <span role="img" aria-label="smile">
        😄
      </span>
    </span>
    <span className={css.text}>2020</span>
  </footer>
);
export default Footer;
