// Test 1: Status Code Test
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

// Test 2: Response Time Test
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

// Test 3: Message Test
pm.test("Message is Successful PATCH", function () {
    const response = pm.response.json();
    pm.expect(response).to.have.property('message', 'Successful PATCH');
});

// Test 4: User Object Exists
pm.test("Response contains user object", function () {
    const response = pm.response.json();
    pm.expect(response).to.have.property('user');
    pm.expect(response.user).to.be.an('object');
});

// Test 5: Metadata Exists and Correct
pm.test("Response contains metadata with correct values", function () {
    const response = pm.response.json();
    pm.expect(response).to.have.property('metadata');
    pm.expect(response.metadata).to.be.an('object');
    pm.expect(response.metadata).to.have.property('modifiedCount', 1);
    pm.expect(response.metadata).to.have.property('acknowledged', true);
});

// Test 6: Full User Payload Test
pm.test("User object contains all fields including _id", function () {
    const response = pm.response.json();
    const user = response.user;
    
    pm.expect(user).to.have.property('_id', '12345');
    pm.expect(user).to.have.property('name', 'Jane Smith');
    pm.expect(user).to.have.property('address', '789 College Blvd');
    pm.expect(user).to.have.property('city', 'Tampa');
    pm.expect(user).to.have.property('state', 'FL');
    pm.expect(user).to.have.property('zip', '33602');
    pm.expect(user).to.have.property('ccNumber', '1111222233334444');
    pm.expect(user).to.have.property('ssn', '987654321');
});

// Test 7: Data Types Test
pm.test("All fields have correct data types", function () {
    const response = pm.response.json();
    const user = response.user;
    const metadata = response.metadata;
    
    pm.expect(user._id).to.be.a('string');
    pm.expect(user.name).to.be.a('string');
    pm.expect(metadata.modifiedCount).to.be.a('number');
    pm.expect(metadata.acknowledged).to.be.a('boolean');
});