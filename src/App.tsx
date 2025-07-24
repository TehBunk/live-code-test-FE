import React, { useEffect, useState, Suspense } from "react";
import ReallyLargeComponent from "./components/ReallyLargeComponent";

/* LIVE CODING CHALLENGE 

  Completed by: Zion Emond
  07/24/2025
  I decided to complete the coding challenge after the interview was over just for fun, and because I wanted to finish it.
  I know there isn't really a way to verify I didn't use AI to complete it, so I guess you'll just have to take my word for it.
  This was a fun exercise! I enjoy this kind of data manipulation.
  Thanks again for your time in the interview.
   
   TASKS:
   1. Fetch countries from the API endpoint below
   2. Handle loading, error states 
   3. Transform data: add populationDensity field (population/area, rounded to 2 decimals)
   4. Create filtering function that accepts countryData and returns filtered countries using the exampleFilterCriteria
   5. Map countries by continent, sort by density within each group (highest first)
   6. Display mapped countries with lazy loading for ReallyLargeComponent
   7. Add proper memoization (useMemo, useCallback)
   
   BONUS:
   - How would you retry if the API is down?
   - Create custom hook for data fetching
   - Error boundaries
   
   DISCUSSION:
   - How would you handle 10,000+ countries?
   - When would you add global state management?
*/

const API_ENDPOINT = "https://restcountries.com/v3.1/all?fields=name,population,area,capital,region,continents,flag,flags,independent,cca2";

// API response type
export type CountryApiResponse = {
  name: {
    common: string;
    official: string;
  };
  population: number;
  area: number;
  capital?: string[];
  region: string;
  continents: string[];
  flag: string;
  flags: {
    png: string;
    svg: string;
  };
  independent?: boolean;
  cca2: string;
}[];


export type MappedCountryData = {
  [key: string]: { // <-- had to look up how to do this kind of dynamic name. Had seen it before but hadn't actually implemented it. Learned something new today
    name: string;
    density: string;
  }[]
};

// Filter criteria
export type FilterCriteria = {
  searchTerm: string;
  minPopulation: number;
  selectedContinents: string[];
  showOnlyIndependent: boolean;
};

const exampleFilterCriteria: FilterCriteria = {
  searchTerm: "Lit",
  minPopulation: 2794600,
  selectedContinents: ["Europe"],
  showOnlyIndependent: true,
};

export default function App() {
  // TODO: State for countries data, loading, error
  // TODO: Fetch data from API_ENDPOINT with retry logic
  // TODO: Transform data to add populationDensity
  // TODO: Create filterCountries(countries, criteria) function

  const [countryData, setCountryData] = useState<CountryApiResponse>();
  const [mappedData, setMappedData] = useState<MappedCountryData>();
  const [filteredData, setFilteredData] = useState<CountryApiResponse>();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(API_ENDPOINT)
    .then(async (response) => {
      const data = await response.json();
      console.log('data: ', data);
      setCountryData(data)
      setMappedData(mapData(data));
      setFilteredData(filterData(data, exampleFilterCriteria));
    })
    .catch(err => setError(`Error fetching from API: ${err}`))
    .finally(() => setLoading(false));
  }, []);

  const mapData = (data?: CountryApiResponse): MappedCountryData | undefined => {

    if (!data) return;
    let mappedCountries: MappedCountryData = {};
    for (const country of data) {
      for (const continent of country.continents) {
        const data = {
          name: country.name.common,
          density: (country.population / country.area).toFixed(2)
        }
        if (!mappedCountries[continent]) {
          mappedCountries[continent] = [data];
        } else {
          mappedCountries[continent].push(data);
        } 
      }
      
    }


    console.log('mappedData: ', mappedCountries);
    return mappedCountries;
  }

  const filterData = (data: CountryApiResponse | undefined, filterCriteria: FilterCriteria): CountryApiResponse | undefined => {

    if (!data) return;
    const retVal = data.filter((country) => {
      if (filterCriteria.showOnlyIndependent && !country.independent) return false;
      if (country.name.common.includes(filterCriteria.searchTerm) &&
      country.population >= filterCriteria.minPopulation) {
        for (let i = 0; i < filterCriteria.selectedContinents.length; i++) {
          if (!country.continents.includes(filterCriteria.selectedContinents[i])) {
            return false;
          }
        }
        return true;
      }
    });
    console.log('filteredData: ', retVal);
    return retVal;
  } 

  // TODO: Map by continent, sort by density
  // Example map:
  // {
  //   "Europe": [
  //       { "name": "Lithuania", "density": 234.56 },
  //       { "name": "Latvia", "density": 210.34 }
  //   ]
  // }

  return (
    <div className="app-container">
      <h1>Countries Population  Dashboard</h1>

      {/* TODO: Show loading/error states */}
      {
        error ? (<span>ERROR!: {error}</span>) : (
          <>
          {
            loading ? (<span>Loading...</span>) : (
              <>
                {/* could display these but it's ugly, so displaying in console instead 
                <span>countryData: {JSON.stringify(countryData, null, 2)}</span>
                <span>mappedData: {JSON.stringify(mappedData, null, 2)}</span>
                <span>filteredData: {JSON.stringify(filteredData, null, 2)}</span> */}
                <span>Data displayed in console!</span>
              </>
            )
          }
          </>
        )
      }
      
      <div className="heavy-component-container">
        {/* TODO: Prevent component from blocking page load */}
        <Suspense fallback={<span>ReallyLargeComponent loading...</span>}>
          <ReallyLargeComponent />
        </Suspense>
      </div>

    </div>
  );
}
