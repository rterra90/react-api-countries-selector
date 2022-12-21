import React from 'react';
import GalleryCard from './GalleryCard';
import styles from './Gallery.module.css';
import Searchbar from './Searchbar';

const Gallery = ({ setCountry, data, setData }) => {
  const [search, setSearch] = React.useState('');
  React.useEffect(() => {
    async function fetchAllCountries() {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const json = await response.json();
      setData(json);
      window.localStorage.setItem('countries', JSON.stringify(json));
    }
    fetchAllCountries();
  }, []);

  if (data) {
    return (
      <>
        <Searchbar
          search={search}
          setSearch={setSearch}
          setData={setData}
          data={data}
        />
        <div className={styles.gallery}>
          {data.map((country, i) => {
            return (
              <GalleryCard
                key={i}
                img={country.flags.png}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                onClick={() => setCountry(country)}
              />
            );
          })}
        </div>
      </>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default Gallery;
