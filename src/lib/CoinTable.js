class CoinTable {
  constructor(
    coinId,
    name,
    ticker,
    price,
    images,
    percentageChanges,
    marketCap,
    ath,
    athPercentage
  ) {
    this.coinId = coinId;
    this.name = name;
    this.ticker = ticker;
    this.price = price;
    this.images = images;
    this.percentageChanges = percentageChanges.map((item) => {
      if (item) {
        return item.toLocaleString('en-US', {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        });
      }
      return '---';
    });
    this.marketCap = marketCap;
    this.ath = ath;
    this.athPercentage = athPercentage;
  }
}

export default CoinTable;
