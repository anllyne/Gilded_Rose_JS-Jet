const Shop = require("../src/ShopClass");
const Item = require("../src/ItemClass");

describe("Sulfuras", function () {
  let sulfuras;
  let gildedRose;

  beforeEach(() => {
    sulfuras = new Item("Sulfuras, Hand of Ragnaros", 10, 70);
    gildedRose = new Shop([sulfuras]);
  });

  it("should not decrease in quality or sellIn", function () {
    gildedRose.updateQuality();

    expect(sulfuras.name).toBe("Sulfuras, Hand of Ragnaros");
    expect(sulfuras.sellIn).toBe(10); 
    expect(sulfuras.quality).toBe(70); 
  });
});
