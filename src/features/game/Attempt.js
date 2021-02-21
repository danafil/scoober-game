import React from 'react';
import PropTypes from 'prop-types';

const Attempt = ({ user, number, text, newValue }) => {
  return (
    <div>
      <p>{user.id}</p>
      <p>{number}</p>
      <p>{text}</p>
      <p>{newValue}</p>
    </div>
  );
};

Attempt.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  newValue: PropTypes.number.isRequired,
};

export default Attempt;
