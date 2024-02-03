import styles from "./Searchbar.module.css"

const Searchbar = ({handleSerach}) => {
    return(
        
        <input className={styles.searchbox} type="text" onChange={handleSerach} placeholder="Search for countries..."/>
        
    )  
}

export default Searchbar;