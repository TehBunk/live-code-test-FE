import React from "react";
import ReallyLargeComponent from "./components/ReallyLargeComponent";

/* LIVE CODING CHALLENGE 
   
   TASKS:
   1. Fetch countries from the API endpoint below
   2. Handle loading, error states 
   3. Transform data: add populationDensity field (population/area, rounded to 2 decimals)
   4. Create filtering function that accepts FilterCriteria and returns filtered countries
   5. Map countries by continent, sort by density within each group (highest first)
   6. Display mapped countries with lazy loading for ReallyLargeComponent
   7. Add proper memoization (useMemo, useCallback)
   
   BONUS:
   - How would you retry if the API is down?
   - Implement search with debouncing (300ms)
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

export default function App() {
  // TODO: State for countries data, loading, error
  // TODO: Fetch data from API_ENDPOINT with retry logic
  // TODO: Transform data to add populationDensity
  // TODO: Create filterCountries(countries, criteria) function
  // TODO: Map by continent, sort by density
  // Example map:
  // {
  //   "continent": {
  //     "name": "Europe",
  //     "countries": [
  //       { "name": "Germany", "density": 234.56 },
  //       { "name": "France", "density": 210.34 }
  //     ]
  //   }
  // }
  // TODO: Memoize expensive operations

  return (
    <div className="app-container">
      <h1>Countries Population Density Dashboard</h1>

      {/* TODO: Show loading/error states */}
      
      <div className="heavy-component-container">
        {/* TODO: Lazy load with Suspense */}
        <ReallyLargeComponent />
      </div>

      {/* TODO: Display grouped countries */}
      {/* Each group: continent name, countries sorted by density */}
    </div>
  );
}
