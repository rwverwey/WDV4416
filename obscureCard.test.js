//Obscure credit card number except last 4 digits.
//Test to make sure the function obscures credit card numbers that are between the length of 12 and 16 digits.

const obscureCard = require('./obscureCard');

describe('obscureCard module tests', () => {
  test('as a user I want to obscure a 12 digit credit card number', () => {
    expect(obscureCard('123456789012')).toEqual('********9012');
  });

  test('as a user I want to obscure a 13 digit credit card number', () => {
    expect(obscureCard('1234567890123')).toEqual('*********0123');
  });

  test('as a user I want to obscure a 14 digit credit card number', () => {
    expect(obscureCard('12345678901234')).toEqual('**********1234');
  });

  test('as a user I want to obscure a 15 digit credit card number', () => {
    expect(obscureCard('123456789012345')).toEqual('***********2345');
  });

  test('as a user I want to obscure a 16 digit credit card number', () => {
    expect(obscureCard('1234567890123456')).toEqual('************3456');
  });

  test('as a user I want to return invalid for credit card less than 12 digits', () => {
    expect(obscureCard('12345678901')).toEqual('Invalid Credit Card');
  });

  test('as a user I want to return invalid for credit card more than 16 digits', () => {
    expect(obscureCard('12345678901234567')).toEqual('Invalid Credit Card');
  });

  test('as a user I want to return invalid for empty credit card', () => {
    expect(obscureCard('')).toEqual('Invalid Credit Card');
  });
});
