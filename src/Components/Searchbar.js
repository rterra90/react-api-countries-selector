import React from 'react';
import styles from './Searchbar.module.css';

const Searchbar = ({ search, setSearch, setData }) => {
  function handleFilter({ target }) {
    let obj = JSON.parse(window.localStorage.getItem('countries'));
    if (target.dataset.active === 'true') {
      target.dataset.active = 'false';
      document.querySelector('#filterPlaceholder').innerText =
        'Filter by Region';
      setData(obj);
    } else {
      document.querySelector('#filterPlaceholder').innerText = target.innerText;
      document
        .querySelectorAll('#filterBox li')
        .forEach((li) => (li.dataset.active = 'false'));
      target.dataset.active = 'true';
      let filteredObj = obj.filter((country) => {
        return country.region === target.innerText;
      });
      setData(filteredObj);
    }
    document.querySelector('#filterHead').toggleAttribute('data-active');
  }
  return (
    <div className={styles.searchbar}>
      <div>
        <input type="text" />
      </div>
      <div className={styles.filterWrapper}>
        <span
          className={styles.filterHead}
          id="filterHead"
          onClick={() =>
            document.querySelector('#filterHead').toggleAttribute('data-active')
          }
        >
          <span id="filterPlaceholder">Filter by Region</span>
          <span className={styles.arrow}>▼</span>
        </span>
        <span id="filterBox" className={styles.filterBox}>
          <ul>
            <li onClick={handleFilter} data-active="false">
              Africa
            </li>
            <li onClick={handleFilter} data-active="false">
              Americas
            </li>
            <li onClick={handleFilter} data-active="false">
              Asia
            </li>
            <li onClick={handleFilter} data-active="false">
              Europe
            </li>
            <li onClick={handleFilter} data-active="false">
              Oceania
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Searchbar;
