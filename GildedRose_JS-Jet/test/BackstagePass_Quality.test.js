const Shop = require("../src/ShopClass");
const Item = require("../src/ItemClass");


describe('Backstage Passes', () => {
  const Specials = {
    Pass: 'Backstage passes to a TAFKAL80ETC concert',
  };

  test('should increase Backstage Pass quality by default', () => {
    const GildedRose = new Shop([new Item(Specials.Pass, 20, 10)]);
    const items = GildedRose.updateQuality();
    const item = items.shift();
    expect(item.sellIn).toEqual(19);
    expect(item.quality).toEqual(11);
  });

  test('should increase Backstage Pass quality by 2 within 10 days', () => {
    const GildedRose = new Shop([new Item(Specials.Pass, 10, 11)]);
    const items = GildedRose.updateQuality();
    const pass = items.shift();
    expect(pass.sellIn).toEqual(9);
    expect(pass.quality).toEqual(13);
  });

  test('should increase Backstage Pass quality by 3 within 5 days', () => {
    const GildedRose = new Shop([new Item(Specials.Pass, 5, 20)]);
    const items = GildedRose.updateQuality();
    const pass = items.shift();
    expect(pass.sellIn).toEqual(4);
    expect(pass.quality).toEqual(23);
  });

  test('should drop Backstage Pass quality to 0 after the concert', () => {
    const GildedRose = new Shop([new Item(Specials.Pass, Item.MIN_QUALITY, 20)]);
    const items = GildedRose.updateQuality();
    const pass = items.shift();
    expect(pass.sellIn).toEqual(-1);
    expect(pass.quality).toEqual(Item.MIN_QUALITY);
  });
});