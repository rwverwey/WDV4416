# WDV 4416 - Newman Load Testing Assignment

This project demonstrates automated load testing using Newman to test RESTful API endpoints with 35 iterations.

## Prerequisites

- [Node.js](http://www.nodejs.org) (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd wdvwai-4416-3-9-LoadTestingAssignment
```

2. Install dependencies:
```bash
npm install
```

This will install:
- Express server dependencies
- Newman (Postman CLI runner)
- newman-reporter-htmlextra (for detailed HTML reports)

## Running the Application

### Start the Server

To start the Express server on port 3000:

```bash
npm start
```

The server will run on `http://localhost:3000` with the following endpoints:
- `GET /routes` - Get user data
- `GET /routes/:id` - Get user data by ID
- `POST /routes` - Create user data
- `PATCH /routes/:id` - Update user data by ID
- `DELETE /routes/:id` - Delete user data by ID

## Running Newman Load Tests

### Option 1: Using the Shell Script (Recommended)

1. Start the server in one terminal:
```bash
npm start
```

2. In a new terminal, run the test script:
```bash
chmod +x run_newman_tests.sh
./run_newman_tests.sh
```

### Option 2: Manual Execution

If you prefer to run Newman directly:

1. Start the server in one terminal:
```bash
npm start
```

2. In a new terminal, run the Newman tests:
```bash
npx newman run WDV4416_Load_Tests.postman_collection.json \
  -n 35 \
  --reporters cli,htmlextra \
  --reporter-htmlextra-export WDV4416/WDV_4416_Newman_Reports_Ryan_VerWey.html \
  --reporter-htmlextra-title "WDV 4416 Newman Tests Dashboard - Ryan VerWey" \
  --reporter-htmlextra-browserTitle "WDV 4416 Newman Tests Report - Ryan VerWey"
```

## Test Results

After running the tests, you'll find:
- **Console Output**: Real-time test results in the terminal
- **HTML Report**: `WDV4416/WDV_4416_Newman_Reports_Ryan_VerWey.html`

The HTML report includes:
- 35 iterations through all API endpoints
- Detailed request/response data
- Test assertions and pass/fail status
- Performance metrics (response times, data transferred)
- Visual charts and statistics

### Test Coverage

Each iteration tests:
- **5 API endpoints** (GET, GET by ID, POST, PATCH, DELETE)
- **17 assertions** per iteration
- **Total**: 175 requests, 595 assertions across 35 iterations

## Project Structure

```
├── app/
│   └── app.js                          # Express application
├── config/
│   └── corsOptions.js                  # CORS configuration
├── router/
│   └── router.js                       # API routes
├── WDV4416/
│   └── WDV_4416_Newman_Reports_Ryan_VerWey.html  # Test reports
├── .env                                 # Environment variables
├── package.json                         # Project dependencies
├── server.js                            # Server entry point
├── run_newman_tests.sh                  # Automated test script
└── WDV4416_Load_Tests.postman_collection.json  # Postman collection
```

## Troubleshooting

**Port already in use:**
```bash
# Kill any process using port 3000
npx kill-port 3000
```

**Tests failing with connection refused:**
- Ensure the server is running before executing tests
- Check that port 3000 is available
- Verify the `.env` file contains `port=3000`

## Author

Ryan VerWey - WDV 4416

