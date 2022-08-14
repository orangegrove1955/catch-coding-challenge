# Catch coding challenge - Backend

## Installation

To install the project, ensure version 8.11.0 of npm is installed, and run `npm install` from the root directory

## Execution

To execute the project, ensure version 16.16.0 of node is installed, and run `npm run start` from the root directory

## Testing

This project utilises Jest as its testing suite. The codebase can be tested from the command line by running `npm test` from the root directory

## Linting

This project utilises ESLint for code linting. The codebase can be linted from the command line by running `npm run lint` from the root directory

## Formatting

This project utilises Prettier for code formatting. The codebase can be formatted from the command line by running `npm run format` from the root directory

## Assumptions

1. Discounts are applied to total of order, not individual items
2. Discounts are applied to total based on priority
3. Discounts are pre-sorted by priority order in jsonlines file
4. Order dates are consistent and valid throughtout jsonlines file
5. Items are all grouped together correctly into distinct units, no duplicates
6. Distinct unit count is a count of how many different products are in an order, i.e. each item entry in the items array is a single unique unit (unique units was somewhat vague, so just putting this for clarification of my thoughts)
7. Average price is based on total number of units in the order, not distinct units
8. "State code" is the two/three capital letter representation of a state, rather than the full name
9. There are no typos in any state values in the jsonlines file
10. All dollar prices should be limited to 2 decimal places only
