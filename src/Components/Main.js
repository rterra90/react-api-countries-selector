import React from 'react';
import CountryDetails from './CountryDetails';
import Gallery from './Gallery';

const Main = () => {
  const [country, setCountry] = React.useState(null);
  const [data, setData] = React.useState('');
  if (!country) {
    return (
      <div className="container">
        <Gallery setCountry={setCountry} data={data} setData={setData} />
      </div>
    );
  } else {
    return (
      <div className="container">
        <CountryDetails setCountry={setCountry} country={country} />
      </div>
    );
  }
};

export default Main;
