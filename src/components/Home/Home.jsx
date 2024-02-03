
import { useEffect, useState } from "react";
import styles from "./Home.module.css";

export default function Home() {

    const [countries,setCountries] = useState([]);

    useEffect( ()=> {

        fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .catch((err) => console.error(err));
    })


    
    return(
        <div className={styles.container}>{countries.map(country => (
            <div key={country.cca3}className={styles.card}>
                <img src={country.flags.png} alt={`Flag of ${country.name.common}`}/>
                <h2>{country.name.common}</h2>
            </div>
        ))}
        </div>
    )
}