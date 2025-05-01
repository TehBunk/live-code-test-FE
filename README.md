# Countries Population Density Explorer
## Live Coding Challenge

This is a React/TypeScript application that displays countries with high population density.

## Task Checklist

Your task is to implement the following features:

- [ ] **Lazy Loading**
  - Implement proper lazy loading for ReallyLargeComponent
  - Use React.lazy and Suspense with a fallback

- [ ] **State Setup**
  - Add missing state variables (isLoading, error, denseCountries)
  - Ensure proper typing for all state variables

- [ ] **Data Fetching**
  - Fetch country data from `https://restcountries.com/v2/all`
  - Handle loading states and potential errors
  - Store raw data in the countries state

- [ ] **Data Processing**
  - Add a derived `populationDensity` field to each country (population/area)
  - Round the density to 2 decimal places
  - Filter countries to keep only those with density > 100
  - Store filtered results in a new state variable

- [ ] **Rendering**
  - Display a list of countries with high population density
  - Each country card should include:
    - Name
    - Capital
    - Population
    - Population Density
    - Flag (as an image)
  - Add appropriate loading and error states

- [ ] **Bonus (Discussion Only)**
  - How would you implement `createCountry` or `updateCountry` features?
  - Would you use optimistic updates?
  - How would you handle errors in these operations?

## Getting Started

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Start the development server: `pnpm dev`
4. Open your browser to the displayed URL (typically http://localhost:5173/) # live-code-test-FE
