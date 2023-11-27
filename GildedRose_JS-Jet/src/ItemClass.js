class Item {
  static MAX_QUALITY = 50;
  static MIN_QUALITY = 0;
  static SULFURA_QUALITY = 80;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

module.exports = Item;
