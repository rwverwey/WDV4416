// Test 1: Status Code Test
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

// Test 2: Response Time Test
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

// Test 3: Message Test
pm.test("Message is Successful POST", function () {
    const response = pm.response.json();
    pm.expect(response).to.have.property('message', 'Successful POST');
});

// Test 4: User Object Exists
pm.test("Response contains user object", function () {
    const response = pm.response.json();
    pm.expect(response).to.have.property('user');
    pm.expect(response.user).to.be.an('object');
});

// Test 5: Full User Payload Test - Matches Request Body
pm.test("User object contains all submitted fields with correct values", function () {
    const response = pm.response.json();
    const user = response.user;
    
    pm.expect(user).to.have.property('name', 'John Doe');
    pm.expect(user).to.have.property('address', '456 Main Street');
    pm.expect(user).to.have.property('city', 'Orlando');
    pm.expect(user).to.have.property('state', 'FL');
    pm.expect(user).to.have.property('zip', '32801');
    pm.expect(user).to.have.property('ccNumber', '9876543210123456');
    pm.expect(user).to.have.property('ssn', '123456789');
});

// Test 6: Data Types Test
pm.test("User fields have correct data types", function () {
    const response = pm.response.json();
    const user = response.user;
    
    pm.expect(user.name).to.be.a('string');
    pm.expect(user.address).to.be.a('string');
    pm.expect(user.city).to.be.a('string');
    pm.expect(user.state).to.be.a('string');
    pm.expect(user.zip).to.be.a('string');
    pm.expect(user.ccNumber).to.be.a('string');
    pm.expect(user.ssn).to.be.a('string');
});