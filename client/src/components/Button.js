import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ appearence, text, onClick }) => (
  <button className={styles[appearence]} aria-label={text} onClick={onClick}>
    {text}
  </button>
);

Button.defaultProps = {
  appearence: 'wide',
};

Button.propTypes = {
  appearence: PropTypes.oneOf(['wide', 'round']),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
