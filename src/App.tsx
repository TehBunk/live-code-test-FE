import React from "react";
import ReallyLargeComponent from "./components/ReallyLargeComponent";

/* LIVE CODING CHALLENGE 
   
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

  // Bonus TODO: Map by continent, sort by density
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
      
      <div className="heavy-component-container">
        {/* TODO: Prevent component from blocking page load */}
        <ReallyLargeComponent />
      </div>

    </div>
  );
}
