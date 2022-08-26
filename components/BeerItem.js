import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const BeerItem = ({id, name, image_url}) => {
  return (
    <div className={styles.beer}>
      <h4>{name}</h4>
      <div className={styles.beerPic}>
        <Link href={`/beers/${id}`}>
          <a>
            <img src={image_url} alt={name} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BeerItem;
