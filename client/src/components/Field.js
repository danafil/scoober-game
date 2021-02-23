import React from 'react';
import PropTypes from 'prop-types';
import styles from './Field.module.css';

const Field = ({ text }) => (
  <div className={styles.field} aria-label={text}>
    {text}
  </div>
);

Field.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Field;
