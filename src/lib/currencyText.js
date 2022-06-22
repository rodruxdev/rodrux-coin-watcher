const currencyText = (price, maxDecimals = 9) => {
  if (price) {
    const text = price.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: maxDecimals,
    });
    return `$${text}`;
  }
  return '----';
};

export default currencyText;
