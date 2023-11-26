const Shop = require("../src/ShopClass");
const Item = require("../src/ItemClass");

describe('Conjured Item', () => {
  test('should decrease Conjured Items quality twice as quickly', () => {
    const GildedRose = new Shop([new Item('Conjured Item', 5, 10, true)]);
    const items = GildedRose.updateQuality();
    const cake = items.shift();
    expect(cake.quality).toEqual(8);
    expect(cake.sellIn).toEqual(4);
  });

  test('should decrease Conjured items even further in quality after use-by date', () => {
    const GildedRose = new Shop([new Item('Conjured Item', Item.MIN_QUALITY, 10)]);
    const items = GildedRose.updateQuality();
    const mana = items.shift();
    expect(mana.sellIn).toEqual(-1);
    expect(mana.quality).toEqual(6);
  });

  test('should not degrade Conjured Item quality below zero', () => {
    const gildedRose = new Shop([new Item('Conjured Item', Item.MIN_QUALITY, Item.MIN_QUALITY)]);
    const items = gildedRose.updateQuality();
    const fooItem = items.shift();
    expect(fooItem.name).toEqual('Conjured Item');
    expect(fooItem.sellIn).toEqual(-1);
    expect(fooItem.quality).toEqual(Item.MIN_QUALITY);
  });
});