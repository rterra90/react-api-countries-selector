import React from 'react';
import styles from './CountryDetails.module.css';
// import useFormatStrings from '../Hooks/useFormatStrings';

const CountryDetails = ({ setCountry, country }) => {
  let formatedBorders = [];
  function formatBorders(borders) {
    let allCountriesObj = JSON.parse(window.localStorage.getItem('countries'));

    borders.forEach((code) => {
      let c = allCountriesObj.find((_c) => _c.cca3 == code);

      formatedBorders.push(c);
    });

    // borders.forEach((countryCode) => {
    //   allCountriesObj.forEach((country) => {
    //     country.cca3 === countryCode &&
    //       formatedBorders.push(country.name.common);
    //   });
    // });
  }
  country.borders && formatBorders(country.borders);

  function formatCurrencies(obj) {
    let finalValue = '';
    Object.values(obj).forEach((item, i) => {
      if (i === 0) finalValue += item.name;
      else finalValue += `, ${item.name}`;
    });
    return finalValue;
  }
  function formatLanguages(obj) {
    let finalValue = '';
    Object.values(obj).forEach((item, i) => {
      if (i === 0) finalValue += item;
      else finalValue += `, ${item}`;
    });
    return finalValue;
  }

  return (
    <section className={styles.countryDetailsWrapper}>
      <div>
        <button className={styles.backButton} onClick={() => setCountry(null)}>
          ← Back
        </button>
      </div>
      <div className={styles.details}>
        <div className={styles.flagSide}>
          <img
            className="w-100"
            src={country.flags.svg}
            alt={country.name.official}
          />
        </div>
        <div className={styles.infoSide}>
          <h2>{country.name.common}</h2>
          <div className={styles.infoSideInner}>
            <div>
              <p>
                <b>Official Name:</b> {country.name.official}
              </p>
              <p>
                <b>Population:</b> {country.population}
              </p>
              <p>
                <b>Region:</b> {country.region}
              </p>
              <p>
                <b>Sub Region:</b> {country.subregion}
              </p>
              <p>
                <b>Capital:</b> {formatLanguages(country.capital)}
              </p>
            </div>
            <div>
              <p>
                <b>Top Level Domain:</b> {country.tld}
              </p>
              <p>
                <b>Currencies:</b> {formatCurrencies(country.currencies)}
              </p>
              <p>
                <b>Languages:</b> {formatLanguages(country.languages)}
              </p>
            </div>
          </div>
          {formatedBorders && (
            <div className={styles.borderCountries}>
              <div>Border countries:</div>
              <div className={styles.borderCountriesSpansWrapper}>
                {formatedBorders.map((country, i) => {
                  return (
                    <span
                      key={i}
                      className={styles.borderSpan}
                      onClick={() => setCountry(country)}
                    >
                      {country.name.common}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
