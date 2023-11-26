const Item = require('./ItemClass');

class RandomItem extends Item {
  update() {
    this.sellIn -= 1;
    this.quality = Math.max((this.sellIn > Item.MIN_QUALITY ? this.quality - 1 : this.quality - 2), Item.MIN_QUALITY);
  }
}

module.exports = RandomItem;
