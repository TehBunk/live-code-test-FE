import React, { useState, useEffect, Suspense } from "react";
// import ReallyLargeComponent from "./components/ReallyLargeComponent";

/* LIVE CODING CHALLENGE INSTRUCTIONS
   1. Implement lazy loading for ReallyLargeComponent 
   2. Set up state for loading, error, and filtered countries
   3. Fetch countries from https://restcountries.com/v2/all
   4. Process the data:
      - Add populationDensity = population/area (rounded to 2 decimals)
      - Filter for countries with populationDensity > 100
   5. Render the filtered countries list with all required fields
   6. BONUS: 
      - How would you implement search/filter functionality?
      - How would you utilize state to handle pagination (assuming endpoint supports it)?
      - How would you implement create/update features?
*/

// Type used to model countries returned from the API
export type Country = {
  name: string;
  population: number;
  area: number;
  capital: string;
  region: string;
  flag: string;
  // TODO: You will add a derived field: populationDensity
};

// TODO: Lazy load ReallyLargeComponent below using React.lazy + Suspense.
// This simulates a heavy component. Make sure it doesn't block page load.
const ReallyLargeComponent = React.lazy(() => import("./components/ReallyLargeComponent"));

export default function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  // TODO: Add state for isLoading, error, and denseCountries

  useEffect(() => {
    // TODO: Fetch countries from the API above
    // Set loading and error state accordingly
    // Store the raw data in `countries`

    // Example API endpoint: https://restcountries.com/v2/all

    // TODO: Add populationDensity = population / area (rounded to 2 decimals)

    // TODO: Store filtered countries in a new state variable (e.g. denseCountries)
    // Filter for countries where populationDensity > 100

  }, []);

  return (
    <div className="app-container">
      <h1>Countries Population Density Explorer</h1>

      {/* Fixed: Lazy-loaded component causing slow page */}
      <div className="heavy-component-container">
          {/* TODO: Wrap with Suspense and add fallback */}
          <ReallyLargeComponent />
      </div>

      {/* Handle loading & error states */}
      <div className="error" >
        <div className="loading" />

        {/* TODO: Render a list of dense countries
         Include: name, capital, population, populationDensity, and flag */}
        <div className="countries-container">
          {/* Your rendering implementation will go here */}
        </div>

        {/* 
      BONUS QUESTION:
      If this data came from your own API:
      - How would you implement a `createCountry` or `updateCountry` feature?
      - Would you use optimistic updates? How would you handle errors?
      */}
      </div>
    </div>
  );
}