import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
// import Searchbar from "./components/SearchBar/Searchbar";
// import styles from "./App.module.css";
import "./App.css";

function App() {

  const [countries,setCountries] = useState([]);
  const [filterData, setFilteredData] = useState([]);
  const [search,setSearch] = useState('');

    useEffect( ()=> {
        fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .catch((err) => console.error(err));
    });

    // handle the onChange of the search box
    const handleSearch =(e)=>{
        
        // setSearch(e.target.value);
        setSearch(e.target.value);
        // filterCountry(e.target.value);
       
    }
    
    useEffect(()=>{
        const copyCountries = [...countries];
  
        // console.log(copyCountries);
        const filteredArr = copyCountries.filter( (val) => {
  
          let x = (val.name.common).toLowerCase();
          let text = search.toLowerCase();
  
          if(x.includes(text)){
            return true;
          }else{
            return false;
          }
        });
  
        // console.log(filteredArr);
        setFilteredData(filteredArr);
        // setCountries(filteredArr);
      }
    ,[search]);
    

    const styles = {
      container: {
          'display': "flex",
          'flex-wrap': "wrap",
          'align-items': "center",
          'justify-content': "center",
          'flex-direction':'column',
      },
      card: {
        'display': "flex",
        'flex-wrap': "wrap",
        'align-items': "center",
        'justify-content': "center",
    },
    
    };

  return (
    <div style={styles.container}>
      <input type="text" onChange={handleSearch} placeholder="Search for countries..."/>
      <div style={styles.card}>
          {filterData.length? <Home countries={filterData}/>: (!search.length && <Home countries={countries}/>) }
      </div>
      
    </div>
  );
}

export default App;
