const getSearchedCoinsIds = (response) => {
  const coinsArray = response?.coins?.map((coin) => coin?.id);
  if (coinsArray.length < 1) {
    return '';
  }
  return coinsArray.join(',');
};

export default getSearchedCoinsIds;
