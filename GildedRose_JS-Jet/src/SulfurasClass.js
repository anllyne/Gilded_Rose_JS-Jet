const Item = require('./ItemClass');

class SulfuraItem extends Item {
  constructor(name = 'Sulfuras, Hand of Ragnaros') {
    super(name, Item.MIN_QUALITY, Item.SULFURA_QUALITY);
  }

  update() {
    this.sellIn -= 1;
  }
}

module.exports = SulfuraItem;
