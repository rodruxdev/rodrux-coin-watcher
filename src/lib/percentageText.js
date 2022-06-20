const percentageText = (percentage) => {
  if (percentage) {
    const text = percentage.toLocaleString('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    });
    if (percentage > 0) {
      return `+${text}%`;
    }
    return `${text}%`;
  }
  return '--%';
};

export default percentageText;
