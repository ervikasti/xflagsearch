import styles from "./Searchbar.module.css"

const Searchbar = ({handleSerach}) => {

    const styles = {
        container: {
            'display': "flex",
            'flex-wrap': "wrap",
            'align-items': "center",
            'justify-content': "center",
        },
        searchbox:{
            margin: '1rem',
            padding: '1rem',
            border: '1px solid gray',
            display: 'flex',
            'min-width': '30%',
            'max-width': '100%',
                }, 
      };



    return(
        
        <input type="text" style={styles.searchbox} onChange={handleSerach} placeholder="Search for countries..."/>
        
    )  
}

export default Searchbar;