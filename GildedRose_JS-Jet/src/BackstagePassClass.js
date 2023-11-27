const Item = require('./ItemClass');

class BackstagePass extends Item {
  constructor(sellIn, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality);
  }

  pureQuality() {
    if (this.sellIn < Item.MIN_QUALITY) return Item.MIN_QUALITY;
    if (this.sellIn <= 5) return this.quality + 3;
    if (this.sellIn <= 10) return this.quality + 2;
    return this.quality + 1;
  }

  update() {
    this.sellIn -= 1;
    this.quality = Math.min(Item.MAX_QUALITY, this.pureQuality());
  }
}

module.exports = BackstagePass;
