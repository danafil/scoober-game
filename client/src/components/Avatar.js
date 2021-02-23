import React from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.css';

const Avatar = ({ username, profileImg, bgColor, variant }) => {
  return (
    <div className={styles.avatar}>
      <img
        className={`${styles.avatarImage} ${styles[variant]}`}
        src={profileImg}
        alt={username}
        aria-label={username}
      />
      <div className={`${styles.imgAvatarBg} ${styles[bgColor]}`} />
    </div>
  );
};

Avatar.defaultProps = {
  bgColor: 'blue',
  variant: 'out',
  username: '',
  profileImg: '../img/avatar.png',
};

Avatar.propTypes = {
  profileImg: PropTypes.string,
  username: PropTypes.string,
  bgColor: PropTypes.oneOf(['blue', 'grey', 'orange']),
  variant: PropTypes.oneOf(['out', 'in']),
};

export default Avatar;
