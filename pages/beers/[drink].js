import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import axios from "axios";
import Link from "next/link";

const Drink = () => {
  const router = useRouter();
  
  const [beerList, setBeerList] = useState([]);
  const [hopList, setHopList] = useState([]);


  useEffect(() => {
    if (router.isReady) {
      const { drink } = router.query;
      const queryBeer = `https://api.punkapi.com/v2/beers/${drink}`;
      axios
      .get(queryBeer)
      .then(result => setBeerList(result.data))
      .catch(error => console.log(error));
    }
  }, [router.isReady]);

    console.log(beerList);

  return (
    <div className={styles.testB}>
    <div className={styles.beerContainer}>
      <h1>Golden Bro Beers</h1>
      <div className={styles.beerOverview}>
        {beerList.map(beer => (
          <div key={beer.id}>
            <nav><Link href={'/'}><a>Beers Overview</a></Link> <span>></span> {beer.name}</nav>
            <div className={styles.detailPic}>
              <div className={styles.detail}>
                <h1>{beer.name}</h1>
                <h5>{beer.tagline}</h5>
                {beer.description}
                <p>ABV%: {beer.abv}</p>
                <p>Popular food pairing: </p>
                <ul>{beer.food_pairing.map((pair, index) => (
                  <li key={index}>{pair}</li>
                ))}
                </ul>
                {/* <ul>{beer.ingredients.hops.map((recipe, index) => (
                  <li key={index}>{recipe.name}</li>
                ))}
                  </ul> */}
              </div>
              <a>
                <img src={beer.image_url} alt={name} />
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Drink;
