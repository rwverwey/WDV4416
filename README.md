# WDV4416 Testing Assignment

## Credit Card Obscuring Module

This project demonstrates Test-Driven Development (TDD) by creating a module that obscures credit card numbers, showing only the last four digits.

## Requirements

- Node.js and npm installed
- Credit card numbers must be between 12-16 digits
- Returns obscured card number with asterisks replacing all but last 4 digits
- Returns "Invalid Credit Card" for numbers outside the valid range

## Installation

```bash
npm install
```

## Running Tests

```bash
npm test
```

## Test Coverage

The module includes 8 unit tests:
- 5 positive tests (12, 13, 14, 15, and 16 digit cards)
- 3 negative tests (less than 12, more than 16, and empty string)

## Example Usage

```javascript
const obscureCard = require('./obscureCard');

obscureCard('123456789012');     // Returns: ********9012
obscureCard('1234567890123456'); // Returns: ************3456
obscureCard('12345678901');      // Returns: Invalid Credit Card
```

## Files

- `obscureCard.js` - Main module with obscuring function
- `obscureCard.test.js` - Jest unit tests
- `package.json` - Project configuration and dependencies
