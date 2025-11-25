// Test 1: Status Code Test
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Test 2: Response Time Test
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

// Test 3: Message Test
pm.test("Message is Successful GET", function () {
    const response = pm.response.json();
    pm.expect(response).to.have.property('message', 'Successful GET');
});

// Test 4: User Object Exists
pm.test("Response contains user object", function () {
    const response = pm.response.json();
    pm.expect(response).to.have.property('user');
    pm.expect(response.user).to.be.an('object');
});

// Test 5: Full User Payload Test
pm.test("User object contains all required fields with correct values", function () {
    const response = pm.response.json();
    const user = response.user;
    
    pm.expect(user).to.have.property('name', 'WDV 4416');
    pm.expect(user).to.have.property('address', '123 Full Sail Uni');
    pm.expect(user).to.have.property('city', 'Winter Park');
    pm.expect(user).to.have.property('state', 'FL');
    pm.expect(user).to.have.property('zip', '32792');
    pm.expect(user).to.have.property('ccNumber', '1234567813572468');
    pm.expect(user).to.have.property('ssn', '55512345');
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