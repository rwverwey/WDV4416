const { Builder, By, until } = require('selenium-webdriver');

const driver = new Builder().forBrowser('chrome').build();

// Test 1: Check home page title
driver.get('http://localhost:3000')
  .then(_ => driver.wait(until.titleIs('Home'), 5000))
  .then(_ => console.log('Test 1 passed: Home page title is "Home"'))
  
  // Test 2: Check contact page title
  .then(_ => driver.findElement(By.id('contactLink')).click())
  .then(_ => driver.wait(until.titleIs('Contact Us'), 5000))
  .then(_ => console.log('Test 2 passed: Contact page title is "Contact Us"'))
  
  // Test 3: Submit form and check message
  .then(_ => driver.findElement(By.id('formInput')).sendKeys('eric@eric.com'))
  .then(_ => driver.findElement(By.id('formSubmit')).click())
  .then(_ => driver.wait(until.elementLocated(By.id('formMessage')), 5000))
  .then(_ => driver.findElement(By.id('formMessage')).getText())
  .then(text => {
    if (text === 'More info coming to eric@eric.com') {
      console.log('Test 3 passed: Message is correct');
    } else {
      console.log('Test 3 failed: Expected "More info coming to eric@eric.com" but got "' + text + '"');
    }
  })
  
  .then(_ => driver.quit())
  .catch(error => {
    console.error('Test failed:', error.message);
    driver.quit();
  });
