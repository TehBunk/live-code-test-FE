# Countries Population Density Dashboard
## Live Coding Challenge 

Build a React/TypeScript dashboard that fetches country data, processes it, and displays it grouped by continent.

## Core Tasks

1. **Fetch** countries from the provided API endpoint
2. **Handle** loading and error states with retry logic (max 3 attempts)
3. **Transform** data by adding `populationDensity` field (population/area, rounded to 2 decimals)
4. **Create** filtering function that accepts `FilterCriteria` and returns filtered countries
5. **Map** countries by continent, sort by density within each group (highest first)
6. **Display** the mapped countries
7. **Optimize** with proper memoization (useMemo, useCallback)
8. **Implement** lazy loading for ReallyLargeComponent

## Bonus Tasks

- Search with debouncing (300ms)
- Custom hook for data fetching
- Error boundaries

## What We're Testing

- **Data fetching** with error handling
- **Data transformation** and processing
- **Performance optimization** with memoization
- **Component architecture** and code organization
- **TypeScript** usage

## API Response Structure

```typescript
// GET: https://restcountries.com/v3.1/all?fields=name,population,area,capital,region,continents,flag,flags,independent,cca2
{
  name: { common: "Germany", official: "Federal Republic of Germany" },
  population: 83240525,
  area: 357114,
  capital: ["Berlin"],
  region: "Europe",
  continents: ["Europe"],
  flag: "🇩🇪",
  flags: { png: "https://flagcdn.com/w320/de.png", svg: "https://flagcdn.com/de.svg" },
  independent: true,
  cca2: "DE"
}
```

## Getting Started

```bash
pnpm install
pnpm dev
# Open http://localhost:5173/
```
 
## Discussion Points

- How would you handle 10,000+ countries?
- When would you introduce global state management?
- Testing strategies for this component?
