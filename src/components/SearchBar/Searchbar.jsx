import styles from "./Searchbar.module.css"

const Searchbar = ({handleSerach}) => {
    return(
        <div className={styles.container}>
            <input className={styles.searchbox} type="text" onChange={handleSerach} placeholder="Search for countries..."/>
        </div>
    )  
}

export default Searchbar;