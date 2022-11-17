import React from 'react';
import styles from '../Components/GalleryCard.module.css';

const GalleryCard = ({
  img,
  name,
  population,
  region,
  capital,
  onClick,
}) => {

  return (
    <div className={styles.card} role="button" onClick={onClick}>
      <div className={styles.imgWrapper}>
        <img src={img} alt={name} style={{ width: '100%' }} />
      </div>
      <div className={styles.cardInfoWrapper}>
        <p className={styles.cardName}>{name}</p>
        <p className={styles.cardInfo}>
          <b>Population: </b>
          {population}
        </p>
        <p className={styles.cardInfo}>
          <b>Region: </b>
          {region}
        </p>
        <p className={styles.cardInfo}>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default GalleryCard;
