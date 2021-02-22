import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import styles from './Header.module.css';

const Header = ({ sticky, profileImg }) => {
  const clazz = sticky ? `${styles.header} ${styles.sticky}` : styles.header;
  return (
    <header className={clazz}>
      <Avatar profileImg={profileImg} />
      <div className={styles.title}>
        <h1 className={styles.gameTitle}>Scoober team</h1>
        <h3 className={styles.slogan}>Win the game or win the job</h3>
      </div>
    </header>
  );
};

Header.defaultProps = {
	sticky: false,
};

Header.propTypes = {
  sticky: PropTypes.bool,
};

export default Header;
