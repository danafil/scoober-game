import React from 'react';
import PropTypes from 'prop-types';
import styles from './Label.module.css';

const Label = ({ text }) => (
  <div className={styles.label} aria-label={text}>
    {text}
  </div>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Label;
