import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Searchbar from "./components/SearchBar/Searchbar";

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
    const handleSerach =(e)=>{
        
        // setSearch(e.target.value);
        filterCountry(e.target.value);
        setSearch(e.target.value);
    }
    

    const filterCountry =(text)=>{
      const copyCountries = [...countries];

      // console.log(copyCountries);
      const filteredArr = copyCountries.filter( (val) => {

        let x = (val.name.common).toLowerCase();
        text = text.toLowerCase();

        if(x.startsWith(text)){
          return true;
        }else{
          return false;
        }
      });

      // console.log(filteredArr);
      setFilteredData(filteredArr);
      // setCountries(filteredArr);
    }

  return (
    <div>
      <Searchbar handleSerach={handleSerach}/>
      {filterData.length? <Home countries={filterData}/>: (search.length?null:<Home countries={countries}/>) }
    </div>
  );
}

export default App;
