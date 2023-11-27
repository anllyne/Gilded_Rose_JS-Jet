
const Shop = require("../src/ShopClass");
const Item = require("../src/ItemClass");

const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, MIN_QUALITY),
  new Item("Elixir of the Mongoose", 5, 7),
  new Item("Sulfuras, Hand of Ragnaros", Item.MIN_QUALITY, Item.SULFURA_QUALITY),
  new Item("Sulfuras, Hand of Ragnaros", -1, Item.SULFURA_QUALITY),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),

 
  new Item("Conjured Mana Cake", 3, 6),
];

const days = Number(process.argv[2]) || 2;
const gildedRose = new Shop(items);

console.log("OMGHAI!");
for (let day = Item.MIN_QUALITY; day < days + 1; day++) {
  console.log(`-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
  console.log("")
}
