import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../components/Avatar';
import Label from '../../components/Label';
import Field from '../../components/Field';
import styles from './Attempt.module.css';

const Attempt = ({ user, number, text, newValue }) => {
  const attemptVariant = user.isSelf ? 'left' : 'right';
  const avatarVariant = user.isSelf ? 'out' : 'in';
  const attemptDetailsVariant = user.isSelf ? 'detailsLeft' : 'detailsRight';
  return (
    <div className={`${styles.attempt} ${styles[attemptVariant]}`}>
      <Avatar
        profileImg={user.profileImg}
        variant={avatarVariant}
        username={user.username}
      />
      <div
        className={`${styles.attemptDetails} ${styles[attemptDetailsVariant]}`}
      >
        <Label text={`${number}`} />
        <Field text={text} />
        <Field text={`${newValue}`} />
      </div>
    </div>
  );
};

Attempt.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  newValue: PropTypes.number.isRequired,
};

export default Attempt;
