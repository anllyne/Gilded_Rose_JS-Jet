const Item = require('./ItemClass');

class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super('Aged Brie', sellIn, quality);
  }

  update() {
    this.sellIn -= 1;
    this.quality = Math.min(Item.MAX_QUALITY, (this.sellIn > 0 ? this.quality + 1 : this.quality + 2));
  }
}

module.exports = AgedBrie;
