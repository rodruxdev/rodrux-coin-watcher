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
    this.percentageChanges = percentageChanges.map((item) =>
      item.toLocaleString('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      })
    );
    this.marketCap = marketCap;
    this.ath = ath;
    this.athPercentage = athPercentage;
  }
}

export default CoinTable;
