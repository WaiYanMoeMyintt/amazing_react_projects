import React,{useState,useEffect} from 'react';
import "../style.css";
const Country = () => {
    const [country,setCountry] = useState();
    const [countryData,setCountryData]  = useState([]);
    // api url https://restcountries.com/v3.1/name/{name}?fullText=true

    const searchCountry = (e)=>{
        e.preventDefault();
        const countryAPI = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
        fetch(countryAPI).then(res=>res.json())
        .then(data => setCountryData(data));
    }



  return (
    <div>
        <form onSubmit={searchCountry} className='country-search-form'>
           <h3>Country Search Engine</h3>
            <input onChange={s=>setCountry(s.target.value)} type="text" placeholder = "Search you want country..." />
            <button>Search</button>
        </form>

        <div className='country-details'>
               {
                   countryData.map((item,index)=>(
                       <div  key={index}>
                            <h3>{item.name.common}</h3>
                            <p>{item.name.official}</p>
                            <img src = {item.flags.png} alt = {item.flags.png} />
                            <p>Capital -{item.capital}</p>
                            <p>Population -{item.population}</p>
                            <p>Timezones -{item.timezones}</p>
                            <p>Region -{item.region}</p>

                       </div>
                   ))
               }
        </div>
    </div>
  )
}

export default Country