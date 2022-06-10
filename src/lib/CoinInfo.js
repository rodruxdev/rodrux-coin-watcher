class Coin {
  constructor(coinId, name, ticker, price, image, description, moreInfo) {
    this.coinId = coinId;
    this.name = name;
    this.ticker = ticker;
    this.title = name + ticker;
    this.price = price;
    this.priceTitle = `$${price} USD`;
    this.image = image;
    this.description = description;
    this.moreInfo = moreInfo;
  }
}

export default Coin;
