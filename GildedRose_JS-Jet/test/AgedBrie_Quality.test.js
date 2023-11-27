const Shop = require("../src/ShopClass");
const Item = require("../src/ItemClass");

describe('Aged Brie', () => {
  const Specials = {
    Brie: 'Aged Brie',
  };

  test('should increase Aged Brie quality', () => {
    const GildedRose = new Shop([new Item(Specials.Brie, 3, 1)]);
    const items = GildedRose.updateQuality();
    const brie = items.shift();
    expect(brie.sellIn).toEqual(2);
    expect(brie.quality).toEqual(2);
  });

  test('should increase Aged Brie quality twofold when past use-by date', () => {
    const GildedRose = new Shop([new Item(Specials.Brie, Item.MIN_QUALITY, 2)]);
    const items = GildedRose.updateQuality();
    const brie = items.shift();
    expect(brie.sellIn).toEqual(-1);
    expect(brie.quality).toEqual(4);
  });

  test('should not increase Aged Brie quality above 50', () => {
    const GildedRose = new Shop([new Item(Specials.Brie, 2, Item.MAX_QUALITY)]);
    const items = GildedRose.updateQuality();
    const brie = items.shift();
    expect(brie.sellIn).toEqual(1);
    expect(brie.quality).toEqual(Item.MAX_QUALITY);
  });
});