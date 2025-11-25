# WDV4416 Integration Testing Assignment - Week 2

## Overview
This assignment focuses on creating comprehensive integration tests using Postman for a simple user management API.

## Server Details
- **Base URL**: `http://localhost:3000`
- **Endpoints**: `/user`
- **Methods**: GET, POST, PATCH, DELETE

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Server**
   ```bash
   npm start
   ```
   Server will run on port 3000 (configured in `.env` file)

## API Endpoints

### GET /user
Returns a hardcoded user object with the following fields:
- name
- address
- city
- state
- zip
- ccNumber
- ssn

### POST /user
Creates a new user with the request body data.
**Required Body Fields**: name, address, city, state, zip, ccNumber, ssn

### PATCH /user/:id
Updates a user by ID with the request body data.
**Required Body Fields**: name, address, city, state, zip, ccNumber, ssn

### DELETE /user/:id
Deletes a user by ID and returns null for the user object.

## Running Tests

#### Individual Request
- Select any request in the collection
- Click "Send"
- View test results in the "Test Results" tab

#### Run Entire Collection
1. Click the "..." menu next to the collection name
2. Select "Run collection"
3. Click "Run WDV4416 Integration Tests"
4. All tests will execute sequentially

## Test Coverage

### GET /user (6 tests)
1. Status code is 200
2. Response time is less than 500ms
3. Message is "Successful GET"
4. Response contains user object
5. User object contains all required fields with correct values
6. User fields have correct data types

### POST /user (6 tests)
1. Status code is 201
2. Response time is less than 500ms
3. Message is "Successful POST"
4. Response contains user object
5. User object matches submitted data
6. User fields have correct data types

### PATCH /user/:id (7 tests)
1. Status code is 201
2. Response time is less than 500ms
3. Message is "Successful PATCH"
4. Response contains user object
5. Response contains metadata with correct values
6. User object contains all fields including _id
7. All fields have correct data types

### DELETE /user/:id (7 tests)
1. Status code is 201
2. Response time is less than 500ms
3. Message is "Successful DELETE"
4. User property is null after deletion
5. Response contains the deleted user ID
6. Response contains metadata with correct values
7. All fields have correct data types

## Total Tests: 26