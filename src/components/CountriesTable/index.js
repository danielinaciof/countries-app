import { useEffect, useState } from 'react';
import { Country } from '../Country';
import'./styles.scss'
export function CountriesTable() {
    const[countries, setCountries]=useState([]);
    useEffect(() =>{
       async function getCountries(){
            const response =await fetch('https://restcountries.com/v3.1/all ');
        const data =await response.json();
       setCountries(data);
        }
        getCountries()

    },[]);
    return(
        <div className="countries-container">
            <div className="countries-header">

            </div>
            <div className="countries-body">
                {countries.map(country =>
                <Country
                flag={country.flags.svg}
                name={country.name.common}
                capitals={country.capital}
                population={country.population}
                area={country.area}
                
                />
                )}
                </div>
                </div>
                )
                }
