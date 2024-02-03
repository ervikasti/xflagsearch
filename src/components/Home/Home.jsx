import styles from "./Home.module.css";

export default function Home({countries}) {
    return(
        <div className={styles.container}>{countries.map(country => (
            <div key={country.cca3} className={styles.countryCard}>
                <img src={country.flags.png} alt={`Flag of ${country.name.common}`}/>
                <h2>{country.name.common}</h2>
            </div>
        ))}
        </div>
    )
}