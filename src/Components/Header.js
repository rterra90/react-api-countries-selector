import React from 'react';
import styles from '../Components/Header.module.css';

const Header = ({ darkmode, setDarkmode }) => {
  return (
    <header className={styles.header} darkmode={darkmode ? 'true' : 'false'}>
      <div className="container">
        <span className={styles.appTitle}>Where in the world?</span>{' '}
        <span
          role="button"
          className={styles.darkMode}
          onClick={() => {
            setDarkmode(!darkmode);
          }}
        >
          Dark Mode
        </span>
      </div>
    </header>
  );
};

export default Header;
