import styles from "./Home.module.css";

import "./Home.css";

export default function Home({countries}) {
    return(
        <>
           {countries.map(country => (
            <div key={country.cca3} className='countryCard'>
                <img src={country.flags.png} alt={`Flag of ${country.name.common}`}/>
                <h2>{country.name.common}</h2>
            </div>
        ))}
        </>
    )
}