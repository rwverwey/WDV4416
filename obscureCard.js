const obscureCard = (cardNumber) => {
  const length = cardNumber.length;

  if (length < 12 || length > 16) {
    return 'Invalid Credit Card';
  }

  const lastFour = cardNumber.slice(-4);
  const obscuredPart = '*'.repeat(length - 4);

  return obscuredPart + lastFour;
};

module.exports = obscureCard;
