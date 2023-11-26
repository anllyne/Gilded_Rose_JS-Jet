const Item = require('./ItemClass');

class ConjuredItem extends Item {
  update() {
    this.sellIn -= 1;
    this.quality = Math.max(Item.MIN_QUALITY, this.sellIn > Item.MIN_QUALITY ? this.quality - 2 : this.quality - 4);
  }
}

module.exports = ConjuredItem;
