const Shop = require("../src/ShopClass");
const Item = require("../src/ItemClass");


describe('Item', () => {

    test('should degrade a random Item', () => {
      const gildedRose = new Shop([new Item('foo', 5, 5)]);
      const items = gildedRose.updateQuality();
      const fooItem = items.shift();
      expect(fooItem.name).toEqual('foo');
      expect(fooItem.sellIn).toEqual(4);
      expect(fooItem.quality).toEqual(4);
    });
  
    test('should decrease quality of Item by 2 when past use-by date', () => {
      const GildedRose = new Shop([new Item('foo', Item.MIN_QUALITY, 5)]);
      const items = GildedRose.updateQuality();
      const item = items.shift();
      expect(item.quality).toEqual(3);
      expect(item.sellIn).toEqual(-1);
    });
  
    test('should not degrade Item quality below zero', () => {
      const gildedRose = new Shop([new Item('foo', Item.MIN_QUALITY, Item.MIN_QUALITY)]);
      const items = gildedRose.updateQuality();
      const fooItem = items.shift();
      expect(fooItem.name).toEqual('foo');
      expect(fooItem.sellIn).toEqual(-1);
      expect(fooItem.quality).toEqual(Item.MIN_QUALITY);
    });
  });