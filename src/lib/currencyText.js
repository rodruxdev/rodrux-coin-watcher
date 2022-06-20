const currencyText = (price) => {
  if (price) {
    const text = price.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 9,
    });
    return `$${text}`;
  }
  return '----';
};

export default currencyText;
