const convertCoins = (value, state, type) => {
  const convertorId = state.convertedCoin;
  const { conversionRatio } = state.conversionOptions.find(
    (item) => item.coin === convertorId
  );
  let newCoinPrice;
  let newConversion;
  if (type === 'main') {
    newConversion = value * conversionRatio;
    newCoinPrice = value;
  } else {
    newCoinPrice = value / conversionRatio;
    newConversion = value;
  }
  return { newCoinPrice, newConversion };
};

export default convertCoins;
