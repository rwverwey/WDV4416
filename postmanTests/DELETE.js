// Test 1: Status Code Test
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

// Test 2: Response Time Test
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

// Test 3: Message Test
pm.test("Message is Successful DELETE", function () {
    const response = pm.response.json();
    pm.expect(response).to.have.property('message', 'Successful DELETE');
});

// Test 4: User is Null
pm.test("User property is null after deletion", function () {
    const response = pm.response.json();
    pm.expect(response).to.have.property('user');
    pm.expect(response.user).to.be.null;
});

// Test 5: ID is Returned
pm.test("Response contains the deleted user ID", function () {
    const response = pm.response.json();
    pm.expect(response).to.have.property('id', '67890');
});

// Test 6: Metadata Exists and Correct
pm.test("Response contains metadata with correct values", function () {
    const response = pm.response.json();
    pm.expect(response).to.have.property('metadata');
    pm.expect(response.metadata).to.be.an('object');
    pm.expect(response.metadata).to.have.property('modifiedCount', 1);
    pm.expect(response.metadata).to.have.property('acknowledged', true);
});

// Test 7: Data Types Test
pm.test("All fields have correct data types", function () {
    const response = pm.response.json();
    const metadata = response.metadata;
    
    pm.expect(response.message).to.be.a('string');
    pm.expect(response.id).to.be.a('string');
    pm.expect(metadata.modifiedCount).to.be.a('number');
    pm.expect(metadata.acknowledged).to.be.a('boolean');
});